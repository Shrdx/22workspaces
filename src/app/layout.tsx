import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/components/BookingProvider";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Coworking Space in Central Delhi | 22workspace",
  description: "22Workspace offers you the most affordable Co-working in Central Delhi @ 4999 inclusive of all modern activities. Business Centres, Commercial Office Spaces, Coworking, Shared Offices, Meeting Rooms & Virtual Office.",
  keywords: "coworking, central delhi, office space, shared office, meeting room, virtual office, business center, Asaf Ali Road",
  openGraph: {
    title: "Coworking | 22workspace",
    description: "22Workspace offers you the most affordable Co-working in Central Delhi @ 4999 inclusive of all modern activities.",
    url: "https://www.22workspace.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-space-light text-zinc-900 font-sans selection:bg-brand-orange selection:text-white">
        <BookingProvider>
          <SmoothScroll />
          <Navbar />
          <main className="flex-grow flex flex-col pt-[var(--navbar-h)]">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </BookingProvider>
      </body>
    </html>
  );
}
