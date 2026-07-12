"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

interface WorkspaceDetailProps {
  title: string;
  headline: string;
  price: string;
  narrative: React.ReactNode;
  specifications: Specification[];
  mainImage: string;
  galleryImages: string[];
  bookingType: string;
}

export function WorkspaceDetail({
  title, 
  headline, 
  price, 
  narrative, 
  specifications, 
  mainImage, 
  galleryImages, 
  bookingType
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
    <div className={`w-full bg-[#fcfcfc] text-zinc-900 min-h-screen ${geist.className}`}>
      
      {/* 1. 100vh Immersive Hero */}
      <section className="relative w-full h-[100svh] min-h-[600px] bg-zinc-950 flex flex-col justify-end">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] ease-out hover:scale-[1.02]"
          style={{ backgroundImage: `url('${mainImage}')` }}
        />
        {/* Very subtle gradient just for text readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        {/* Navigation Breadcrumb (Integrated seamlessly) */}
        <div className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-white/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="opacity-50">—</span>
          <Link href="/#workspaces" className="hover:text-white transition-colors">Workspaces</Link>
          <span className="opacity-50">—</span>
          <span className="text-white">{title}</span>
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-[6rem] text-white tracking-tighter leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontWeight: 400 }}
            >
              {title}
            </motion.h1>
          </div>
          <motion.div 
            className="flex flex-col items-start md:items-end text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl font-light tracking-tight">{price}</p>
            <button 
              onClick={() => openLightbox(0)}
              className="mt-4 text-xs uppercase tracking-[0.15em] border-b border-white/30 hover:border-white pb-1 transition-colors flex items-center gap-2"
            >
              View Gallery
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. The Narrative (Introduction) */}
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
              {headline}
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-32">
            <motion.div 
              className="text-xl md:text-2xl text-zinc-600 font-light leading-[1.6]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              {narrative}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Image Composition */}
      {galleryImages.length >= 2 && (
        <section className="pb-32 md:pb-48 px-4 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
            {/* First Image - Large */}
            <motion.div 
              className="md:col-span-8 cursor-pointer group"
              onClick={() => openLightbox(1)}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden bg-zinc-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                  style={{ backgroundImage: `url('${galleryImages[0]}')` }}
                />
              </div>
            </motion.div>
            
            {/* Second Image - Offset */}
            <motion.div 
              className="md:col-span-4 mt-8 md:mt-[30vh] cursor-pointer group"
              onClick={() => openLightbox(2)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden bg-zinc-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                  style={{ backgroundImage: `url('${galleryImages[1]}')` }}
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mt-6 md:mt-8 ml-2">Click to expand</p>
            </motion.div>
          </div>

          {/* Optional Third Image Full Bleed */}
          {galleryImages.length > 2 && (
             <motion.div 
             className="w-full mt-24 md:mt-48 cursor-pointer group"
             onClick={() => openLightbox(3)}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
             <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-zinc-100">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                 style={{ backgroundImage: `url('${galleryImages[2]}')` }}
               />
             </div>
           </motion.div>
          )}
        </section>
      )}

      {/* 4. Specifications (Typographic Index) */}
      <section className="px-6 md:px-12 py-32 md:py-40 bg-white border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            className="mb-20 md:mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl text-zinc-900 tracking-tight" style={{ fontWeight: 400 }}>
              Specifications
            </h3>
          </motion.div>

          <div className="flex flex-col w-full">
            {specifications.map((specGroup, idx) => (
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

      {/* 5. The Conclusion (Immersive CTA) */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
        {/* Optional abstract background or extremely blurred image for depth */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)`
        }} />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.05] mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontWeight: 300 }}
          >
            Ready to secure your space?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={() => openBooking(bookingType)}
              className="group relative inline-flex text-white text-xl md:text-3xl font-light tracking-tight items-center gap-6 overflow-hidden pb-2"
            >
              <span>Inquire Now</span>
              <svg className="w-8 h-8 transition-transform duration-500 group-hover:translate-x-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 transform origin-right scale-x-100 transition-transform duration-500 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-0 transition-transform duration-500 delay-100 group-hover:scale-x-100" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bespoke Lightbox Gallery */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-center items-center backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeLightbox}
          >
            {/* Lightbox Header */}
            <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-10">
              <span className="text-white/60 text-xs tracking-widest uppercase">
                {currentImageIndex + 1} / {allImages.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="text-white hover:text-white/70 transition-colors p-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Lightbox Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={allImages[currentImageIndex]}
                  alt="Gallery preview"
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                />
              </AnimatePresence>
            </div>

            {/* Controls */}
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
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
