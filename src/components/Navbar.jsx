import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
        rafRef.current = null
      })
    }

    const handleModalState = (e) => {
      setIsModalOpen(e.detail?.isOpen || false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('modal-state', handleModalState)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('modal-state', handleModalState)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  if (isModalOpen) return null

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#footer' },
  ]

  const handleNavClick = (e, href) => {
    setMobileOpen(false)

    if (href === '#') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      e.preventDefault()
      const elem = document.querySelector(href)
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`
        fixed top-0 left-0 right-0 z-50
        h-[68px] md:h-[72px]
        transition-all duration-500
        ${
          scrolled
            ? 'bg-[#1C1D1D]/95 backdrop-blur-lg border-b border-[#C9A45F]/25 shadow-lg shadow-black/20'
            : 'bg-[#1C1D1D]/90 backdrop-blur-md border-b border-[#C9A45F]/15'
        }
      `}
    >
      <div
        className="
          max-w-[1360px]
          mx-auto
          px-5 sm:px-6 md:px-12
          h-full
          flex
          items-center
          justify-between
        "
      >
        {/* Creative Salon Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="
            relative
            h-full
            w-[145px]
            sm:w-[170px]
            md:w-[205px]
            lg:w-[215px]
            flex-shrink-0
            group
            focus:outline-none
          "
          aria-label="Creative Salon Home"
        >
          <img
            src="/logo1.png"
            alt="Creative Salon Logo"
            width="240"
            height="72"
            fetchpriority="high"
            decoding="sync"
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2

              w-[165px]
              sm:w-[195px]
              md:w-[225px]
              lg:w-[240px]

              max-w-none
              h-auto
              object-contain

              transition-transform
              duration-300
              ease-out

              group-hover:scale-[1.02]
            "
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="
                relative
                py-2

                font-manrope
                text-[11px]
                font-medium
                tracking-[0.20em]

                text-[#F7F4EE]/85
                hover:text-[#C9A45F]

                transition-colors
                duration-300

                group
                focus:outline-none
              "
            >
              {link.label}
              <span
                className="
                  absolute
                  bottom-0
                  left-0

                  w-0
                  h-[1px]

                  bg-[#C9A45F]

                  transition-all
                  duration-300
                  ease-out

                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* Book Appointment CTA */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              window.dispatchEvent(
                new CustomEvent('open-service-modal', {
                  detail: { gender: 'choose' },
                })
              )
            }}
            className="
              font-manrope
              text-[10px]
              font-semibold
              tracking-[0.20em]
              uppercase
              px-6
              py-3
              border
              border-[#C9A45F]
              text-[#F7F4EE]
              bg-[#C9A45F]/10
              hover:bg-[#C9A45F]
              hover:text-[#1C1D1D]
              transition-all
              duration-300
              ease-out
              focus:outline-none
              cursor-pointer
            "
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="
            lg:hidden
            flex
            items-center
            justify-center

            w-10
            h-10

            text-[#F7F4EE]
            hover:text-[#C9A45F]

            transition-colors
            duration-300

            focus:outline-none
          "
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ============================= */}
      {/* Mobile Navigation Menu Overlay */}
      {/* ============================= */}

      {mobileOpen && (
        <div
          className="
            lg:hidden
            fixed
            inset-x-0
            top-[68px] md:top-[72px]
            h-[calc(100vh-68px)] md:h-[calc(100vh-72px)]

            bg-gradient-to-b from-[#1C1D1D] via-[#161717] to-[#121313]
            backdrop-blur-2xl

            border-t
            border-[#C9A45F]/20

            overflow-y-auto
            animate-fadeIn
          "
        >
          {/* Subtle Ambient Gold Glow Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#C9A45F]/10 via-transparent to-transparent pointer-events-none" />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-center

              min-h-full
              py-12
              px-6
              gap-7
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  font-manrope
                  text-sm
                  font-medium
                  tracking-[0.3em]

                  text-[#F7F4EE]/90
                  hover:text-[#C9A45F]

                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                {link.label}
              </a>
            ))}

            {/* Subtle Gold Divider */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A45F]/40 to-transparent my-2" />

            {/* Mobile Appointment Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setMobileOpen(false)
                window.dispatchEvent(
                  new CustomEvent('open-service-modal', {
                    detail: { gender: 'choose' },
                  })
                )
              }}
              className="
                font-manrope
                text-xs
                font-semibold
                tracking-[0.25em]
                uppercase
                px-8
                py-3.5
                border
                border-[#C9A45F]
                text-[#1C1D1D]
                bg-[#C9A45F]
                hover:bg-[#D4B06A]
                shadow-lg
                shadow-[#C9A45F]/10
                transition-all
                duration-300
                cursor-pointer
                active:scale-95
              "
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}