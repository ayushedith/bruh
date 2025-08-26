import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

export default async function PublicProfile({ params }: { params: { username: string } }) {
  const user = await prisma.user.findUnique({
    where: { username: params.username },
    include: { links: { orderBy: { order: 'asc' } } }
  })
  if (!user) return notFound()
  await prisma.user.update({ where: { id: user.id }, data: { visitCount: { increment: 1 } } })

  const themeCls = user.theme === 'dark' ? 'bg-neutral-900 text-white' : user.theme?.startsWith('gradient') ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white'

  return (
    <main className={`min-h-screen flex items-center justify-center p-6 ${themeCls}`}>
      <div className="w-full max-w-md text-center space-y-6">
        {user.image && <img src={user.image} alt="avatar" className="w-24 h-24 rounded-full mx-auto object-cover" />}
        <div>
          <h1 className="text-3xl font-bold">{user.name || user.username}</h1>
          {user.bio && <p className="text-sm opacity-80">{user.bio}</p>}
        </div>
        <div className="grid gap-3">
          {user.links.map(link => (
            <a
              key={link.id}
              href={`/api/track?link=${link.id}`}
              className="block px-4 py-3 rounded-lg border hover:opacity-90 transition"
              style={{ background: link.color || undefined }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
