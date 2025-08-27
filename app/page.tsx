import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Showcase from '@/components/landing/Showcase'
import Stats from '@/components/landing/Stats'
import Pricing from '@/components/landing/Pricing'
import FAQ from '@/components/landing/FAQ'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
  <Stats />
      <Showcase />
  <Pricing />
  <FAQ />
      <CTA />
    </main>
  )
}
