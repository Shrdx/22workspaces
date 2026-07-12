"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  Monitor,
  Users,
  Sparkles,
  Zap,
  Sofa,
  Coffee,
} from "lucide-react";
import { useBooking } from "@/components/BookingProvider";

export default function Home() {
  const { openBooking } = useBooking();
  const [heroTab, setHeroTab] = useState(0);
  const [heroLocation, setHeroLocation] = useState("Corporate House, Asaf Ali Road");
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const marqueeRafRef = useRef<number>(0);
  const marqueeOffsetRef = useRef(0);
  const marqueePausedRef = useRef(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [heroTextOpacity, setHeroTextOpacity] = useState(1);


  const slideshowImages = [
    "/co-working%20pics/co1.jpg",
    "/co-working%20pics/co2.jpg",
    "/co-working%20pics/co3.jpg",
    "/co-working%20pics/co4.jpg",
    "/co-working%20pics/co5.JPG",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  /* Parallax + hero text fade */
  const heroBgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleScroll = () => {
      const y = window.scrollY;
      // parallax background
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${y * 0.35}px)`;
      }
      // fade hero text out over first 220px of scroll
      setHeroTextOpacity(Math.max(0, 1 - y / 220));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  /* Infinite marquee — RAF loop */
  const CARD_SLOT = 364; // 340px card + 24px gap
  const SINGLE_SET = CARD_SLOT * 6; // one full copy of 6 cards
  const SPEED = 0.55; // px per frame

  useEffect(() => {
    if (prefersReducedMotion) return;
    const tick = () => {
      if (!marqueePausedRef.current && marqueeTrackRef.current) {
        marqueeOffsetRef.current += SPEED;
        if (marqueeOffsetRef.current >= SINGLE_SET) {
          marqueeOffsetRef.current -= SINGLE_SET;
        }
        marqueeTrackRef.current.style.transform = `translateX(-${marqueeOffsetRef.current}px)`;
      }
      marqueeRafRef.current = requestAnimationFrame(tick);
    };
    marqueeRafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(marqueeRafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  const nudgeMarquee = (dir: 1 | -1) => {
    marqueeOffsetRef.current = (marqueeOffsetRef.current + dir * CARD_SLOT + SINGLE_SET * 2) % SINGLE_SET;
    if (marqueeTrackRef.current) {
      marqueeTrackRef.current.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
      marqueeTrackRef.current.style.transform = `translateX(-${marqueeOffsetRef.current}px)`;
      setTimeout(() => {
        if (marqueeTrackRef.current) marqueeTrackRef.current.style.transition = '';
      }, 460);
    }
  };

  /* Trackpad / mousepad two-finger horizontal scroll on marquee */
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      // Only intercept genuinely horizontal gestures (two-finger horizontal swipe)
      // Let ALL vertical scroll pass through to the page untouched
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (absX <= absY || absX < 5) return; // vertical-dominant or negligible → ignore
      e.preventDefault(); // only prevent default for horizontal swipes
      const sensitivity = 1.2;
      marqueeOffsetRef.current =
        ((marqueeOffsetRef.current + e.deltaX * sensitivity) % SINGLE_SET + SINGLE_SET) % SINGLE_SET;
      if (marqueeTrackRef.current) {
        marqueeTrackRef.current.style.transform = `translateX(-${marqueeOffsetRef.current}px)`;
      }
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Cursor-reactive glow */
  useEffect(() => {
    let raf = 0;
    const handleMouse = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!glowRef.current) return;
        const rect = glowRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        glowRef.current.style.setProperty('--gx', `${x}%`);
        glowRef.current.style.setProperty('--gy', `${y}%`);
      });
    };
    const el = glowRef.current;
    el?.addEventListener('mousemove', handleMouse, { passive: true });
    return () => { el?.removeEventListener('mousemove', handleMouse); };
  }, []);

  const workspaces = [
    {
      id: "dedicated",
      num: "01",
      title: "Dedicated Seat",
      price: "₹7,000 / month",
      desc: "Get all the good stuff that comes with a hot/flexible desk, but with your own permanently fixed workstation in a premium community environment.",
      specs: ["Fixed desk setup", "8 AM to 8 PM Access", "High-speed secure Wi-Fi", "Locker storage access"],
      img: "/assets/dedicated.JPG",
      href: "/dedicated-seat",
    },
    {
      id: "private",
      num: "02",
      title: "Private Office",
      price: "From ₹7,000 / desk / month",
      desc: "Fully furnished, ready to move-in private spaces. Large enough to accommodate teams of 2 up to 50 people, with unlimited expansion possibilities.",
      specs: ["Lockable physical office", "Flexible sizing (2-15 seats)", "24/7 keycard option available", "CCTV secure zone"],
      img: "/assets/private.jpg",
      href: "/private-office",
    },
    {
      id: "open",
      num: "03",
      title: "Open Space",
      price: "₹5,000 / month",
      desc: "Come, Chill and Work! Flexible hot-desking setups perfect for independent professionals and remote workers who love a dynamic and energetic vibe.",
      specs: ["Flexible hot desk selection", "Spacious breakout areas", "Unlimited internet connectivity", "Access to cafeteria"],
      img: "/assets/open space.jpg",
      href: "/open-space",
    },
    {
      id: "meeting",
      num: "04",
      title: "Meeting Rooms",
      price: "From ₹300 / hour",
      desc: "Brainstorm with your team. High-end, naturally-lit boardrooms with large glass windows and panoramic views, built for comfort and collaboration.",
      specs: ["4, 6, & 8 Pax Options", "Smart LED projector & AV setup", "Naturally illuminated layouts", "Free premium high-speed Wi-Fi"],
      img: "/assets/meeting.JPG",
      href: "/meeting-room",
    },
    {
      id: "event",
      num: "05",
      title: "Events Space",
      price: "From ₹1,500 / hour",
      desc: "The perfect venue to host workshops, networking dinners, or training sessions. Accommodates up to 30 delegates with customized hospitality options.",
      specs: ["Up to 30 delegates", "Professional projection facility", "Flexible seating configs", "Catering & support options"],
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000",
      href: "/event",
    },
  ];

  const benefits = [
    { title: "Premium Workstations", desc: "Ergonomic desks, comfortable seating, and thoughtfully planned spaces designed for focused, productive work.", Icon: Monitor },
    { title: "Executive Meeting Rooms", desc: "Fully equipped meeting spaces designed for presentations, client discussions, workshops, and important conversations.", Icon: Users },
    { title: "Professional Community", desc: "Connect and work alongside entrepreneurs, professionals, consultants, and growing businesses.", Icon: Sparkles },
    { title: "High-Speed Connectivity", desc: "Reliable high-speed internet and backup connectivity designed to keep your business running without interruption.", Icon: Zap },
    { title: "Reception & Business Support", desc: "Professional front-desk assistance to welcome guests, manage correspondence, and support your everyday operations.", Icon: Sofa },
    { title: "Café & Breakout Spaces", desc: "Comfortable spaces to recharge, connect with colleagues, and enjoy complimentary tea and coffee throughout the day.", Icon: Coffee },
  ];

  const tabVariants: Variants = {
    enter: { opacity: 0, y: 8 },
    center: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const numVariants: Variants = {
    enter: { opacity: 0, scale: 0.85 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-space-light">

      {/* 1. Cinematic Hero Section */}
      <style suppressHydrationWarning>{`main { padding-top: 0 !important; }`}</style>
      <section className="relative flex flex-col items-center justify-center pt-32 pb-[10vh] overflow-hidden bg-[#0f0f11]" style={{ minHeight: "100vh" }}>
        {/* Parallax Background Slideshow */}
        <div
          ref={heroBgRef}
          className="absolute inset-0 will-change-transform z-0"
          style={{ top: "-10%", bottom: "-10%" }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 40%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(15,15,17,1) 100%), url('${slideshowImages[currentSlide]}')`,
              }}
            />
          </AnimatePresence>
        </div>

        {/* Orange Glow spotlight at the top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-10 opacity-50"
          style={{
            background: "radial-gradient(circle at 50% -20%, rgba(255, 106, 0, 0.15) 0%, rgba(255, 106, 0, 0.05) 40%, transparent 70%)",
          }}
        />

        {/* Hero Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: heroTextOpacity, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center"
          style={{ transition: "opacity 0.05s linear" }}
        >
          <div className="flex flex-col items-center mb-6">
            <span className="text-zinc-300 text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-center max-w-xs leading-relaxed opacity-80">
              — Serious Workspaces &middot; Sensible Prices
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,7vw,7.5rem)] text-white leading-[0.95] tracking-[-0.02em] mb-8 font-serif font-normal" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>
            Space to work.<br />
            <span className="italic text-brand-orange font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Room to grow.</span>
          </h1>

          <p className="text-white/75 text-[17px] md:text-[20px] max-w-[650px] leading-[1.6] mb-10 font-normal">
            Premium workspaces in Central Delhi, designed for ambitious teams, entrepreneurs, and growing businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="#workspaces-showcase"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(255,106,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,106,0,0.5)] hover:-translate-y-0.5"
            >
              Explore Workspaces
            </Link>
            <button
              onClick={() => openBooking()}
              className="group w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book a Tour</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: heroTextOpacity > 0.5 ? 0.7 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

      </section>

      {/* 2. Brand Narrative */}
      <section className="py-24 border-t border-black/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="space-y-6">
                <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest block" style={{ fontFamily: 'var(--font-satoshi)' }}>Who We Are</span>
                <h2 className="text-4xl md:text-5xl text-zinc-900 tracking-tight leading-tight" style={{ fontFamily: 'Geist', fontWeight: 600, lineHeight: 1.1 }}>
                  {"An ecosystem designed for optimal scaling".split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </h2>
              </div>
              {/* User Image Placement */}
              <div className="w-full h-64 md:h-80 bg-zinc-100 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center border border-zinc-200 mt-2">
                <span className="text-zinc-400 font-medium text-sm tracking-wide">Image Placement</span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1 }}
                className="text-zinc-600 text-xl leading-relaxed"
                style={{ fontFamily: 'Geist', fontWeight: 400 }}
              >
                <span className="block mb-5">
                  22workspace is a premium business center designed for modern businesses, entrepreneurs, and professionals who value flexibility, convenience, and a productive work environment. We offer fully managed, plug-and-play office spaces that allow businesses of all sizes to establish, operate, and grow without the complexities of managing traditional office infrastructure.
                </span>
                <span className="block mb-5">
                  Our approach goes beyond simply providing a workspace. We create a professional ecosystem where businesses can focus entirely on what matters most — their growth. From thoughtfully designed offices and essential infrastructure to security, operational support, and a collaborative professional community, every aspect of 22workspace is built to make running your business simpler.
                </span>
                <span className="block mb-5">
                  We believe in shifting businesses away from heavy capital expenditure toward a more flexible and efficient operating model. With our philosophy of <strong className="text-zinc-900 font-semibold">&ldquo;pay for what you use,&rdquo;</strong> you gain access to the workspace, infrastructure, and services your business needs without unnecessary long-term investments.
                </span>
                <span className="block">
                  Whether you are an independent professional, an emerging startup, or an established organization looking to expand, 22workspace provides the flexibility and support required to scale confidently. With allied legal and financial consultancy services available within our ecosystem, we aim to be more than just your workspace — we aim to be a long-term partner in your business growth.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Workspaces Showcase */}
      <section id="workspaces-showcase" className="bg-space-grey py-28 border-t border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-2" style={{ fontFamily: 'var(--font-satoshi)' }}>Our Solutions</span>
            <h2 className="text-4xl md:text-6xl text-zinc-900" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 600, lineHeight: 1.08 }}>Premium Workspaces</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workspaces.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link href={item.href} className="block group h-full">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5 h-full flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-[260px] w-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${item.img}')` }}
                      />
                    </div>

                    {/* Content Area */}
                    <div className="p-7 md:p-8 flex flex-col flex-grow">
                      {/* Title & Arrow */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[1.75rem] text-zinc-900 tracking-tight" style={{ fontFamily: 'Geist', fontWeight: 600 }}>
                          {item.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0 ml-4">
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-500 text-[15.5px] leading-[1.65] mb-8 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Details & CTA */}
                      <div className="mt-auto flex items-end justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2.5 text-zinc-700 text-[14px] font-medium" style={{ fontFamily: 'var(--font-satoshi)' }}>
                            <svg className="w-[18px] h-[18px] text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {item.specs[0]}
                          </div>
                          <div className="flex items-center gap-2.5 text-zinc-700 text-[14px] font-medium" style={{ fontFamily: 'var(--font-satoshi)' }}>
                            <svg className="w-[18px] h-[18px] text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {item.price}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            openBooking();
                          }}
                          className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-colors"
                          style={{ fontFamily: 'var(--font-satoshi)' }}
                        >
                          Explore Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Membership Benefits */}
      <section className="py-32 relative overflow-hidden" style={{ background: '#0f0f11' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', left: '-80px', width: 400, height: 400, borderRadius: '50%', background: 'rgba(217,98,46,0.06)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: 360, height: 360, borderRadius: '50%', background: 'rgba(255,180,80,0.05)', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className="max-w-2xl mx-auto mb-20 space-y-4 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#ff6a00', display: 'block' }}>Elevate Your Day</span>
            <h2 style={{ fontFamily: 'Sora', fontWeight: 600, fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: '#ffffff', lineHeight: 1.1, marginTop: '0.5rem' }}>Membership Benefits</h2>
            <p className="text-zinc-400" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400, fontSize: '1.125rem', lineHeight: 1.7, margin: '1rem auto 0', maxWidth: '38rem' }}>
              Thoughtfully designed spaces, essential amenities, and professional support — everything your business needs to work better and grow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.15, ease: "easeOut" }}
                className="h-full"
              >
                <div
                  className="group relative h-full flex flex-col justify-between overflow-hidden bg-[#161618] border border-white/5 rounded-[1.25rem] p-8 md:p-10 transition-all duration-300 hover:-translate-y-[6px] hover:border-brand-orange/20"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/5 flex items-center justify-center mb-6 transition-colors duration-300">
                      <benefit.Icon className="w-6 h-6 text-brand-orange transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'Geist', fontWeight: 500, lineHeight: 1.3 }}>
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 text-[15px] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                  {/* Decorative Expanding Line */}
                  <div className="mt-8 relative z-10">
                    <div className="w-6 h-0.5 bg-brand-orange/40 rounded-full transition-all duration-300 group-hover:w-12 group-hover:bg-brand-orange" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Locations */}
      <section className="py-28 border-t border-black/5" style={{ background: '#F4F1EC' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="max-w-2xl mx-auto mb-16 space-y-3 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest block" style={{ fontFamily: 'var(--font-satoshi)', color: '#D9622E' }}>Where you&apos;ll find us</span>
            <h2 className="text-4xl md:text-5xl text-zinc-900" style={{ fontFamily: 'Sora', fontWeight: 600, lineHeight: 1.1 }}>Our Locations</h2>
            <p className="text-zinc-500 text-base leading-relaxed" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400 }}>
              Centrally situated offices in Delhi with excellent metro connectivity — saving you and your team time every single day.
            </p>
          </motion.div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Corporate House",
                addr: "1/22, Asaf Ali Road, New Delhi 110002",
                metro: "Near New Delhi Metro Station",
                desc: "Central Delhi address with direct metro access and a professional corporate environment.",
                mapLink: "https://www.google.com/maps/search/1%2F22+Asaf+Ali+Road+New+Delhi+110002"
              },
              {
                name: "Sab House",
                addr: "3/8, Asaf Ali Road, New Delhi 110002",
                metro: "Near Delhi Gate Metro Station",
                desc: "Spacious layouts and glass facades in the heart of the city, steps from Delhi Gate Metro.",
                mapLink: "https://www.google.com/maps/search/3%2F8+Asaf+Ali+Road+New+Delhi+110002"
              },
              {
                name: "East of Kailash Center",
                addr: "A-77, East of Kailash, New Delhi",
                metro: "South Delhi District",
                desc: "A boutique business center serving South Delhi's growing community of founders and professionals.",
                mapLink: "https://www.google.com/maps/search/A-77+East+of+Kailash+New+Delhi"
              }
            ].map((loc, i) => (
              <motion.div
                key={i}
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="bg-white rounded-2xl border border-black/5 overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:border-brand-orange/20 hover:shadow-sm">

                  {/* Card Header */}
                  <div className="p-7 pb-5 flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400" style={{ fontFamily: 'var(--font-satoshi)' }}>0{i + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-brand-orange block mt-1" />
                    </div>

                    <h3 className="text-zinc-900 text-2xl mb-2 leading-tight" style={{ fontFamily: 'Sora', fontWeight: 600 }}>
                      {loc.name}
                    </h3>

                    <p className="text-brand-orange text-[11px] font-semibold uppercase tracking-[0.13em] mb-4" style={{ fontFamily: 'var(--font-satoshi)' }}>
                      {loc.metro}
                    </p>

                    <p className="text-zinc-500 text-[14.5px] leading-relaxed" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400 }}>
                      {loc.desc}
                    </p>
                  </div>

                  {/* Address & Map */}
                  <div className="px-7 pb-7 border-t border-black/5 pt-5">
                    <p className="text-[10.5px] uppercase tracking-[0.15em] text-zinc-400 font-semibold mb-1" style={{ fontFamily: 'var(--font-satoshi)' }}>Address</p>
                    <p className="text-zinc-600 text-[13.5px] font-medium mb-4 leading-snug" style={{ fontFamily: 'var(--font-satoshi)' }}>
                      {loc.addr}
                    </p>
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl overflow-hidden border border-black/5 transition-all duration-300 group-hover:border-brand-orange/20"
                      style={{ height: '160px' }}
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.addr)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                        style={{ border: 0, pointerEvents: 'none', display: 'block' }}
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Virtual Office CTA */}
      <motion.section
        className="relative py-20 md:py-24 overflow-hidden"
        initial={{ backgroundColor: '#F4F1EC' }}
        whileInView={{ backgroundColor: '#0f0f11' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-brand-orange text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-satoshi)' }}>
            Flexible Scaling Solution
          </span>

          <h2 className="text-3xl md:text-5xl text-white max-w-2xl mx-auto mb-5" style={{ fontFamily: 'Sora', fontWeight: 600, lineHeight: 1.15 }}>
            Establish a Presence Without the Overhead
          </h2>

          <p className="text-zinc-400 text-[15px] md:text-lg max-w-[42rem] mx-auto leading-relaxed mb-10" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 400 }}>
            Avail of a premier corporate mailing address, company registration, and GST representation with our Virtual Office solutions starting at minimal pricing.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/virtual-office"
              className="group inline-flex items-center gap-2 relative z-10 px-8 py-3.5 rounded-full bg-brand-orange text-white text-[13px] font-semibold tracking-[0.05em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(217,98,46,0.25)]"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              Explore Virtual Plans
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
