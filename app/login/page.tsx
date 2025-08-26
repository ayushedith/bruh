'use client'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <main className="container-max py-16">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Sign in</h1>
        <div className="grid gap-3">
          <button onClick={() => signIn('google')} className="px-4 py-2 rounded-md border">Sign in with Google</button>
          <button onClick={() => signIn('discord')} className="px-4 py-2 rounded-md border">Sign in with Discord</button>
        </div>
      </div>
    </main>
  )
}
