import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const linkId = searchParams.get('link')
  if (!linkId) return NextResponse.json({ error: 'Missing link' }, { status: 400 })
  const link = await prisma.link.update({ where: { id: linkId }, data: { clicks: { increment: 1 } } })
  return NextResponse.redirect(link.url)
}
