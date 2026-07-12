import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function OpenSpacePage() {
  return (
    <WorkspaceDetail
      title="Open Space Desk"
      headline="Fluidity meets function."
      price="₹5,000 / month"
      narrative={
        <>
          <p className="mb-6">
            For those who thrive on movement. The open space offers an unassigned, fluid work environment designed for independent creators, remote workers, and agile teams.
          </p>
          <p className="mb-6">
            Simply arrive, select an available desk, and plug in. You gain access to our premium infrastructure without being tethered to a specific location. It is the perfect balance of professional focus and serendipitous networking.
          </p>
          <p>
            Adapt your environment to suit your day.
          </p>
        </>
      }
      specifications={[
        {
          category: "Flexibility & Access",
          items: ["Unassigned hot desk seating", "8 AM to 8 PM Daily Access", "Month-to-month terms"]
        },
        {
          category: "Technology & Comfort",
          items: ["Unlimited premium fiber Wi-Fi", "Spacious open-plan layouts", "Ergonomic shared seating"]
        },
        {
          category: "Community & Amenities",
          items: ["Lounge & Cafeteria entry", "Access to conference credits", "Daily maintenance & housekeeping"]
        }
      ]}
      mainImage="/assets/open space.jpg"
      galleryImages={[
        "/assets/dedicated.JPG",
        "/assets/private.jpg",
        "/assets/meeting.JPG"
      ]}
      bookingType="Open Space"
    />
  );
}
