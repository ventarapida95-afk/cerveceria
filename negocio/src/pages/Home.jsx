import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import About from '../components/About.jsx'
import Products from '../components/Products.jsx'
import ExperienceBanner from '../components/ExperienceBanner.jsx'
import Reviews from '../components/Reviews.jsx'
import MapSection from '../components/MapSection.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Products />
      <ExperienceBanner />
      <Reviews />
      <MapSection />
      <ContactSection />
    </>
  )
}
