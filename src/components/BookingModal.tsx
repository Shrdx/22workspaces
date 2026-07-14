"use client";

import React, { useState, useEffect, useRef } from "react";
import { useBooking } from "./BookingProvider";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  X, ArrowRight, CheckCircle2, ChevronDown, Loader2
} from "lucide-react";
import emailjs from '@emailjs/browser';

// Custom Dropdown Component
const CustomDropdown = ({ value, onChange, options, placeholder, label }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt: any) => opt.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      {label && <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">{label}</label>}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center w-full h-12 bg-white border ${isOpen ? 'border-brand-orange ring-1 ring-brand-orange' : 'border-zinc-200'} rounded-xl px-4 cursor-pointer transition-all duration-200 hover:border-zinc-300`}
      >
        <span className={`flex-1 truncate text-sm ${!selectedOption ? 'text-zinc-400' : 'text-zinc-900'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border border-zinc-100 rounded-xl shadow-lg shadow-black/5 overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto py-1">
              {options.map((option: any) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 cursor-pointer transition-colors flex items-center text-sm ${value === option.value ? 'bg-brand-orange/5 text-brand-orange font-medium' : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'}`}
                >
                  <span className="truncate">{option.label}</span>
                  {value === option.value && <CheckCircle2 className="w-4 h-4 ml-auto shrink-0" />}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function BookingModal() {
  const { isOpen, closeBooking, selectedProduct } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Corporate House, Asaf Ali Road",
    product: selectedProduct || "Dedicated Seat",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({ ...prev, product: selectedProduct }));
    }
  }, [selectedProduct]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name: letters and spaces only, at least 2 characters
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces (min 2 characters)";
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
          location: formData.location,
          product: formData.product,
          message: formData.message,
        },
        'X4NZa6nOpWqm2wysj'
      );
      
      setStatus('success');
      setTimeout(() => {
        closeBooking();
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "Corporate House, Asaf Ali Road",
          product: "Dedicated Seat",
          message: "",
        });
      }, 2500);
    } catch (error) {
      console.error("FAILED to send email", error);
      setStatus('idle');
      alert("Failed to send message. Please try again later.");
    }
  };

  const locationOptions = [
    { value: "Corporate House, Asaf Ali Road", label: "Corporate House (Central Delhi)" },
    { value: "Sab House, Asaf Ali Road", label: "Sab House (Central Delhi)" },
    { value: "East of Kailash, New Delhi", label: "East of Kailash (South Delhi)" },
  ];

  const productOptions = [
    { value: "Dedicated Seat", label: "Dedicated Seat (₹7,000/mo)" },
    { value: "Private Office", label: "Private Office (₹7,000/desk/mo)" },
    { value: "Open Space", label: "Open Space (₹5,000/mo)" },
    { value: "Meeting Room", label: "Meeting Room (₹300/hr)" },
    { value: "Events Space", label: "Events Space (₹1,500/hr)" },
    { value: "Virtual Office", label: "Virtual Office (Basic/Classic/Premium)" },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 5 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={status !== 'loading' ? closeBooking : undefined}
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[680px] max-h-[95vh] overflow-y-auto bg-[#F9F8F6] rounded-2xl shadow-2xl shadow-black/10 my-auto z-10 border border-black/5"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              disabled={status === 'loading'}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-zinc-500 hover:text-zinc-800 transition-all duration-200 disabled:opacity-50 z-50"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-zinc-900 mb-2">Request Received</h3>
                    <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                      Thank you for choosing 22workspace. A workspace advisor will contact you shortly to confirm your visit.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="mb-8 pr-8">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block text-brand-orange font-semibold text-[10px] tracking-widest uppercase mb-2"
                      >
                        Book A Workspace Tour
                      </motion.span>
                      <motion.h2
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-2"
                      >
                        Plan Your Visit
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-sm"
                      >
                        A workspace advisor will contact you to arrange a tour and recommend the best workspace for your needs.
                      </motion.p>
                    </div>

                    <motion.form
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Personal Info Group */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">Full Name <span className="text-brand-orange">*</span></label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className={`w-full h-12 bg-white border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-200 focus:border-brand-orange focus:ring-brand-orange/20'} rounded-xl px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          disabled={status === 'loading'}
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants}>
                          <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">Email Address <span className="text-brand-orange">*</span></label>
                          <input
                            type="email"
                            placeholder="enter your email"
                            className={`w-full h-12 bg-white border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-200 focus:border-brand-orange focus:ring-brand-orange/20'} rounded-xl px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: '' });
                            }}
                            disabled={status === 'loading'}
                          />
                          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">Phone Number <span className="text-brand-orange">*</span></label>
                          <input
                            type="tel"
                            placeholder="Enter your phone no."
                            className={`w-full h-12 bg-white border ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-zinc-200 focus:border-brand-orange focus:ring-brand-orange/20'} rounded-xl px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (errors.phone) setErrors({ ...errors, phone: '' });
                            }}
                            disabled={status === 'loading'}
                          />
                          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                        </motion.div>
                      </div>

                      <div className="w-full h-px bg-black/5 my-6" />

                      {/* Workspace Group */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants} className="z-20">
                          <CustomDropdown
                            label="Preferred Location"
                            value={formData.location}
                            onChange={(val: string) => setFormData({ ...formData, location: val })}
                            options={locationOptions}
                          />
                        </motion.div>
                        <motion.div variants={itemVariants} className="z-10">
                          <CustomDropdown
                            label="Workspace Needed"
                            value={formData.product}
                            onChange={(val: string) => setFormData({ ...formData, product: val })}
                            options={productOptions}
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">
                          Special Requirements <span className="text-zinc-400 normal-case tracking-normal capitalize font-normal">(Optional)</span>
                        </label>
                        <textarea
                          placeholder="Tell us about your team size or any custom requirements..."
                          className="w-full h-[84px] bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200 resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          disabled={status === 'loading'}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-zinc-500">
                          Our workspace advisor typically responds within one business day.
                        </p>
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="group w-full sm:w-auto px-8 h-12 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed shrink-0 flex items-center justify-center gap-2"
                        >
                          {status === 'loading' ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <>
                              <span>Schedule My Visit</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    </motion.form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

