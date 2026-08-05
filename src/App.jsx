import { useEffect } from 'react'
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

  // Dismiss the splash loader once fonts + minimum display time are ready
  useEffect(() => {
    const MIN_DISPLAY_MS = 1200
    const start = Date.now()

    const dismiss = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)

      setTimeout(() => {
        const loader = document.getElementById('app-loader')
        if (loader) {
          loader.classList.add('loader-hidden')
          // Remove from DOM after fade-out transition completes
          setTimeout(() => loader.remove(), 600)
        }
      }, remaining)
    }

    // Wait for fonts to be ready
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(dismiss)
    } else {
      // Fallback for browsers without font loading API
      dismiss()
    }
  }, [])

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
