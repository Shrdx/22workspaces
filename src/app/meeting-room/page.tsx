import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function MeetingRoomPage() {
  return (
    <WorkspaceDetail
      title="Meeting Rooms"
      headline="Space for decisive moments."
      price="From ₹300 / hour"
      narrative={
        <>
          <p className="mb-6">
            Crucial alignments require an environment that inspires clarity. Our meeting rooms are designed for high-stakes presentations, board alignments, and focused brainstorming sessions.
          </p>
          <p className="mb-6">
            Illuminated by natural light through floor-to-ceiling glass, these spaces offer inspiring city views while maintaining complete acoustic privacy. Ergonomically optimized seating ensures your team remains comfortable and engaged, no matter how long the session runs.
          </p>
          <p>
            Book exactly what you need, when you need it.
          </p>
        </>
      }
      specifications={[
        {
          category: "Capacity & Layout",
          items: ["Multiple options: 4, 6, & 8 Pax", "Acoustically treated environments", "Floor-to-ceiling glass views"]
        },
        {
          category: "Technology",
          items: ["Smart LED Projector & AV setup", "High-speed secure guest Wi-Fi", "Integrated power & display ports"]
        },
        {
          category: "Services",
          items: ["Complimentary tea & coffee", "Whiteboard & markers included", "Flexible hourly booking terms"]
        }
      ]}
      mainImage="/assets/meeting.JPG"
      galleryImages={[
        "/assets/private.jpg",
        "/assets/dedicated.JPG",
        "/assets/open space.jpg"
      ]}
      bookingType="Meeting Room"
    />
  );
}
