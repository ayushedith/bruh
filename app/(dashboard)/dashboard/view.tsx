"use client"
import useSWR from 'swr'
import { useEffect, useMemo, useState } from 'react'
import DashboardShell from '@/components/dashboard/DashboardShell'

const fetcher = (url: string) => fetch(url).then(r => r.json())

type SessionUser = { id: string; name?: string | null; image?: string | null; username?: string | null }

export default function DashboardClient({ sessionUser }: { sessionUser: SessionUser | null }) {
  const { data: profile, mutate: mutateProfile } = useSWR('/api/profile', fetcher)
  const { data: links, mutate: mutateLinks } = useSWR('/api/links', fetcher)
  const [form, setForm] = useState({ name: '', username: '', bio: '', theme: 'light', font: 'inter', image: '' })

  useEffect(() => {
    if (profile) setForm({
      name: profile.name ?? '',
      username: profile.username ?? '',
      bio: profile.bio ?? '',
      theme: profile.theme ?? 'light',
      font: profile.font ?? 'inter',
      image: profile.image ?? ''
    })
  }, [profile])

  async function saveProfile() {
    await fetch('/api/profile', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    mutateProfile()
  }

  async function addLink() {
    const title = prompt('Title?')
    const url = title ? prompt('URL?') : null
    if (!title || !url) return
    await fetch('/api/links', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, url }) })
    mutateLinks()
  }

  async function updateLink(id: string) {
    const l = links.find((x: any) => x.id === id)
    const title = prompt('Title?', l?.title)
    const url = title ? prompt('URL?', l?.url) : null
    if (!title || !url) return
    await fetch('/api/links', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, title, url }) })
    mutateLinks()
  }

  async function deleteLink(id: string) {
    await fetch(`/api/links?id=${id}`, { method: 'DELETE' })
    mutateLinks()
  }

  const profileUrl = useMemo(() => (profile?.username ? `${location.origin}/u/${profile.username}` : ''), [profile?.username])

  return (
    <DashboardShell
      preview={
        <div>
          <h2 className="text-xl font-semibold mb-3">Live preview</h2>
          {profile?.username ? (
            <iframe className="w-full h-[600px] rounded-2xl border" src={`/u/${profile.username}`} />
          ) : (
            <div className="p-6 rounded-2xl border">Set a username to preview your page.</div>
          )}
          {profileUrl && (
            <div className="mt-4 flex items-center gap-3">
              <a className="text-brand underline" href={profileUrl} target="_blank">Open public page</a>
              <img className="w-20 h-20" src={`/api/qr?url=${encodeURIComponent(profileUrl)}`} />
            </div>
          )}
        </div>
      }
    >
      <div className="space-y-6">
        {/* Theme presets */}
        <section id="theme-presets">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-600">Make it feel like you</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Pick a vibe, then tweak buttons, colors, and fonts.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Light */}
            <button
              type="button"
              onClick={() => setForm({ ...form, theme: 'light' })}
              className={`text-left rounded-3xl border p-6 shadow-sm transition focus:outline-none ${form.theme === 'light' ? 'ring-2 ring-indigo-500' : 'hover:shadow'} bg-white`}
            >
              <div className="mx-auto max-w-[280px] rounded-3xl border border-gray-200 p-6 text-center text-gray-900 bg-white">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gray-200" />
                <div className="text-lg font-semibold">@lightuser</div>
                <div className="text-sm text-gray-500">Clean and minimal.</div>
                <div className="mt-4 space-y-3">
                  <div className="h-11 rounded-xl bg-gray-200 grid place-items-center text-gray-700">Link One</div>
                  <div className="h-11 rounded-xl bg-gray-200 grid place-items-center text-gray-700">Link Two</div>
                </div>
              </div>
            </button>

            {/* Dark */}
            <button
              type="button"
              onClick={() => setForm({ ...form, theme: 'dark' })}
              className={`text-left rounded-3xl border p-6 shadow-sm transition focus:outline-none ${form.theme === 'dark' ? 'ring-2 ring-indigo-500' : 'hover:shadow'} bg-white`}
            >
              <div className="mx-auto max-w-[280px] rounded-3xl p-6 text-center text-white bg-neutral-900">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-neutral-700" />
                <div className="text-lg font-semibold">@nightowl</div>
                <div className="text-sm text-neutral-300">Moody and modern.</div>
                <div className="mt-4 space-y-3">
                  <div className="h-11 rounded-xl border border-white/60 grid place-items-center">Link One</div>
                  <div className="h-11 rounded-xl border border-white/60 grid place-items-center">Link Two</div>
                </div>
              </div>
            </button>

            {/* Gradient */}
            <button
              type="button"
              onClick={() => setForm({ ...form, theme: 'gradient-1' })}
              className={`text-left rounded-3xl border p-6 shadow-sm transition focus:outline-none ${form.theme?.startsWith('gradient') ? 'ring-2 ring-indigo-500' : 'hover:shadow'} bg-white`}
            >
              <div className="mx-auto max-w-[280px] rounded-3xl p-6 text-center text-white bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/20" />
                <div className="text-lg font-semibold">@vibes</div>
                <div className="text-sm text-white/90">Loud and proud.</div>
                <div className="mt-4 space-y-3">
                  <div className="h-11 rounded-xl border border-white/80 grid place-items-center">Link One</div>
                  <div className="h-11 rounded-xl border border-white/80 grid place-items-center">Link Two</div>
                </div>
              </div>
            </button>
          </div>
        </section>

        <section id="profile">
          <h2 className="text-xl font-semibold">Profile</h2>
          <div className="mt-3 grid gap-3">
            <input className="border rounded-xl px-3 py-2" placeholder="Display name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="border rounded-xl px-3 py-2" placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
            <textarea className="border rounded-xl px-3 py-2" placeholder="Bio" value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} />
            <div className="grid grid-cols-2 gap-3">
              <select className="border rounded-xl px-3 py-2" value={form.theme} onChange={e => setForm({ ...form, theme: e.target.value })}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="gradient-1">Gradient</option>
              </select>
              <select className="border rounded-xl px-3 py-2" value={form.font} onChange={e => setForm({ ...form, font: e.target.value })}>
                <option value="inter">Inter</option>
                <option value="mono">Mono</option>
              </select>
            </div>
            <button className="px-4 py-2 rounded-full bg-brand text-white" onClick={saveProfile}>Save</button>
          </div>
        </section>

        <section id="links">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="mt-3 grid gap-2">
            {links?.map((l: any) => (
              <div key={l.id} className="rounded-2xl border p-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{l.title}</div>
                  <div className="text-sm text-gray-500">{l.url}</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded-lg border" onClick={() => updateLink(l.id)}>Edit</button>
                  <button className="px-2 py-1 rounded-lg border" onClick={() => deleteLink(l.id)}>Delete</button>
                </div>
              </div>
            ))}
            <button className="px-4 py-2 rounded-full border" onClick={addLink}>Add link</button>
          </div>
        </section>
      </div>
    </DashboardShell>
  )
}
