import { useEffect } from 'react'

/**
 * Custom hook that observes elements with the 'reveal-up' class
 * and adds 'active' when they enter the viewport.
 * Uses unobserve to disconnect individual elements once revealed — avoids
 * re-observing already-visible elements for better scroll performance.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            // Stop observing once revealed — element won't re-animate
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal-up')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
