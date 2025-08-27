"use client"

import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DashboardShell({ children, preview }: { children: ReactNode; preview?: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="container-max py-6">
      <div className="grid md:grid-cols-[240px_1fr] gap-6">
        <aside className="md:sticky md:top-20 h-max">
          <button className="md:hidden mb-3 rounded-xl border px-3 py-2" onClick={() => setOpen(!open)}>Menu</button>
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl border bg-white p-3 shadow-sm ${open ? '' : 'hidden md:block'}`}
          >
            <ul className="grid gap-1 text-sm">
              <li><a className="block px-3 py-2 rounded-lg hover:bg-indigo-50" href="#profile">Profile</a></li>
              <li><a className="block px-3 py-2 rounded-lg hover:bg-pink-50" href="#links">Links</a></li>
              <li><a className="block px-3 py-2 rounded-lg hover:bg-fuchsia-50" href="#settings">Settings</a></li>
            </ul>
          </motion.nav>
        </aside>

        <main className="grid gap-6">
          <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border bg-white p-5 shadow-sm">
            {children}
          </motion.section>
          {preview && (
            <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border bg-white p-5 shadow-sm">
              {preview}
            </motion.section>
          )}
        </main>
      </div>
    </div>
  )
}
