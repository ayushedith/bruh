import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const u = searchParams.get('u')
  if (!u) return NextResponse.json({ error: 'Missing u' }, { status: 400 })
  const user = await prisma.user.findUnique({ where: { username: u }, select: { username: true } })
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.redirect(new URL(`/${user.username}`, req.url))
}
