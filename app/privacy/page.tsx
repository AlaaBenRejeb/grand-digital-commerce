import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Grand Digital Commerce",
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="mb-2 text-3xl font-black text-spine-navy">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: May 2026</p>

        <div className="space-y-8 text-base leading-7 text-slate-600">
          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">1. Who We Are</h2>
            <p>
              Grand Digital Commerce LLC is a limited liability company registered in Dubai,
              United Arab Emirates. We own and operate Spine Empire, a licensing and coaching
              platform for chiropractic clinic owners in the United States, and we provide
              online business coaching. Our contact email is{" "}
              <a
                href="mailto:alaabenrejeb.b@icloud.com"
                className="font-medium text-spine-navy hover:text-spine-gold transition-colors"
              >
                alaabenrejeb.b@icloud.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">2. Information We Collect</h2>
            <p>
              When you contact us via email or submit an inquiry, we collect your name and
              email address. We do not operate forms that collect payment information on this
              website. We do not use cookies beyond what is strictly necessary to serve this
              static website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">3. How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your inquiry and, where
              you have requested it, to provide coaching or marketing services. We do not
              sell, rent, or share your personal information with third parties for marketing
              purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">4. Email Communications</h2>
            <p>
              If you engage with Spine Empire's services, you may receive transactional and
              marketing emails. All marketing emails include an unsubscribe link in compliance
              with the CAN-SPAM Act (United States). You may unsubscribe at any time. We
              comply with applicable United States email regulations for our US-based clients.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">5. SMS Communications</h2>
            <p>
              If you book an audit call through Spine Empire, we may send you SMS messages
              solely to confirm your booking and send timely reminders before your scheduled
              call. SMS is not used for marketing or promotional purposes. Standard message and
              data rates may apply depending on your carrier. You may reply STOP at any time to
              opt out of SMS reminders.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">6. Data Storage and Security</h2>
            <p>
              Any personal data collected through our services is stored on secure,
              industry-standard infrastructure. We take reasonable technical and organisational
              measures to protect your data from unauthorised access, loss, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">7. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal data we hold
              about you at any time by contacting us at{" "}
              <a
                href="mailto:alaabenrejeb.b@icloud.com"
                className="font-medium text-spine-navy hover:text-spine-gold transition-colors"
              >
                alaabenrejeb.b@icloud.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">8. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of the United Arab Emirates. For
              services provided to clients in the United States, we additionally comply with
              applicable US federal regulations including the CAN-SPAM Act and relevant FTC
              guidelines.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The "last updated" date at the top
              of this page reflects the most recent revision. Continued use of our services
              after a change constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-black text-spine-navy">10. Contact</h2>
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
