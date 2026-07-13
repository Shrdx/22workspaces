import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function VirtualOfficePage() {
  return (
    <WorkspaceDetail
      title="Virtual Office"
      categoryName="Corporate Identity"
      valueProposition="Establish a premium corporate footprint without the overhead of physical premises."
      price="From ₹2,000 / month"
      narrative={
        <>
          <p className="mb-6">
            A virtual office gives your business a premium corporate address, comprehensive mailing and registration support, and GST representation — without requiring you to lease a physical desk or office space. It is the smartest way to establish a professional presence instantly.
          </p>
          <p className="mb-6">
            We provide all the necessary documentation, including NOCs and rent agreements, required for statutory compliance. Our dedicated front desk team handles your incoming mail, packages, and client inquiries, ensuring you never miss an important business communication.
          </p>
          <p>
            Avoid the overhead of physical premises until you truly need them. Establish your company with a professional business center address, handle formal government registrations seamlessly, and build immediate client trust. It is all the credibility of a physical headquarters, delivered virtually.
          </p>
        </>
      }
      atAGlance={[
        { label: "Commitment", value: "Annual Registration" },
        { label: "Location", value: "Premium Business Address" },
        { label: "Support", value: "Mail & Courier Handling" },
        { label: "Compliance", value: "GST Ready" }
      ]}
      benefits={[
        {
          title: "Premium Corporate Address",
          description: "Use our recognized A-grade commercial address on your business cards, website, and official communications.",
          image: "/co-working pics/co2.jpg"
        },
        {
          title: "Statutory Compliance",
          description: "We provide all necessary NOCs, utility bills, and rent agreements required for GST and ROC company registrations.",
          image: "/assets/private.jpg"
        },
        {
          title: "Mail & Courier Management",
          description: "Our front desk team receives, signs for, and securely holds or forwards your important business mail and packages.",
          image: "/assets/meeting.JPG"
        },
        {
          title: "On-Demand Workspace",
          description: "Need a physical space? Book our conference rooms or coworking desks at exclusive member rates whenever you have client meetings.",
          image: "/co-working pics/co5.JPG"
        }
      ]}
      whoItIsFor={
        <>
          <p className="mb-6">
            <strong>Remote-First Startups:</strong> Distributed teams working from home that need a professional front for clients, partners, and investors to build immediate credibility.
          </p>
          <p className="mb-6">
            <strong>Freelancers & Consultants:</strong> Solo professionals looking to protect their home address privacy while appearing as an established, corporate entity on official documents.
          </p>
          <p>
            <strong>Expanding Enterprises:</strong> Regional or international businesses establishing a local compliance presence in North India without the cost of relocating staff immediately.
          </p>
        </>
      }
      specifications={[
        {
          category: "Address & Mail",
          items: ["Premium commercial address usage", "Mail and package receipt", "Courier forwarding on request", "Dedicated front-desk support"]
        },
        {
          category: "Registrations & Compliance",
          items: ["GST Registration NOC provided", "ROC / Company Affairs Registration", "Utility bills and documentation support", "Physical locker for statutory books"]
        },
        {
          category: "Physical Access (Premium Plans)",
          items: ["Complimentary coworking day passes", "Conference room booking credits", "Access to community events", "Discounted daily rates"]
        }
      ]}
      mainImage="/co-working pics/co3.jpg"
      galleryImages={[
        "/assets/meeting.JPG",
        "/co-working pics/co1.jpg",
        "/co-working pics/co4.jpg",
        "/assets/open space.jpg"
      ]}
      bookingType="Virtual Office"
    />
  );
}
