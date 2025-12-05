import {
  Navigation,
  Hero,
  About,
  Timeline,
  Projects,
  Ventures,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Ventures />
      <Contact />
      <Footer />
    </main>
  )
}
