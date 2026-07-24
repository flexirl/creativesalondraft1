import React, { useState, useEffect, useRef, useCallback } from 'react';

// ==========================================
// GALLERY MEDIA ASSETS (3-COLUMN PERFECTLY BALANCED GRID)
// ==========================================

const GALLERY_ITEMS = [
  // Row 1 (3 Cols: 2 + 1)
  {
    id: 1,
    type: 'image',
    src: '/images/reception.jpg',
    category: 'AMBITION & ATMOSPHERE',
    title: 'Creative Salon Reception Lounge',
    colSpan: 'lg:col-span-8',
    height: 'h-[320px] sm:h-[400px]',
    hoverShape: 'group-hover:rounded-[36px]',
    decor: 'corner-lines'
  },
  {
    id: 2,
    type: 'video',
    src: '/images/video.mp4',
    category: 'HAIR ARTISTRY',
    title: 'Bespoke Hair Sculpting & Styling',
    colSpan: 'lg:col-span-4',
    height: 'h-[320px] sm:h-[400px]',
    hoverShape: 'group-hover:rounded-t-full group-hover:rounded-b-[24px]', // Morphs into Arch Top
    decor: 'triangle-decor'
  },

  // Row 2 (3 Cols: 1 + 1 + 1)
  {
    id: 3,
    type: 'image',
    src: '/images/services-woman.png',
    category: 'BEAUTY REFINED',
    title: 'High Fashion Hair & Skin Portrait',
    colSpan: 'lg:col-span-4',
    height: 'h-[320px] sm:h-[400px]',
    baseShape: 'rounded-t-[80px]',
    hoverShape: 'group-hover:rounded-full', // Morphs from Arch to Circle/Pill
    decor: 'circle-decor'
  },
  {
    id: 4,
    type: 'video',
    src: '/images/nail.mp4',
    category: 'NAIL ARTISTRY',
    title: 'Couture Gel & Enhancements',
    colSpan: 'lg:col-span-4',
    height: 'h-[320px] sm:h-[400px]',
    hoverShape: 'group-hover:rounded-[70px]', // Morphs into Oval
    decor: 'diamond-decor'
  },
  {
    id: 5,
    type: 'image',
    src: '/images/wash-station.jpg',
    category: 'L\u2019ORÉAL WASH LOUNGE',
    title: 'Sensory Hair Spa & Scalp Therapy',
    colSpan: 'lg:col-span-4',
    height: 'h-[320px] sm:h-[400px]',
    hoverShape: 'group-hover:rounded-tr-[60px] group-hover:rounded-bl-[60px]', // Diagonal Leaf shape
    decor: 'minimal-line'
  },

  // Row 3 (3 Cols: 1 + 2)
  {
    id: 6,
    type: 'image',
    src: '/images/loreal.png',
    category: 'COLOR & CARE BAR',
    title: 'L\u2019Oréal Professionnel Color Display',
    colSpan: 'lg:col-span-4',
    height: 'h-[320px] sm:h-[400px]',
    baseShape: 'rounded-full p-2 border border-[#9A6548]/30',
    hoverShape: 'group-hover:rounded-[24px]', // Circle morphing into rounded square
    decor: 'thin-circle'
  },
  {
    id: 7,
    type: 'video',
    src: '/images/video2.mp4',
    category: 'THE ATELIER',
    title: 'Creative Salon Studio Ambience',
    colSpan: 'lg:col-span-8',
    height: 'h-[320px] sm:h-[400px]',
    hoverShape: 'group-hover:rounded-[36px]',
    decor: 'corner-lines'
  },

  // Row 4 (3 Cols: 1 + 2)
  {
    id: 8,
    type: 'image',
    src: '/images/services-man.png',
    category: 'MEN\u2019S GROOMING',
    title: 'Refined Hair & Beard Styling',
    colSpan: 'lg:col-span-4',
    height: 'h-[320px] sm:h-[400px]',
    hoverShape: 'group-hover:rounded-tl-[60px] group-hover:rounded-br-[60px]',
    decor: 'outlined-rect'
  },
  {
    id: 9,
    type: 'image',
    src: '/images/outer.png',
    category: 'SALON EXTERIOR',
    title: 'Creative Salon Storefront Night View',
    colSpan: 'lg:col-span-8',
    height: 'h-[320px] sm:h-[400px]',
    hoverShape: 'group-hover:rounded-[36px]',
    decor: 'corner-lines'
  }
];

// Viewport-aware video component — only plays when in viewport
function LazyVideo({ src, className }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
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
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        className={className}
      />
      {/* Subtle Video Indicator Badge */}
      <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded bg-[#1C1D1D]/75 backdrop-blur-md text-[#F7F4EE] text-[8px] font-semibold tracking-[0.2em] uppercase flex items-center gap-1 border border-[#F7F4EE]/10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9A6548] animate-ping" />
        <span>REEL</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Lock background scroll and dispatch modal-state to hide Navbar when Lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('modal-state', { detail: { isOpen: true } }));
    } else {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new CustomEvent('modal-state', { detail: { isOpen: false } }));
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new CustomEvent('modal-state', { detail: { isOpen: false } }));
    };
  }, [lightboxIndex]);

  const openLightbox = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(() => setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length), []);
  const prevLightbox = useCallback(() => setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length), []);

  return (
    <section id="gallery" className="relative w-full bg-[#F7F4EE] text-[#1C1D1D] py-12 sm:py-16 px-4 sm:px-8 font-['Manrope',sans-serif] overflow-hidden">
      
      {/* Top Subtle Border & Container */}
      <div className="max-w-[1180px] mx-auto border-t border-[#343536]/15 pt-10">
        
        {/* ------------ HEADER ------------ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            {/* Small Label */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[1px] bg-[#9A6548]" />
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#9A6548] uppercase">
                OUR WORK
              </p>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1D1D] leading-[1.1] tracking-tight">
              Moments of Beauty,<br />
              <span className="italic font-normal text-[#9A6548]">Crafted</span> at Creative.
            </h2>
          </div>

          {/* Social Profile Link */}
          <div className="pt-1">
            <a
              href="https://www.instagram.com/creativesalon00?igsh=ZHAyYnVoanVvMTFn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#1C1D1D] hover:text-[#9A6548] uppercase transition-colors group"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#9A6548]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>VIEW ON INSTAGRAM</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* ------------ PERFECTLY ALIGNED 3-COLUMN MASONRY GRID ------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`relative group overflow-hidden cursor-pointer ${item.colSpan} ${item.height} ${item.baseShape || 'rounded-none'} ${item.hoverShape} bg-[#343536]/10 shadow-sm transition-all duration-700 ease-in-out transform group-hover:shadow-xl`}
            >
              
              {/* Media Content (Image or Video) */}
              {item.type === 'video' ? (
                <LazyVideo
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              )}

              {/* Soft Warm Neutral Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1D]/80 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

              {/* GEOMETRIC HOVER DECORATION OVERLAYS (TRIANGLE / CIRCLE / CORNER LINES) */}
              {item.decor === 'triangle-decor' && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none flex items-center justify-center">
                  <svg className="w-28 h-28 stroke-[#9A6548]/70 fill-none transition-transform duration-700 group-hover:rotate-45" viewBox="0 0 100 100">
                    <polygon points="50,15 90,85 10,85" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>
                </div>
              )}

              {item.decor === 'circle-decor' && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-[#9A6548]/60 border-dashed animate-spin-slow" />
                </div>
              )}

              {item.decor === 'corner-lines' && (
                <>
                  <span className="absolute top-3 left-3 w-5 h-[1px] bg-[#9A6548] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="absolute top-3 left-3 w-[1px] h-5 bg-[#9A6548] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="absolute bottom-3 right-3 w-5 h-[1px] bg-[#9A6548] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="absolute bottom-3 right-3 w-[1px] h-5 bg-[#9A6548] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </>
              )}

              {item.decor === 'outlined-rect' && (
                <div className="absolute inset-3 border border-[#9A6548]/0 group-hover:border-[#9A6548]/70 transition-all duration-500 pointer-events-none" />
              )}

              {/* Text Information Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[9px] font-semibold tracking-[0.22em] text-[#9A6548] uppercase mb-0.5">
                  {item.category}
                </p>
                <h4 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-normal text-[#F7F4EE]">
                  {item.title}
                </h4>
              </div>

            </div>
          ))}
        </div>

        {/* ------------ FOOTER SOCIAL BAR ------------ */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#343536]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-[#1C1D1D]/70 tracking-wider">
            Follow <a href="https://www.instagram.com/creativesalon00?igsh=ZHAyYnVoanVvMTFn" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1C1D1D] underline hover:text-[#9A6548] transition-colors">@creativesalon00</a> for daily hair, skin & nail artistry.
          </p>
          <a
            href="https://www.instagram.com/creativesalon00?igsh=ZHAyYnVoanVvMTFn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#1C1D1D] text-[#F7F4EE] hover:bg-[#9A6548] text-[10px] font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-sm"
          >
            FOLLOW US ON INSTAGRAM →
          </a>
        </div>

      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL EXPERIENCE */}
      {/* ========================================================= */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-[#1C1D1D]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 text-[#F7F4EE] animate-fadeIn">
          
          {/* Lightbox Header */}
          <div className="flex items-center justify-between border-b border-[#F7F4EE]/15 pb-4 z-20">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#9A6548] uppercase">
                {GALLERY_ITEMS[lightboxIndex].category}
              </p>
              <h4 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl text-[#F7F4EE]">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-[#F7F4EE]/60">
                {lightboxIndex + 1} / {GALLERY_ITEMS.length}
              </span>
              
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-[#F7F4EE]/10 hover:bg-[#9A6548] text-[#F7F4EE] flex items-center justify-center transition-all cursor-pointer shadow-lg hover:rotate-90 duration-300"
                title="Close"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Lightbox Main Media Content */}
          <div className="flex-1 flex items-center justify-center relative py-6 my-auto max-h-[75vh]">
            
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevLightbox}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-[#1C1D1D]/80 hover:bg-[#9A6548] text-[#F7F4EE] border border-[#F7F4EE]/20 transition-all cursor-pointer shadow-lg"
              title="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Media Item */}
            <div className="max-w-4xl max-h-full overflow-hidden rounded shadow-2xl flex items-center justify-center">
              {GALLERY_ITEMS[lightboxIndex].type === 'video' ? (
                <video
                  src={GALLERY_ITEMS[lightboxIndex].src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto object-contain rounded"
                />
              ) : (
                <img
                  src={GALLERY_ITEMS[lightboxIndex].src}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="max-h-[70vh] w-auto object-contain rounded"
                />
              )}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextLightbox}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-[#1C1D1D]/80 hover:bg-[#9A6548] text-[#F7F4EE] border border-[#F7F4EE]/20 transition-all cursor-pointer shadow-lg"
              title="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Lightbox Footer Note */}
          <div className="text-center border-t border-[#F7F4EE]/15 pt-4 text-xs tracking-widest text-[#F7F4EE]/60 uppercase">
            Creative Salon Editorial Collection
          </div>

        </div>
      )}

    </section>
  );
}
