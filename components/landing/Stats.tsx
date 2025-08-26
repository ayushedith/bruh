export default function Stats() {
  const items = [
    { label: 'Profile Views', value: '33,500,000+', icon: '👁️' },
    { label: 'Users', value: '950,000+', icon: '👤' },
    { label: 'Files Uploads', value: '460,000+', icon: '📄' },
    { label: 'Subscribers', value: '29,000+', icon: '💎' }
  ]
  return (
    <section className="container-max py-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold">Over <span className="text-brand">950,000</span> people use Link Hub</h3>
        <p className="text-gray-600 dark:text-gray-400">What are you waiting for?</p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {items.map(i => (
          <div key={i.label} className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-5 text-center">
            <div className="text-2xl">{i.icon}</div>
            <div className="mt-2 text-xl font-semibold">{i.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{i.label}</div>
          </div>
        ))}
      </div>

      {/* Second claim row */}
      <form action="/login" className="mx-auto mt-10 flex w-full max-w-lg items-center gap-2">
        <div className="flex-1 rounded-full border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-2 text-left">
          <span className="text-gray-500">linkhub.to/</span>
          <input aria-label="username" placeholder="username" className="bg-transparent outline-none w-40" />
        </div>
        <button className="rounded-full bg-brand px-5 py-2 text-white hover:bg-brand-dark transition">Claim Now</button>
      </form>
    </section>
  )
}
