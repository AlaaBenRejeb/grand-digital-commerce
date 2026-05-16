export function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-spine-gold">
          The Founder
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-spine-navy">
            <span className="text-2xl font-black text-spine-gold">A</span>
          </div>
          <div>
            <h2 className="mb-1 text-xl font-black text-spine-navy">Alaa Ben Rejeb</h2>
            <p className="mb-4 text-sm text-slate-500">
              Founder · Grand Digital Commerce · Dubai, UAE
            </p>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              I started Grand Digital Commerce to build scalable digital businesses and help
              others do the same. Spine Empire is proof that a focused system beats random
              effort — we built a done-for-you marketing operation for chiropractic clinics
              across the United States, operating from Dubai. The coaching program exists
              because the biggest barrier to starting an online business is not knowledge.
              It is knowing where to start.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
