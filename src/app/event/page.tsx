import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function EventSpacePage() {
  return (
    <WorkspaceDetail
      title="Event Space"
      categoryName="Hourly & Daily"
      valueProposition="A versatile, technology-enabled canvas to set the stage for your next gathering."
      price="From ₹1,500 / hour"
      narrative={
        <>
          <p className="mb-6">
            Whether you are hosting a product launch, an industry seminar, or a high-profile networking evening, the environment dictates the energy. Our event space is a beautifully designed, highly adaptable blank canvas ready to be tailored to your specific vision.
          </p>
          <p className="mb-6">
            We understand that events reflect your brand's prestige. That is why we offer a premium aesthetic that sets the right tone from the moment your guests walk in, supported by seamless logistics and a dedicated hospitality team to manage the details.
          </p>
          <p>
            Accommodating up to 30 delegates comfortably, the room offers flexible seating configurations, integrated high-end projection technology, and dedicated support. We provide the premium infrastructure and flawless execution; you provide the inspiration and content.
          </p>
        </>
      }
      atAGlance={[
        { label: "Capacity", value: "Up to 30 Delegates" },
        { label: "Availability", value: "Hourly, Half-Day, Full-Day" },
        { label: "Layouts", value: "Theater, Classroom, U-Shape" },
        { label: "Starting At", value: "₹1,500 / hr" }
      ]}
      benefits={[
        {
          title: "Total Versatility",
          description: "From theater-style presentations to collaborative workshop pods, the space configures exactly how you need it.",
          image: "/co-working pics/co4.jpg"
        },
        {
          title: "Flawless Execution",
          description: "High-end projection facilities, integrated audio systems, and high-speed guest Wi-Fi ensure your event runs without technical hitches.",
          image: "/assets/open space.jpg"
        },
        {
          title: "Dedicated Support",
          description: "Our on-site team assists with room setup, guest reception, and technical troubleshooting so you can focus on hosting.",
          image: "/co-working pics/co3.jpg"
        },
        {
          title: "Premium Hospitality",
          description: "Keep your attendees energized with gourmet tea, coffee catering, and access to our beautifully designed lounge areas during breaks.",
          image: "/co-working pics/co2.jpg"
        }
      ]}
      whoItIsFor={
        <>
          <p className="mb-6">
            <strong>Workshop Facilitators:</strong> Trainers seeking a professional, well-lit environment to host full-day seminars, certification courses, and educational sessions.
          </p>
          <p className="mb-6">
            <strong>Community Builders:</strong> Organizers looking for an accessible, impressive venue for evening networking mixers, panel discussions, and founder meetups.
          </p>
          <p>
            <strong>Corporate Teams:</strong> Companies requiring a neutral, premium off-site location for major announcements, all-hands meetings, or regional product launches.
          </p>
        </>
      }
      specifications={[
        {
          category: "Capacity & Configuration",
          items: ["Accommodates up to 30 delegates", "Flexible seating layouts", "Customizable presentation area", "Spacious registration desk"]
        },
        {
          category: "Technology",
          items: ["High-end HD projection facility", "Secure high-speed guest Wi-Fi", "Integrated audio systems & microphones", "Climate controlled"]
        },
        {
          category: "Hospitality & Support",
          items: ["Gourmet tea & coffee catering", "On-site event support staff", "Access to adjacent breakout lounges", "Weekend & evening availability"]
        }
      ]}
      mainImage="/assets/event2.jpg"
      galleryImages={[
        "/assets/event3.jpg",
        "/co-working pics/co3.jpg",
        "/co-working pics/co5.JPG",
        "/assets/meeting.JPG"
      ]}
      bookingType="Events Space"
    />
  );
}
