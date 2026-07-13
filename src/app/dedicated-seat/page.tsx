import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function DedicatedSeatPage() {
  return (
    <WorkspaceDetail
      title="Dedicated Seat"
      categoryName="Coworking"
      valueProposition="All the vibrant energy of a shared workspace, with the stability of a permanent foundation."
      price="₹7,000 / month"
      narrative={
        <>
          <p className="mb-6">
            A dedicated seat is exclusively yours—no daily desk hunting required. Leave your monitor, store your materials in your personal locker, and set up your workspace exactly how you like it. 
          </p>
          <p className="mb-6">
            This is where the flexibility of coworking meets the permanence of a private office. By reserving a dedicated seat, you lock in a specific, optimized workstation in a bright, open environment surrounded by like-minded professionals, giving you the focus you need without the isolation of working from home.
          </p>
          <p>
            Every morning, you return to a desk that is uniquely yours, fully integrated into our premium infrastructure. It is the perfect balance of community and ownership for professionals who need consistency and high-speed reliability without the overhead of a private office.
          </p>
        </>
      }
      atAGlance={[
        { label: "Ideal For", value: "Individuals & Freelancers" },
        { label: "Access Hours", value: "8 AM to 8 PM Daily" },
        { label: "Commitment", value: "Monthly or Annual" },
        { label: "Starting At", value: "₹7,000" }
      ]}
      benefits={[
        {
          title: "Personalized Setup",
          description: "Leave your dual monitors, ergonomic accessories, and personal items securely at your desk every day.",
          image: "/assets/dedicated.JPG"
        },
        {
          title: "Secure Storage",
          description: "Includes a physical locker facility to keep your sensitive documents and hardware safe overnight.",
          image: "/assets/private.jpg"
        },
        {
          title: "Premium Infrastructure",
          description: "Enjoy enterprise-grade fiber internet, dedicated power setups, and ergonomic seating standard.",
          image: "/assets/open space.jpg"
        },
        {
          title: "Community Access",
          description: "Tap into the wider 22Workspace network through community events, networking, and shared lounges.",
          image: "/assets/meeting.JPG"
        }
      ]}
      whoItIsFor={
        <>
          <p className="mb-6">
            <strong>Freelancers & Solopreneurs:</strong> Professionals who need a quiet, consistent place to focus away from home, with the ability to network organically.
          </p>
          <p className="mb-6">
            <strong>Remote Workers:</strong> Corporate employees who want a professional environment with stable internet, zero distractions, and an ergonomic setup.
          </p>
          <p>
            <strong>Small Agency Teams:</strong> Growing teams that want their members seated together in an open, collaborative environment to bounce ideas quickly.
          </p>
        </>
      }
      specifications={[
        {
          category: "Personal Space",
          items: ["Exclusively assigned workstation", "Comfort-padded ergonomic seating", "Physical locker facility", "Ample desk surface area"]
        },
        {
          category: "Technology",
          items: ["Enterprise-grade fiber Wi-Fi", "Dedicated power outlets", "IT support on call", "Print & scan facilities"]
        },
        {
          category: "Amenities",
          items: ["Cafeteria & Lounge access", "Professional daily cleaning", "Unlimited tea & coffee", "Community events"]
        }
      ]}
      mainImage="/assets/dedicated.JPG"
      galleryImages={[
        "/co-working pics/co1.jpg",
        "/co-working pics/co2.jpg",
        "/co-working pics/co3.jpg",
        "/co-working pics/co4.jpg",
        "/co-working pics/co5.JPG"
      ]}
      bookingType="Dedicated Seat"
    />
  );
}
