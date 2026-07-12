import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function DedicatedSeatPage() {
  return (
    <WorkspaceDetail
      title="Dedicated Seat"
      headline="Always yours. Ready when you are."
      price="₹7,000 / month"
      narrative={
        <>
          <p className="mb-6">
            All the vibrant energy of a shared workspace, with the stability of a permanent foundation. A dedicated seat is exclusively yours—no daily desk hunting required.
          </p>
          <p className="mb-6">
            Leave your monitor, store your materials in your personal locker, and set up your workspace exactly how you like it. Every morning, you return to a desk that is uniquely yours, fully integrated into our premium infrastructure.
          </p>
          <p>
            The perfect balance of community and ownership.
          </p>
        </>
      }
      specifications={[
        {
          category: "Personal Space",
          items: ["Exclusively assigned workstation", "Comfort-padded ergonomic seating", "Physical locker facility"]
        },
        {
          category: "Access & Technology",
          items: ["8 AM to 8 PM Daily Access", "High-speed fiber Wi-Fi", "Dedicated power & ethernet"]
        },
        {
          category: "Community & Amenities",
          items: ["Cafeteria & Lounge access", "Professional daily cleaning", "Access to community events"]
        }
      ]}
      mainImage="/assets/dedicated.JPG"
      galleryImages={[
        "/assets/private.jpg",
        "/assets/open space.jpg",
        "/assets/meeting.JPG"
      ]}
      bookingType="Dedicated Seat"
    />
  );
}
