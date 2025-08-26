import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Link Hub',
  description: 'Personal link hub and digital card',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className="min-h-screen app-bg">
        {/* @ts-expect-error Server Component */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
