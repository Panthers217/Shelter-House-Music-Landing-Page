import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Services from './components/Services'
import Process from './components/Process'
import FeaturedWork from './components/FeaturedWork'
import DonationModel from './components/DonationModel'
import Testimonials from './components/Testimonials'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Process />
        <FeaturedWork />
        {/* <DonationModel /> */}
        {/* <Testimonials />
        <Resources /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
