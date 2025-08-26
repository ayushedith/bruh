export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="container-max">
        <div className="rounded-2xl border bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Claim your name before it's gone</h3>
              <p className="text-gray-600 dark:text-gray-300">Get a beautiful profile and start sharing in seconds.</p>
            </div>
            <a href="/login" className="rounded-full bg-brand text-white px-6 py-3">Claim now</a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 py-10 border-t">
          <div>
            <div className="text-lg font-semibold mb-3">General</div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Resources</div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="/u/example">Examples</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Contact</div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="mailto:support@example.com">Email</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-3">Legal</div>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 border-t text-sm text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Link Hub. All rights reserved.</span>
          <div className="flex gap-3">
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
