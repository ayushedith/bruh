import NextAuth, { type NextAuthOptions, DefaultSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & { id: string; username?: string | null }
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: 'database' },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        // @ts-expect-error added on model
        session.user.username = (user as any).username
      }
      return session
    },
  },
  events: {
    async createUser({ user }) {
      if (!(user as any).username) {
        const base = (user.name || user.email?.split('@')[0] || 'user').toLowerCase().replace(/[^a-z0-9]+/g, '')
        let candidate = base || 'user'
        let i = 0
        while (true) {
          const exists = await prisma.user.findUnique({ where: { username: candidate } })
          if (!exists) break
          i += 1
          candidate = `${base}${i}`
        }
        await prisma.user.update({ where: { id: user.id }, data: { username: candidate } })
      }
    }
  },
  pages: {
    signIn: '/login'
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
