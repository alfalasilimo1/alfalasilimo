"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

export default function ComingSoon() {
  const services = [
    { name: "Airport Transfers", desc: "Seamless arrivals & departures" },
    { name: "Chauffeur Service", desc: "Premium on-demand chauffeurs" },
    { name: "Weddings & Events", desc: "Elevate every special occasion" },
    { name: "City Tours", desc: "Explore Dubai in absolute style" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]">

      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Limousine Dubai"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-[#0A0A0A]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C9A84C]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
      </div>

      {/* ── Top Bar ── */}
<header className="relative z-20 flex items-center justify-between px-8 md:px-16 py-7 border-b border-[#C9A84C]/10 bg-gradient-to-b from-[#0A0A0A]/90 to-transparent">
  <div className="flex items-center gap-4">
    <img
      src="/logo.png"
      alt="Al Falasi Luxury Limousine"
      className="h-10 w-auto object-contain"
    />
    <div className="flex flex-col">
      <span className="text-[9px] text-[#7A7060] tracking-[0.28em] uppercase">
        Luxury Limousine · Dubai
      </span>
    </div>
  </div>
  <a
    href="tel:+971509852818"
    className="text-[10px] font-medium tracking-[0.16em] text-[#C9A84C] border border-[#C9A84C]/35 px-5 py-2.5 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 uppercase"
  >
    +971 50 985 2818
  </a>
</header>

      {/* ── Hero Content ── */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6 py-20">

        {/* Eyebrow */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <span className="text-[9px] font-medium tracking-[0.44em] uppercase text-[#C9A84C]">
            A New Experience Awaits
          </span>
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="font-[family-name:var(--font-serif)] text-[clamp(52px,10vw,120px)] font-light leading-none tracking-tight text-white mb-3"
        >
          Luxury <em className="text-[#C9A84C]">Redefined</em>
        </motion.h1>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="font-[family-name:var(--font-serif)] text-[clamp(14px,3vw,28px)] font-light tracking-[0.32em] uppercase text-[#7A7060] mb-10"
        >
          Coming Soon
        </motion.p>

        {/* Ornament */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#9A7530]" />
          <div className="w-1.5 h-1.5 bg-[#7A7060] rotate-45" />
          <div className="w-2 h-2 bg-[#C9A84C] rotate-45" />
          <div className="w-1.5 h-1.5 bg-[#7A7060] rotate-45" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#9A7530]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="text-[13px] font-light tracking-wide text-[#7A7060] leading-[2] max-w-[500px] mb-14"
        >
          We are crafting an extraordinary digital experience to match our
          world-class fleet. Al Falasi Luxury Limousine — where every journey
          through Dubai is a statement of elegance.
        </motion.p>

                {/* Chauffeur Services */}
        <motion.div
          custom={6} variants={fadeUp} initial="hidden" animate="show"
          className="mb-20 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/40" />
            <span className="text-[9px] font-medium tracking-[0.4em] uppercase text-white">
              Chauffeur Services
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/40" />
          </div>

          <p className="text-[12px] font-light text-white tracking-wide">
            For chauffeur services booking, please visit our website
          </p>

          <a
            href="https://chauffeurdubai.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-[#C9A84C]/40 hover:border-[#C9A84C] hover:bg-[#C9A84C]/8 transition-all duration-300 px-8 py-3.5 rounded-full"
          >
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C9A84C]">
              chauffeurdubai.ae
            </span>
            <span className="text-[#C9A84C]/50 text-xs group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="mb-20"
        >
          <a
            href="https://wa.me/971509852818"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-300 px-8 py-4 rounded-full"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.858L.057 23.214a.75.75 0 00.93.93l5.356-1.469A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.355l-.355-.211-3.676 1.008 1.008-3.676-.211-.355A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">
              Chat on WhatsApp
            </span>
            <span className="text-white/60 text-xs group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <p className="text-[10px] text-[#7A7060] tracking-widest mt-3 uppercase">
            We typically reply within minutes
          </p>
        </motion.div>


        {/* Services Grid */}
        <motion.div
          custom={6} variants={fadeUp} initial="hidden" animate="show"
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 border border-[#C9A84C]/15 divide-x divide-y md:divide-y-0 divide-[#C9A84C]/15 mb-20 bg-black/20 backdrop-blur-sm"
        >
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center text-center py-7 px-4 hover:bg-[#C9A84C]/5 transition-colors cursor-default"
            >
              <span className="text-[9px] font-medium tracking-[0.26em] uppercase text-[#C9A84C] mb-2">
                {s.name}
              </span>
              <span className="text-[10px] font-light text-[#7A7060] leading-relaxed">
                {s.desc}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Contact Strip */}
        <motion.div
          custom={7} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {[
            { icon: <Phone size={13} />, label: "Phone", value: "+971 50 985 2818", href: "tel:+971509852818" },
            { icon: <Mail size={13} />, label: "Email", value: "booking@alfalasilimo.com", href: "mailto:booking@alfalasilimo.com" },
            { icon: <MapPin size={13} />, label: "Location", value: "Karama, Dubai - UAE", href: undefined },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                {c.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-semibold tracking-[0.3em] uppercase text-[#7A7060]">
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-[12px] text-white hover:text-[#C9A84C] transition-colors tracking-wide font-light"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="text-[12px] text-white tracking-wide font-light">
                    {c.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-20 flex items-center justify-between px-8 md:px-16 py-5 border-t border-[#C9A84C]/10 bg-gradient-to-t from-[#0A0A0A]/95 to-transparent flex-wrap gap-2">
        <p className="text-[10px] font-light tracking-wider text-[#7A7060]">
          © 2026 <span className="text-[#C9A84C]">Al Falasi Luxury Limousine</span>. All rights reserved.
        </p>
        <p className="text-[10px] font-light tracking-wider text-[#7A7060] flex items-center gap-2">
          <span className="text-[#C9A84C] text-[5px]">◆</span>
          Sheikh Hamdan Building G5,18, Karama, Dubai, UAE
        </p>
      </footer>

    </main>
  );
}