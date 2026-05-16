const pillars = [
  {
    title: "Niche & Market",
    body: "Find what works before you build anything.",
  },
  {
    title: "Offer & Positioning",
    body: "Build something people actually pay for.",
  },
  {
    title: "First Client",
    body: "Close your first deal with a repeatable system.",
  },
]

export function Coaching() {
  return (
    <section id="coaching" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-spine-gold">
          Coaching
        </p>
        <h2 className="mb-4 text-2xl font-black text-spine-navy sm:text-3xl">
          From Zero to Your First Online Business
        </h2>
        <p className="mb-8 max-w-2xl text-base leading-7 text-slate-600">
          You have the ambition. You have no idea where to start. That is exactly who this
          is for. We go from choosing a niche and validating a market, all the way to your
          first paying customer — step by step.
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border-t-2 border-spine-gold border border-spine-line bg-spine-surface p-5"
            >
              <h3 className="mb-2 font-bold text-spine-navy">{p.title}</h3>
              <p className="text-sm leading-5 text-slate-500">{p.body}</p>
            </div>
          ))}
        </div>

        <a
          href="mailto:alaabenrejeb.b@icloud.com?subject=Coaching%20Inquiry"
          className="inline-block rounded-md bg-spine-navy px-7 py-3 text-sm font-bold text-white hover:bg-spine-navy/90 transition-colors"
        >
          Apply for Coaching →
        </a>
      </div>
    </section>
  )
}
