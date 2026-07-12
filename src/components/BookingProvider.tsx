"use client";

import React, { createContext, useContext, useState } from "react";
import BookingModal from "./BookingModal";

interface BookingContextType {
  isOpen: boolean;
  openBooking: (prefillProduct?: string) => void;
  closeBooking: () => void;
  selectedProduct: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openBooking = (prefillProduct = "") => {
    setSelectedProduct(prefillProduct);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedProduct("");
  };

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking, selectedProduct }}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
