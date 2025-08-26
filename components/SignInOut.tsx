'use client'
import { signIn, signOut } from 'next-auth/react'

export function SignInOut({ isAuthed }: { isAuthed: boolean }) {
  if (isAuthed) {
    return (
      <button onClick={() => signOut()} className="px-3 py-1 rounded bg-brand text-white">Sign out</button>
    )
  }
  return (
    <button onClick={() => signIn()} className="px-3 py-1 rounded bg-brand text-white">Sign in</button>
  )
}
