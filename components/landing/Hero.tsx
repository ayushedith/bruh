import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>
      <div className="container-max py-24 md:py-32 text-center">
        <p className="inline-block rounded-full border px-3 py-1 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Link hub • Fast • Flexible</p>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
          Everything you share, in one place
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Build a modern, customizable profile with all your links. Claim your name and share it everywhere.
        </p>

        {/* Username claim row */}
        <form action="/login" className="mx-auto mt-8 flex w-full max-w-lg items-center gap-2">
          <div className="flex-1 rounded-full border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-2 text-left">
            <span className="text-gray-500">linkhub.to/</span>
            <input aria-label="username" placeholder="username" className="bg-transparent outline-none w-40" />
          </div>
          <button className="rounded-full bg-brand px-5 py-2 text-white hover:bg-brand-dark transition">Claim Now</button>
        </form>

        <div className="mt-12 md:mt-16">
          <PreviewCard />
        </div>
      </div>
    </section>
  )
}

function PreviewCard() {
  const links = [
    { id: '1', title: 'Twitter', color: '#1DA1F2' },
    { id: '2', title: 'GitHub', color: '#24292e' },
    { id: '3', title: 'Website', color: '#10b981' },
  ]
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border bg-white/70 dark:bg-white/5 backdrop-blur shadow-lg">
      <div className="p-6 text-center space-y-4">
        <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-brand to-fuchsia-500" />
        <div>
          <h3 className="text-2xl font-bold">@yourname</h3>
          <p className="text-sm text-gray-500">Building cool things on the internet</p>
        </div>
        <div className="grid gap-2">
          {links.map(l => (
            <button key={l.id} className="px-4 py-2 rounded-lg text-white" style={{ background: l.color }}>{l.title}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
