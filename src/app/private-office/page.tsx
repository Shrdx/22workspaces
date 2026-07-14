import React from "react";
import { WorkspaceDetail } from "@/components/WorkspaceDetail";

export default function PrivateOfficePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Private Office Space in Central Delhi",
    "image": "https://www.22workspace.com/assets/private.jpg",
    "description": "Rent fully furnished, managed private office spaces in Central Delhi. Perfect for growing teams and enterprises seeking premium workspace.",
    "brand": {
      "@type": "Brand",
      "name": "22Workspace"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.22workspace.com/private-office",
      "priceCurrency": "INR",
      "price": "7000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WorkspaceDetail
        title="Private Office Space in Delhi"
      categoryName="Enterprise"
      valueProposition="Absolute focus and privacy. Your team's headquarters, fully managed."
      price="From ₹7,000 / desk / month"
      narrative={
        <>
          <p className="mb-6">
            When deep work is non-negotiable, you need a space that removes friction. Our private office suites are meticulously configured to eliminate distractions, offering your team complete autonomy and privacy while maintaining access to premium shared amenities. 
          </p>
          <p className="mb-6">
            Whether you are scaling a fast-growing tech startup or establishing a secure regional branch for a multinational enterprise, these environments adapt to your specific workflow. We take security and privacy seriously, implementing sound-dampening architecture and secure access protocols so you can operate with total confidence.
          </p>
          <p>
            Scalable from 2 to 50 members, these fully furnished suites evolve alongside your business. We handle the physical infrastructure, maintenance, daily cleaning, and administrative overhead behind the scenes, allowing your organization to focus entirely on its core objectives. It’s not just an office; it’s a secure foundation for growth.
          </p>
        </>
      }
      atAGlance={[
        { label: "Team Size", value: "2 to 50 members" },
        { label: "Access Hours", value: "8 AM to 8 PM Daily" },
        { label: "Furnishing", value: "Fully Furnished" },
        { label: "Starting At", value: "₹7,000 / desk" }
      ]}
      benefits={[
        {
          title: "Complete Privacy",
          description: "Enclosed, sound-dampened environments ensuring your strategic meetings and daily operations remain confidential.",
          image: "/assets/private.jpg"
        },
        {
          title: "Scalable Architecture",
          description: "Start with a 4-person suite and easily expand into larger adjacent offices as your team grows without changing your address.",
          image: "/co-working pics/co4.jpg"
        },
        {
          title: "Zero Operational Overhead",
          description: "Electricity, high-speed fiber, daily cleaning, and reception services are all included in one predictable monthly invoice.",
          image: "/co-working pics/co2.jpg"
        },
        {
          title: "Brand Integration",
          description: "Make the space yours with custom branding options, tailored desk layouts, and personalized access control for your team.",
          image: "/assets/meeting.JPG"
        }
      ]}
      whoItIsFor={
        <>
          <p className="mb-6">
            <strong>Growing Startups:</strong> Teams that need their own dedicated space to collaborate closely, run intense sprints, and build culture without external interruptions.
          </p>
          <p className="mb-6">
            <strong>Established Businesses:</strong> Companies requiring a professional, secure headquarters with premium amenities without taking on long-term commercial lease liabilities.
          </p>
          <p>
            <strong>Regional Branches:</strong> Satellite teams for multinational corporations that require immediate, enterprise-grade infrastructure without the setup hassle.
          </p>
        </>
      }
      specifications={[
        {
          category: "Capacity & Configuration",
          items: ["Scalable from 2 to 50 seats", "Flexible room sizing and partitions", "Bespoke branding options", "Ergonomic desks and chairs"]
        },
        {
          category: "Infrastructure",
          items: ["Daily access (8 AM – 8 PM)", "High-speed dedicated Wi-Fi", "Dedicated IP options available", "Climate controlled environment"]
        },
        {
          category: "Included Services",
          items: ["Receptionist administrative support", "Premium conference room credits", "Daily maintenance & cleaning", "Mail and package handling"]
        }
      ]}
      mainImage="/assets/private.jpg"
      galleryImages={[
        "/co-working pics/co5.JPG",
        "/co-working pics/co3.jpg",
        "/assets/meeting.JPG",
        "/co-working pics/co1.jpg",
        "/co-working pics/co2.jpg"
      ]}
      bookingType="Private Office"
    />
    </>
  );
}
