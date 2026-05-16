import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

export const metadata: Metadata = {
  title: "Grand Digital Commerce — Building Digital Businesses in Dubai",
  description:
    "Dubai-based holding company behind Spine Empire. We build and operate digital businesses, and coach ambitious people from zero to their first online business.",
  metadataBase: new URL("https://www.granddigitalcommerce.com"),
  openGraph: {
    title: "Grand Digital Commerce",
    description: "We build digital businesses. We teach people how.",
    url: "https://www.granddigitalcommerce.com",
    siteName: "Grand Digital Commerce",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-white text-spine-navy antialiased">{children}</body>
    </html>
  )
}
