import Link from 'next/link'
import { auth, signIn, signOut } from '@/lib/auth'

export default async function Navbar() {
  const session = await auth()
  return (
    <nav className="border-b">
      <div className="container-max py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Link Hub</Link>
        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
              <Link href="/dashboard" className="px-3 py-1 rounded border">Dashboard</Link>
              <form action={async () => { 'use server'; await signOut() }}>
                <button className="px-3 py-1 rounded bg-brand text-white">Sign out</button>
              </form>
            </>
          ) : (
            <form action={async () => { 'use server'; await signIn() }}>
              <button className="px-3 py-1 rounded bg-brand text-white">Sign in</button>
            </form>
          )}
        </div>
      </div>
    </nav>
  )
}
