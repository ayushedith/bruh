function Card({ theme, name, bio }: { theme: 'light' | 'dark' | 'gradient', name: string, bio: string }) {
  const themeCls = theme === 'dark'
    ? 'bg-neutral-900 text-white'
    : theme === 'gradient'
      ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white'
      : 'bg-white text-gray-900'

  const avatarCls = theme === 'dark'
    ? 'bg-neutral-700'
    : theme === 'gradient'
      ? 'bg-white/20'
      : 'bg-gray-200'

  const bioCls = theme === 'dark'
    ? 'text-neutral-300'
    : theme === 'gradient'
      ? 'text-white/90'
      : 'text-gray-600'

  const linkBase = 'px-4 py-2 rounded-md text-center'
  const linkOneCls = theme === 'dark'
    ? `${linkBase} border border-white/70`
    : theme === 'gradient'
      ? `${linkBase} border border-white/80`
      : `${linkBase} bg-gray-200 text-gray-700 shadow-sm`
  const linkTwoCls = theme === 'dark'
    ? `${linkBase} border border-white/70`
    : theme === 'gradient'
      ? `${linkBase} border border-white/80`
      : `${linkBase} bg-gray-200 text-gray-700 shadow-sm`

  return (
    <div className={`rounded-xl border overflow-hidden ${themeCls}`}>
      <div className="p-6 text-center space-y-4">
        <div className={`w-20 h-20 rounded-full mx-auto ${avatarCls}`} />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className={`text-sm ${bioCls}`}>{bio}</p>
        </div>
        <div className="grid gap-2">
          <div className={linkOneCls}>Link One</div>
          <div className={linkTwoCls}>Link Two</div>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className="container-max py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Make it feel like you</h2>
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
