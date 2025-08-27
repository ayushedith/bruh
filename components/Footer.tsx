import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container-max py-10">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Logo + description */}
          <div className="flex items-start gap-3">
            <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12a5 5 0 0 1 5-5h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M17 12a5 5 0 0 1-5 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <p className="text-lg font-semibold">Link Hub</p>
              <p className="text-sm text-gray-500">A modern link hub to share everything in one place.</p>
            </div>
          </div>

          {/* Right: Quick links + Socials */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-end gap-6">
            <nav className="grid grid-cols-3 gap-3 text-sm">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition">Privacy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition">Terms</Link>
            </nav>
            <div className="inline-flex items-center gap-3">
              <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-blue-50 transition text-gray-600 hover:text-sky-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.77.34-1.6.57-2.46.67a4.25 4.25 0 0 0 1.86-2.35 8.49 8.49 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.23 3.87 12.02 12.02 0 0 1-8.73-4.43 4.24 4.24 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.15 4.24 4.24 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54a12 12 0 0 0 6.5 1.9c7.8 0 12.07-6.46 12.07-12.06 0-.18 0-.36-.01-.54A8.63 8.63 0 0 0 22 5.92Z"/></svg>
              </a>
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-purple-50 transition text-gray-600 hover:text-purple-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.36-1.36-3.36-1.36-.46-1.19-1.12-1.51-1.12-1.51-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.37 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.13-4.56-5 0-1.1.39-1.99 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03.8-.23 1.65-.35 2.5-.35s1.7.12 2.5.35c1.9-1.3 2.74-1.03 2.74-1.03.56 1.4.21 2.44.11 2.7.64.71 1.02 1.6 1.02 2.7 0 3.88-2.34 4.73-4.57 4.98.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
              </a>
              <a aria-label="Discord" href="https://discord.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-pink-50 transition text-gray-600 hover:text-pink-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.32 4.37A17.24 17.24 0 0 0 15.88 3l-.2.39c1.89.5 3.3 1.23 4.37 2.1-1.84-.95-3.67-1.58-5.5-1.89a18.4 18.4 0 0 0-3.56 0C8.16 3.52 6.33 4.15 4.5 5.49c1.07-.86 2.49-1.6 4.38-2.09L8.68 3A17.24 17.24 0 0 0 4.23 4.37C1.27 8.9.41 13.28.76 17.6c1.62 1.2 3.18 1.93 4.72 2.42l1.13-1.78c-.62-.22-1.2-.52-1.74-.9.18.06.36.13.54.18 2.06.63 4.12.94 6.18.94s4.12-.31 6.18-.94c.18-.05.36-.11.54-.18-.55.38-1.12.68-1.74.9l1.13 1.78c1.54-.49 3.1-1.22 4.72-2.43.38-4.54-.38-8.91-3.4-13.23ZM8.97 14.5c-.71 0-1.29-.64-1.29-1.42 0-.79.57-1.43 1.29-1.43.71 0 1.29.64 1.28 1.43 0 .78-.57 1.42-1.28 1.42Zm6.06 0c-.71 0-1.29-.64-1.29-1.42 0-.79.57-1.43 1.29-1.43s1.29.64 1.29 1.43c0 .78-.57 1.42-1.29 1.42Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2025 CaptureCraft. All rights reserved.</p>
          <p className="text-gray-400">Made with ❤️ using Next.js & TailwindCSS</p>
        </div>
      </div>
    </footer>
  )
}
