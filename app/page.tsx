import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="container-max py-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Link Hub</h1>
        <p className="text-gray-500 dark:text-gray-400">A clean, customizable profile with all your links in one place.</p>
        <div className="flex justify-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Get Started</Link>
          <a href="https://vercel.com" target="_blank" className="px-4 py-2 rounded-md border">Deploy</a>
        </div>
      </section>
    </main>
  )
}
