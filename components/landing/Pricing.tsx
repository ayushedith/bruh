export default function Pricing() {
  return (
    <section className="container-max py-16" id="pricing">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Explore our plans</h2>
        <p className="text-gray-600 dark:text-gray-400">Join thousands of creators leveling up their profile.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Free */}
        <div className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Free</h3>
          </div>
          <div className="mt-4 text-3xl font-bold">0€ <span className="text-base font-normal text-gray-500">/ lifetime</span></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Basic Customization</li>
            <li>• Profile & Links</li>
            <li>• Basic Analytics</li>
          </ul>
          <div className="mt-auto pt-6">
            <a href="/login" className="block text-center rounded-full bg-brand text-white px-5 py-3">Get Started</a>
          </div>
        </div>
        {/* Premium */}
        <div className="rounded-2xl border bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/15 p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold flex items-center gap-2">Premium <span className="text-xs rounded-full border px-2 py-0.5">Most Popular</span></h3>
          </div>
          <div className="mt-4 text-3xl font-bold">6.99€ <span className="text-base font-normal text-gray-500">/ lifetime</span></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Exclusive Badge</li>
            <li>• Profile Layouts</li>
            <li>• Custom Fonts</li>
            <li>• Typewriter Animations</li>
            <li>• Special Profile Effects</li>
            <li>• Advanced Customization</li>
            <li>• Metadata & SEO Controls</li>
          </ul>
          <div className="mt-auto pt-6">
            <a href="#" className="block text-center rounded-full border px-5 py-3">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
