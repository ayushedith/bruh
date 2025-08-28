import { type NextAuthOptions, DefaultSession, getServerSession } from 'next-auth'
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
  debug: process.env.NEXTAUTH_DEBUG === 'true',
  cookies: {
    sessionToken: {
  name: `next-auth.jwt`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false, // localhost
      },
    },
  },
  providers: [
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? [GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })]
      : []),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: { scope: 'identify email' }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.debug('NextAuth signIn callback:', {
          provider: account?.provider,
          type: account?.type,
          hasAccessToken: Boolean((account as any)?.access_token),
          hasIdToken: Boolean((account as any)?.id_token),
          hasEmail: Boolean((user as any)?.email || (profile as any)?.email),
        })
      } catch {}
      return true
    },
    async jwt({ token, user, account, profile }) {
      // On initial sign in, attach id and username
      if (user) {
        // @ts-ignore custom
        token.id = user.id
        // @ts-ignore custom
        token.username = (user as any).username ?? token.username
      }
      return token
    },
    async redirect({ url, baseUrl }) {
      try {
        // Allow relative callback URLs
        if (url.startsWith('/')) return `${baseUrl}${url}`
        const to = new URL(url)
        // Same-origin URLs are allowed
        if (to.origin === baseUrl) return url
      } catch {}
      // Fallback after sign-in
      return `${baseUrl}/dashboard`
    },
    async session({ session, token }) {
      if (session.user && token) {
        // @ts-ignore augment
        session.user.id = (token as any).id as string
        // @ts-ignore augment
        session.user.username = (token as any).username as string | undefined
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
  },
  logger: {
    error(code, ...message) {
      console.error('NextAuth error:', code, ...message)
    },
    warn(code, ...message) {
      console.warn('NextAuth warn:', code, ...message)
    },
    debug(code, ...message) {
      console.debug('NextAuth debug:', code, ...message)
    },
  }
}

export async function auth() {
  return getServerSession(authOptions)
}
