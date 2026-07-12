"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useBooking } from "@/components/BookingProvider";

const geist = localFont({
  src: "../../../public/geist-font/Geist/webfonts/Geist[wght].woff2",
  variable: "--font-geist",
});

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className={`w-full bg-space-light min-h-screen pt-24 pb-12 ${geist.className}`}>
      
      {/* 1. Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-6" style={{ fontFamily: 'var(--font-satoshi)' }}>
            ABOUT 22WORKSPACE
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-zinc-900 tracking-tight leading-tight mb-8" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
            Built around businesses, not just offices.
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl max-w-3xl leading-relaxed" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
            We build professionally managed business environments where companies can focus on their work, instead of the complexity of establishing and operating traditional offices.
          </p>
        </motion.div>
      </section>

      {/* 2. Our Story — Why 22Workspace Exists */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl text-zinc-900 tracking-tight mb-6 leading-tight" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
              Running a business was already complicated enough.
            </h2>
            <div className="space-y-6 text-zinc-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              <p>
                Establishing a traditional office requires businesses to spend significant time and resources finding premises, furnishing spaces, arranging utilities, connectivity, security, reception, and everyday operations—long before they can focus fully on their actual work.
              </p>
              <p>
                This understanding shaped the core idea behind 22Workspace. We set out to create a professionally managed environment that completely removes this unnecessary operational complexity from the working experience.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-6 order-1 lg:order-2 h-[400px] md:h-[600px] w-full relative rounded-2xl overflow-hidden shadow-xl border border-black/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000')` }}
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* 3. The Idea Behind 22Workspace */}
      <section className="bg-zinc-950 py-32 w-full text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest block mb-8" style={{ fontFamily: 'var(--font-satoshi)' }}>
              WHAT WE BELIEVE
            </span>
            <h2 className="text-4xl md:text-5xl tracking-tight leading-tight mb-10" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
              Your resources should build your business — not just your office.
            </h2>
            <div className="w-24 h-1 bg-brand-orange mb-10"></div>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              Our philosophy is rooted in reducing unnecessary capital expenditure and creating a more flexible operational approach for businesses of all sizes. We operate on a singular, defining principle:
            </p>
            <div className="text-brand-orange text-4xl md:text-6xl lg:text-7xl font-bold italic tracking-tight" style={{ fontFamily: 'var(--font-satoshi)' }}>
              “Pay for what you use.”
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. What Defines Us */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 border-b border-black/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
            The principles behind the way we work.
          </h2>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {[
            {
              num: "01",
              title: "Practical Flexibility",
              desc: "Businesses evolve, and the environments supporting them should be able to evolve as well."
            },
            {
              num: "02",
              title: "Focus Over Complexity",
              desc: "We believe businesses should spend their time building, operating, and growing — not managing unnecessary workplace complexity."
            },
            {
              num: "03",
              title: "Professional Community",
              desc: "The right environment creates opportunities for meaningful professional relationships, collaboration, and shared progress."
            },
            {
              num: "04",
              title: "Long-Term Thinking",
              desc: "Our approach is built around creating lasting value for the businesses and professionals who work within our ecosystem."
            }
          ].map((principle, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 group border-t border-black/5 pt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-brand-orange font-bold text-xl md:text-2xl shrink-0 font-mono">
                — {principle.num}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 tracking-tight mb-4 transition-colors duration-300" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
                  {principle.title}
                </h3>
                <p className="text-zinc-500 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
                  {principle.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. The People Behind 22Workspace */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-6" style={{ fontFamily: 'var(--font-satoshi)' }}>
          OUR LEADERSHIP
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight mb-20 max-w-3xl leading-tight" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
          Experience behind the idea. People behind the progress.
        </h2>

        {/* Founder Profile - Prominent Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-5 h-[500px] lg:h-[700px] w-full relative overflow-hidden bg-zinc-100 rounded-xl border border-black/5">
            <img src="/Team/sanjay1.png" alt="Sanjay Gupta" className="object-cover w-full h-full object-top grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 tracking-tight mb-4" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>Sanjay Gupta</h3>
            <p className="text-brand-orange font-semibold tracking-widest uppercase text-sm md:text-base mb-8">Founder and Managing Director</p>
            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed max-w-2xl" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              With over four decades of extensive experience in the commercial real estate industry, Sanjay is the visionary driving force behind 22workspace. His leadership and strategic foresight ensure exceptional service delivery, securing optimal results and high-value transactions for all premium clients.
            </p>
          </div>
        </motion.div>

        {/* Other Leadership Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-[450px] lg:h-[550px] w-full relative overflow-hidden bg-zinc-100 rounded-xl mb-10 border border-black/5">
              <img src="/Team/kushagra1.png" alt="Kushagra Gupta" className="object-cover w-full h-full object-top grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 tracking-tight mb-2" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>Kushagra Gupta</h3>
            <p className="text-brand-orange font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">Executive Director</p>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              Kushagra is a dedicated professional committed to transforming the modern workspace experience. Focusing on operational excellence and tailored commercial solutions, he ensures seamless execution while contributing to sustained business growth and long-term client success.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-[450px] lg:h-[550px] w-full relative overflow-hidden bg-zinc-100 rounded-xl mb-10 border border-black/5">
              <img src="/Team/kashish1.png" alt="Kashish Gupta" className="object-cover w-full h-full object-top grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 tracking-tight mb-2" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>Kashish Gupta</h3>
            <p className="text-brand-orange font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">Director of Operations</p>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              Focused on delivering outstanding end-to-end results, Kashish builds long-lasting relationships based on transparency and reliability. Her proactive leadership and client-first approach ensure that every portfolio is managed with precision, driving the expansion of 22workspace's footprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Our Perspective */}
      <section className="bg-zinc-100 py-32 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-8" style={{ fontFamily: 'var(--font-satoshi)' }}>
              LOOKING FORWARD
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight mb-8" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
              The way businesses work will continue to change. So should the spaces around them.
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              <p>
                Businesses increasingly value flexibility, operational efficiency, and the ability to adapt as their requirements shift. Professional environments need to respond to these demands seamlessly.
              </p>
              <p>
                At 22workspace, our perspective is simple: as the nature of work evolves, we aim to continuously evolve alongside the businesses and professionals we serve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Closing Statement */}
      <section className="py-32 md:py-48 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 tracking-tight leading-tight mb-10" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
            We take care of the space around your business, so you can focus on the business itself.
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
            Join a thoughtfully designed ecosystem built for long-term growth and operational clarity.
          </p>
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center gap-3 text-zinc-900 font-semibold text-lg md:text-xl border-b-2 border-zinc-900 pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
          >
            Get to know 22Workspace
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </section>

    </div>
  );
}

