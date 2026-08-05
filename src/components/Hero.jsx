import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Replace these video links with your newly generated MP4 URLs
const heroMedia = [
  {
    src: '/images/m1.mp4',

  },
  {
    src: '/images/m2.mp4'
  },
  {
    src: '/images/m3.mp4',

  },
  {
    src: '/images/m4.mp4'

  },
  {
    src: '/images/m9.mp4'

  },
  {
    src: '/images/m10.mp4'

  }
];

const isVideo = (url) => url.endsWith('.mp4') || url.endsWith('.webm');

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroMedia.length);
    }, 5000);
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

  // Only render current and next video to reduce memory/bandwidth
  const visibleIndices = useMemo(() => {
    const next = (currentIdx + 1) % heroMedia.length;
    return new Set([currentIdx, next]);
  }, [currentIdx]);

  return (
    <section aria-label="Creative Salon Gurgaon — Luxury Hair, Beauty, Skin & Nails" className="relative h-screen h-[100svh] w-full bg-[#1C1D1D] text-[#F7F4EE] flex items-center justify-center overflow-hidden font-['Manrope',sans-serif]">

      {/* FULL-WIDTH BACKGROUND MEDIA CAROUSEL */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroMedia.map((item, idx) => {
          const isCurrent = idx === currentIdx;
          // Only mount current and next slide to save memory
          if (!visibleIndices.has(idx)) return null;
          return (
            <div
              key={item.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              style={{ willChange: 'opacity' }}
            >
              {isVideo(item.src) ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={isCurrent ? 'auto' : 'metadata'}
                  className="w-full h-full object-cover scale-105 animate-subtle-zoom"
                />
              ) : (
                <img
                  src={item.src}
                  alt="Creative Salon showcase"
                  className="w-full h-full object-cover scale-105"
                />
              )}

              {/* Dark Overlay Gradient for High Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1D] via-[#1C1D1D]/50 to-black/40" />
            </div>
          );
        })}
      </div>

      {/* OVERLAY CONTENT (Center-Aligned / Responsive) */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center space-y-6 pt-16">

        {/* Main Headline */}
        <h1 className="font-['Cormorant_Garamond',serif] text-5xl sm:text-7xl lg:text-8xl font-light leading-tight tracking-tight text-[#F7F4EE]">
          Beauty, <span className="italic font-normal text-[#9A6548]">Refined.</span>
        </h1>

        {/* Subtitle Services List */}
        <p className="text-xs sm:text-base font-light tracking-[0.25em] text-[#E8E2D8]/90 uppercase max-w-xl">
          Hair <span className="text-[#9A6548]">•</span> Skin <span className="text-[#9A6548]">•</span> Nails <span className="text-[#9A6548]">•</span> Makeup <span className="text-[#9A6548]">•</span> Bridal
        </p>

        {/* Dynamic Media Tag Info — only render if data exists */}
        {(heroMedia[currentIdx].title || heroMedia[currentIdx].subtitle) && (
          <div className="pt-2 text-center">
            {heroMedia[currentIdx].title && (
              <p className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl text-[#F7F4EE] italic">
                {heroMedia[currentIdx].title}
              </p>
            )}
            {heroMedia[currentIdx].subtitle && (
              <p className="text-[10px] tracking-[0.2em] text-[#E8E2D8]/70 uppercase font-medium">
                {heroMedia[currentIdx].subtitle}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleBookClick}
            className="w-full sm:w-auto bg-[#9A6548] text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-300 hover:bg-[#855437] hover:shadow-xl hover:shadow-[#9A6548]/30 cursor-pointer uppercase"
          >
            Book Appointment
          </button>

          <a
            href="#services"
            onClick={handleExploreClick}
            className="w-full sm:w-auto border border-[#F7F4EE]/40 hover:border-[#F7F4EE] text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] px-8 py-4 rounded-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 uppercase text-center"
          >
            Explore Services
          </a>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2 pt-6">
          {heroMedia.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIdx ? 'w-8 bg-[#9A6548]' : 'w-2 bg-[#F7F4EE]/40 hover:bg-[#F7F4EE]/80'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity" aria-hidden="true">
        <div className="w-4 h-7 rounded-full border border-[#E8E2D8] flex justify-center p-1">
          <div className="w-1 h-1.5 bg-[#E8E2D8] rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
}