import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const count = await prisma.user.count()
    return Response.json({ ok: true, users: count })
  } catch (err: any) {
    return Response.json({ ok: false, error: String(err?.message || err) }, { status: 500 })
  }
}
