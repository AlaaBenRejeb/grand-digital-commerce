import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Ventures } from "@/components/sections/ventures"
import { Coaching } from "@/components/sections/coaching"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Coaching />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
