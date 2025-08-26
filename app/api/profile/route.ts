import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, name: true, image: true, username: true, bio: true, theme: true, font: true }
  })
  return Response.json(user)
}

export async function PUT(req: Request) {
  const session = await auth()
  if (!session?.user?.id) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const { username, bio, theme, font, image, name } = body
  // Ensure username is unique if provided
  if (username) {
    const exists = await prisma.user.findUnique({ where: { username } })
    if (exists && exists.id !== session.user.id) return Response.json({ error: 'Username taken' }, { status: 409 })
  }
  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: { username, bio, theme, font, image, name }
  })
  return Response.json({ ok: true, user })
}
