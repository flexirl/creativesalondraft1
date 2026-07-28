import React, { useState, useEffect, useRef, useCallback } from 'react';

// ==========================================
// EDITORIAL MEDIA COLLECTION (VIDEOS & PHOTOS)
// Add your full media library here
// ==========================================
const ALL_MEDIA = [
  { id: 1, type: 'video', src: '/images/v1.mp4' },
  { id: 2, type: 'video', src: '/images/v2.mp4' },
  { id: 3, type: 'video', src: '/images/v3.mp4' },
  { id: 4, type: 'video', src: '/images/v4.mp4' },
  { id: 5, type: 'image', src: '/images/loreal.png' },
  { id: 6, type: 'image', src: '/images/imgmen.png' },
  { id: 7, type: 'video', src: '/images/nail.mp4' },
  { id: 8, type: 'image', src: '/images/outer.png' },
  // Example photo items (update paths as needed)
  { id: 9, type: 'image', src: '/images/reception.jpg' },
  { id: 10, type: 'image', src: '/images/wash-station.jpg' },
  { id: 11, type: 'image', src: '/images/stylechair.png' },

];

const INITIAL_SHOW_COUNT = 4;

// Ultra-clean media card with zero text overlay
function ReelCard({ item, onClick }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (item.type !== 'video') return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [item.type]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="relative group aspect-[9/16] w-full bg-[#1C1D1D] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1.5"
    >
      {item.type === 'video' ? (
        <video
          ref={videoRef}
          src={item.src}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <img
          src={item.src}
          alt="Gallery item"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef(null);

  const displayedReels = ALL_MEDIA.slice(0, INITIAL_SHOW_COUNT);

  // Keyboard controls for modal navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % ALL_MEDIA.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + ALL_MEDIA.length) % ALL_MEDIA.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Lock scroll when any modal is active
  useEffect(() => {
    const isModalActive = lightboxIndex !== null || isExploreOpen;
    document.body.style.overflow = isModalActive ? 'hidden' : 'unset';
    window.dispatchEvent(new CustomEvent('modal-state', { detail: { isOpen: isModalActive } }));

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, isExploreOpen]);

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(() => setLightboxIndex((prev) => (prev + 1) % ALL_MEDIA.length), []);
  const prevLightbox = useCallback(() => setLightboxIndex((prev) => (prev - 1 + ALL_MEDIA.length) % ALL_MEDIA.length), []);

  return (
    <section id="gallery" className="relative w-full bg-[#F7F4EE] text-[#1C1D1D] py-12 sm:py-20 px-4 sm:px-8 font-['Manrope',sans-serif] overflow-hidden">
      
      {/* Top Line & Main Container */}
      <div className="max-w-[1180px] mx-auto border-t border-[#343536]/15 pt-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[1px] bg-[#9A6548]" />
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#9A6548] uppercase">
                FEATURED REELS
              </p>
            </div>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1D1D] leading-[1.1] tracking-tight">
              Artistry in Motion,<br />
              <span className="italic font-normal text-[#9A6548]">Streamed</span> Live from Creative.
            </h2>
          </div>

          {/* Instagram Link */}
          <div>
            <a
              href="https://www.instagram.com/creativesalon00?igsh=ZHAyYnVoanVvMTFn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#1C1D1D] hover:text-[#9A6548] uppercase transition-colors group"
            >
              <svg className="w-4 h-4 fill-current text-[#9A6548]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>WATCH ON INSTAGRAM</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* PRIMARY REELS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedReels.map((item, index) => (
            <ReelCard
              key={item.id}
              item={item}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={() => setIsExploreOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C1D1D] hover:bg-[#9A6548] text-[#F7F4EE] text-[11px] font-semibold tracking-[0.25em] uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <span>EXPLORE MORE</span>
            <svg className="w-4 h-4 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* FOOTER SOCIAL BAR */}
        <div className="mt-16 pt-8 border-t border-[#343536]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-[#1C1D1D]/70 tracking-wider">
            Follow <a href="https://www.instagram.com/creativesalon00?igsh=ZHAyYnVoanVvMTFn" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1C1D1D] underline hover:text-[#9A6548] transition-colors">@creativesalon00</a> for daily transformations and studio moments.
          </p>
          <a
            href="https://www.instagram.com/creativesalon00?igsh=ZHAyYnVoanVvMTFn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-[#1C1D1D]/30 hover:border-[#9A6548] text-[#1C1D1D] hover:text-[#9A6548] text-[10px] font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300"
          >
            JOIN OUR COMMUNITY →
          </a>
        </div>

      </div>

      {/* ========================================================= */}
      {/* FULL-COLLECTION POPUP MODAL (EXPLORE MORE) */}
      {/* ========================================================= */}
      {isExploreOpen && (
        <div className="fixed inset-0 z-[9990] bg-[#1C1D1D]/95 backdrop-blur-2xl flex flex-col p-4 sm:p-8 text-[#F7F4EE] animate-fadeIn overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#F7F4EE]/15 pb-4 mb-8 max-w-7xl w-full mx-auto">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#9A6548] uppercase">
                THE ATELIER GALLERY
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl text-[#F7F4EE]">
                All Media & Moments
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setIsExploreOpen(false)}
              className="w-10 h-10 rounded-full bg-[#F7F4EE]/10 hover:bg-[#9A6548] text-[#F7F4EE] flex items-center justify-center transition-all cursor-pointer hover:rotate-90 duration-300"
              title="Close"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* All Photos & Videos Grid */}
          <div className="max-w-7xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pb-12">
            {ALL_MEDIA.map((item, index) => (
              <ReelCard
                key={`explore-${item.id}`}
                item={item}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SINGLE MEDIA LIGHTBOX VIEW */}
      {/* ========================================================= */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-[#1C1D1D]/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 text-[#F7F4EE] animate-fadeIn">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#F7F4EE]/15 pb-4 z-20 max-w-4xl w-full mx-auto">
            <span className="text-xs font-mono tracking-widest text-[#F7F4EE]/60">
              {lightboxIndex + 1} / {ALL_MEDIA.length}
            </span>

            <div className="flex items-center gap-4">
              {ALL_MEDIA[lightboxIndex].type === 'video' && (
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-[#F7F4EE]/10 hover:bg-[#9A6548] text-[#F7F4EE] transition-all cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>
              )}

              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-[#F7F4EE]/10 hover:bg-[#9A6548] text-[#F7F4EE] flex items-center justify-center transition-all cursor-pointer hover:rotate-90 duration-300"
                title="Close"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Media Container */}
          <div className="flex-1 flex items-center justify-center relative py-4 my-auto">
            <button
              type="button"
              onClick={prevLightbox}
              className="absolute left-2 sm:left-12 z-20 p-3 rounded-full bg-[#1C1D1D]/80 hover:bg-[#9A6548] text-[#F7F4EE] border border-[#F7F4EE]/20 transition-all cursor-pointer shadow-lg"
              title="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative aspect-[9/16] h-[75vh] max-h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-black border border-[#F7F4EE]/10">
              {ALL_MEDIA[lightboxIndex].type === 'video' ? (
                <video
                  ref={modalVideoRef}
                  src={ALL_MEDIA[lightboxIndex].src}
                  controls
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={ALL_MEDIA[lightboxIndex].src}
                  alt="Enlarged media"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <button
              type="button"
              onClick={nextLightbox}
              className="absolute right-2 sm:right-12 z-20 p-3 rounded-full bg-[#1C1D1D]/80 hover:bg-[#9A6548] text-[#F7F4EE] border border-[#F7F4EE]/20 transition-all cursor-pointer shadow-lg"
              title="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      )}

    </section>
  );
}