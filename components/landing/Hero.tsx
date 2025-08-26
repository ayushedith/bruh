import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>
      <div className="container-max py-24 md:py-32 text-center">
        <p className="inline-block rounded-full border px-3 py-1 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Guns.lol inspired • Built for speed</p>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
          One link for everything you are
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Create a beautiful, customizable profile with your links, analytics, and a short URL. Share it anywhere.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/login" className="px-5 py-3 rounded-lg bg-brand text-white hover:bg-brand-dark transition shadow">Get started</Link>
          <a href="#features" className="px-5 py-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-neutral-900 transition">Explore features</a>
        </div>

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
