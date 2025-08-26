import Link from 'next/link'

export default function CTA() {
  return (
    <section className="container-max py-16 md:py-24">
      <div className="rounded-2xl border p-8 md:p-12 text-center bg-gradient-to-br from-brand/10 to-fuchsia-400/10">
        <h3 className="text-2xl md:text-3xl font-bold">Ready to launch your link hub?</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Create your page in under a minute. Free and fast.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/login" className="px-5 py-3 rounded-lg bg-brand text-white hover:bg-brand-dark transition shadow">Get started</Link>
          <a href="#features" className="px-5 py-3 rounded-lg border">See features</a>
        </div>
      </div>
    </section>
  )
}
