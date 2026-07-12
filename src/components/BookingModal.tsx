"use client";

import React, { useState, useEffect, useRef } from "react";
import { useBooking } from "./BookingProvider";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, MapPin, Briefcase, User, Mail, Phone, ArrowRight, CheckCircle2, ChevronDown, Loader2 
} from "lucide-react";

// Custom Dropdown Component
const CustomDropdown = ({ value, onChange, options, icon: Icon, placeholder, label }: any) => {
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
        className={`relative flex items-center w-full h-12 bg-white/5 border ${isOpen ? 'border-brand-orange ring-1 ring-brand-orange/50' : 'border-white/10'} rounded-xl px-4 cursor-pointer transition-all duration-300 hover:bg-white/10`}
      >
        {Icon && <Icon className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />}
        <span className={`flex-1 truncate ${!selectedOption ? 'text-zinc-500' : 'text-white'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-[#1c1d1f] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto py-2">
              {options.map((option: any) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 cursor-pointer transition-colors flex items-center ${value === option.value ? 'bg-brand-orange/10 text-brand-orange' : 'text-zinc-300 hover:bg-white/10 hover:text-white'}`}
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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    // Simulate API request
    setTimeout(() => {
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
    }, 1500);
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={status !== 'loading' ? closeBooking : undefined}
          />
          
          {/* Modal Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-[#131415] border border-white/10 rounded-2xl shadow-2xl my-auto z-10"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/20 via-brand-orange to-brand-orange/20" />
            
            {/* Close Button */}
            <button 
              onClick={closeBooking}
              disabled={status === 'loading'}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all duration-300 disabled:opacity-50 z-50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-brand-orange/20 border-2 border-brand-orange/50 flex items-center justify-center mb-6 text-brand-orange"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-3">Request Received</h3>
                    <p className="text-zinc-400 text-base max-w-md mx-auto">
                      Thank you for choosing 22workspace. A workspace advisor will contact you shortly to confirm your visit.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
                    <div className="mb-6 pr-8">
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block text-brand-orange font-medium text-[10px] tracking-widest uppercase mb-3 px-2 py-1 rounded bg-brand-orange/10"
                      >
                        Book A Workspace Tour
                      </motion.span>
                      <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-3"
                      >
                        Plan Your Visit
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-sm md:text-base"
                      >
                        A workspace advisor will contact you to arrange a tour and recommend the best workspace for your needs.
                      </motion.p>
                    </div>

                    <motion.form 
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      {/* Personal Info Group */}
                      <div className="space-y-5">
                        <motion.div variants={itemVariants}>
                          <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">Full Name <span className="text-brand-orange">*</span></label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-zinc-400" />
                            </div>
                            <input
                              type="text"
                              placeholder="e.g. John Doe"
                              className={`w-full h-12 bg-white/5 border ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-brand-orange focus:ring-brand-orange/20'} rounded-xl pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-4 transition-all duration-300`}
                              value={formData.name}
                              onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                                if (errors.name) setErrors({ ...errors, name: '' });
                              }}
                              disabled={status === 'loading'}
                            />
                          </div>
                          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <motion.div variants={itemVariants}>
                            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">Email Address <span className="text-brand-orange">*</span></label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-zinc-400" />
                              </div>
                              <input
                                type="email"
                                placeholder="john@example.com"
                                className={`w-full h-12 bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-brand-orange focus:ring-brand-orange/20'} rounded-xl pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-4 transition-all duration-300`}
                                value={formData.email}
                                onChange={(e) => {
                                  setFormData({ ...formData, email: e.target.value });
                                  if (errors.email) setErrors({ ...errors, email: '' });
                                }}
                                disabled={status === 'loading'}
                              />
                            </div>
                            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                          </motion.div>
                          
                          <motion.div variants={itemVariants}>
                            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">Phone Number <span className="text-brand-orange">*</span></label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-zinc-400" />
                              </div>
                              <input
                                type="tel"
                                placeholder="+91 99999 99999"
                                className={`w-full h-12 bg-white/5 border ${errors.phone ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-brand-orange focus:ring-brand-orange/20'} rounded-xl pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-4 transition-all duration-300`}
                                value={formData.phone}
                                onChange={(e) => {
                                  setFormData({ ...formData, phone: e.target.value });
                                  if (errors.phone) setErrors({ ...errors, phone: '' });
                                }}
                                disabled={status === 'loading'}
                              />
                            </div>
                            {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                          </motion.div>
                        </div>
                      </div>

                      <div className="w-full h-px bg-white/5 my-6" />

                      {/* Workspace Group */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants} className="z-20">
                          <CustomDropdown
                            label="Preferred Location"
                            value={formData.location}
                            onChange={(val: string) => setFormData({ ...formData, location: val })}
                            options={locationOptions}
                            icon={MapPin}
                          />
                        </motion.div>
                        <motion.div variants={itemVariants} className="z-10">
                          <CustomDropdown
                            label="Workspace Needed"
                            value={formData.product}
                            onChange={(val: string) => setFormData({ ...formData, product: val })}
                            options={productOptions}
                            icon={Briefcase}
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-medium">
                          Special Requirements <span className="text-zinc-600 normal-case tracking-normal">(Optional)</span>
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Tell us about your team size or any custom requirements..."
                          className="w-full min-h-[80px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 transition-all duration-300 resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          disabled={status === 'loading'}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="group relative w-full h-12 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,106,0,0.2)] hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:-translate-y-0.5 overflow-hidden disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            {status === 'loading' ? (
                              <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                              <div className="flex items-center gap-2">
                                <span>Request A Callback</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                              </div>
                            )}
                          </div>
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
