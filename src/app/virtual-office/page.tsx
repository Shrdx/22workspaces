"use client";

import React, { useState } from "react";
import { useBooking } from "@/components/BookingProvider";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const geist = localFont({
  src: "../../../public/geist-font/Geist/webfonts/Geist[wght].woff2",
  variable: "--font-geist",
});

export default function VirtualOfficePage() {
  const { openBooking } = useBooking();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is a virtual office?",
      a: "A virtual office gives your business a premium corporate address, mailing and registration support, and GST representation — without needing a physical desk or seat."
    },
    {
      q: "What's the difference between virtual and coworking?",
      a: "A virtual office provides an address and registration support only, with no daily physical seat. Coworking gives you an actual desk, seat, or private office to work from every day, plus community access."
    },
    {
      q: "How do I find what's best for me?",
      a: (
        <>
          <button onClick={() => openBooking()} className="text-zinc-900 border-b border-zinc-300 hover:border-zinc-900 transition-colors pb-0.5">Book a tour</button>, or reach us at <a href="tel:+918700513200" className="text-zinc-900 border-b border-zinc-300 hover:border-zinc-900 transition-colors pb-0.5">+91 87005 13200</a> / <a href="mailto:info@22workspace.com" className="text-zinc-900 border-b border-zinc-300 hover:border-zinc-900 transition-colors pb-0.5">info@22workspace.com</a>
        </>
      )
    },
    {
      q: "What is the need for a virtual office?",
      a: "It lets you establish a legitimate business address for GST and company registration, build client trust, and avoid the cost of a physical office you don't yet need."
    }
  ];

  const plans = [
    {
      name: "Virtual Basic",
      subtitle: "Corporate Address Solution",
      desc: "Establish a premium corporate footprint with dedicated mailing and communication support.",
      price: "Request Proposal",
      features: [
        "Premium Business Address",
        "Courier Forwarding Facility",
        "Conference room credits (Pay-and-use)",
        "Lounge & Coworking access (Pay-and-use)"
      ],
      cta: "Contact Us Now"
    },
    {
      name: "Virtual Classic",
      subtitle: "Statutory Registrations Solution",
      desc: "Designed for businesses requiring formal government registrations and tax compliance.",
      price: "Request Proposal",
      features: [
        "Virtual Basic Features Included",
        "GST Registration Authorized",
        "Company Affairs Registration allowed",
        "Complimentary CA advice on structuring"
      ],
      cta: "Register Address",
      highlight: true
    },
    {
      name: "Virtual Premium",
      subtitle: "Run It Like A Boss Solution",
      desc: "An all-in-one virtual plan loaded with physical office access credits and storage.",
      price: "Request Proposal",
      features: [
        "Virtual Classic Features Included",
        "Physical Locker Facility (for statutory books)",
        "1 Day Coworking Pass per month",
        "2 Hours Conference Room access per month"
      ],
      cta: "Go Premium"
    },
    {
      name: "Virtual Platinum",
      subtitle: "Your Personalized Virtual Office",
      desc: "The ultimate hybrid workspace solution providing a dedicated physical address and desk representation.",
      price: "Request Proposal",
      features: [
        "Virtual Premium Features Included",
        "Independent office with dedicated seat",
        "Proper seat allocation with desk signage",
        "Priority board room scheduling"
      ],
      cta: "Go Platinum"
    }
  ];

  return (
    <div className={`w-full bg-[#fcfcfc] text-zinc-900 min-h-screen ${geist.className}`}>
      
      {/* 1. Immersive Hero */}
      <section className="relative w-full h-[100svh] min-h-[600px] bg-zinc-950 flex flex-col justify-end">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] ease-out hover:scale-[1.02] opacity-60"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        
        {/* Navigation Breadcrumb */}
        <div className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="opacity-50">—</span>
          <Link href="/#workspaces" className="hover:text-white transition-colors">Workspaces</Link>
          <span className="opacity-50">—</span>
          <span className="text-white">Virtual Office</span>
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-[1600px] mx-auto">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-[6rem] text-white tracking-tighter leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontWeight: 400 }}
            >
              Presence, elevated.
            </motion.h1>
          </div>
          <motion.div 
            className="flex flex-col items-start md:items-end text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl font-light tracking-tight">Flexible Corporate Presence</p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Narrative */}
      <section className="px-6 md:px-12 py-32 md:py-48 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-5">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-zinc-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontWeight: 300 }}
            >
              The infrastructure of an office, delivered virtually.
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
            <motion.div 
              className="text-xl md:text-2xl text-zinc-600 font-light leading-[1.6]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <p className="mb-6">
                Avoid the overhead of physical premises until you truly need them. Establish your company with a premium business center address, professional mailing options, GST registration support, and CA advice.
              </p>
              <p>
                It is all the credibility of a physical headquarters, without the physical footprint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Specifications Index (Benefits) */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl text-zinc-900 tracking-tight" style={{ fontWeight: 400 }}>
              Infrastructure
            </h3>
          </motion.div>

          <div className="flex flex-col w-full">
            {[
              { category: "01", items: ["Premium Central Delhi Address", "Boosts client trust & credibility"] },
              { category: "02", items: ["GST & Business Registration", "Legally register your enterprise"] },
              { category: "03", items: ["Complete Documentation", "NOCs, utility bills, rent agreements"] },
              { category: "04", items: ["Physical Locker Storage", "Secure storage for statutory books"] },
              { category: "05", items: ["On-Demand Boardrooms", "Book meeting rooms at member rates"] }
            ].map((specGroup, idx) => (
              <motion.div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-10 md:py-16 border-t border-zinc-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="md:col-span-4">
                  <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-zinc-400">
                    {specGroup.category}
                  </h4>
                </div>
                <div className="md:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    {specGroup.items.map((item, j) => (
                      <div key={j} className="text-lg md:text-xl font-light text-zinc-800 tracking-tight">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-zinc-200" />
          </div>
        </div>
      </section>

      {/* 4. Minimal Plans Layout */}
      <section className="bg-zinc-950 py-32 md:py-48 text-zinc-300">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
            <h2 className="text-4xl md:text-6xl text-white tracking-tighter leading-[1.1]" style={{ fontWeight: 300 }}>
              Choose your configuration.
            </h2>
            <p className="text-lg font-light text-zinc-400 max-w-sm">
              We provide comprehensive documentation with quick processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col h-full border-t border-zinc-800 pt-8"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500">
                    {plan.subtitle}
                  </span>
                  {plan.highlight && (
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white px-2 py-1 bg-white/10">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-3xl text-white tracking-tight mb-4" style={{ fontWeight: 400 }}>{plan.name}</h3>
                <p className="text-zinc-400 font-light text-sm leading-[1.6] mb-12 flex-grow">{plan.desc}</p>

                <div className="border-t border-zinc-800 pt-6 mb-12">
                  <ul className="space-y-4">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-4 text-sm font-light text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-white shrink-0 mt-2" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openBooking(`Virtual Office: ${plan.name}`)}
                  className="w-full text-left pb-3 border-b border-zinc-700 hover:border-white transition-colors duration-300 group flex justify-between items-center"
                >
                  <span className="text-sm uppercase tracking-[0.15em] text-white">{plan.cta}</span>
                  <svg className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Editorial FAQ */}
      <section className="py-32 md:py-48 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl text-zinc-900 tracking-tight sticky top-32" style={{ fontWeight: 300 }}>
              Clarifications
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="border-t border-zinc-200">
              {faqs.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div key={i} className="border-b border-zinc-200">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className="w-full py-10 flex justify-between items-center text-left group"
                    >
                      <span className={`text-xl md:text-2xl tracking-tight transition-colors duration-300 ${isOpen ? 'text-zinc-900' : 'text-zinc-500 group-hover:text-zinc-900'}`} style={{ fontWeight: 300 }}>
                        {faq.q}
                      </span>
                      <span className={`text-zinc-300 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 text-zinc-600 font-light text-lg md:text-xl leading-[1.6] max-w-2xl">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
