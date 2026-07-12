import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function PrivateOfficePage() {
  return (
    <WorkspaceDetail
      title="Private Office"
      headline="Absolute focus. Your team's headquarters."
      price="From ₹7,000 / desk / month"
      narrative={
        <>
          <p className="mb-6">
            When deep work is non-negotiable, you need a space that removes friction. Our private office suites are meticulously configured to eliminate distractions and provide your team with absolute autonomy.
          </p>
          <p className="mb-6">
            Scalable from 2 to 50 members, these fully furnished suites evolve alongside your enterprise. We manage the physical infrastructure and administrative overhead behind the scenes, allowing you to focus entirely on your core objectives.
          </p>
          <p>
            It’s not just an office; it’s a foundation for growth.
          </p>
        </>
      }
      specifications={[
        {
          category: "Capacity & Scale",
          items: ["Scalable from 2 to 50 seats", "Flexible room sizing", "Bespoke branding options"]
        },
        {
          category: "Access & Infrastructure",
          items: ["Daily access (8 AM – 8 PM)", "High-speed dedicated Wi-Fi", "Fully ergonomic furniture setup"]
        },
        {
          category: "Services",
          items: ["Receptionist administrative support", "Unlimited premium conference credits", "Daily maintenance & cleaning"]
        }
      ]}
      mainImage="/assets/private.jpg"
      galleryImages={[
        "/assets/dedicated.JPG",
        "/assets/open space.jpg",
        "/assets/meeting.JPG" // Added a third image for the layout
      ]}
      bookingType="Private Office"
    />
  );
}
