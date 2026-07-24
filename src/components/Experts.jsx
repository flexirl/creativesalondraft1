export default function Experts() {
  return (
    <section
      id="experts"
      className="py-16 md:py-[120px] bg-primary text-white overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[120px] items-center">
          {/* Image */}
          <div className="reveal-up">
            <img
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrRqNGiS5mLpl4_PjEJGIHA9n42ZKN1QGAzJCha_I-uUA-SCqXBLBkVu31t_zXVaAQT79zx1MC3tYPe2dJ83T9_e6Xzm2wJNgh515cILGNY1rJnfHYIbQ1TAv8dz7_NWyM8frGa2apGtuOOCucjuknt1uI4xV-54Lbb0KAUOuoolm54ixQgzLGB1OBU53MgdYqxHFXOEMrQq9DZwmAibh2bC8bCsxCyXub5TWachLTx7kYvT9ALRmaiIFdurCFtrfOmVfyUZaJJmU"
              alt="Creative Salon founding director"
            />
          </div>

          {/* Content */}
          <div className="reveal-up delay-200">
            <p className="font-body text-xs font-semibold tracking-[0.2em] text-luxury-gold mb-6">
              MEET OUR DIRECTOR
            </p>
            <h2 className="font-display text-3xl md:text-[48px] md:leading-[1.2] font-semibold mb-8">
              Elegance in Every Stroke
            </h2>
            <p className="font-body text-lg text-on-primary-container mb-8">
              With over 15 years in international luxury grooming, our founding
              director leads a team of artisans dedicated to the craft of
              beauty. Every expert at Creative Salon undergoes rigorous training
              to ensure your transformation is flawless.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-12">
              <div>
                <h4 className="font-display text-[32px] leading-[1.3] font-medium text-luxury-gold">
                  15+
                </h4>
                <p className="font-body text-[10px] font-semibold tracking-widest opacity-60">
                  YEARS EXP
                </p>
              </div>
              <div>
                <h4 className="font-display text-[32px] leading-[1.3] font-medium text-luxury-gold">
                  5000
                </h4>
                <p className="font-body text-[10px] font-semibold tracking-widest opacity-60">
                  CLIENTS
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/#"
              className="inline-block border border-luxury-gold text-luxury-gold font-body text-sm font-medium tracking-[0.15em] px-12 py-5 hover:bg-luxury-gold hover:text-primary transition-all duration-500"
            >
              MEET THE TEAM
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
