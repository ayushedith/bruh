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
        <Navbar />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var nav = document.querySelector('nav');
            if(!nav) return;
            var onScroll = function(){ nav.setAttribute('data-scrolled', window.scrollY > 8 ? 'true' : 'false'); };
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
          })();
        `}} />
        {children}
      </body>
    </html>
  )
}
