import React, { useState, useEffect, useMemo, useRef } from 'react';

// ==========================================
// BRIDAL EXPERIENCE SERVICE CHIPS
// ==========================================

const BRIDAL_SERVICES = [
  "PRE-BRIDAL SKINCARE",
  "BRIDAL MAKEUP",
  "AIRBRUSH MAKEUP",
  "ENGAGEMENT MAKEUP",
  "RECEPTION MAKEUP",
  "COCKTAIL LOOK",
  "HALDI LOOK",
  "MEHENDI LOOK",
  "SANGEET LOOK",
  "BRIDAL CONSULTATION"
];

function BridalExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleBridalWhatsApp = () => {
    const messageLines = [
      `Hello Creative Salon,`,
      ``,
      `I would like to book a Bridal Consultation.`,
      ``,
      `Please share available dates and bridal package details.`,
      ``,
      `Thank you.`
    ];

    const encodedMsg = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/919810307815?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      ref={sectionRef}
      id="bridal"
      className="relative w-full bg-[#F7F4EE] text-[#1C1D1D] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-[#343536]/20"
    >
      {/* Subtle Warm Luxury Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9A6548]/5 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9A6548]/5 rounded-full blur-[100px] pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-[1340px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Cinematic Bridal Image */}
          <div
            className={`relative group overflow-hidden rounded-sm shadow-2xl min-h-[420px] sm:min-h-[520px] lg:min-h-[620px] w-full border border-[#1C1D1D]/10 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <img
              src="/images/BRIDAL1.jpg"
              alt="Luxury Indian Bridal Makeup & Hair Styling"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.95]"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1400";
              }}
            />

            {/* Subtle Editorial Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1D]/60 via-[#1C1D1D]/15 to-transparent opacity-80 group-hover:opacity-65 transition-opacity duration-700 pointer-events-none" />


          </div>

          {/* RIGHT: Content & Service Chips */}
          <div
            className={`flex flex-col justify-center space-y-6 sm:space-y-8 transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            {/* Small Label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#9A6548]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#9A6548] uppercase">
                BRIDAL
              </span>
            </div>

            {/* Large Heading */}
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl lg:text-6xl font-light text-[#1C1D1D] leading-[1.12] tracking-tight">
              Bridal Beauty, <br />
              <span className="text-[#9A6548] italic font-normal">Perfectly Crafted.</span>
            </h2>

            {/* Short Description */}
            <p className="font-['Manrope',sans-serif] text-sm sm:text-base font-light leading-relaxed text-[#1C1D1D]/80 max-w-xl">
              From pre-bridal skincare rituals to your wedding day transformation, our bridal experts create timeless looks designed to make every bride feel confident, radiant and unforgettable.
            </p>

            {/* Accent Separator */}
            <div className="w-16 h-[1px] bg-[#9A6548]/40" />

            {/* Service Chips Grid */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {BRIDAL_SERVICES.map((service) => (
                <span
                  key={service}
                  className="inline-block text-[10px] tracking-[0.12em] uppercase font-medium text-[#1C1D1D]/75 bg-[#1C1D1D]/[0.03] border border-[#1C1D1D]/10 px-2.5 py-1 rounded-sm hover:border-[#9A6548] hover:text-[#9A6548] hover:bg-[#9A6548]/5 transition-all duration-200 cursor-default select-none"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* Premium CTA Button */}
            <div className="pt-3 sm:pt-4">
              <button
                type="button"
                onClick={handleBridalWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-[#9A6548] bg-[#9A6548] hover:bg-[#855437] hover:border-[#855437] text-[#F7F4EE] font-semibold text-xs sm:text-sm tracking-[0.2em] px-8 py-4 sm:py-4.5 rounded-sm shadow-md transition-all duration-300 group/btn cursor-pointer"
              >
                <span>BOOK BRIDAL CONSULTATION</span>
                <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// ==========================================
// CREATIVE PRIVILEGE MEMBERSHIP SECTION
// ==========================================

function MembershipSection({ onSelectMembership }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="membership"
      className="relative w-full bg-[#F7F4EE] text-[#1C1D1D] py-14 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-[#1C1D1D]/10 font-['Manrope',sans-serif]"
    >
      {/* Subtle Warm Luxury Ambient Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#9A6548]/5 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#9A6548]/5 rounded-full blur-[100px] pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div
          className={`text-center max-w-2xl mx-auto space-y-3 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#9A6548]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#9A6548] uppercase">
              EXCLUSIVE MEMBERSHIP
            </span>
            <span className="w-8 h-[1px] bg-[#9A6548]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1D1D] leading-[1.15] tracking-tight">
            Creative Privilege <span className="text-[#9A6548] italic font-normal">Membership</span>
          </h2>

          <p className="font-['Manrope',sans-serif] text-xs sm:text-sm font-light leading-relaxed text-[#1C1D1D]/75 max-w-lg mx-auto">
            Become a Creative Privilege Member and enjoy premium wallet value, priority appointments, exclusive rewards and luxury beauty experiences.
          </p>
        </div>

        {/* CARDS GRID (Compact & Natural Height/Width) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-12 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* CARD 1: GOLD MEMBERSHIP */}
          <div className="relative group bg-[#F7F4EE] border border-[#1C1D1D]/15 hover:border-[#9A6548] rounded-sm p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
            <div>
              {/* Header */}
              <div className="pb-4 border-b border-[#1C1D1D]/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-normal text-[#1C1D1D] tracking-wide">
                    GOLD MEMBERSHIP
                  </h3>
                </div>

                {/* Investment Tagline */}
                <div className="mt-2 flex items-center justify-between text-xs text-[#1C1D1D]/65">
                  <span className="uppercase tracking-wider font-light">Investment</span>
                  <span className="font-medium text-[#1C1D1D]">₹6,000</span>
                </div>

                {/* Primary Focus: Large Wallet Value & Bold Bonus */}
                <div className="mt-3 p-3 bg-[#9A6548]/10 border border-[#9A6548]/25 rounded-sm">
                  <div className="text-[10px] font-semibold tracking-[0.2em] text-[#9A6548] uppercase mb-1">
                    YOU RECEIVE IN WALLET
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1C1D1D] leading-none">
                      ₹7,500
                    </div>
                    <div className="bg-[#9A6548] text-[#F7F4EE] font-bold text-xs sm:text-sm px-2.5 py-1 rounded-sm shadow-sm tracking-wide shrink-0">
                      +₹1,500 BONUS
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <ul className="py-4 space-y-2 text-xs font-light text-[#1C1D1D]/85">
                {[
                  "Priority Appointments",
                  "Exclusive Member Offers",
                  "Bonus Wallet Value",
                  "Birthday Rewards",
                  "Premium Consultation"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="text-[#9A6548] font-bold text-xs">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectMembership('Gold Membership')}
                className="w-full border border-[#9A6548] bg-transparent hover:bg-[#9A6548] text-[#9A6548] hover:text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] uppercase py-3 rounded-sm transition-all duration-300 cursor-pointer shadow-sm text-center"
              >
                BECOME A GOLD MEMBER
              </button>
            </div>
          </div>

          {/* CARD 2: PLATINUM MEMBERSHIP */}
          <div className="relative group bg-[#F7F4EE] border border-[#9A6548]/50 hover:border-[#9A6548] rounded-sm p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
            {/* Badge */}
            <div className="absolute -top-3 right-5 bg-[#9A6548] text-[#F7F4EE] font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-sm shadow-sm z-10">
              MOST POPULAR
            </div>

            <div>
              {/* Header */}
              <div className="pb-4 border-b border-[#1C1D1D]/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-normal text-[#1C1D1D] tracking-wide">
                    PLATINUM MEMBERSHIP
                  </h3>
                </div>

                {/* Investment Tagline */}
                <div className="mt-2 flex items-center justify-between text-xs text-[#1C1D1D]/65">
                  <span className="uppercase tracking-wider font-light">Investment</span>
                  <span className="font-medium text-[#1C1D1D]">₹11,999</span>
                </div>

                {/* Primary Focus: Large Wallet Value & Bold Bonus */}
                <div className="mt-3 p-3 bg-[#9A6548]/15 border border-[#9A6548]/40 rounded-sm">
                  <div className="text-[10px] font-semibold tracking-[0.2em] text-[#9A6548] uppercase mb-1">
                    YOU RECEIVE IN WALLET
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1C1D1D] leading-none">
                      ₹15,499
                    </div>
                    <div className="bg-[#9A6548] text-[#F7F4EE] font-bold text-xs sm:text-sm px-2.5 py-1 rounded-sm shadow-sm tracking-wide shrink-0">
                      +₹3,500 BONUS
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <ul className="py-4 space-y-2 text-xs font-light text-[#1C1D1D]/85">
                {[
                  "Everything in Gold",
                  "VIP Priority Booking",
                  "Highest Wallet Bonus",
                  "Exclusive Beauty Events",
                  "Complimentary Consultation",
                  "Bridal Benefits"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="text-[#9A6548] font-bold text-xs">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectMembership('Platinum Membership')}
                className="w-full border border-[#9A6548] bg-[#9A6548] hover:bg-[#855437] hover:border-[#855437] text-[#F7F4EE] font-bold text-xs tracking-[0.2em] uppercase py-3 rounded-sm transition-all duration-300 cursor-pointer shadow-sm text-center"
              >
                BECOME A PLATINUM MEMBER
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// ==========================================
// SERVICE CATALOG DATA (NO PRICING)
// ==========================================

const WOMEN_CATALOG = [
  {
    category: "HAIR & STYLING",
    services: [
      "Hair Cut", "Advance Hair Cut", "Creative Hair Cut", "Regular Wash",
      "Keratin Wash", "Straight Blow Dry", "In-Curls Blow Dry", "Out-Curls Blow Dry",
      "Hair Iron", "Beach Waves", "Hair Do"
    ]
  },
  {
    category: "HAIR COLOUR & TREATMENTS",
    services: [
      "Touch Up", "Ammonia-Free Touch Up", "Highlights", "Global Hair Colour",
      "Smoothening", "Rebonding", "Rebokeratin", "Kerasmooth",
      "Keratin", "Moisture Therapy", "Perming", "Hair Botox"
    ]
  },
  {
    category: "HAIR SPA & SCALP",
    services: [
      "Hair Spa", "Hair Care Spa", "Mythic Oil Hair Spa", "Power Hair Spa",
      "GK Hair Spa", "Schwarzkopf Hair Spa", "Wella Hair Spa", "Wella SP Spa",
      "Olaplex Spa", "Metal DX Spa", "Fiber Plex Spa", "Hair Fall Treatment",
      "Dandruff Treatment", "Coconut Oil Head Massage", "Olive Oil Head Massage", "Argan Oil Head Massage"
    ]
  },
  {
    category: "SKIN & FACIALS",
    groups: [
      {
        name: "Clean-Ups",
        items: [
          "Lotus Clean-Up", "O3+ Clean-Up", "Casmara Clean-Up", "Kanpeki Clean-Up",
          "Wine Clean-Up", "Furutsu Kanpeki / Express Facial"
        ]
      },
      {
        name: "Facials",
        items: [
          "Lotus Facial", "O3+ Facial", "Casmara Facial", "Lotus Bridal Glow",
          "Wine Facial", "O3+ Whitening Facial"
        ]
      },
      {
        name: "Kanpeki Facials",
        items: [
          "Papaya Marshmallow", "Jamaican", "Blanch", "Sensi-Ace", "Upendice", "Save The Date Facial"
        ]
      },
      {
        name: "Hydra Treatments",
        items: [
          "Hydra Treatment Cleanup", "Hydra Treatment Facial"
        ]
      }
    ]
  },
  {
    category: "BLEACH & D-TAN",
    services: [
      "Face D-Tan", "Face Bleach", "Arms Bleach", "Feet Bleach",
      "Back Bleach", "Legs Bleach", "Front Bleach", "Full Body Bleach"
    ]
  },
  {
    category: "BODY & SPA",
    services: [
      "Arms Polish", "Back Polish", "Legs Polish", "Front Polish",
      "Body Polish", "Lotus Hydrating Body Polish", "Kanpeki Body Polish", "Body Massage"
    ]
  },
  {
    category: "HANDS & FEET",
    groups: [
      {
        name: "Manicure / Pedicure",
        items: [
          "Classic", "3 Step", "Lotus Deluxe", "Raga", "Pedi Pine",
          "Lotus Crystal", "Bubble Gum", "Alga Mini", "Alga Luxury"
        ]
      }
    ]
  },
  {
    category: "NAILS",
    services: [
      "Gel Nail Paint", "Acrylic Nail Extensions", "Acrylic Nail Extensions + Enhancements",
      "Gel Nail Extensions", "Gel Nail Extensions + Gel Nail Paint", "Refill", "Nail Art"
    ]
  }
];

const MEN_CATALOG = [
  {
    category: "HAIR & GROOMING",
    services: [
      "Hair Cut", "Hair Styling", "Shave", "Beard Styling", "Head Wash", "Head Wash & Styling"
    ]
  },
  {
    category: "HAIR COLOUR & TREATMENTS",
    services: [
      "Hair Colour", "Ammonia-Free Colour", "Beard Colour", "Fashion Global Colour",
      "Highlights", "Smoothening", "Rebonding", "Keratin", "Moisture Therapy", "Perming"
    ]
  },
  {
    category: "HAIR SPA & SCALP",
    services: [
      "Hair Spa", "Hair Care Spa", "Mythic Oil Hair Spa", "Power Hair Spa",
      "GK Hair Spa", "Schwarzkopf Hair Spa", "Wella Hair Spa", "Wella SP Spa",
      "Hair Fall Treatment", "Dandruff Treatment", "Coconut Oil Head Massage",
      "Olive Oil Head Massage", "Argan Oil Head Massage"
    ]
  },
  {
    category: "SKIN & FACIALS",
    groups: [
      {
        name: "Clean-Ups",
        items: [
          "Face Massage", "Lotus Clean-Up", "O3+ Clean-Up", "Casmara Clean-Up",
          "Kanpeki Clean-Up", "Kanpeki Express Facial"
        ]
      },
      {
        name: "Facials",
        items: [
          "Lotus Facial", "O3+ Facial", "Casmara Facial", "Wine Facial", "O3+ Whitening Facial"
        ]
      }
    ]
  },
  {
    category: "BLEACH & D-TAN",
    services: [
      "Face D-Tan", "Face Bleach", "Arms Bleach", "Feet Bleach",
      "Back Bleach", "Legs Bleach", "Front Bleach", "Full Body Bleach"
    ]
  },
  {
    category: "BODY & SPA",
    services: [
      "Body Massage", "Body Polishing", "Kanpeki Body Polish"
    ]
  },
  {
    category: "WAXING",
    services: [
      "Arms Wax", "Legs Wax", "Front Wax", "Back Wax", "Full Body Wax"
    ]
  },
  {
    category: "HANDS & FEET",
    groups: [
      {
        name: "Manicure / Pedicure",
        items: [
          "Classic", "3 Step", "Lotus Deluxe", "Raga", "Pedi Pine",
          "Lotus Crystal", "Bubble Gum", "Alga Mini", "Alga Luxury"
        ]
      }
    ]
  },
  {
    category: "NAILS",
    services: [
      "Gel Nail Paint", "Acrylic Nail Extensions", "Acrylic Nail Extensions + Enhancements",
      "Gel Nail Extensions", "Gel Nail Extensions + Gel Nail Paint", "Refill", "Nail Art"
    ]
  }
];

export default function Services() {
  // Modal State
  const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGender, setActiveGender] = useState('women'); // 'women' | 'men'
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [step, setStep] = useState('selection'); // 'selection' | 'booking'

  // Booking Form State
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning');

  // Membership Modal State
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState('Gold Membership');
  const [membershipName, setMembershipName] = useState('');
  const [membershipPhone, setMembershipPhone] = useState('');
  const [membershipTime, setMembershipTime] = useState('Morning');

  const handleOpenMembershipModal = (type) => {
    setSelectedMembership(type);
    setMembershipName('');
    setMembershipPhone('');
    setMembershipTime('Morning');
    setIsMembershipModalOpen(true);
  };

  const handleMembershipWhatsApp = (e) => {
    e.preventDefault();
    if (!membershipName.trim() || !membershipPhone.trim()) return;

    const messageLines = [
      `Hello Creative Salon,`,
      ``,
      `I would like to become a Creative Privilege Member.`,
      ``,
      `Membership:`,
      selectedMembership,
      ``,
      `Name:`,
      membershipName.trim(),
      ``,
      `Phone:`,
      membershipPhone.trim(),
      ``,
      `Preferred Contact Time:`,
      membershipTime,
      ``,
      `Please contact me regarding the membership registration and payment process.`,
      ``,
      `Thank you.`
    ];

    const encodedMsg = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/919810307815?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  // Listen for global open-service-modal custom events
  useEffect(() => {
    const handleOpenServiceModal = (e) => {
      const targetGender = e.detail?.gender || 'choose';
      if (targetGender === 'choose') {
        setIsChoiceModalOpen(true);
        setIsModalOpen(false);
      } else if (targetGender === 'women' || targetGender === 'men') {
        setIsChoiceModalOpen(false);
        handleOpenModal(targetGender);
      }
    };

    window.addEventListener('open-service-modal', handleOpenServiceModal);
    return () => {
      window.removeEventListener('open-service-modal', handleOpenServiceModal);
    };
  }, []);

  // Prevent background scrolling and dispatch modal-state to hide Navbar when active
  useEffect(() => {
    const isAnyModalActive = isChoiceModalOpen || isModalOpen || isMembershipModalOpen;
    if (isAnyModalActive) {
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
  }, [isChoiceModalOpen, isModalOpen, isMembershipModalOpen]);

  // Open modal handler
  const handleOpenModal = (gender) => {
    setActiveGender(gender);
    const catalog = gender === 'women' ? WOMEN_CATALOG : MEN_CATALOG;
    setActiveCategory(catalog[0].category);
    setSelectedServices([]);
    setStep('selection');
    setName('');
    setDate('');
    setTime('Morning');
    setIsModalOpen(true);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Toggle service selection
  const toggleService = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  // Current active catalog — memoized to avoid recalculation
  const currentCatalog = useMemo(() => activeGender === 'women' ? WOMEN_CATALOG : MEN_CATALOG, [activeGender]);
  const activeCategoryData = useMemo(() => currentCatalog.find((c) => c.category === activeCategory) || currentCatalog[0], [currentCatalog, activeCategory]);

  // Format selection preview for sticky bar
  const renderSelectionSummary = () => {
    if (selectedServices.length === 0) return '';
    if (selectedServices.length === 1) return selectedServices[0];
    if (selectedServices.length === 2) return `${selectedServices[0]} · ${selectedServices[1]}`;
    return `${selectedServices[0]} · ${selectedServices[1]} · +${selectedServices.length - 2} more`;
  };

  // Submit booking to WhatsApp
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!name.trim() || !date) return;

    const isWomen = activeGender === 'women';
    const messageLines = [
      `Hello Creative Salon,`,
      ``,
      `I'd like to request an appointment.`,
      ``,
      `For: ${isWomen ? "Women's Services" : "Men's Services"}`,
      ``,
      `Selected Services:`,
      ...selectedServices.map((s) => `• ${s}`),
      ``,
      `Name: ${name.trim()}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
      ``,
      `Please let me know the available slot. Thank you.`
    ];

    const encodedMsg = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/919810307815?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="relative w-full bg-[#1C1D1D] text-[#F7F4EE] overflow-hidden font-['Manrope',sans-serif]">

      {/* Top Subtle Border / Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#343536] to-transparent" />

      {/* Split-Screen Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[85vh]">

        {/* ================= LEFT COLUMN — WOMEN ================= */}
        <div className="relative group overflow-hidden flex flex-col justify-end min-h-[560px] lg:min-h-[750px] p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#343536]/80">

          {/* Background Image with Scale Zoom Effect */}
          <img
            src="/images/her.jpg"
            alt="Women's Hair Artistry & Beauty"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.9]"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1400";
            }}
          />

          {/* Charcoal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1D] via-[#1C1D1D]/60 to-[#1C1D1D]/25 transition-opacity duration-700 opacity-90 group-hover:opacity-80 pointer-events-none" />

          {/* Top Subtle Badge Line */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-16 z-10 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#9A6548] transition-all duration-500 group-hover:w-12" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#E8E2D8] uppercase">
              FOR HER
            </span>
          </div>

          {/* Text Content Block */}
          <div className="relative z-10 space-y-6 max-w-xl">

            {/* Heading */}
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl lg:text-6xl font-light text-[#F7F4EE] leading-[1.12] tracking-tight">
              Beauty, <span className="text-[#9A6548] italic font-normal">Tailored</span> to You.
            </h2>

            {/* Subtitle / Services List */}
            <p className="text-xs sm:text-sm font-light tracking-[0.22em] text-[#F7F4EE]/80 uppercase flex items-center gap-2 flex-wrap">
              <span>Hair</span>
              <span className="text-[#9A6548]">•</span>
              <span>Skin</span>
              <span className="text-[#9A6548]">•</span>
              <span>Nails</span>
              <span className="text-[#9A6548]">•</span>
              <span>Makeup</span>
            </p>

            {/* Accent Separator */}
            <div className="w-16 h-[1px] bg-[#9A6548]/50 transition-all duration-500 group-hover:w-24 group-hover:bg-[#9A6548]" />

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleOpenModal('women')}
                className="inline-flex items-center gap-3 border border-[#F7F4EE]/30 hover:border-[#9A6548] bg-[#1C1D1D]/50 hover:bg-[#9A6548] text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] px-8 py-4 text-center rounded-sm backdrop-blur-md transition-all duration-300 group/btn cursor-pointer"
              >
                <span>EXPLORE WOMEN'S SERVICES</span>
                <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </button>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN — MEN ================= */}
        <div className="relative group overflow-hidden flex flex-col justify-end min-h-[560px] lg:min-h-[750px] p-8 sm:p-12 lg:p-16">

          {/* Background Image with Scale Zoom Effect */}
          <img
            src="/images/him.png"
            alt="Men's Refined Grooming"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.88]"
            onError={(e) => {
              e.currentTarget.src = "/images/imgmen.png";
            }}
          />

          {/* Charcoal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1D] via-[#1C1D1D]/60 to-[#1C1D1D]/25 transition-opacity duration-700 opacity-90 group-hover:opacity-80 pointer-events-none" />

          {/* Top Subtle Badge Line */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-16 z-10 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#9A6548] transition-all duration-500 group-hover:w-12" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#E8E2D8] uppercase">
              FOR HIM
            </span>
          </div>

          {/* Text Content Block */}
          <div className="relative z-10 space-y-6 max-w-xl">

            {/* Heading */}
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl lg:text-6xl font-light text-[#F7F4EE] leading-[1.12] tracking-tight">
              Style, <span className="text-[#9A6548] italic font-normal">Crafted</span> for You.
            </h2>
            {/* Subtitle / Services List */}
            <p className="text-xs sm:text-sm font-light tracking-[0.22em] text-[#F7F4EE]/80 uppercase flex items-center gap-2 flex-wrap">
              <span>Hair</span>
              <span className="text-[#9A6548]">•</span>
              <span>Grooming</span>
              <span className="text-[#9A6548]">•</span>
              <span>Skin</span>
              <span className="text-[#9A6548]">•</span>
              <span>Styling</span>
            </p>

            {/* Accent Separator */}
            <div className="w-16 h-[1px] bg-[#9A6548]/50 transition-all duration-500 group-hover:w-24 group-hover:bg-[#9A6548]" />

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleOpenModal('men')}
                className="inline-flex items-center gap-3 border border-[#F7F4EE]/30 hover:border-[#9A6548] bg-[#1C1D1D]/50 hover:bg-[#9A6548] text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] px-8 py-4 text-center rounded-sm backdrop-blur-md transition-all duration-300 group/btn cursor-pointer"
              >
                <span>EXPLORE MEN'S SERVICES</span>
                <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Subtle Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#343536] to-transparent" />

      {/* ================= BRIDAL EXPERIENCE SECTION ================= */}
      <BridalExperienceSection />

      {/* ================= CREATIVE PRIVILEGE MEMBERSHIP SECTION ================= */}
      <MembershipSection onSelectMembership={handleOpenMembershipModal} />

      {/* ========================================================= */}
      {/* 1. BOOK YOUR VISIT — GENDER ENTRY CHOICE MODAL */}
      {/* ========================================================= */}
      {isChoiceModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#1C1D1D]/90 backdrop-blur-md animate-fadeIn">

          {/* Modal Box */}
          <div className="relative w-full max-w-lg bg-[#F7F4EE] text-[#1C1D1D] rounded-lg shadow-2xl p-6 sm:p-10 border border-[#343536]/20">

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsChoiceModalOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#1C1D1D] text-[#F7F4EE] hover:bg-[#9A6548] flex items-center justify-center transition-all cursor-pointer shadow-md hover:rotate-90 duration-300"
              title="Close"
              aria-label="Close Modal"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-8 pr-6">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#9A6548] uppercase mb-1">
                APPOINTMENT
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-semibold text-[#1C1D1D]">
                BOOK YOUR VISIT
              </h3>
              <p className="text-xs sm:text-sm text-[#1C1D1D]/75 font-light mt-1.5">
                Choose your experience.
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-4">

              {/* FOR HER */}
              <button
                type="button"
                onClick={() => {
                  setIsChoiceModalOpen(false);
                  handleOpenModal('women');
                }}
                className="w-full text-left p-5 rounded-md border border-[#343536]/20 hover:border-[#9A6548] bg-[#F7F4EE] hover:bg-[#9A6548]/5 transition-all duration-300 group cursor-pointer shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C1D1D] group-hover:text-[#9A6548] transition-colors">
                    FOR HER
                  </span>
                  <span className="text-lg font-semibold text-[#9A6548] transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
                <p className="text-xs text-[#1C1D1D]/70 tracking-wider uppercase font-light">
                  Beauty • Hair • Skin • Nails • Makeup • Spa
                </p>
              </button>

              {/* FOR HIM */}
              <button
                type="button"
                onClick={() => {
                  setIsChoiceModalOpen(false);
                  handleOpenModal('men');
                }}
                className="w-full text-left p-5 rounded-md border border-[#343536]/20 hover:border-[#9A6548] bg-[#F7F4EE] hover:bg-[#9A6548]/5 transition-all duration-300 group cursor-pointer shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#1C1D1D] group-hover:text-[#9A6548] transition-colors">
                    FOR HIM
                  </span>
                  <span className="text-lg font-semibold text-[#9A6548] transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
                <p className="text-xs text-[#1C1D1D]/70 tracking-wider uppercase font-light">
                  Hair • Grooming • Skin • Styling • Spa
                </p>
              </button>

            </div>

            {/* Small Note */}
            <p className="text-[11px] text-center text-[#1C1D1D]/60 font-light mt-6 tracking-wide">
              Your appointment will be confirmed via WhatsApp.
            </p>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. SERVICE SELECTION & WHATSAPP BOOKING MODAL */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#1C1D1D]/90 backdrop-blur-md animate-fadeIn">

          {/* Modal Card */}
          <div className="relative w-full max-w-5xl h-[100dvh] sm:h-[90vh] sm:max-h-[850px] bg-[#F7F4EE] text-[#1C1D1D] rounded-none sm:rounded-lg shadow-2xl flex flex-col overflow-hidden border border-[#343536]/20">

            {/* ------------ MODAL STICKY HEADER ------------ */}
            <div className="sticky top-0 z-40 px-4 sm:px-10 py-4 sm:py-6 border-b border-[#343536]/15 flex items-center justify-between bg-[#F7F4EE] shrink-0 shadow-sm">
              <div className="pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#9A6548]" />
                  <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#9A6548] uppercase">
                    {activeGender === 'women' ? "WOMEN'S SERVICES" : "MEN'S SERVICES"}
                  </p>
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-4xl font-semibold text-[#1C1D1D] leading-tight">
                  Choose Your Experience
                </h3>
                <p className="hidden sm:block text-xs sm:text-sm text-[#1C1D1D]/70 font-light mt-1 max-w-xl">
                  Select one or more services and we'll help you arrange your appointment.
                </p>
              </div>

              {/* Prominent High-Contrast Close Button for Mobile & Desktop */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1C1D1D] text-[#F7F4EE] hover:bg-[#9A6548] flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-lg hover:rotate-90 duration-300 ml-2"
                title="Close Modal"
                aria-label="Close Modal"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ------------ MODAL BODY ------------ */}
            {step === 'selection' ? (
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#F7F4EE]">

                {/* CATEGORIES SIDEBAR / TOP BAR */}
                <div className="w-full md:w-64 lg:w-72 border-b md:border-b-0 md:border-r border-[#343536]/15 bg-[#F7F4EE] p-4 sm:p-6 overflow-x-auto md:overflow-y-auto shrink-0 flex md:flex-col gap-1.5 scrollbar-none">
                  {currentCatalog.map((cat) => {
                    const isActive = cat.category === activeCategory;
                    // Count how many services selected in this category
                    let categorySelectedCount = 0;
                    if (cat.services) {
                      categorySelectedCount = cat.services.filter((s) => selectedServices.includes(s)).length;
                    } else if (cat.groups) {
                      cat.groups.forEach((g) => {
                        categorySelectedCount += g.items.filter((s) => selectedServices.includes(s)).length;
                      });
                    }

                    return (
                      <button
                        key={cat.category}
                        type="button"
                        onClick={() => setActiveCategory(cat.category)}
                        className={`text-left px-4 py-3 rounded-md text-xs tracking-[0.15em] font-semibold uppercase transition-all whitespace-nowrap flex items-center justify-between gap-3 ${isActive
                            ? 'bg-[#1C1D1D] text-[#F7F4EE] shadow-sm'
                            : 'text-[#1C1D1D]/70 hover:text-[#1C1D1D] hover:bg-[#343536]/10'
                          }`}
                      >
                        <span>{cat.category}</span>
                        {categorySelectedCount > 0 && (
                          <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-[#9A6548] text-[#F7F4EE]' : 'bg-[#9A6548]/20 text-[#9A6548]'
                            }`}>
                            {categorySelectedCount}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* SERVICE LIST AREA */}
                <div className="flex-1 p-6 sm:p-8 overflow-y-auto bg-[#F7F4EE]">
                  <div className="max-w-3xl space-y-8">

                    {/* Category Title */}
                    <div className="border-b border-[#343536]/15 pb-4">
                      <h4 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-normal text-[#1C1D1D]">
                        {activeCategoryData.category}
                      </h4>
                    </div>

                    {/* Simple Array of Services */}
                    {activeCategoryData.services && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeCategoryData.services.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`text-left p-4 rounded-md border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${isSelected
                                  ? 'border-[#9A6548] bg-[#9A6548]/10 text-[#1C1D1D] shadow-sm'
                                  : 'border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D]/85 hover:border-[#343536]/40 hover:bg-[#343536]/5'
                                }`}
                            >
                              <span>{service}</span>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isSelected
                                  ? 'border-[#9A6548] bg-[#9A6548] text-[#F7F4EE]'
                                  : 'border-[#343536]/30 bg-transparent'
                                }`}>
                                {isSelected && (
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Grouped Services (e.g. Skin & Facials / Hands & Feet) */}
                    {activeCategoryData.groups && (
                      <div className="space-y-8">
                        {activeCategoryData.groups.map((group) => (
                          <div key={group.name} className="space-y-3">
                            <h5 className="text-xs font-semibold tracking-[0.2em] text-[#9A6548] uppercase border-l-2 border-[#9A6548] pl-2.5">
                              {group.name}
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {group.items.map((service) => {
                                const isSelected = selectedServices.includes(service);
                                return (
                                  <button
                                    key={service}
                                    type="button"
                                    onClick={() => toggleService(service)}
                                    className={`text-left p-4 rounded-md border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${isSelected
                                        ? 'border-[#9A6548] bg-[#9A6548]/10 text-[#1C1D1D] shadow-sm'
                                        : 'border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D]/85 hover:border-[#343536]/40 hover:bg-[#343536]/5'
                                      }`}
                                  >
                                    <span>{service}</span>
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isSelected
                                        ? 'border-[#9A6548] bg-[#9A6548] text-[#F7F4EE]'
                                        : 'border-[#343536]/30 bg-transparent'
                                      }`}>
                                      {isSelected && (
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                      )}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

              </div>
            ) : (
              /* ------------ BOOKING DETAILS STEP ------------ */
              <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-[#F7F4EE] flex flex-col justify-center">
                <div className="max-w-xl mx-auto w-full space-y-6">

                  {/* Step Header */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setStep('selection')}
                      className="text-xs font-semibold tracking-[0.18em] text-[#9A6548] hover:text-[#1C1D1D] uppercase inline-flex items-center gap-1 mb-4 transition-colors"
                    >
                      <span>← BACK TO SERVICES</span>
                    </button>
                    <h4 className="font-['Cormorant_Garamond',serif] text-4xl font-semibold text-[#1C1D1D]">
                      Almost There.
                    </h4>
                    <p className="text-sm text-[#1C1D1D]/75 mt-2 leading-relaxed">
                      Tell us when you'd like to visit and we'll confirm the best available slot with you on WhatsApp.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-md border border-[#343536]/20 bg-[#343536]/5 space-y-2">
                    <p className="text-xs font-semibold tracking-[0.15em] text-[#9A6548] uppercase">
                      SELECTED SERVICES ({selectedServices.length})
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedServices.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded bg-[#1C1D1D] text-[#F7F4EE] text-xs font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleSendWhatsApp} className="space-y-5">

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold tracking-[0.15em] text-[#1C1D1D] uppercase mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D] focus:outline-none focus:border-[#9A6548] text-sm"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold tracking-[0.15em] text-[#1C1D1D] uppercase mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-md border border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D] focus:outline-none focus:border-[#9A6548] text-sm"
                      />
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-xs font-semibold tracking-[0.15em] text-[#1C1D1D] uppercase mb-2">
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Morning', 'Afternoon', 'Evening'].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            className={`py-3 px-2 rounded-md border text-xs font-semibold tracking-[0.1em] uppercase transition-all ${time === slot
                                ? 'border-[#9A6548] bg-[#9A6548] text-[#F7F4EE]'
                                : 'border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D]/75 hover:border-[#343536]/40'
                              }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={!name.trim() || !date}
                        className="w-full py-4 px-6 bg-[#9A6548] hover:bg-[#855437] disabled:bg-[#343536]/30 text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] uppercase rounded-md transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>SEND BOOKING REQUEST →</span>
                      </button>
                    </div>

                  </form>

                </div>
              </div>
            )}

            {/* ------------ STICKY BOTTOM SELECTION BAR ------------ */}
            {step === 'selection' && selectedServices.length > 0 && (
              <div className="px-6 sm:px-10 py-4 bg-[#1C1D1D] text-[#F7F4EE] border-t border-[#343536]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 animate-slideUp">
                <div className="flex items-center gap-3 overflow-hidden text-center sm:text-left">
                  <span className="px-2.5 py-1 rounded bg-[#9A6548] text-xs font-bold tracking-wider uppercase">
                    SELECTED ({selectedServices.length})
                  </span>
                  <p className="text-xs sm:text-sm text-[#E8E2D8]/80 font-light truncate max-w-md">
                    {renderSelectionSummary()}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setStep('booking')}
                  className="w-full sm:w-auto px-6 py-3 bg-[#9A6548] hover:bg-[#855437] text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>BOOK VIA WHATSAPP</span>
                  <span>→</span>
                </button>
              </div>
            )}

          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* 3. CREATIVE PRIVILEGE MEMBERSHIP REQUEST MODAL */}
      {/* ========================================================= */}
      {isMembershipModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#1C1D1D]/90 backdrop-blur-md animate-fadeIn">

          {/* Modal Box */}
          <div className="relative w-full max-w-lg bg-[#F7F4EE] text-[#1C1D1D] rounded-lg shadow-2xl p-6 sm:p-10 border border-[#343536]/20 max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsMembershipModalOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#1C1D1D] text-[#F7F4EE] hover:bg-[#9A6548] flex items-center justify-center transition-all cursor-pointer shadow-md hover:rotate-90 duration-300"
              title="Close Modal"
              aria-label="Close Modal"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-8 pr-6">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#9A6548] uppercase mb-1">
                EXCLUSIVE PRIVILEGE
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-semibold text-[#1C1D1D]">
                Become a Creative Privilege Member
              </h3>
              <p className="text-xs sm:text-sm text-[#1C1D1D]/75 font-light mt-2">
                Complete your details and our team will contact you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleMembershipWhatsApp} className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] text-[#1C1D1D] uppercase mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={membershipName}
                  onChange={(e) => setMembershipName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D] focus:outline-none focus:border-[#9A6548] text-sm"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] text-[#1C1D1D] uppercase mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={membershipPhone}
                  onChange={(e) => setMembershipPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D] focus:outline-none focus:border-[#9A6548] text-sm"
                />
              </div>

              {/* Preferred Contact Time */}
              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] text-[#1C1D1D] uppercase mb-2">
                  Preferred Contact Time *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Morning', 'Afternoon', 'Evening'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setMembershipTime(slot)}
                      className={`py-3 px-2 rounded-md border text-xs font-semibold tracking-[0.1em] uppercase transition-all cursor-pointer ${membershipTime === slot
                          ? 'border-[#9A6548] bg-[#9A6548] text-[#F7F4EE]'
                          : 'border-[#343536]/20 bg-[#F7F4EE] text-[#1C1D1D]/75 hover:border-[#343536]/40'
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Membership (Auto-selected) */}
              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] text-[#1C1D1D] uppercase mb-1.5">
                  Membership
                </label>
                <div className="w-full px-4 py-3 rounded-md border border-[#343536]/20 bg-[#1C1D1D]/5 text-[#1C1D1D] text-sm font-semibold flex items-center justify-between">
                  <span>{selectedMembership}</span>
                  <span className="text-xs text-[#9A6548] font-normal uppercase tracking-wider">
                    {selectedMembership === 'Gold Membership' ? '₹6,000' : '₹11,999'}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!membershipName.trim() || !membershipPhone.trim()}
                  className="w-full py-4 px-6 bg-[#9A6548] hover:bg-[#855437] disabled:bg-[#343536]/30 text-[#F7F4EE] font-semibold text-xs tracking-[0.2em] uppercase rounded-md transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>SEND MEMBERSHIP REQUEST</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  );
}
