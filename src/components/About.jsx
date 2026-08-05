import React, { useState, useEffect, useRef } from "react";

// Reusable Counter Component
function AnimatedCounter({ target, suffix = "+", duration = 1500, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth slowing down at the end (easeOutQuad)
      const easedProgress = 1 - (1 - progress) * (1 - progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animations when the about section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first trigger — isVisible never resets
          observer.disconnect();
        }
      },
      { threshold: 0.25 } // Triggers when 25% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Creative Salon — Best Luxury Salon in Gurgaon"
      className="bg-[#F7F4EE] text-[#1C1D1D] py-16 md:py-24 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Narrative Copy with Staggered Fade-Up Animations */}
          <div className="lg:col-span-8 flex flex-col justify-center">

            {/* Small Label */}
            <p
              className={`font-['Manrope'] text-xs md:text-sm font-semibold tracking-[0.2em] text-[#9A6548] mb-5 uppercase transition-all duration-700 ease-out ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                }`}
            >
              OUR PHILOSOPHY
            </p>

            {/* Large Heading */}
            <h2
              className={`text-4xl md:text-6xl lg:text-7xl leading-[1.12] mb-6 transition-all duration-700 ease-out delay-150 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              <span className="font-['Cormorant_Garamond'] font-semibold text-[#1C1D1D] block">
                A Decade of <span className="text-[#9A6548]">Expertise.</span>
              </span>
              <span className="font-['Cormorant_Garamond'] italic font-normal text-[#1C1D1D] block">
                Five Years of <span className="text-[#9A6548]">Creative.</span>
              </span>
            </h2>

            {/* Body Copy */}
            <p
              className={`font-['Manrope'] text-lg md:text-xl leading-relaxed text-[#1C1D1D]/85 max-w-3xl mb-8 transition-all duration-700 ease-out delay-300 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              Creative Salon is Gurgaon's premier luxury unisex salon, built on a decade of beauty expertise and more than five
              years of creating refined salon experiences in Sector 14. From precision hair cuts, keratin treatments and advanced
              skin rituals to nail art, bridal makeup and professional grooming, every experience is thoughtfully
              crafted for{" "}
              <strong className="font-bold text-[#9A6548]">women and men</strong>.
            </p>

            {/* Quote */}
            <blockquote
              className={`font-['Cormorant_Garamond'] italic text-2xl md:text-3xl text-[#1C1D1D] font-normal tracking-wide pl-6 border-l-2 border-[#9A6548] transition-all duration-700 ease-out delay-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
            >
              &ldquo;Luxury isn't excess. It's the attention given to every detail.&rdquo;
            </blockquote>
          </div>

          {/* Right Column: Animated Editorial Stats */}
          <div
            className={`lg:col-span-4 flex flex-col justify-center space-y-8 lg:pl-10 border-t lg:border-t-0 lg:border-l border-[#9A6548]/20 pt-8 lg:pt-0 transition-all duration-700 ease-out delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            {/* Stat 1: 10+ */}
            <div>
              <span className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-[#9A6548] block leading-none mb-2">
                <AnimatedCounter target={15} suffix="+" isVisible={isVisible} />
              </span>
              <span className="font-['Manrope'] text-[11px] font-semibold tracking-[0.18em] text-[#1C1D1D]/70 uppercase block">
                YEARS OF EXPERTISE
              </span>
            </div>

            {/* Stat 2: 5+ */}
            <div>
              <span className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-[#9A6548] block leading-none mb-2">
                <AnimatedCounter target={10} suffix="+" isVisible={isVisible} />
              </span>
              <span className="font-['Manrope'] text-[11px] font-semibold tracking-[0.18em] text-[#1C1D1D]/70 uppercase block">
                YEARS OF CREATIVE SALON
              </span>
            </div>

            {/* Stat 3: ALL */}
            <div>
              <span className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light text-[#9A6548] block leading-none mb-2">
                ALL
              </span>
              <span className="font-['Manrope'] text-[11px] font-semibold tracking-[0.18em] text-[#1C1D1D]/70 uppercase block">
                BEAUTY • HAIR • SKIN • NAILS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}