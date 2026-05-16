import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service — Grand Digital Commerce",
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="mb-2 text-3xl font-black text-spine-navy">Terms of Service</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: May 2026</p>

        <div className="space-y-8 text-base leading-7 text-slate-600">
          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">1. Agreement</h2>
            <p>
              By accessing granddigitalcommerce.com or engaging with any services offered by
              Grand Digital Commerce LLC ("we", "us", "our"), you agree to these Terms of
              Service. If you do not agree, do not use this website or our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">2. Services</h2>
            <p className="mb-3">
              Grand Digital Commerce LLC operates two primary lines of service:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-spine-navy">Spine Empire</strong> — a licensing and
                coaching platform for chiropractic clinic owners in the United States,
                operated from Dubai, UAE.
              </li>
              <li>
                <strong className="text-spine-navy">Online Business Coaching</strong> —
                personalised coaching for individuals starting their first online business.
              </li>
            </ul>
            <p className="mt-3">
              The information on this website is provided for informational purposes only.
              Nothing on this site constitutes a guarantee of results or income.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">3. US Regulatory Compliance</h2>
            <p>
              Spine Empire's marketing services to US-based clients are conducted in
              compliance with applicable United States federal regulations, including the
              CAN-SPAM Act and relevant Federal Trade Commission (FTC) guidelines. All
              commercial email communications include a clear unsubscribe mechanism and
              accurate sender identification.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and brand
              materials — is the property of Grand Digital Commerce LLC and may not be
              reproduced, distributed, or used without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">5. No Guarantee of Results</h2>
            <p>
              Coaching and marketing services involve inherent uncertainty. Results depend on
              many factors outside our control, including your effort, market conditions, and
              timing. We make no guarantees of income, revenue, or business outcomes. Any
              case studies or examples are illustrative and not typical.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Grand Digital Commerce LLC
              shall not be liable for any indirect, incidental, consequential, or punitive
              damages arising out of your use of this website or our services. Our total
              liability in any matter arising from these terms shall not exceed the amount
              you paid us in the 30 days preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">7. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the United Arab Emirates.
              Any disputes shall be subject to the exclusive jurisdiction of the courts of
              Dubai, UAE, except where mandatory consumer protection laws in another
              jurisdiction apply.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">8. Changes to These Terms</h2>
            <p>
              We reserve the right to update these terms at any time. The "last updated"
              date reflects the most recent revision. Continued use of our services after a
              change constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">9. Contact</h2>
            <p>
              Grand Digital Commerce LLC, Dubai, United Arab Emirates.{" "}
              <a
                href="mailto:alaabenrejeb.b@icloud.com"
                className="font-medium text-spine-navy hover:text-spine-gold transition-colors"
              >
                alaabenrejeb.b@icloud.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
