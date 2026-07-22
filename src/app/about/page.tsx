"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className={`w-full bg-[#faf9f6] text-[#1c1d1f] min-h-screen pt-24 pb-0 overflow-hidden ${geist.className}`}>

      {/* 1. Editorial Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-4 md:pt-10 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="text-brand-orange text-[11px] font-semibold uppercase tracking-[0.15em] block mb-6" style={{ fontFamily: 'var(--font-satoshi)' }}>
              About 22Workspace
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] tracking-tight leading-[1.05] mb-8" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Built around businesses, <span className="text-zinc-500 italic">not just offices.</span>
            </h1>
            <div className="text-zinc-600 text-lg md:text-[19px] max-w-2xl leading-relaxed mb-10 space-y-5 text-justify" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              <p>
                We build professionally managed business environments where companies can focus on their work, instead of the complexity of establishing and operating traditional offices.
              </p>
              <p>
                By rethinking the modern workplace, we provide founders, growing teams, and established organizations with beautifully designed, highly functional spaces that adapt to their unique operational needs—allowing them to scale with complete peace of mind.
              </p>
            </div>
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-3 text-zinc-900 font-medium text-[15px] border-b border-zinc-900 pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors duration-300"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              Explore our spaces
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 h-[500px] md:h-[650px] w-full relative"
          >
            <Image
              src="/co-working pics/co1.jpg"
              alt="22Workspace Interior"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[400px] md:h-[500px] w-full"
          >
            <Image
              src="/co-working pics/co2.jpg"
              alt="Workspace environment"
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 pt-4 md:pt-12"
          >
            <h2 className="text-3xl md:text-[2.75rem] tracking-tight mb-8 leading-[1.15]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Running a business was already complicated enough.
            </h2>
            <div className="space-y-6 text-zinc-600 text-[17px] md:text-lg leading-relaxed text-justify" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              <p>
                Establishing a traditional office requires businesses to spend significant time and resources finding premises, furnishing spaces, arranging utilities, connectivity, security, reception, and everyday operations—long before they can focus fully on their actual work.
              </p>
              <p>
                This understanding shaped the core idea behind 22Workspace. We set out to create a professionally managed environment that completely removes this unnecessary operational complexity from the working experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Dark Philosophy Section */}
      <section className="bg-[#1c1d1f] text-white py-24 md:py-32 w-full mb-24 md:mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Your resources should build your business. <span className="text-zinc-500 italic">Not just your office.</span>
            </h2>
            <div className="w-12 h-[2px] bg-brand-orange mx-auto mb-10"></div>
            <p className="text-zinc-400 text-[17px] md:text-xl leading-relaxed mb-12 text-justify" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              Our philosophy is rooted in reducing unnecessary capital expenditure and creating a more flexible operational approach for businesses of all sizes. We operate on a singular, defining principle:
            </p>
            <div className="text-brand-orange text-5xl md:text-7xl font-normal italic tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              “Pay for what you use.”
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. The Four Principles (Split Layout) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl tracking-tight leading-[1.15] mb-8" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                The principles behind the way we work.
              </h2>
              <div className="relative w-full h-[300px] xl:h-[400px] hidden lg:block overflow-hidden">
                <Image src="/co-working pics/co3.jpg" alt="Workspace Principles" fill className="object-cover transition-all duration-700" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-0 border-t border-black/10">
              {[
                { num: "01", title: "Practical Flexibility", desc: "Businesses evolve, and the environments supporting them should be able to evolve as well." },
                { num: "02", title: "Focus Over Complexity", desc: "We believe businesses should spend their time building, operating, and growing — not managing unnecessary workplace complexity." },
                { num: "03", title: "Professional Community", desc: "The right environment creates opportunities for meaningful professional relationships, collaboration, and shared progress." },
                { num: "04", title: "Long-Term Thinking", desc: "Our approach is built around creating lasting value for the businesses and professionals who work within our ecosystem." }
              ].map((principle, idx) => (
                <motion.div
                  key={idx}
                  className="group py-8 border-b border-black/10 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 transition-colors duration-300 hover:bg-black/[0.02]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="text-brand-orange text-sm font-semibold tracking-widest shrink-0 mt-1" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    {principle.num}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl tracking-tight mb-2 text-zinc-900" style={{ fontFamily: 'Geist', fontWeight: 500 }}>
                      {principle.title}
                    </h3>
                    <p className="text-zinc-600 text-base md:text-[17px] leading-relaxed text-justify" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
                      {principle.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Leadership Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="mb-16">
          <span className="text-brand-orange text-[11px] font-semibold uppercase tracking-[0.15em] block mb-4" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight leading-[1.15]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Experience behind the idea.
          </h2>
        </div>

        {/* Leadership Grid — Uniform Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {[
            {
              name: "Sanjay Gupta",
              role: "Founder and Managing Director",
              img: "/Team/sanjay_unified.png",
              bio: "With over four decades of extensive experience in the commercial real estate industry, Sanjay is the visionary driving force behind 22workspace. His leadership and strategic foresight ensure exceptional service delivery, securing optimal results and high-value transactions for all premium clients."
            },
            {
              name: "Kushagra Gupta",
              role: "Executive Director",
              img: "/Team/kushagra_unified.png",
              bio: "Kushagra is a dedicated professional committed to transforming the modern workspace experience. Focusing on operational excellence and tailored commercial solutions, he ensures seamless execution while contributing to sustained business growth and long-term client success."
            },
            {
              name: "Kashish Gupta",
              role: "Director of Operations",
              img: "/Team/kashish_unified.png",
              bio: "Focused on delivering outstanding end-to-end results, Kashish builds long-lasting relationships based on transparency and reliability. Her proactive leadership and client-first approach ensure that every portfolio is managed with precision, driving the expansion of 22workspace's footprint."
            }
          ].map((person, idx) => (
            <motion.div
              key={person.name}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <div className="aspect-[3/4] w-full relative mb-6 bg-zinc-100 overflow-hidden">
                <Image src={person.img} alt={person.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-2xl md:text-3xl text-zinc-900 tracking-tight mb-2" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>{person.name}</h3>
              <p className="text-brand-orange font-medium tracking-wide uppercase text-[12px] mb-4" style={{ fontFamily: 'var(--font-satoshi)' }}>{person.role}</p>
              <p className="text-zinc-600 text-[15px] leading-relaxed text-justify" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Future-Focused Section */}
      <section className="bg-zinc-100 py-24 md:py-32 w-full mb-0">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <h2 className="text-4xl md:text-5xl tracking-tight leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
                The way businesses work will continue to change. <span className="italic text-zinc-500">So should the spaces around them.</span>
              </h2>
              <div className="space-y-6 text-zinc-600 text-[17px] md:text-lg leading-relaxed text-justify" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
                <p>
                  Businesses increasingly value flexibility, operational efficiency, and the ability to adapt as their requirements shift. Professional environments need to respond to these demands seamlessly.
                </p>
                <p>
                  At 22workspace, our perspective is simple: as the nature of work evolves, we aim to continuously evolve alongside the businesses and professionals we serve.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 lg:col-start-8 relative h-[350px] md:h-[450px] w-full"
            >
              <Image src="/co-working pics/co4.jpg" alt="Future workspace" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Premium Conversion Section */}
      <section className="py-32 md:py-40 bg-[#1c1d1f] text-white w-full text-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              We take care of the space, <span className="italic text-zinc-400">you focus on the business.</span>
            </h2>
            <p className="text-zinc-400 text-[17px] md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto text-justify" style={{ fontFamily: 'Geist', fontWeight: 400 }}>
              Join a thoughtfully designed ecosystem built for long-term growth and operational clarity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => openBooking()}
                className="bg-brand-orange text-white px-8 py-3.5 text-[15px] font-medium hover:bg-brand-orange-hover transition-colors duration-300 w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                Book a Tour
              </button>
              <Link
                href="/"
                className="text-white px-8 py-3.5 text-[15px] font-medium border border-white/20 hover:border-white transition-colors duration-300 w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                Explore Workspaces
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
