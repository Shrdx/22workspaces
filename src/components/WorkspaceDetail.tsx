"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { useBooking } from "@/components/BookingProvider";

const geist = localFont({
  src: "../../public/geist-font/Geist/webfonts/Geist[wght].woff2",
  variable: "--font-geist",
});

export interface Specification {
  category: string;
  items: string[];
}

export interface Benefit {
  title: string;
  description: string;
  image?: string;
}

export interface WorkspaceDetailProps {
  title: string;
  categoryName: string;
  valueProposition: string;
  price: string;
  narrative: React.ReactNode;
  atAGlance: { label: string; value: string }[];
  benefits: Benefit[];
  whoItIsFor: React.ReactNode;
  specifications: Specification[];
  mainImage: string;
  galleryImages: string[];
  bookingType: string;
}

export function WorkspaceDetail({
  title,
  categoryName,
  valueProposition,
  price,
  narrative,
  atAGlance,
  benefits,
  whoItIsFor,
  specifications,
  mainImage,
  galleryImages,
  bookingType,
}: WorkspaceDetailProps) {
  const { openBooking } = useBooking();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [mainImage, ...galleryImages];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      if (e.key === "ArrowLeft") setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, allImages.length]);

  return (
    <div className={`w-full bg-[#fbfaf8] text-zinc-900 min-h-screen ${geist.className}`}>
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[85svh] min-h-[550px] bg-zinc-950 flex flex-col justify-end">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${mainImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        
        {/* Breadcrumb */}
        <div className="absolute top-8 left-4 md:left-8 z-20 flex items-center gap-2 text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium text-white/90">
          <Link href="/" className="hover:text-[#ff5a36] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <Link href="/#workspaces" className="hover:text-[#ff5a36] transition-colors">Workspaces</Link>
          <span className="opacity-40">/</span>
          <span className="text-white">{title}</span>
        </div>

        <div className="relative z-10 px-4 md:px-8 pb-12 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-[#ff5a36] text-sm md:text-base font-medium tracking-widest uppercase mb-3 md:mb-4">
                {categoryName}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] font-medium mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl text-justify">
                {valueProposition}
              </p>
            </motion.div>
          </div>
          <motion.div 
            className="flex flex-col items-start md:items-end text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-2xl md:text-3xl font-medium tracking-tight mb-4">{price}</div>
            <button 
              onClick={() => openBooking(bookingType)}
              className="bg-[#ff5a36] hover:bg-[#e04a29] text-white px-8 py-3 text-sm font-medium tracking-widest uppercase transition-colors"
            >
              Book a Tour
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction & At a Glance */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1400px] mx-auto border-b border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.div 
              className="text-xl text-zinc-700 leading-relaxed font-light max-w-none text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              {narrative}
            </motion.div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <motion.div 
              className="bg-white p-8 border border-zinc-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-6">At a Glance</h3>
              <dl className="flex flex-col gap-4">
                {atAGlance.map((fact, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-zinc-100 last:border-0 last:pb-0">
                    <dt className="text-sm font-medium text-zinc-900">{fact.label}</dt>
                    <dd className="text-sm text-zinc-500 text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Designed Around Your Workday (Benefits) */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1400px] mx-auto">
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-zinc-900 tracking-tight font-medium">
            Designed Around Your Workday
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {benefit.image && (
                <div className="w-full aspect-[16/9] mb-6 bg-zinc-100 overflow-hidden">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-xl font-medium text-zinc-900 mb-3">{benefit.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-justify">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>



      {/* 5. Who This Is For & Specifications Split */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Who This Is For */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <h2 className="text-2xl font-medium text-zinc-900 mb-6">Who This Is For</h2>
              <div className="text-lg text-zinc-600 leading-relaxed text-justify">
                {whoItIsFor}
              </div>
            </motion.div>
          </div>

          {/* Specifications */}
          <div className="lg:col-span-8">
             <motion.h2 
              className="text-2xl font-medium text-zinc-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Specifications
            </motion.h2>
            <div className="flex flex-col">
              {specifications.map((specGroup, idx) => (
                <motion.div 
                  key={idx}
                  className="py-6 border-t border-zinc-200 first:border-t-0 first:pt-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <h4 className="text-sm font-medium text-zinc-900 mb-4 uppercase tracking-widest">
                    {specGroup.category}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {specGroup.items.map((item, j) => (
                      <li key={j} className="text-sm text-zinc-600 flex items-start gap-2">
                        <span className="text-[#ff5a36] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* 7. Compact High-Conversion CTA */}
      <section className="bg-zinc-900 text-white px-4 md:px-8 py-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-2">Secure your {title.toLowerCase()}.</h2>
            <p className="text-zinc-400 text-lg text-justify">Starting from {price}. Experience it yourself.</p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
          >
             <button
              onClick={() => openBooking(bookingType)}
              className="bg-[#ff5a36] hover:bg-[#e04a29] text-white px-10 py-4 text-sm font-medium tracking-widest uppercase transition-colors"
            >
              Inquire Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bespoke Lightbox Gallery */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Lightbox Header */}
            <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-10">
              <span className="text-white/60 text-xs tracking-widest uppercase">
                {currentImageIndex + 1} / {allImages.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="text-white hover:text-[#ff5a36] transition-colors p-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Lightbox Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={allImages[currentImageIndex]}
                  alt="Gallery preview"
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>

            {/* Controls */}
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors bg-black/20 hover:bg-black/50 rounded-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors bg-black/20 hover:bg-black/50 rounded-full"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
