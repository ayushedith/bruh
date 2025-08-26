'use client'
import useSWR from 'swr'
import { useState } from 'react'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function DashboardPage() {
  const { data: profile, mutate } = useSWR('/api/profile', fetcher)
  const { data: links, mutate: mutateLinks } = useSWR('/api/links', fetcher)
  const [newLink, setNewLink] = useState({ title: '', url: '', icon: '', color: '' })

  if (!profile) return <main className="container-max py-10">Loading...</main>

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault()
    await fetch('/api/profile', { method: 'PUT', body: JSON.stringify(profile) })
    mutate()
  }

  async function addLink() {
    if (!newLink.title || !newLink.url) return
    await fetch('/api/links', { method: 'POST', body: JSON.stringify(newLink) })
    setNewLink({ title: '', url: '', icon: '', color: '' })
    mutateLinks()
  }

  async function updateLink(id: string, patch: any) {
    await fetch('/api/links', { method: 'PUT', body: JSON.stringify({ id, ...patch }) })
    mutateLinks()
  }

  async function deleteLink(id: string) {
    await fetch(`/api/links?id=${id}`, { method: 'DELETE' })
    mutateLinks()
  }

  return (
    <main className="container-max py-10 grid md:grid-cols-2 gap-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <form onSubmit={saveProfile} className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Username" value={profile.username || ''} onChange={e => mutate({ ...profile, username: e.target.value }, false)} />
          <input className="w-full border rounded px-3 py-2" placeholder="Display name" value={profile.name || ''} onChange={e => mutate({ ...profile, name: e.target.value }, false)} />
          <input className="w-full border rounded px-3 py-2" placeholder="Avatar URL" value={profile.image || ''} onChange={e => mutate({ ...profile, image: e.target.value }, false)} />
          <textarea className="w-full border rounded px-3 py-2" placeholder="Bio" value={profile.bio || ''} onChange={e => mutate({ ...profile, bio: e.target.value }, false)} />
          <div className="grid grid-cols-2 gap-3">
            <select className="border rounded px-3 py-2" value={profile.theme || 'light'} onChange={e => mutate({ ...profile, theme: e.target.value }, false)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="gradient-blue">Gradient Blue</option>
              <option value="gradient-purple">Gradient Purple</option>
            </select>
            <select className="border rounded px-3 py-2" value={profile.font || 'inter'} onChange={e => mutate({ ...profile, font: e.target.value }, false)}>
              <option value="inter">Inter</option>
              <option value="serif">Serif</option>
              <option value="mono">Mono</option>
            </select>
          </div>
          <button className="px-4 py-2 rounded bg-brand text-white" type="submit">Save</button>
        </form>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Links</h3>
          <div className="grid gap-2">
            {Array.isArray(links) && links.map((l: any) => (
              <div key={l.id} className="flex items-center gap-2">
                <input className="border rounded px-2 py-1 w-36" value={l.title} onChange={e => updateLink(l.id, { title: e.target.value })} />
                <input className="border rounded px-2 py-1 flex-1" value={l.url} onChange={e => updateLink(l.id, { url: e.target.value })} />
                <input className="border rounded px-2 py-1 w-28" value={l.icon || ''} placeholder="icon" onChange={e => updateLink(l.id, { icon: e.target.value })} />
                <input className="border rounded px-2 py-1 w-28" value={l.color || ''} placeholder="#color" onChange={e => updateLink(l.id, { color: e.target.value })} />
                <button className="text-red-600" onClick={() => deleteLink(l.id)}>Delete</button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input className="border rounded px-2 py-1 w-36" placeholder="Title" value={newLink.title} onChange={e => setNewLink({ ...newLink, title: e.target.value })} />
            <input className="border rounded px-2 py-1 flex-1" placeholder="https://" value={newLink.url} onChange={e => setNewLink({ ...newLink, url: e.target.value })} />
            <input className="border rounded px-2 py-1 w-28" placeholder="icon" value={newLink.icon} onChange={e => setNewLink({ ...newLink, icon: e.target.value })} />
            <input className="border rounded px-2 py-1 w-28" placeholder="#color" value={newLink.color} onChange={e => setNewLink({ ...newLink, color: e.target.value })} />
            <button onClick={addLink} className="px-3 py-1 rounded bg-brand text-white">Add</button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
        <ProfilePreview profile={profile} links={links || []} />
      </section>
    </main>
  )
}

function ProfilePreview({ profile, links }: { profile: any, links: any[] }) {
  const themeCls = profile.theme === 'dark' ? 'bg-neutral-900 text-white' : profile.theme?.startsWith('gradient') ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-white'
  return (
    <div className={`rounded-2xl border overflow-hidden ${themeCls}`}>
      <div className="p-6 text-center space-y-4">
        {profile.image && <img src={profile.image} alt="avatar" className="w-24 h-24 rounded-full mx-auto object-cover" />}
        <div>
          <h3 className="text-xl font-semibold">{profile.name || profile.username}</h3>
          {profile.bio && <p className="text-sm opacity-80">{profile.bio}</p>}
        </div>
        <div className="grid gap-2">
          {links.map((l) => (
            <a key={l.id} href={l.url} target="_blank" className="block px-4 py-2 rounded-md border text-center" style={{ background: l.color || undefined }}>{l.title}</a>
          ))}
        </div>
      </div>
    </div>
  )
}
