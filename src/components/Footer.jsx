import React, { useState } from 'react';

export default function Footer() {
  // State to toggle between the two salon outlets
  const [activeOutlet, setActiveOutlet] = useState('sector14');

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#top' || targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const elem = document.querySelector(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Outlet Data
  const outlets = {
    sector14: {
      name: 'Creative Salon — Sector 14',
      address: 'SCE-79, 1st Floor, Above Chaayos, Sector 14, Gurugram, Haryana – 122007',
      plusCode: 'Plus Code: F2FX+75 Gurugram, Haryana',
      phones: [
        { label: '+91 98103 07815', href: 'tel:+919810307815' },
        { label: '+91 89237 77778', href: 'tel:+918923777778' },
        { label: '0124-4077121', href: 'tel:01244077121' },
      ],
      whatsapp: 'https://wa.me/919810307815',
      directions: 'https://maps.app.goo.gl/tJ2aTeefFYUtN6hi9',
      mapSrc: 'https://maps.google.com/maps?q=28.4732395,77.0479925+(Creative+Salon+Sector+14)&t=&z=18&ie=UTF8&iwloc=B&output=embed',
    },
    sector17: {
      name: 'Creative Salon — Sector 17A',
      address: 'Shop No. 86, Vikrant Shastri Marg, Sukhrali Village, Sector 17A, Sector 17, Gurugram, Haryana – 122001',
      plusCode: 'Sector 17A Branch',
      phones: [
        { label: '+91 98103 07815', href: 'tel:+919810307815' },
      ],
      whatsapp: 'https://wa.me/919810307815',
      directions: 'https://www.google.com/maps/search/?api=1&query=Shop+No+86+Vikranth+Shastri+Marg+Sukhrali+Village+Sector+17A+Gurugram',
      mapSrc: 'https://maps.google.com/maps?q=Shop+No+86+Vikrant+Shastri+Marg+Sukhrali+Village+Sector+17A+Gurugram&t=&z=17&ie=UTF8&iwloc=B&output=embed',
    },
  };

  const currentOutlet = outlets[activeOutlet];

  return (
    <footer id="contact" className="relative w-full bg-[#1C1D1D] text-[#F7F4EE] font-['Manrope',sans-serif] z-10 border-t border-[#343536]/40">
      
      {/* ========================================================= */}
      {/* UNIFIED COMPACT VISIT US & NAVIGATION SECTION */}
      {/* ========================================================= */}
      <div id="visit" className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-10 sm:pt-12 pb-8">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#9A6548] uppercase">
                VISIT CREATIVE
              </p>
              <span className="text-[9px] font-mono bg-[#9A6548]/15 text-[#9A6548] px-2 py-0.5 rounded border border-[#9A6548]/30">
                2 Outlets (~2.8 km apart)
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F4EE] leading-[1.1] tracking-tight">
              Your Next Experience <span className="italic font-normal text-[#9A6548]">Awaits.</span>
            </h2>
          </div>

          {/* Integrated Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 border-t md:border-t-0 border-[#343536]/40">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#F7F4EE]/70 hover:text-[#9A6548] transition-colors uppercase"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#F7F4EE]/70 hover:text-[#9A6548] transition-colors uppercase"
            >
              ABOUT
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#F7F4EE]/70 hover:text-[#9A6548] transition-colors uppercase"
            >
              SERVICES
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, '#gallery')}
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#F7F4EE]/70 hover:text-[#9A6548] transition-colors uppercase"
            >
              GALLERY
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#F7F4EE]/70 hover:text-[#9A6548] transition-colors uppercase"
            >
              CONTACT
            </a>
          </nav>
        </div>

        {/* Outlet Switcher Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#343536]/40 pb-3">
          <span className="text-[10px] font-semibold tracking-[0.18em] text-[#F7F4EE]/50 uppercase mr-1">
            LOCATION:
          </span>
          <button
            type="button"
            onClick={() => setActiveOutlet('sector14')}
            className={`text-[11px] font-semibold px-3 py-1.5 rounded-sm transition-all duration-300 tracking-wider ${
              activeOutlet === 'sector14'
                ? 'bg-[#9A6548] text-[#F7F4EE] shadow-sm'
                : 'bg-[#343536]/30 text-[#F7F4EE]/70 hover:bg-[#343536]/60 hover:text-[#F7F4EE]'
            }`}
          >
            SECTOR 14
          </button>
          <button
            type="button"
            onClick={() => setActiveOutlet('sector17')}
            className={`text-[11px] font-semibold px-3 py-1.5 rounded-sm transition-all duration-300 tracking-wider ${
              activeOutlet === 'sector17'
                ? 'bg-[#9A6548] text-[#F7F4EE] shadow-sm'
                : 'bg-[#343536]/30 text-[#F7F4EE]/70 hover:bg-[#343536]/60 hover:text-[#F7F4EE]'
            }`}
          >
            SECTOR 17A (SUKHRALI)
          </button>
        </div>

        {/* Two-Column Integrated Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Salon Contact Details & Action CTAs */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Address & Plus Code */}
            <div className="min-h-[90px]">
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#F7F4EE] mb-1">
                {currentOutlet.name}
              </h3>
              <p className="text-xs text-[#F7F4EE]/75 font-light leading-relaxed">
                {currentOutlet.address}
              </p>
              <p className="text-[10px] font-mono text-[#9A6548] mt-0.5 tracking-wider uppercase">
                {currentOutlet.plusCode}
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#343536]/40">
              
              {/* CALL */}
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[#9A6548] uppercase mb-0.5">
                  CALL
                </p>
                <div className="space-y-0.5">
                  {currentOutlet.phones.map((phone) => (
                    <a
                      key={phone.label}
                      href={phone.href}
                      className="block text-[11px] text-[#F7F4EE] hover:text-[#9A6548] transition-colors"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[#9A6548] uppercase mb-0.5">
                  EMAIL
                </p>
                <a
                  href="mailto:creativesalon00@gmail.com"
                  className="block text-[11px] text-[#F7F4EE] hover:text-[#9A6548] transition-colors break-all"
                >
                  creativesalon00@gmail.com
                </a>
              </div>

              {/* INSTAGRAM & WHATSAPP SOCIAL LINKS */}
              <div>
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[#9A6548] uppercase mb-0.5">
                  SOCIAL
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/creativesalon00?igsh=ZHAyYnVoanVvMTFn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#F7F4EE] hover:text-[#9A6548] transition-colors"
                  >
                    Instagram
                  </a>
                  <span className="w-1 h-1 rounded-full bg-[#9A6548]/40" />
                  <a
                    href={currentOutlet.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#F7F4EE] hover:text-[#9A6548] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              
              {/* CHAT ON WHATSAPP */}
              <a
                href={currentOutlet.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9A6548] hover:bg-[#855437] text-[#F7F4EE] font-semibold text-[10px] tracking-[0.18em] px-4 py-2.5 text-center rounded-sm transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 group"
              >
                <span>CHAT ON WHATSAPP</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              {/* GET DIRECTIONS */}
              <a
                href={currentOutlet.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F7F4EE]/30 hover:border-[#F7F4EE] text-[#F7F4EE] hover:bg-white/5 font-semibold text-[10px] tracking-[0.18em] px-4 py-2.5 text-center rounded-sm transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                <span>GET DIRECTIONS</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN: Brand Logo Above Compact Map */}
          <div className="lg:col-span-6 w-full space-y-3">
            
            {/* Brand Logo & Tagline Row (ABOVE MAP) */}
            <div className="flex items-center justify-between pb-1">
              <a
                href="#top"
                onClick={(e) => handleNavClick(e, '#top')}
                className="inline-block group focus:outline-none"
              >
                <img
                  src="/logo1.png"
                  alt="Creative Salon Logo"
                  className="w-36 sm:w-44 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <span className="text-[10px] text-[#F7F4EE]/60 tracking-wider font-light uppercase">
                Gurugram’s Luxury Atelier
              </span>
            </div>

            {/* Compact Google Maps Embed */}
            <a
              href={currentOutlet.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-[200px] sm:h-[230px] rounded-lg overflow-hidden border border-[#343536]/40 shadow-lg group cursor-pointer"
              title={`Open ${currentOutlet.name} on Google Maps`}
            >
              <iframe
                key={activeOutlet}
                title={`${currentOutlet.name} Location Map`}
                src={currentOutlet.mapSrc}
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-85 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border border-[#9A6548]/30 rounded-lg group-hover:border-[#9A6548]/60 transition-colors duration-500" />
            </a>

          </div>

        </div>

        {/* Bottom Line Copyright & Team FLEXIRL Credit */}
        <div className="mt-8 pt-4 border-t border-[#343536]/30 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-[11px] font-light tracking-wide text-[#F7F4EE]/60">
          <p>© Creative Salon. All Rights Reserved.</p>
          <p className="text-[#F7F4EE]/80">
            Designed &amp; Developed by{' '}
            <a
              href="https://www.flexirl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#F7F4EE] hover:text-[#9A6548] transition-colors underline underline-offset-4 decoration-[#9A6548] hover:decoration-[#F7F4EE]"
            >
              Team FLEXIRL
            </a>
          </p>
        </div>

      </div>

    </footer>
  );
}