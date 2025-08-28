import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  return Response.json({
    user: session?.user ?? null,
    hasDiscord: Boolean(process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET),
    hasGoogle: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
    nextauthUrl: process.env.NEXTAUTH_URL ?? null,
  })
}
