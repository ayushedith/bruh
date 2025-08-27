"use client"
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function NavMotion({ children, className = '' }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
