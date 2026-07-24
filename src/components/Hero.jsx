import React, { useState, useEffect, useCallback } from 'react';

const heroImages = [
  {
    src: '/images/reception.jpg',
    title: 'The Luxury Salon Experience',
    subtitle: 'Bespoke Styling & Haircare for Women & Men'
  },
  {
    src: '/images/wash-station.jpg',
    title: 'The Luxury Salon Experience',
    subtitle: 'Bespoke Styling & Haircare for Women & Men'
  },
  {
    src: '/images/nail.mp4',
    title: 'The Luxury Salon Experience',
    subtitle: 'Bespoke Styling & Haircare for Women & Men'
  },
  {
    src: '/images/imgmen.png',
    title: 'The Luxury Salon Experience',
    subtitle: 'Bespoke Styling & Haircare for Women & Men'
  },
  {
    src: '/images/video.mp4',
    title: 'The Luxury Salon Experience',
    subtitle: 'Bespoke Styling & Haircare for Women & Men'
  },
  {
    src: '/images/video2.mp4',
    title: 'The Luxury Salon Experience',
    subtitle: 'Bespoke Styling & Haircare for Women & Men'
  }
];

// Module-level helper — no need to recreate per render
const isVideo = (url) => url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');

// Only render current, previous, and next slides to avoid 6 simultaneous DOM elements (3 autoplaying videos)
function getVisibleIndices(currentIdx, total) {
  const prev = (currentIdx - 1 + total) % total;
  const next = (currentIdx + 1) % total;
  return new Set([prev, currentIdx, next]);
}

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleBookClick = useCallback((e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-service-modal', { detail: { gender: 'choose' } }));
  }, []);

  const handleExploreClick = useCallback((e) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const visibleIndices = getVisibleIndices(currentIdx, heroImages.length);

  return (
    <section className="relative min-h-screen w-full bg-[#1C1D1D] text-[#F7F4EE] flex items-center overflow-hidden font-['Manrope',sans-serif]">

      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#343536]/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#9A6548]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Main Grid: Compact Content (5 Cols) + Expansive Image Showcase (7 Cols) */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">

        {/* LEFT SIDE: Compact Content (Grids 1 to 5) */}
        <div className="lg:col-span-5 px-6 sm:px-10 lg:pl-16 lg:pr-8 pt-24 pb-12 lg:py-20 flex flex-col justify-center space-y-6 z-20">

          {/* Top Label */}
          <div className="flex items-center gap-3 animate-text-reveal" style={{ animationDelay: '0.1s' }}>
            
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#E8E2D8] uppercase">
              CREATIVE SALON
            </p>
          </div>

          {/* Headline Effect with Color on "Refined" */}
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl sm:text-6xl xl:text-7xl font-light text-[#F7F4EE] leading-tight tracking-tight">
            <div>
              <span className="animate-typewriter-line1 italic pr-1">
                Beauty, <span className="text-[#9A6548] not-italic font-normal">Refined.</span>
              </span>
            </div>
          </h1>

          {/* Subtitle / Services Line */}
          <div className="animate-text-reveal" style={{ animationDelay: '1.5s' }}>
            <p className="text-sm sm:text-base font-light tracking-[0.22em] text-[#E8E2D8]/90 uppercase border-l-2 border-[#E8E2D8]/30 pl-3 py-0.5">
              Hair <span className="text-[#9A6548]">•</span> Skin <span className="text-[#9A6548]">•</span> Nails <span className="text-[#9A6548]">•</span> Makeup
            </p>
          </div>

          {/* Brand Partner Badge */}
          <div className="pt-1 animate-text-reveal" style={{ animationDelay: '1.8s' }}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E8E2D8]/20 bg-[#343536]/40 backdrop-blur-md text-[10px] sm:text-xs tracking-[0.2em] text-[#F7F4EE] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D8] animate-ping" />
              L'Oréal Professionnel Salon
            </span>
          </div>

          {/* Action Buttons with Colored Book Appointment Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 animate-text-reveal" style={{ animationDelay: '2.0s' }}>
            <button
              type="button"
              onClick={handleBookClick}
              className="bg-[#9A6548] text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] px-7 py-3.5 text-center rounded-sm transition-all duration-300 hover:bg-[#855437] hover:shadow-lg hover:shadow-[#9A6548]/20 cursor-pointer"
            >
              BOOK APPOINTMENT
            </button>

            <a
              href="#services"
              onClick={handleExploreClick}
              className="border border-[#F7F4EE]/30 hover:border-[#F7F4EE] text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] px-7 py-3.5 text-center rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
            >
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Large Media Showcase (Grids 6 to 12) */}
        <div className="lg:col-span-7 relative w-full h-[65vh] lg:h-screen overflow-hidden flex items-center">

          {/* TOP-RIGHT CURVED OVERLAY SVG */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 z-30 pointer-events-none opacity-80">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-none">
              <path
                d="M 200 0 C 120 0, 200 120, 200 200 L 200 0 Z"
                fill="#1C1D1D"
              />
              <path
                d="M 200 0 C 100 20, 180 140, 200 180"
                stroke="#E8E2D8"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* MAIN VERTICAL CURVED DIVIDER SVG (Separates Text & Image) */}
          <div className="hidden lg:block absolute -left-1 inset-y-0 w-32 z-20 pointer-events-none text-[#1C1D1D]">
            <svg
              className="w-full h-full fill-current"
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
            >
              <path d="M 0 0 C 85 200, 85 600, 0 800 L 0 0 Z" />
            </svg>
          </div>

          {/* MOBILE CURVE DIVIDER */}
          <div className="block lg:hidden absolute top-0 inset-x-0 h-10 z-20 pointer-events-none text-[#1C1D1D]">
            <svg
              className="w-full h-full fill-current"
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
            >
              <path d="M 0 0 C 150 50, 350 50, 500 0 L 0 0 Z" />
            </svg>
          </div>

          {/* Media Showcase Container — Only render current + adjacent slides */}
          <div className="w-full h-full relative group overflow-hidden">
            {heroImages.map((item, idx) => {
              // Only mount current, previous, and next slides
              if (!visibleIndices.has(idx)) return null;

              const isCurrent = idx === currentIdx;
              return (
                <div
                  key={item.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  {/* Dynamic Check for Video vs Image */}
                  {isVideo(item.src) ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={isCurrent ? 'auto' : 'metadata'}
                      className="w-full h-full object-cover transition-transform duration-10000 ease-linear scale-100 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      {...(idx === 0 ? { fetchpriority: 'high' } : {})}
                      className="w-full h-full object-cover transition-transform duration-10000 ease-linear scale-100 group-hover:scale-105"
                    />
                  )}

                  {/* Dark Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1D] via-transparent to-black/20 opacity-80" />
                </div>
              );
            })}

            {/* SMALL & ELEGANT FLOATING INFO TAG */}
            <div className="absolute bottom-12 right-6 lg:right-10 z-20 px-4 py-2.5 rounded-sm bg-[#1C1D1D]/75 backdrop-blur-md border border-[#F7F4EE]/10 text-right shadow-lg transition-all">
              <p className="font-['Cormorant_Garamond',serif] text-sm text-[#F7F4EE] italic tracking-wide font-normal">
                {heroImages[currentIdx].title}
              </p>
              <p className="text-[9px] tracking-[0.2em] text-[#E8E2D8]/70 uppercase mt-0.5 font-medium">
                {heroImages[currentIdx].subtitle}
              </p>
            </div>

            {/* Thumbnail Nav Dots / Tabs */}
            <div className="absolute bottom-5 right-6 lg:right-10 z-20 flex items-center gap-1.5">
              {heroImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIdx
                    ? 'w-6 bg-[#F7F4EE]'
                    : 'w-1.5 bg-[#F7F4EE]/40 hover:bg-[#F7F4EE]/70'
                    }`}
                  title={img.title}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden lg:flex absolute bottom-6 left-16 z-30 items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-4 h-7 rounded-full border border-[#E8E2D8] flex justify-center p-1">
          <div className="w-1 h-1.5 bg-[#E8E2D8] rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] tracking-[0.25em] text-[#E8E2D8] uppercase">Scroll</span>
      </div>

    </section>
  );
}