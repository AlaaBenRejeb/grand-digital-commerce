export function Footer() {
  return (
    <footer className="bg-spine-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Grand Digital Commerce LLC. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
