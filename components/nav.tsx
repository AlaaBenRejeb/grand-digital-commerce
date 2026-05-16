export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-spine-navy border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded bg-spine-gold flex-shrink-0" />
          <span className="font-bold text-white text-sm tracking-wide">
            Grand Digital Commerce
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "About", href: "#about" },
            { label: "Ventures", href: "#ventures" },
            { label: "Coaching", href: "#coaching" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/65 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#coaching"
            className="rounded-md bg-spine-gold px-4 py-2 text-sm font-bold text-spine-navy hover:bg-spine-gold/90 transition-colors"
          >
            Work With Us
          </a>
        </nav>
      </div>
    </header>
  )
}
