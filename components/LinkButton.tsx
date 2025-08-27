"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  href: string
  label: string
  color?: string // tailwind class or hex
  icon?: ReactNode
}

export default function LinkButton({ href, label, color, icon }: Props) {
  const style = color?.startsWith('#') ? { background: color } : undefined
  const cls = color && !color.startsWith('#') ? color : 'bg-white'
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 border shadow-sm hover:shadow-lg transition ${cls}`}
      style={style}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black/5">
        {icon || (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 12a5 5 0 0 1 5-5h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M17 12a5 5 0 0 1-5 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </span>
      <span className="font-medium">{label}</span>
      <span className="ml-auto opacity-0 group-hover:opacity-100 transition">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17l9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-black/5 transition" />
    </motion.a>
  )
}
