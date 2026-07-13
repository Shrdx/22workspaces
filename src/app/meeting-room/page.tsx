import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function MeetingRoomPage() {
  return (
    <WorkspaceDetail
      title="Meeting Rooms"
      categoryName="Hourly & Daily"
      valueProposition="Acoustically private, technology-enabled spaces designed for decisive moments."
      price="From ₹300 / hour"
      narrative={
        <>
          <p className="mb-6">
            Crucial alignments require an environment that inspires clarity. Our meeting rooms are specifically designed for high-stakes presentations, board alignments, client pitches, and focused brainstorming sessions. We provide the backdrop; you command the room.
          </p>
          <p className="mb-6">
            Illuminated by natural light through expansive glass panels, these spaces offer inspiring views while maintaining complete acoustic privacy. We understand that confidentiality is paramount, which is why our rooms are engineered with advanced sound-dampening materials.
          </p>
          <p>
            Equipped with smart AV technology and ergonomically optimized seating, these premium environments ensure your team remains comfortable, focused, and fully engaged, no matter how long the session runs. Book exactly the space you need, precisely when you need it.
          </p>
        </>
      }
      atAGlance={[
        { label: "Capacity", value: "4 to 8 People" },
        { label: "Availability", value: "Hourly or Daily" },
        { label: "Technology", value: "Smart AV Included" },
        { label: "Starting At", value: "₹300 / hr" }
      ]}
      benefits={[
        {
          title: "Plug & Play Presentations",
          description: "Smart LED projectors, integrated display ports, and high-speed secure guest Wi-Fi ensure your presentations start flawlessly.",
          image: "/assets/meeting.JPG"
        },
        {
          title: "Acoustic Privacy",
          description: "Engineered sound dampening prevents sensitive discussions from carrying, giving you the confidence to talk strategy.",
          image: "/co-working pics/co4.jpg"
        },
        {
          title: "Professional Reception",
          description: "Our front desk team will greet your clients upon arrival, offering them seating and refreshments before escorting them in.",
          image: "/co-working pics/co3.jpg"
        },
        {
          title: "Flexible Booking",
          description: "Reserve spaces on-demand for a quick one-hour sync or secure the room for a multi-day executive offsite.",
          image: "/co-working pics/co5.JPG"
        }
      ]}
      whoItIsFor={
        <>
          <p className="mb-6">
            <strong>Client Meetings:</strong> Make an immediately strong impression with a premium, professional environment when pitching to crucial external stakeholders.
          </p>
          <p className="mb-6">
            <strong>Remote Team Offsites:</strong> Bring distributed or remote teams together for intensive quarterly planning sessions in a fully equipped, focused space.
          </p>
          <p>
            <strong>Interviews & Workshops:</strong> Conduct confidential candidate interviews, intimate team training sessions, or deep-dive workshops without office distractions.
          </p>
        </>
      }
      specifications={[
        {
          category: "Capacity & Layout",
          items: ["Multiple configurations: 4, 6, & 8 Pax", "Acoustically treated environments", "Premium executive chairs", "Ample natural lighting"]
        },
        {
          category: "Technology",
          items: ["Smart LED Projector & Screen", "High-speed secure guest Wi-Fi", "Integrated power & display ports", "Teleconferencing support"]
        },
        {
          category: "Services Included",
          items: ["Whiteboard & premium markers", "Complimentary tea, coffee & water", "Front-desk guest reception", "Pre-meeting room setup"]
        }
      ]}
      mainImage="/assets/meeting.JPG"
      galleryImages={[
        "/co-working pics/co4.jpg",
        "/co-working pics/co3.jpg",
        "/co-working pics/co5.JPG",
        "/co-working pics/co1.jpg"
      ]}
      bookingType="Meeting Room"
    />
  );
}
