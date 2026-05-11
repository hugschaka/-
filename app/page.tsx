import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Plans from '@/components/Plans'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Plans />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
