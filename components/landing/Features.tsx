export default function Features() {
  const items = [
    {
      title: 'Instant auth',
      desc: 'Sign in with Google or Discord. Your username is auto-reserved.',
      icon: '🔐'
    },
    {
      title: 'Custom look',
      desc: 'Pick themes, colors, and fonts. Make it yours in seconds.',
      icon: '🎨'
    },
    {
      title: 'Built-in analytics',
      desc: 'See visits and per-link clicks. Share a QR in one tap.',
      icon: '📈'
    }
  ]
  return (
    <section id="features" className="container-max py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Everything you need</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">A simple, powerful toolkit for your profile.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
            <div className="text-3xl">{it.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
