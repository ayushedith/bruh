import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  const links = await prisma.link.findMany({
    where: { userId: session.user.id },
    orderBy: { order: 'asc' }
  })
  return Response.json(links)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const { title, url, icon, color } = body
  const maxOrder = await prisma.link.aggregate({ _max: { order: true }, where: { userId: session.user.id } })
  const order = (maxOrder._max.order ?? 0) + 1
  const link = await prisma.link.create({ data: { title, url, icon, color, order, userId: session.user.id } })
  return Response.json(link, { status: 201 })
}

export async function PUT(req: Request) {
  const session = await auth()
  if (!session?.user?.id) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const { id, ...data } = body
  const link = await prisma.link.update({ where: { id }, data })
  return Response.json(link)
}

export async function DELETE(req: Request) {
  const session = await auth()
  if (!session?.user?.id) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) return Response.json({ error: 'Missing id' }, { status: 400 })
  await prisma.link.delete({ where: { id } })
  return Response.json({ ok: true })
}
