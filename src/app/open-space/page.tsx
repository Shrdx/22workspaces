import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function OpenSpacePage() {
  return (
    <WorkspaceDetail
      title="Open Space"
      categoryName="Coworking"
      valueProposition="Fluid, unassigned workspaces for those who thrive on movement and networking."
      price="₹5,000 / month"
      narrative={
        <>
          <p className="mb-6">
            The open space offers an unassigned, dynamic work environment designed for independent creators, remote workers, and agile teams. Simply arrive, select an available desk in our expansive open-plan area, and instantly tap into our premium infrastructure.
          </p>
          <p className="mb-6">
            Unlike traditional offices, this fluid layout encourages spontaneous conversations and organic networking. It breaks down silos, allowing you to surround yourself with driven professionals from various industries, turning a simple workday into an opportunity for collaboration.
          </p>
          <p>
            Operating without being tethered to a specific location provides the ultimate flexibility. It is the perfect balance of professional focus and serendipitous networking, allowing you to adapt your working environment to suit your daily mood, whether you need a quiet corner for deep focus or a collaborative pod for team brainstorming.
          </p>
        </>
      }
      atAGlance={[
        { label: "Format", value: "Unassigned Hot Desk" },
        { label: "Access Hours", value: "8 AM to 8 PM Daily" },
        { label: "Commitment", value: "Month-to-Month" },
        { label: "Starting At", value: "₹5,000" }
      ]}
      benefits={[
        {
          title: "Ultimate Flexibility",
          description: "Choose a new spot every day. Sit near the window for inspiration, or near the quiet zone for deep focus.",
          image: "/assets/open space.jpg"
        },
        {
          title: "Frictionless Setup",
          description: "No setup required. Fast, secure enterprise Wi-Fi and ample power outlets are available at every seat.",
          image: "/co-working pics/co1.jpg"
        },
        {
          title: "Cost-Effective",
          description: "Enjoy premium amenities, professional environments, and community access at our most accessible price point.",
          image: "/co-working pics/co5.JPG"
        },
        {
          title: "Organic Networking",
          description: "Work alongside different professionals daily, creating natural opportunities for collaboration and connection.",
          image: "/co-working pics/co2.jpg"
        }
      ]}
      whoItIsFor={
        <>
          <p className="mb-6">
            <strong>Digital Nomads:</strong> Traveling professionals who need a reliable, professional base camp without getting tied down by long-term, rigid commitments.
          </p>
          <p className="mb-6">
            <strong>Hybrid Workers:</strong> Corporate employees who thrive in vibrant environments and need an inspiring workspace outside their home office a few days a week.
          </p>
          <p>
            <strong>Solo Founders:</strong> Early-stage entrepreneurs looking to keep overhead costs absolutely minimal while building their professional network in a dynamic community.
          </p>
        </>
      }
      specifications={[
        {
          category: "Flexibility & Access",
          items: ["Unassigned hot desk seating", "8 AM to 8 PM Daily Access", "Month-to-month terms", "Access to quiet zones"]
        },
        {
          category: "Technology",
          items: ["Unlimited premium fiber Wi-Fi", "Ample power outlets at every desk", "Print and scan station access"]
        },
        {
          category: "Community & Amenities",
          items: ["Lounge & Cafeteria entry", "Bookable conference rooms", "Daily maintenance & housekeeping", "Community networking events"]
        }
      ]}
      mainImage="/assets/open space.jpg"
      galleryImages={[
        "/co-working pics/co3.jpg",
        "/co-working pics/co4.jpg",
        "/co-working pics/co1.jpg",
        "/assets/meeting.JPG"
      ]}
      bookingType="Open Space"
    />
  );
}
