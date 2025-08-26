function Card({ theme, name, bio }: { theme: 'light' | 'dark' | 'gradient', name: string, bio: string }) {
  const themeCls = theme === 'dark'
    ? 'bg-neutral-900 text-white'
    : theme === 'gradient'
      ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white'
      : 'bg-white'
  return (
    <div className={`rounded-xl border overflow-hidden ${themeCls}`}>
      <div className="p-6 text-center space-y-4">
        <div className="w-20 h-20 rounded-full mx-auto bg-white/20" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm opacity-80">{bio}</p>
        </div>
        <div className="grid gap-2">
          <div className="px-4 py-2 rounded-md border text-center bg-black/20">Link One</div>
          <div className="px-4 py-2 rounded-md border text-center bg-black/10">Link Two</div>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className="container-max py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Make it feel like you</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Pick a vibe, then tweak buttons, colors, and fonts.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card theme="light" name="@lightuser" bio="Clean and minimal." />
        <Card theme="dark" name="@nightowl" bio="Moody and modern." />
        <Card theme="gradient" name="@vibes" bio="Loud and proud." />
      </div>
    </section>
  )
}
