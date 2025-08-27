"use client"

import { useState } from "react"

type Item = { q: string; a: string }

const items: Item[] = [
  { q: "What is this site?", a: "A simple profile hub to share all your links with a single URL." },
  { q: "Is it free?", a: "Yes. There's a generous free plan and an optional one-time premium upgrade." },
  { q: "How long does setup take?", a: "Less than a minute. Sign in, pick a username, paste links, done." },
  { q: "Can I customize my page?", a: "You can change themes, fonts, and add effects. Premium unlocks more styles." },
]

function QA({ q, a, i }: Item & { i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border rounded-xl overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur">
      <button
        className="w-full text-left px-4 py-3 flex items-center justify-between"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{q}</span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">{a}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="container-max py-16" id="faq">
      <div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Frequently asked questions</h2>
        <p className="text-gray-600 dark:text-gray-400">Everything you need to know.</p>
      </div>
      <div className="space-y-3 max-w-3xl mx-auto">
        {items.map((it, idx) => (
          <QA key={idx} q={it.q} a={it.a} i={idx} />
        ))}
      </div>
    </section>
  )
}
