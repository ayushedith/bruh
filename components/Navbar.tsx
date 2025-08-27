import Link from 'next/link'
import { auth } from '@/lib/auth'
import { SignInOut } from './SignInOut'
import ThemeToggle from '@/components/ThemeToggle'
import NavMotion from '@/components/NavMotion'

export default async function Navbar() {
  const session = await auth()
  return (
    <nav className="sticky top-0 z-50 border-b border-transparent transition-all duration-300 data-[scrolled=true]:bg-white/80 data-[scrolled=true]:dark:bg-neutral-900/70 data-[scrolled=true]:backdrop-blur data-[scrolled=true]:border-white/10 data-[scrolled=true]:shadow-sm">
      <NavMotion>
        <div className="container-max py-3 grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="relative inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 12a5 5 0 0 1 5-5h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 12a5 5 0 0 1-5 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-500">Link Hub</span>
            </Link>
          </div>

          {/* Center: Nav links (desktop) */}
      <ul className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
            {['Features', 'Pricing', 'Showcase'].map((label) => (
              <li key={label}>
        <a href={`#${label.toLowerCase()}`}
       className="group relative py-2 text-gray-900 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {label}
      <span className="pointer-events-none absolute left-0 right-0 -bottom-0.5 mx-auto h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            {session?.user ? (
              <>
                <Link href="/dashboard" className="hidden sm:inline-flex items-center rounded-full border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">Dashboard</Link>
                <div className="hidden sm:block"><SignInOut isAuthed /></div>
              </>
            ) : (
              <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-2 text-sm shadow hover:opacity-95 hover:shadow-md transition">Login</Link>
            )}

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
              <div className="fixed inset-x-0 top-16 z-40 border-t bg-white/90 dark:bg-neutral-900/90 backdrop-blur p-3 shadow-lg">
                <div className="container-max">
                  <nav className="grid gap-1">
                    {['Features', 'Pricing', 'Showcase'].map((label) => (
                      <Link key={label} className="block rounded-lg px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5" href={`#${label.toLowerCase()}`}>
                        {label}
                      </Link>
                    ))}
                    <div className="h-px my-2 bg-black/10 dark:bg-white/10" />
                    {session?.user && (
                      <Link className="block rounded-lg px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5" href="/dashboard">Dashboard</Link>
                    )}
                    <div className="pt-2">
                      <SignInOut isAuthed={!!session?.user} />
                    </div>
                  </nav>
                </div>
              </div>
            </details>
          </div>
        </div>
      </NavMotion>
    </nav>
  )
}
