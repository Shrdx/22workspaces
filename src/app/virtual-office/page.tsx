"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/components/BookingProvider";

/* ─── Pricing plan data (from actual business plans) ─── */
const plans = [
  {
    id: "basic",
    name: "Virtual Basic",
    tagline: "Corporate Premium Address Solution",
    badge: null,
    baseIncludes: null,
    features: [
      "Premium Business Address",
      "Courier Forwarding Facility",
      "Meeting Room & Conference Rooms at pay-and-use option",
    ],
  },
  {
    id: "classic",
    name: "Virtual Classic",
    tagline: "Statutory Registrations Solution",
    badge: null,
    baseIncludes: "Virtual Basic +",
    features: [
      "GST | Company Affairs Registration allowed",
      "Complimentary CA consultancy on structuring of the company",
    ],
  },
  {
    id: "premium",
    name: "Virtual Premium",
    tagline: "Run it like a Boss Solution",
    badge: "Most Popular",
    baseIncludes: "Virtual Classic +",
    features: [
      "Locker Facility (Books of Account, Fulfilling statutory registrations)",
      "1 Day pass per month",
      "2 Hrs. meeting room per month",
    ],
  },
  {
    id: "platinum",
    name: "Virtual Platinum",
    tagline: "Your own Personalised Office",
    badge: null,
    baseIncludes: "Virtual Premium +",
    features: [
      "Independent office with dedicated seat",
      "Proper allocation of seat along with signage at your desk",
    ],
  },
];

const faqs = [
  {
    q: "Can the 22Workspace address be used for GST registration?",
    a: "Yes. From Virtual Classic and above, the address is fully permitted for GST registration. We provide all required supporting documents — NOC, utility bills, and rent agreement — directly to you.",
  },
  {
    q: "Is the address valid for Company / ROC registration?",
    a: "Yes. Our A-grade commercial address on Asaf Ali Road, Central Delhi, is eligible for company incorporation and ROC filings. Virtual Classic and higher tiers include this explicitly.",
  },
  {
    q: "How does mail and courier handling work?",
    a: "Our front-desk team receives, signs for, and securely holds all incoming mail and packages addressed to your business. You can collect in person or request forwarding. This is included from Virtual Basic onwards.",
  },
  {
    q: "What documents do I need to activate my Virtual Office?",
    a: "Typically, you will need a KYC document (Aadhaar/PAN/Passport), a business identity proof, and a passport-size photograph. Our team will guide you through the exact checklist at the time of onboarding.",
  },
  {
    q: "Can I access physical workspace facilities?",
    a: "Virtual Basic allows meeting rooms and conference rooms on a pay-and-use basis. Virtual Premium includes one day pass and two hours of meeting room time per month. Virtual Platinum includes a dedicated private seat with personalised signage.",
  },
  {
    q: "How quickly can my Virtual Office be activated?",
    a: "Once your documents are verified and the agreement is signed, your Virtual Office is typically activated within 1-2 business days.",
  },
  {
    q: "Which plan should I choose?",
    a: "If you only need a prestigious address and mail handling, Virtual Basic is sufficient. For GST or company registration support, go with Virtual Classic. For ongoing compliance locker and workspace access, Virtual Premium is the most popular choice. Virtual Platinum is ideal for those who need their own dedicated seat and personalised office presence.",
  },
];

const services = [
  { num: "01", title: "Premium Business Address", body: "A recognised A-grade commercial address on Asaf Ali Road, Central Delhi — for your business cards, website, letterheads, and all official communications." },
  { num: "02", title: "Mail & Courier Handling", body: "Our front desk receives, signs for, and securely holds your incoming mail and packages. Forwarding available on request." },
  { num: "03", title: "GST Registration Support", body: "All required documents — NOC, utility bills, and rent agreement — provided to facilitate a smooth GST registration under your business name." },
  { num: "04", title: "Company / ROC Registration", body: "Use the 22Workspace address for MCA company incorporation and ROC filings. Complimentary CA consultancy included in Virtual Classic and above." },
  { num: "05", title: "Front Desk Assistance", body: "Our professional reception team handles client inquiries on your behalf and maintains the appearance of a fully operational office presence." },
  { num: "06", title: "Documentation & Compliance", body: "Locker facility for statutory books and compliance documents (from Virtual Premium), keeping your records organised and accessible." },
];

const steps = [
  { num: "01", title: "Select a Plan", body: "Choose the Virtual Office tier that matches your business needs — address only, registration support, or a full compliance setup." },
  { num: "02", title: "Submit Documents", body: "Provide KYC documents, business proof, and any required photographs. Our team reviews everything promptly." },
  { num: "03", title: "Sign & Verify", body: "Complete your Virtual Office agreement and verification. We handle the paperwork and guide you through compliance requirements." },
  { num: "04", title: "Go Live", body: "Your business address is activated. Start using it on communications, registrations, and your website immediately." },
];

const personas = [
  { label: "Remote-First Startups", desc: "Distributed teams working from home that need a professional front for clients, partners, and investors to build immediate credibility." },
  { label: "Freelancers & Consultants", desc: "Solo professionals protecting home address privacy while appearing as an established entity on official documents and invoices." },
  { label: "Expanding Enterprises", desc: "Regional or international companies establishing a compliance presence in North India without relocating staff immediately." },
  { label: "Businesses Entering Delhi/NCR", desc: "Companies from other states setting up a statutory footprint in the capital region for GST, ROC, or client-facing purposes." },
  { label: "Registered Professionals", desc: "CAs, lawyers, doctors, and other regulated professionals who require a credible registered office address for their practice." },
];

const specs = [
  { category: "Address & Mail", items: ["Premium commercial address usage", "Mail and package receipt", "Courier forwarding on request", "Dedicated front-desk support"] },
  { category: "Registrations & Compliance", items: ["GST Registration NOC provided", "ROC / Company Affairs Registration", "Utility bills and documentation support", "Physical locker for statutory books"] },
  { category: "Physical Access (Premium Plans)", items: ["Complimentary co-working day passes", "Conference room booking credits", "Access to community events", "Discounted daily rates"] },
];

const benefits = [
  { title: "A Recognised Commercial Address", description: "Our Asaf Ali Road address is an A-grade commercial location in Central Delhi — instantly recognisable to clients, banks, and government authorities alike.", image: "/co-working%20pics/co2.jpg" },
  { title: "Statutory Compliance Made Simple", description: "We supply every document needed for GST and ROC registrations — NOC, rent agreement, utility bills — ensuring you meet compliance requirements without delays.", image: "/assets/private.jpg" },
  { title: "Professional Mail Management", description: "Every letter, courier, and package addressed to your business is received by our front desk team, logged, and held securely or forwarded on your instruction.", image: "/assets/meeting.JPG" },
  { title: "Workspace Access, On Your Terms", description: "Book our conference rooms or co-working desks when you need a physical meeting or focused work session — at exclusive Virtual Office member rates.", image: "/co-working%20pics/co5.JPG" },
];

export default function VirtualOfficePage() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Virtual Office Registration in Delhi",
    "image": "https://www.22workspace.com/co-working%20pics/co2.jpg",
    "description": "Premium virtual office registration in Central Delhi. Get a professional business address for GST & ROC compliance with mail handling and front desk support.",
    "brand": {
      "@type": "Brand",
      "name": "22Workspace"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.22workspace.com/virtual-office",
      "priceCurrency": "INR",
      "price": "2000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className={`w-full bg-[#fbfaf8] text-zinc-900 min-h-screen `}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO */}
      <section className="relative w-full h-[85svh] min-h-[550px] bg-zinc-950 flex flex-col justify-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/co-working%20pics/co3.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute top-8 left-4 md:left-8 z-20 flex items-center gap-2 text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium text-white/90">
          <Link href="/" className="hover:text-[#ff5a36] transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <Link href="/#workspaces-showcase" className="hover:text-[#ff5a36] transition-colors">Workspaces</Link>
          <span className="opacity-40">/</span>
          <span className="text-white">Virtual Office</span>
        </div>
        <div className="relative z-10 px-4 md:px-8 pb-12 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="block text-[#ff5a36] text-sm md:text-base font-medium tracking-widest uppercase mb-3 md:mb-4">Corporate Identity</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] font-medium mb-4">Virtual Office Registration in Delhi</h1>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Establish a premium corporate presence at a prime Central Delhi address — with mail handling, GST &amp; company registration support, and on-demand workspace access. No physical lease required.
              </p>
            </motion.div>
          </div>
          <motion.div className="flex flex-col items-start md:items-end text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <button onClick={() => openBooking("Virtual Office")} className="bg-[#ff5a36] hover:bg-[#e04a29] text-white px-8 py-3 text-sm font-medium tracking-widest uppercase transition-colors">
              Inquire Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION + AT A GLANCE */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1400px] mx-auto border-b border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div className="lg:col-span-7" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">What is a Virtual Office?</span>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight leading-tight mb-6">
              All the credibility of a headquarters.<br />None of the overhead.
            </h2>
            <div className="text-zinc-600 leading-relaxed space-y-4 text-[15px]">
              <p className="text-justify">A Virtual Office gives your business a premium commercial address, comprehensive mailing and courier support, and statutory registration assistance — without requiring you to lease a desk or physical office space.</p>
              <p className="text-justify">22Workspace provides all necessary documentation including NOCs, utility bills, and rent agreements required for GST and ROC compliance. Our front desk team handles your mail, packages, and client inquiries professionally on your behalf.</p>
              <p className="text-justify">It is the fastest and most cost-effective way to build a credible, compliant corporate identity in Central Delhi — from anywhere in the world.</p>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-4 lg:col-start-9" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.55, delay: 0.12 }}>
            <div className="bg-white p-8 border border-zinc-200 shadow-sm">
              <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-6">At a Glance</h3>
              <dl className="flex flex-col gap-4">
                {[
                  { label: "Starting From", value: "₹2,000 / month" },
                  { label: "Commitment", value: "Annual Registration" },
                  { label: "Location", value: "Asaf Ali Road, Central Delhi" },
                  { label: "Mail Handling", value: "Included (all plans)" },
                  { label: "GST Support", value: "Classic & above" },
                  { label: "Physical Access", value: "On-demand / Included" },
                ].map((fact, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-zinc-100 last:border-0 last:pb-0">
                    <dt className="text-sm font-medium text-zinc-900">{fact.label}</dt>
                    <dd className="text-sm text-zinc-500 text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">Complete Service Overview</span>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight leading-tight max-w-2xl">
              Everything your business needs,<br />without a physical office
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zinc-200">
            {services.map((s, idx) => (
              <motion.div key={s.num} className="border-r border-b border-zinc-200 p-8 hover:bg-white transition-colors duration-300" custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#ff5a36] mb-4 block">{s.num}</span>
                <h3 className="text-[17px] font-medium text-zinc-900 mb-3 leading-snug">{s.title}</h3>
                <p className="text-zinc-500 text-[15px] leading-relaxed text-justify">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLANS & PRICING */}
      <section id="virtual-office-plans" className="px-4 md:px-8 py-16 md:py-28 border-b border-zinc-200 bg-[#fbfaf8]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">Plans & Pricing</span>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight leading-tight mb-4 max-w-2xl">
              Four tiers. One address.<br />The right fit for every business.
            </h2>
            <p className="text-zinc-500 text-[15px] max-w-xl leading-relaxed text-justify">Each plan builds on the previous. Choose the level of support your business requires and upgrade at any time.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                custom={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp}
                className={`relative flex flex-col border transition-all duration-300 ${plan.badge ? "border-[#ff5a36] bg-white shadow-[0_4px_32px_rgba(255,90,54,0.10)]" : "border-zinc-200 bg-white hover:border-zinc-300"}`}
              >
                {plan.badge && <div className="absolute -top-px left-0 right-0 h-[3px] bg-[#ff5a36]" />}
                {plan.badge && (
                  <span className="absolute -top-3 left-6 bg-[#ff5a36] text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1">{plan.badge}</span>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <h3 className="text-[19px] font-medium text-zinc-900 mb-1 tracking-tight">{plan.name}</h3>
                    <p className="text-[#ff5a36] text-[13px] font-medium">{plan.tagline}</p>
                  </div>
                  <div className="flex-1 mb-8">
                    {plan.baseIncludes && (
                      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-400 mb-4">{plan.baseIncludes}</p>
                    )}
                    <ul className="space-y-3">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-[14px] text-zinc-600 leading-relaxed">
                          <span className="text-[#ff5a36] mt-0.5 shrink-0">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => openBooking(`Virtual Office - ${plan.name}`)}
                    className={`w-full py-3 text-sm font-medium tracking-widest uppercase transition-colors ${plan.badge ? "bg-[#ff5a36] hover:bg-[#e04a29] text-white" : "border border-zinc-300 hover:border-[#ff5a36] hover:text-[#ff5a36] text-zinc-700"}`}
                  >
                    Contact Us Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p className="text-center text-xs text-zinc-400 mt-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            All plans are on an annual registration basis. Pricing is available on inquiry. Contact our team for a personalised quote.
          </motion.p>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">The Process</span>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight leading-tight max-w-xl">From inquiry to activation in four steps</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-zinc-200 z-0" />
            {steps.map((step, idx) => (
              <motion.div key={step.num} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} className="relative flex flex-col items-start md:items-center md:text-center px-0 md:px-6 mb-10 md:mb-0">
                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-zinc-200 bg-[#fbfaf8] flex items-center justify-center mb-5 shrink-0">
                  <span className="text-[#ff5a36] font-semibold text-sm tracking-widest">{step.num}</span>
                </div>
                <h3 className="text-[16px] font-medium text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed max-w-[220px] text-justify">{step.body}</p>
                {idx < steps.length - 1 && <div className="md:hidden w-px h-8 bg-zinc-200 ml-7 my-2" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS WITH IMAGES */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">The Space Behind Your Brand</span>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight leading-tight max-w-2xl">A real workspace. Available whenever you need it.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {benefits.map((benefit, idx) => (
              <motion.div key={idx} className="flex flex-col" custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <div className="w-full aspect-[16/9] mb-6 bg-zinc-100 overflow-hidden">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[19px] font-medium text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-[15px] text-justify">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO THIS IS FOR + SPECIFICATIONS */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sticky top-24">
              <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">Ideal For</span>
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-8 leading-tight tracking-tight">Who This Is For</h2>
              <div className="flex flex-col gap-0 border-t border-zinc-200">
                {personas.map((p, idx) => (
                  <motion.div key={idx} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-5 border-b border-zinc-100">
                    <p className="font-medium text-zinc-900 text-[15px] mb-1">{p.label}</p>
                    <p className="text-zinc-500 text-[14px] leading-relaxed text-justify">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">Inclusions</span>
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-8 leading-tight tracking-tight">Specifications</h2>
            </motion.div>
            <div className="flex flex-col">
              {specs.map((specGroup, idx) => (
                <motion.div key={idx} className="py-7 border-t border-zinc-200 first:border-t-0 first:pt-0" custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h4 className="text-xs font-semibold text-zinc-400 mb-5 uppercase tracking-widest">{specGroup.category}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {specGroup.items.map((item, j) => (
                      <li key={j} className="text-[14px] text-zinc-600 flex items-start gap-2">
                        <span className="text-[#ff5a36] mt-1 shrink-0">•</span>
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

      {/* 8. FAQ */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <motion.div className="lg:col-span-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">FAQ</span>
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-5 leading-tight tracking-tight">Common questions about Virtual Office</h2>
              <p className="text-zinc-500 text-[15px] leading-relaxed text-justify">Have a question not listed here? Reach out to our team directly and we will respond within one business day.</p>
              <button onClick={() => openBooking("Virtual Office")} className="mt-8 border border-zinc-300 hover:border-[#ff5a36] hover:text-[#ff5a36] text-zinc-700 px-6 py-3 text-xs font-medium tracking-widest uppercase transition-colors">
                Ask a Question
              </button>
            </motion.div>
            <div className="lg:col-span-8">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} className="border-b border-zinc-100">
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-start justify-between gap-6 py-5 text-left group" aria-expanded={openFaq === idx}>
                    <span className="text-[15px] font-medium text-zinc-900 leading-snug group-hover:text-[#ff5a36] transition-colors">{faq.q}</span>
                    <span className={`shrink-0 w-5 h-5 rounded-full border border-zinc-300 flex items-center justify-center transition-transform duration-300 mt-0.5 ${openFaq === idx ? "rotate-45 border-[#ff5a36]" : ""}`}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M4.5 0v9M0 4.5h9" stroke={openFaq === idx ? "#ff5a36" : "#71717a"} strokeWidth="1.5" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                        <p className="text-[14px] text-zinc-500 leading-relaxed pb-5 pr-8 text-justify">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="bg-zinc-900 text-white px-4 md:px-8 py-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl">
            <span className="block text-[#ff5a36] text-xs font-semibold uppercase tracking-widest mb-4">Get Started Today</span>
            <h2 className="text-3xl md:text-4xl font-medium mb-3 leading-tight tracking-tight">
              Your business address is ready.<br />Are you?
            </h2>
            <p className="text-zinc-400 text-[15px] leading-relaxed text-justify">
              Starting from ₹2,000 / month on an annual basis. Select a plan, submit your documents, and your Virtual Office at a prime Central Delhi address is active within days.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.14 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <a href="#virtual-office-plans" className="px-8 py-3.5 border border-white/20 hover:border-white/60 text-white text-sm font-medium tracking-widest uppercase transition-colors">
              View Plans
            </a>
            <button onClick={() => openBooking("Virtual Office")} className="px-8 py-3.5 bg-[#ff5a36] hover:bg-[#e04a29] text-white text-sm font-medium tracking-widest uppercase transition-colors">
              Inquire Now
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

