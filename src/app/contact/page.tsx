"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name: letters and spaces only, at least 2 characters
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email: proper format validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone: 10-digit Indian number, optionally prefixed with +91 or 0
    const digitsOnly = formData.phone.trim().replace(/[\s\-()]/g, '');
    const phonePattern = /^(\+91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phonePattern.test(digitsOnly)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    // Message: must not be empty
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('loading');
    
    try {
      await emailjs.send(
        'service_8akx5ec',
        'template_mz4wljg',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          product: 'Contact Page Inquiry',
          location: 'N/A'
        },
        'X4NZa6nOpWqm2wysj'
      );
      
      setStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error("FAILED to send email", error);
      setStatus('idle');
      alert("Failed to send message. Please try again later.");
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "22Workspace",
    "image": "https://www.22workspace.com/assets/coworking1.jpg",
    "url": "https://www.22workspace.com/contact",
    "telephone": "+918700513200",
    "email": "hello@22workspace.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1/22, Asaf Ali Road",
      "addressLocality": "New Delhi",
      "postalCode": "110002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6415,
      "longitude": 77.2311
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-space-light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange text-xs font-semibold uppercase tracking-widest block mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 font-serif tracking-tight"
          >
            Contact 22Workspace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg"
          >
            Whether you have a question about our workspaces, pricing, or want to schedule a tour, our team is ready to answer all your questions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Our Locations</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Corporate House</h4>
                    <p className="text-zinc-600 mt-1">1/22, Asaf Ali Road, New Delhi 110002</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Sab House</h4>
                    <p className="text-zinc-600 mt-1">3/8, Asaf Ali Road, New Delhi 110002</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">South Delhi</h4>
                    <p className="text-zinc-600 mt-1">A-77, East of Kailash, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-zinc-200" />

            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Phone</h4>
                    <p className="text-zinc-600">+91 87005 13200</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">Email</h4>
                    <p className="text-zinc-600">info@22workspace.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-black/5"
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">Send us a message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h4>
                <p className="text-zinc-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className={`w-full h-12 px-4 rounded-xl border bg-zinc-50 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-zinc-200 focus:border-brand-orange focus:ring-brand-orange'}`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full h-12 px-4 rounded-xl border bg-zinc-50 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-zinc-200 focus:border-brand-orange focus:ring-brand-orange'}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        className={`w-full h-12 px-4 rounded-xl border bg-zinc-50 focus:bg-white focus:outline-none focus:ring-1 transition-colors ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-zinc-200 focus:border-brand-orange focus:ring-brand-orange'}`}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 focus:bg-white focus:outline-none focus:ring-1 transition-colors resize-none ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-zinc-200 focus:border-brand-orange focus:ring-brand-orange'}`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-12 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl font-semibold transition-all disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
