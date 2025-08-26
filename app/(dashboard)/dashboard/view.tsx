'use client'
import useSWR from 'swr'
import { useEffect, useMemo, useState } from 'react'

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
    <main className="container-max py-8 grid md:grid-cols-2 gap-8">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Profile</h2>
        <div className="grid gap-3">
          <input className="border rounded px-3 py-2" placeholder="Display name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input className="border rounded px-3 py-2" placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
          <textarea className="border rounded px-3 py-2" placeholder="Bio" value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} />
          <div className="grid grid-cols-2 gap-3">
            <select className="border rounded px-3 py-2" value={form.theme} onChange={e => setForm({ ...form, theme: e.target.value })}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="gradient-1">Gradient</option>
            </select>
            <select className="border rounded px-3 py-2" value={form.font} onChange={e => setForm({ ...form, font: e.target.value })}>
              <option value="inter">Inter</option>
              <option value="mono">Mono</option>
            </select>
          </div>
          <button className="px-4 py-2 rounded bg-brand text-white" onClick={saveProfile}>Save</button>
        </div>

        <h2 className="text-xl font-semibold mt-8">Links</h2>
        <div className="grid gap-2">
          {links?.map((l: any) => (
            <div key={l.id} className="border rounded p-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{l.title}</div>
                <div className="text-sm text-gray-500">{l.url}</div>
              </div>
              <div className="flex gap-2">
                <button className="px-2 py-1 rounded border" onClick={() => updateLink(l.id)}>Edit</button>
                <button className="px-2 py-1 rounded border" onClick={() => deleteLink(l.id)}>Delete</button>
              </div>
            </div>
          ))}
          <button className="px-4 py-2 rounded border" onClick={addLink}>Add link</button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        {profile?.username ? (
          <iframe className="w-full h-[600px] rounded border" src={`/u/${profile.username}`} />
        ) : (
          <div className="p-6 border rounded">Set a username to preview your page.</div>
        )}
        {profileUrl && (
          <div className="mt-4 flex items-center gap-3">
            <a className="text-brand underline" href={profileUrl} target="_blank">Open public page</a>
            <img className="w-20 h-20" src={`/api/qr?url=${encodeURIComponent(profileUrl)}`} />
          </div>
        )}
      </section>
    </main>
  )
}
