import { useScrollReveal } from './hooks/useScrollReveal'
import ShaderBackground from './components/ShaderBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
// import Experts from './components/Experts'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  useScrollReveal()

  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Gallery />
        {/* <Experts /> */}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
