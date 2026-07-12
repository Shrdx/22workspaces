import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function EventSpacePage() {
  return (
    <WorkspaceDetail
      title="Events Space"
      headline="Set the stage for connection."
      price="From ₹1,500 / hour"
      narrative={
        <>
          <p className="mb-6">
            Whether you are hosting a product launch, a seminar, or a high-profile networking evening, the environment dictates the energy. Our event space is a versatile, beautifully designed blank canvas ready to be tailored to your vision.
          </p>
          <p className="mb-6">
            Accommodating up to 30 delegates, the room offers highly flexible seating layouts and integrated, high-end projection technology.
          </p>
          <p>
            We provide the infrastructure; you provide the inspiration.
          </p>
        </>
      }
      specifications={[
        {
          category: "Capacity & Configuration",
          items: ["Comfortably accommodates up to 30 delegates", "Highly flexible seating layouts", "Customizable presentation stage"]
        },
        {
          category: "Technology",
          items: ["High-end projection facility", "Secure high-speed guest Wi-Fi", "Integrated audio systems"]
        },
        {
          category: "Hospitality & Support",
          items: ["Gourmet tea & coffee catering", "Dedicated event coordinator", "24-Hour access options available"]
        }
      ]}
      mainImage="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200"
      galleryImages={[
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200"
      ]}
      bookingType="Events Space"
    />
  );
}
