export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-spine-navy to-[#102952] px-6 pb-20 pt-36"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-spine-gold">
          Dubai · Est. 2024
        </p>
        <h1 className="mb-5 max-w-2xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          We build digital businesses.{" "}
          <span className="text-spine-gold">We teach people how.</span>
        </h1>
        <p className="mb-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
          Grand Digital Commerce is a Dubai-based holding company. We own and operate{" "}
          <strong className="text-white/80">Spine Empire</strong> and coach ambitious people
          from zero to their first online business.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#ventures"
            className="rounded-md bg-spine-gold px-6 py-3 text-sm font-bold text-spine-navy hover:bg-spine-gold/90 transition-colors"
          >
            Explore Our Work
          </a>
          <a
            href="#coaching"
            className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/50 transition-colors"
          >
            Coaching Program
          </a>
        </div>
      </div>
    </section>
  )
}
