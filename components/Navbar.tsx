import Link from 'next/link'
import { auth } from '@/lib/auth'
import { SignInOut } from './SignInOut'

export default async function Navbar() {
  const session = await auth()
  return (
    <nav className="border-b">
      <div className="container-max py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">Link Hub</Link>
        <div className="flex items-center gap-3">
          <SignInOut isAuthed={!!session?.user} />
        </div>
      </div>
    </nav>
  )
}
