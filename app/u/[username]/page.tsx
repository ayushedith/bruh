import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import LinkButton from '@/components/LinkButton'
import { motion } from 'framer-motion'

export default async function PublicProfile({ params }: { params: { username: string } }) {
  const user = await prisma.user.findUnique({
    where: { username: params.username },
    include: { links: { orderBy: { order: 'asc' } } }
  })
  if (!user) return notFound()
  await prisma.user.update({ where: { id: user.id }, data: { visitCount: { increment: 1 } } })

  const themeCls = user.theme === 'dark'
    ? 'bg-neutral-950 text-white'
    : user.theme?.startsWith('gradient')
      ? 'bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-pink-500 text-white'
      : 'bg-neutral-50 text-neutral-900'
  const fontCls = user.font === 'mono' ? 'font-mono' : 'font-sans'
  const palette = ['#FF6B6B', '#FFD166', '#6BCB77', '#4D96FF', '#BC6FF1']

  return (
  <main className={`min-h-screen ${themeCls} ${fontCls}`}>
      <div className="container-max py-10">
        <div className="mx-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="rounded-3xl border bg-white/70 dark:bg-white/5 backdrop-blur shadow-xl p-6 text-center"
          >
            {user.image && (
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
                src={user.image}
                alt="avatar"
                className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-white/60 dark:ring-white/10"
              />
            )}
            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight">{user.name || user.username}</h1>
              {user.bio && <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{user.bio}</p>}
            </div>
            <motion.div
              className="mt-6 grid gap-3"
              initial="hidden"
              animate="show"
              variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
            >
              {user.links.map((link, idx) => (
                <motion.div key={link.id} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
                  <LinkButton
                    href={`/api/track?link=${link.id}`}
                    label={link.title}
                    color={link.color || palette[idx % palette.length]}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
