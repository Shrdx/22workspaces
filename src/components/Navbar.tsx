"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBooking } from "./BookingProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setHeight = () => document.documentElement.style.setProperty("--navbar-h", `${el.offsetHeight}px`);
    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const workspaces = [
    { name: "Dedicated Seat", href: "/dedicated-seat" },
    { name: "Private Office", href: "/private-office" },
    { name: "Open Space", href: "/open-space" },
    { name: "Meeting Room", href: "/meeting-room" },
    { name: "Events Space", href: "/event" },
  ];

  // Wix static media logo URL (from 22workspace.com)
  const LOGO_URL = "/logos/22logo.png";

  const isHome = pathname === "/";
  const isDarkBg = isHome && !isScrolled;

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.15)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(12px)",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "blur(12px)",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
          {/* Logo — uses the actual 22workspace logo from the live website */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="relative flex items-center h-14 w-40 md:w-64 shrink-0 group"
          >
            {/* Primary: actual website logo */}
            <Image
              src={LOGO_URL}
              alt="22workspace Logo"
              width={400}
              height={120}
              className="absolute left-0 h-20 md:h-28 w-auto max-w-none object-contain transition-opacity duration-300 group-hover:opacity-80"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              priority
              onError={(e) => {
                // Fallback: hide broken image, show text logo
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* Fallback text logo (shown if image fails to load) */}
            <span
              className={`font-serif text-2xl font-bold tracking-tight transition-all duration-300 group-hover:text-brand-orange ${isDarkBg ? "text-white" : "text-zinc-900"}`}
              style={{ display: "none" }}
            >
              22<span className="text-brand-orange">workspace</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md transition-all duration-500 ${isDarkBg ? "bg-black/20 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-white/70 border border-black/10 shadow-sm"
              }`}
          >
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${pathname === "/"
                ? (isDarkBg ? "bg-white/20 text-white" : "bg-black text-white")
                : (isDarkBg ? "text-white/90 hover:text-white hover:bg-white/10" : "text-zinc-700 hover:text-zinc-900 hover:bg-black/5")
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${pathname === "/about"
                ? (isDarkBg ? "bg-white/20 text-white" : "bg-black text-white")
                : (isDarkBg ? "text-white/90 hover:text-white hover:bg-white/10" : "text-zinc-700 hover:text-zinc-900 hover:bg-black/5")
                }`}
            >
              About Us
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 ${workspaces.some((w) => pathname === w.href)
                  ? (isDarkBg ? "bg-white/20 text-white" : "bg-black text-white")
                  : (isDarkBg ? "text-white/90 hover:text-white hover:bg-white/10" : "text-zinc-700 hover:text-zinc-900 hover:bg-black/5")
                  }`}
              >
                Workspaces
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Glass dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top ${isDropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
                  }`}
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div className="relative z-10 flex flex-col gap-0.5">
                  {workspaces.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${pathname === item.href
                        ? "bg-black text-white"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-black/5"
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/virtual-office"
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${pathname === "/virtual-office"
                ? (isDarkBg ? "bg-white/20 text-white" : "bg-black text-white")
                : (isDarkBg ? "text-white/90 hover:text-white hover:bg-white/10" : "text-zinc-700 hover:text-zinc-900 hover:bg-black/5")
                }`}
            >
              Virtual Office
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${pathname === "/contact"
                ? (isDarkBg ? "bg-white/20 text-white" : "bg-black text-white")
                : (isDarkBg ? "text-white/90 hover:text-white hover:bg-white/10" : "text-zinc-700 hover:text-zinc-900 hover:bg-black/5")
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Section / Booking CTA */}
          <div className="hidden lg:flex items-center justify-end w-40 md:w-64 shrink-0 gap-6">
            {/* Black CTA Button (Start now style) */}
            <button
              onClick={() => openBooking()}
              className={`group flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.03] ${isDarkBg ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-zinc-800"
                }`}
            >
              <span>Book Tour</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-zinc-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 flex justify-end ${isMobileMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`relative w-full max-w-sm h-full border-l border-black/10 p-8 flex flex-col justify-between transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{
            background: "rgba(250, 249, 246, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="mt-16 flex flex-col gap-6">
            <Link
              href="/about"
              className="text-xl font-serif text-zinc-900 hover:text-brand-orange transition-colors"
            >
              About Us
            </Link>
            <div className="h-[1px] bg-black/10" />
            <div className="flex flex-col gap-3">
              <span className="text-xs tracking-widest uppercase text-zinc-400 font-semibold">
                Workspace Solutions
              </span>
              {workspaces.map((w) => (
                <Link
                  key={w.href}
                  href={w.href}
                  className="text-base text-zinc-700 hover:text-brand-orange hover:translate-x-1 transition-all duration-200"
                >
                  {w.name}
                </Link>
              ))}
            </div>
            <div className="h-[1px] bg-black/10" />
            <Link
              href="/virtual-office"
              className="text-xl font-serif text-zinc-900 hover:text-brand-orange transition-colors"
            >
              Virtual Office
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-xl font-serif text-zinc-900 hover:text-brand-orange transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => openBooking()}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white text-center py-3.5 rounded-xl font-medium tracking-wide uppercase transition-all duration-300"
            >
              Book A Tour
            </button>
            <p className="text-zinc-500 text-xs text-center">
              +91 87005 13200 | info@22workspace.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
