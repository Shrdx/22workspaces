"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer
      className="bg-[#0C0C0C] border-t border-white/5 pt-28 pb-12 relative"
      style={{ backgroundImage: 'radial-gradient(circle at top, rgba(255,255,255,0.03) 0%, transparent 60%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">

          {/* Brand Identity */}
          <motion.div
            className="md:col-span-12 lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="relative flex items-center h-16 w-52 md:w-72 shrink-0 group">
              <Image
                src="/logos/22logo.png"
                alt="22workspace Logo"
                width={400}
                height={120}
                className="absolute left-0 h-24 md:h-32 w-auto max-w-none object-contain transition-opacity duration-300 group-hover:opacity-90"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                priority
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span
                className="font-serif text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:text-brand-orange"
                style={{ display: "none" }}
              >
                22<span className="text-brand-orange">workspace</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-[15px] leading-relaxed max-w-[280px]" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400 }}>
              A premium, design-led business center and coworking environment designed to spark innovation, drive business growth, and connect entrepreneurs.
            </p>

            <div className="flex items-center gap-4 pt-1">
              {/* Instagram */}
              <a href="https://www.instagram.com/22workspace/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-orange hover:border-brand-orange hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/22-workspace/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-orange hover:border-brand-orange hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="2"></path>
                  <rect x="2" y="9" width="4" height="12" strokeWidth="2"></rect>
                  <circle cx="4" cy="4" r="2" strokeWidth="2"></circle>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/22workspace" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-orange hover:border-brand-orange hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="2"></path>
                </svg>
              </a>
              {/* Google Maps */}
              <a href="https://www.google.com/maps/place/22+Workspace+01/@28.6445226,77.2239642,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd3d0249ce75:0x5511e9b07e3d8d08!8m2!3d28.6445179!4d77.2265391!16s%2Fg%2F11gdw18c0m?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-orange hover:border-brand-orange hover:-translate-y-1 transition-all duration-300">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" strokeWidth="2" />
                </svg>
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center gap-2 group text-brand-orange text-[13px] font-bold tracking-[0.1em] uppercase hover:text-brand-orange-hover transition-colors duration-300"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                Book a Free Workspace Tour
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-6 lg:col-span-3 lg:pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="text-[17px] text-white mb-8" style={{ fontFamily: 'Sora', fontWeight: 600, letterSpacing: '-0.01em' }}>Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Dedicated Seat', href: '/dedicated-seat' },
                { name: 'Private Office', href: '/private-office' },
                { name: 'Open Desk Seating', href: '/open-space' },
                { name: 'Conference Rooms', href: '/meeting-room' },
                { name: 'Events Space', href: '/event' },
                { name: 'Virtual Office Plans', href: '/virtual-office' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="group flex items-center text-zinc-400 hover:text-brand-orange transition-all duration-300 w-fit">
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-[15px]" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 500 }}>
                      {link.name}
                    </span>
                    <svg className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            className="md:col-span-6 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className="text-[17px] text-white mb-8" style={{ fontFamily: 'Sora', fontWeight: 600, letterSpacing: '-0.01em' }}>Our Locations</h4>

            <div className="space-y-7">
              {[
                { building: 'Corporate House', address: '1/22, Asaf Ali Road, New Delhi 110002', subtitle: 'Near New Delhi Metro Station', link: 'https://www.google.com/maps/place/22+Workspace+01/@28.6445226,77.2239642,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd3d0249ce75:0x5511e9b07e3d8d08!8m2!3d28.6445179!4d77.2265391!16s%2Fg%2F11gdw18c0m?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D' },
                { building: 'Sab House', address: '3/8, Asaf Ali Road, New Delhi 110002', subtitle: 'Near Delhi Gate Metro Station', link: 'https://www.google.com/maps/search/3%2F8+Asaf+Ali+Road+New+Delhi+110002' },
                { building: 'East of Kailash Center', address: 'A-77, East of Kailash, New Delhi', subtitle: '', link: 'https://www.google.com/maps/search/A-77+East+of+Kailash+New+Delhi' },
              ].map((loc, idx) => (
                <a href={loc.link} target="_blank" rel="noopener noreferrer" key={idx} className="block group border-l-2 border-[#222] hover:border-brand-orange pl-4 transition-colors duration-300 relative">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-brand-orange transition-colors duration-300 shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="space-y-1">
                      <p className="text-white text-[17px] tracking-wide" style={{ fontFamily: 'Geist', fontWeight: 500 }}>{loc.building}</p>
                      <p className="text-zinc-500 text-[13.5px] leading-relaxed max-w-[240px]" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400 }}>
                        {loc.address}
                        {loc.subtitle && <><br /><span className="text-zinc-600">{loc.subtitle}</span></>}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-10"></div>

        {/* Contact Info Blocks */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-8 border-b border-white/5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {/* Phone */}
          <div className="flex items-center gap-4 group">
            <div className="text-zinc-600 group-hover:text-brand-orange transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-0.5 font-medium">Phone</span>
              <a href="tel:+918700513200" className="text-[15px] font-medium text-white tracking-wide hover:text-brand-orange transition-colors">+91 87005 13200</a>
            </div>
          </div>

          {/* Divider (Desktop only) */}
          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Email */}
          <div className="flex items-center gap-4 group">
            <div className="text-zinc-600 group-hover:text-brand-orange transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-0.5 font-medium">Email Us</span>
              <a href="mailto:info@22workspace.com" className="text-[15px] font-medium text-white tracking-wide hover:text-brand-orange transition-colors">info@22workspace.com</a>
            </div>
          </div>

          {/* Divider (Desktop only) */}
          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Working Hours */}
          <div className="flex items-center gap-4 group">
            <div className="text-zinc-600 group-hover:text-brand-orange transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-0.5 font-medium">Working Hours</span>
              <span className="text-[15px] font-medium text-white tracking-wide">Mon - Sat (9:00 AM - 7:00 PM)</span>
            </div>
          </div>
        </motion.div>

        {/* Legal Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[13px] text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© 2026 22Workspace. A Brand of Corporate Buildcon LLP.</p>
          <div className="flex gap-8 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
