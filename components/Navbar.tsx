import Link from 'next/link'
import { auth } from '@/lib/auth'
import { SignInOut } from './SignInOut'
import ThemeToggle from '@/components/ThemeToggle'

export default async function Navbar() {
  const session = await auth()
  return (
    <nav className="sticky top-0 z-50 bg-white/60 dark:bg-neutral-900/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-white/10">
      <div className="container-max py-3 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="relative inline-grid place-items-center h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12a5 5 0 0 1 5-5h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M17 12a5 5 0 0 1-5 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-500">Link Hub</span>
          </Link>
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 text-sm">
            <li><a className="px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" href="#features">Features</a></li>
            <li><a className="px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" href="#pricing">Pricing</a></li>
            <li><a className="px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" href="#faq">FAQ</a></li>
            <li><a className="px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" href="#">Showcase</a></li>
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session?.user && (
            <Link href="/dashboard" className="hidden sm:inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">Dashboard</Link>
          )}
          <Link
            href={session?.user ? '/dashboard' : '/login'}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white px-4 py-2 text-sm shadow hover:opacity-95 transition"
          >
            {session?.user ? 'Create' : 'Get started'}
          </Link>
          <div className="hidden sm:block">
            <SignInOut isAuthed={!!session?.user} />
          </div>

          {/* Mobile menu */}
          <details className="md:hidden group relative">
            <summary className="list-none inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current"></span>
                <span className="block h-0.5 w-5 bg-current"></span>
                <span className="block h-0.5 w-5 bg-current"></span>
              </div>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-2xl border bg-white/80 dark:bg-neutral-900/80 backdrop-blur p-2 shadow-xl">
              <Link className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#features">Features</Link>
              <Link className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#pricing">Pricing</Link>
              <Link className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#faq">FAQ</Link>
              <Link className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">Showcase</Link>
              <div className="h-px my-2 bg-black/10 dark:bg-white/10" />
              {session?.user && (
                <Link className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="/dashboard">Dashboard</Link>
              )}
              <div className="px-2 pt-2">
                <SignInOut isAuthed={!!session?.user} />
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
