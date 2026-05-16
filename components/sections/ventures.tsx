export function Ventures() {
  return (
    <section id="ventures" className="bg-spine-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-spine-gold">
          Our Ventures
        </p>
        <h2 className="mb-10 text-2xl font-black text-spine-navy sm:text-3xl">
          What We Own &amp; Operate
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-spine-line bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-spine-navy">
                <div className="h-4 w-4 rounded-sm bg-spine-gold" />
              </div>
              <div>
                <h3 className="font-black text-spine-navy">Spine Empire</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-spine-gold">
                  Done-For-You Marketing · Chiropractic
                </p>
              </div>
            </div>
            <p className="mb-3 text-sm leading-6 text-slate-600">
              We help chiropractic clinic owners stop gambling on referrals, insurance, and
              random ads — and build a repeatable patient-flow system instead.
            </p>
            <p className="mb-4 text-xs leading-5 text-slate-500">
              Operating from Dubai. Serving clients across the United States. Fully
              compliant with US regulations including CAN-SPAM and applicable FTC guidelines.
            </p>
            <a
              href="https://www.spineempire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-spine-navy hover:text-spine-gold transition-colors"
            >
              spineempire.com →
            </a>
          </div>

          <div className="rounded-xl border border-dashed border-spine-line bg-white p-6 flex items-center justify-center min-h-[200px]">
            <p className="text-sm text-slate-400">More ventures coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
