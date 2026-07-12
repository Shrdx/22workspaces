# 22workspace — Complete Content Audit

> **Generated:** July 6, 2026  
> **Website:** 22workspace (Next.js Application)  
> **Source Files Audited:** 11 files (layout, homepage, 6 subpages, navbar, footer, booking modal)

---

## Table of Contents

1. [SEO & Metadata](#1-seo--metadata)
2. [Navbar (Global)](#2-navbar-global)
3. [Homepage (/)](#3-homepage-)
4. [About Page (/about)](#4-about-page-about)
5. [Dedicated Seat Page (/dedicated-seat)](#5-dedicated-seat-page-dedicated-seat)
6. [Private Office Page (/private-office)](#6-private-office-page-private-office)
7. [Open Space Page (/open-space)](#7-open-space-page-open-space)
8. [Meeting Room Page (/meeting-room)](#8-meeting-room-page-meeting-room)
9. [Events Space Page (/event)](#9-events-space-page-event)
10. [Virtual Office Page (/virtual-office)](#10-virtual-office-page-virtual-office)
11. [Footer (Global)](#11-footer-global)
12. [Booking Modal (Popup)](#12-booking-modal-popup)

---

## 1. SEO & Metadata
**Source:** `src/app/layout.tsx`

| Field | Content |
|---|---|
| **Page Title** | Coworking Space in Central Delhi \| 22workspace |
| **Meta Description** | 22Workspace offers you the most affordable Co-working in Central Delhi @ 4999 inclusive of all modern activities. Business Centres, Commercial Office Spaces, Coworking, Shared Offices, Meeting Rooms & Virtual Office. |
| **Keywords** | coworking, central delhi, office space, shared office, meeting room, virtual office, business center, Asaf Ali Road |
| **OG Title** | Coworking \| 22workspace |
| **OG Description** | 22Workspace offers you the most affordable Co-working in Central Delhi @ 4999 inclusive of all modern activities. |
| **OG URL** | https://www.22workspace.com/ |
| **OG Type** | website |
| **Fonts Used** | Cormorant Garamond (serif), Plus Jakarta Sans (sans-serif) |

---

## 2. Navbar (Global)
**Source:** `src/components/Navbar.tsx`

### Logo
- **Brand Text (Fallback):** 22workspace
- **Logo Image URL:** `https://static.wixstatic.com/media/a5b614_d7090a8e8c6b4e63a06c15e5e4c6e3b2~mv2.png/v1/fill/w_243,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/22workspace_logo.png`
- **Alt Text:** 22workspace logo

### Desktop Navigation Links
| Label | Link |
|---|---|
| About Us | /about |
| Workspaces (Dropdown) | — |
| Virtual Office | /virtual-office |
| Contact | Opens Booking Modal |
| **Book A Tour** (CTA Button) | Opens Booking Modal |

### Workspaces Dropdown Items
| Label | Link |
|---|---|
| Dedicated Seat | /dedicated-seat |
| Private Office | /private-office |
| Open Space | /open-space |
| Meeting Room | /meeting-room |
| Events Space | /event |

### Mobile Menu
- **Links (same as desktop):**
  - About Us
  - Workspace Solutions (label)
    - Dedicated Seat
    - Private Office
    - Open Space
    - Meeting Room
    - Events Space
  - Virtual Office
  - Contact Us
- **CTA Button:** Book A Tour
- **Contact Info:** +91 87005 13200 | info@22workspace.com

---

## 3. Homepage (/)
**Source:** `src/app/page.tsx`

### Section 1 — Hero
| Element | Content |
|---|---|
| **Eyebrow** | A New Paradigm of Coworking |
| **Headline** | Where Ambition Meets *Design* |
| **Body** | Welcome to Central Delhi's most exclusive business center. Built for start-ups, entrepreneurs, and corporate innovators seeking professional refinement. |
| **CTA Button 1** | Request Pricing → Opens Booking Modal |
| **CTA Button 2** | Explore Virtual Offices → /virtual-office |
| **Background Image** | `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600` |

### Section 2 — Brand Narrative (Who We Are)
| Element | Content |
|---|---|
| **Eyebrow** | Who We Are |
| **Headline** | An ecosystem designed for optimal scaling |
| **Body Paragraph 1** | 22workspace is a premium business center offering a community-driven shared space. We feature plug-and-play dedicated offices of all sizes, along with allied legal and financial consultancy services. |
| **Body Paragraph 2** | We believe in shifting from heavy capital expenditure to flexible revenue expenditure. With our concept of **"pay for what you use,"** you focus entirely on your core business while we handle all physical infrastructure, security, and community networking. |

### Section 3 — Premium Workspaces (Tabbed Showcase)
| Element | Content |
|---|---|
| **Eyebrow** | Our Solutions |
| **Headline** | Premium Workspaces |

#### Tab 1 — Dedicated Seat
| Field | Content |
|---|---|
| **Number** | 01 |
| **Title** | Dedicated Seat |
| **Price** | ₹7,000 / month |
| **Description** | Get all the good stuff that comes with a hot/flexible desk, but with your own permanently fixed workstation in a premium community environment. |
| **Included Benefits** | Fixed desk setup · 8 AM to 8 PM Access · High-speed secure Wi-Fi · Locker storage access |
| **Image** | `https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000` |
| **CTA Buttons** | Book Now · View Details → /dedicated-seat |

#### Tab 2 — Private Office
| Field | Content |
|---|---|
| **Number** | 02 |
| **Title** | Private Office |
| **Price** | From ₹7,000 / desk / month |
| **Description** | Fully furnished, ready to move-in private spaces. Large enough to accommodate teams of 2 up to 50 people, with unlimited expansion possibilities. |
| **Included Benefits** | Lockable physical office · Flexible sizing (2-15 seats) · 24/7 keycard option available · CCTV secure zone |
| **Image** | `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000` |
| **CTA Buttons** | Book Now · View Details → /private-office |

#### Tab 3 — Open Space
| Field | Content |
|---|---|
| **Number** | 03 |
| **Title** | Open Space |
| **Price** | ₹5,000 / month |
| **Description** | Come, Chill and Work! Flexible hot-desking setups perfect for independent professionals and remote workers who love a dynamic and energetic vibe. |
| **Included Benefits** | Flexible hot desk selection · Spacious breakout areas · Unlimited internet connectivity · Access to cafeteria |
| **Image** | `https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000` |
| **CTA Buttons** | Book Now · View Details → /open-space |

#### Tab 4 — Meeting Rooms
| Field | Content |
|---|---|
| **Number** | 04 |
| **Title** | Meeting Rooms |
| **Price** | From ₹300 / hour |
| **Description** | Brainstorm with your team. High-end, naturally-lit boardrooms with large glass windows and panoramic views, built for comfort and collaboration. |
| **Included Benefits** | 4, 6, & 8 Pax Options · Smart LED projector & AV setup · Naturally illuminated layouts · Free premium high-speed Wi-Fi |
| **Image** | `https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000` |
| **CTA Buttons** | Book Now · View Details → /meeting-room |

#### Tab 5 — Events Space
| Field | Content |
|---|---|
| **Number** | 05 |
| **Title** | Events Space |
| **Price** | From ₹1,500 / hour |
| **Description** | The perfect venue to host workshops, networking dinners, or training sessions. Accommodates up to 30 delegates with customized hospitality options. |
| **Included Benefits** | Up to 30 delegates · Professional projection facility · Flexible seating configs · Catering & support options |
| **Image** | `https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000` |
| **CTA Buttons** | Book Now · View Details → /event |

### Section 4 — Membership Benefits
| Element | Content |
|---|---|
| **Eyebrow** | Elevate Your Day |
| **Headline** | Membership Benefits |
| **Subheadline** | Every detail is calibrated to help you work better, collaborate seamlessly, and host clients with extreme confidence. |

| Benefit | Icon | Description |
|---|---|---|
| Awesome Workstations | 💻 | Ergonomically designed desks, adjustable chairs, and clean spacing configured to provide maximum productivity. |
| Premium Meeting Rooms | 🤝 | Equipped with state-of-the-art projection facilities and premium seating. Ideal for executive alignments and workshops. |
| Vibrant Community | ✨ | Work alongside startup accelerators, SME founders, website developers, marketing specialists, and financial consultants. |
| High-Speed Internet | ⚡ | Fiber-optic network connectivity with backup lines to ensure you remain active at all times without lag. |
| Reception & Waiting Lounge | 🛋️ | A fully staffed professional desk to greet your clients, manage mail, and coordinate administrative requirements. |
| Cafeteria & Lunch Area | ☕ | Unwind with complimentary gourmet tea/coffee. Re-energize in a clean, modern cafeteria and dining zone. |

### Section 5 — Locations
| Element | Content |
|---|---|
| **Eyebrow** | Geographic Presence |
| **Headline** | Centralized Locations |
| **Subheadline** | Centrally situated offices in Delhi with excellent subway/metro connectivity, saving you and your team travel time. |

| # | Name | Address | Metro Proximity | Description |
|---|---|---|---|---|
| 01 | Corporate House | 1/22, Asaf Ali Road, New Delhi 110002 | Near New Delhi Metro Station | Positioned directly in Central Delhi, offering rapid access to transit points and a premier corporate address. |
| 02 | Sab House | 3/8, Asaf Ali Road, New Delhi 110002 | Near Delhi Gate Metro Station | Featuring broad glass facades, multiple configurations, and adjacent connectivity to Delhi Gate Metro. |
| 03 | East of Kailash Center | A-77, East of Kailash, New Delhi | South Delhi District | Serving South Delhi founders and business units with boutique meeting assets and private suites. |

### Section 6 — Call to Action (Virtual Office Highlight)
| Element | Content |
|---|---|
| **Eyebrow** | Flexible Scaling Solution |
| **Headline** | Establish a Presence Without the Overhead |
| **Body** | Avail of a premier corporate mailing address, company registration, and GST representation with our Virtual Office solutions starting at minimal pricing. |
| **CTA Button** | Explore Virtual Plans → /virtual-office |

---

## 4. About Page (/about)
**Source:** `src/app/about/page.tsx`

### Header
| Element | Content |
|---|---|
| **Eyebrow** | Our Philosophy |
| **Headline (H1)** | About *22workspace* |
| **Subheadline** | Creating a collaborative culture of plug-and-play community where entrepreneurs, start-ups, accelerators, and advisors thrive together. |
| **Image** | `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000` |

### Main Narrative
| Element | Content |
|---|---|
| **Lead Text** | While new entrepreneurs start getting into the groove of the corporate setup, they deal with everyday challenges of searching for a centralized location. |
| **Paragraph 1** | Securing a central corporate premise and furnishing it—while coordinating critical utilities like digital telephone lines, security firewalls, reception managers, cafeteria setups, printing, scanning, and CCTV surveillance—can drastically increase your gestation period, operational costs, and capital expenditures. |
| **Paragraph 2** | Therefore, at highly economical monthly rates, **22workspace** provides a completely furnished office infrastructure. The strategy behind our concept is to facilitate the optimization of your resources, transitioning capital expenditures (CapEx) to revenue expenditures (OpEx) through a strictly defined "pay for what you use" approach. |
| **Paragraph 3** | Our ultimate objective is community working. We create a dynamic, physical network where you can run your business while associating with entrepreneurs from completely diverse professional backgrounds. |

### Collaborative Ecosystem Section
| Element | Content |
|---|---|
| **Eyebrow** | Collaborative Ecosystem |
| **Headline** | Everything your business needs, under one umbrella. |
| **Subheadline** | Starting a business is complex. Within the 22workspace community, you will find direct professional support and partners to accelerate your growth. |

| # | Service | Description |
|---|---|---|
| 01 | Financial & Tax Advisory | GST alignment, accounting, and taxation support. |
| 02 | Corporate Legal Counsel | Company structuring, contracts, and compliance. |
| 03 | Digital & Development | Website development, software, and systems support. |
| 04 | Marketing & Strategy | Brand consultancy, digital growth campaigns, and human resources. |

### Booking CTA
| Element | Content |
|---|---|
| **Headline** | Join our social and dynamic community today |
| **Body** | Take advantage of our monthly networking events, educational seminars, and affordable, professional space configurations. |
| **CTA Button** | Schedule A Visit → Opens Booking Modal |

---

## 5. Dedicated Seat Page (/dedicated-seat)
**Source:** `src/app/dedicated-seat/page.tsx`

### Breadcrumb
Home / Workspaces / **Dedicated Seat**

### Content
| Element | Content |
|---|---|
| **Eyebrow** | Premium Workstation |
| **Headline (H1)** | Dedicated Seat |
| **Price** | ₹7,000 / month |
| **Description** | This option gives you all the exceptional assets that come with a hot/flexible desk, with the distinct difference being your workspace inside the office remains exclusively fixed for you. Complete your focus tasks without the hassle of selecting a desk daily. |

### Features & Capacity
1. 11 Dedicated seats configured
2. 8 AM to 8 PM Daily Access
3. High-speed fiber Wi-Fi
4. Fully Equipped Stations
5. Comfort-padded seating
6. Locker facility available
7. Cafeteria & Lunch area access
8. Daily professional cleaning

### CTA & Note
| Element | Content |
|---|---|
| **CTA Button** | Inquire & Book Now → Opens Booking Modal (prefill: "Dedicated Seat") |
| **Note** | No long term commitments required. Month-to-month contracts. |

### Images Used
| Position | URL |
|---|---|
| Hero | `https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200` |
| Gallery 1 | `https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800` |
| Gallery 2 | `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800` |

---

## 6. Private Office Page (/private-office)
**Source:** `src/app/private-office/page.tsx`

### Breadcrumb
Home / Workspaces / **Private Office**

### Content
| Element | Content |
|---|---|
| **Eyebrow** | Secure & Dedicated Suite |
| **Headline (H1)** | Private Office |
| **Price** | From ₹7,000 / desk / month |
| **Description** | It is time to work in absolute peace. Our ready to move-in and fully furnished dedicated office suites are configured for your focus. Large enough to accommodate teams from 2 to 50 people, with unlimited scalability options as your enterprise expands. We handle all administrative and physical infrastructure so your team can concentrate on major targets. |

### Features & Capacity
1. Lockable executive suites
2. Flexible sizes from 2 to 15 seats
3. Scale up to 50 team members
4. 8 AM to 8 PM Daily Access
5. High-speed dedicated Wi-Fi
6. Full furniture config included
7. Receptionist administrative support
8. Unlimited premium conference credits

### CTA & Note
| Element | Content |
|---|---|
| **CTA Button** | Request Custom Proposal → Opens Booking Modal (prefill: "Private Office") |
| **Note** | Custom layouts & branding options available for larger teams. |

### Images Used
| Position | URL |
|---|---|
| Hero | `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200` |
| Gallery 1 | `https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800` |
| Gallery 2 | `https://images.unsplash.com/photo-1517502884422-41eaaced0168?q=80&w=800` |

---

## 7. Open Space Page (/open-space)
**Source:** `src/app/open-space/page.tsx`

### Breadcrumb
Home / Workspaces / **Open Space**

### Content
| Element | Content |
|---|---|
| **Eyebrow** | Flexible & Collaborative |
| **Headline (H1)** | Open Space Desk |
| **Price** | ₹5,000 / month |
| **Description** | Come, Chill, and Work! We recognize you require a focused mindset while working, yet love the energy of a vibrant community. Avail of our open-space hot desks in our business center. We have flexible seats configured for everyone, including independent developers, creative freelancers, and agile team units. |

### Features & Capacity
1. Flexible hot desk seating
2. Spacious open-plan layouts
3. 8 AM to 8 PM Daily Access
4. Unlimited premium Wi-Fi
5. Sparks team-building dynamic
6. Access to conference credits
7. Lounge & Cafeteria entry
8. Daily maintenance & housekeeping

### CTA & Note
| Element | Content |
|---|---|
| **CTA Button** | Inquire & Book Seating → Opens Booking Modal (prefill: "Open Space") |
| **Note** | Pay per month. Shifting team sizes accommodated dynamically. |

### Images Used
| Position | URL |
|---|---|
| Hero | `https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200` |
| Gallery 1 | `https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800` |
| Gallery 2 | `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800` |

---

## 8. Meeting Room Page (/meeting-room)
**Source:** `src/app/meeting-room/page.tsx`

### Breadcrumb
Home / Workspaces / **Meeting Room**

### Content
| Element | Content |
|---|---|
| **Eyebrow** | Collaborative Sessions |
| **Headline (H1)** | Meeting Rooms |
| **Price** | From ₹300 / hour |
| **Description** | Time to brainstorm? These alignments are crucial for day-to-day business operations. Conduct your board alignments inside conference assets built with large floor-to-ceiling glass windows that illuminate the room with natural light and offer inspiring city views. Ergonomically optimized seating supports long sessions. |

### Features & Capacity
1. Multiple options: 4, 6, & 8 Pax
2. Smart LED Projector & AV setup
3. Naturally lit with wide glass view
4. Comfort-first ergonomic chairs
5. Whiteboard & markers included
6. Complimentary tea/coffee support
7. Flexible hourly booking terms
8. High-speed secure guest Wi-Fi

### CTA & Note
| Element | Content |
|---|---|
| **CTA Button** | Book By The Hour → Opens Booking Modal (prefill: "Meeting Room") |
| **Note** | Select your preferred size: 4, 6, or 8 seats during verification. |

### Images Used
| Position | URL |
|---|---|
| Hero | `https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200` |
| Gallery 1 | `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800` |
| Gallery 2 | `https://images.unsplash.com/photo-1517502884422-41eaaced0168?q=80&w=800` |

---

## 9. Events Space Page (/event)
**Source:** `src/app/event/page.tsx`

### Breadcrumb
Home / Workspaces / **Event Space**

### Content
| Element | Content |
|---|---|
| **Eyebrow** | Conferences & Networking |
| **Headline (H1)** | Events Space |
| **Price** | From ₹1,500 / hour |
| **Description** | It's networking time! Host your next event, seminar, product launch, or training program inside our coworking center. The dedicated event setup can comfortably accommodate up to 30 delegates, sponsors, and team members. You can customize the seating layout and coordinate hospitality services according to your requirements. |

### Features & Capacity
1. Accommodates up to 30 people
2. High-end projection facility
3. 24-Hour Access options
4. Custom hospitality configuration
5. Gourmet tea/coffee catering
6. Flexible seating layouts
7. Secure high-speed guest Wi-Fi
8. Event coordinator support

### CTA & Note
| Element | Content |
|---|---|
| **CTA Button** | Book Event Venue → Opens Booking Modal (prefill: "Events Space") |
| **Note** | Hospitality services are priced on request depending on requirements. |

### Images Used
| Position | URL |
|---|---|
| Hero | `https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200` |
| Gallery 1 | `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800` |
| Gallery 2 | `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800` |

---

## 10. Virtual Office Page (/virtual-office)
**Source:** `src/app/virtual-office/page.tsx`

### Header
| Element | Content |
|---|---|
| **Eyebrow** | Flexible Corporate Presence |
| **Headline (H1)** | Virtual *Office* |
| **Body** | Avoid wasting capital on expensive, underutilized physical premises. Establish your presence with a premium business center address, mailing options, GST registration support, and CA advice. |

### Benefits of a Virtual Office

| Benefit | Icon | Description |
|---|---|---|
| Premium Address | 📍 | Establish a prestigious business address in Central Delhi (Asaf Ali Road) to boost client trust. |
| GST & Business Registration | 📝 | Legally register your enterprise or request a GST number using our address. |
| All Required Documentation | 📄 | We provide complete No Objection Certificates (NOC), utility bills, rent-agreements, and board physical signage. |
| Complimentary CA Advice | 💼 | Avail of professional consultation from qualified accountants on company structuring and regulatory compliance. |
| Physical Locker Storage | 🔒 | Access physical lockers to securely store your books of account and statutory documents. |
| On-Demand Boardrooms | 🏢 | Book meeting rooms, conference systems, or desk hot passes at exclusive membership rates whenever you visit. |

### Plan Comparison Section
| Element | Content |
|---|---|
| **Headline** | Choose Your Virtual Plan |
| **Subheadline** | Select the optimal configuration for your operating style. We provide comprehensive documentation with quick processing. |

#### Plan 1 — Virtual Basic
| Field | Content |
|---|---|
| **Subtitle** | Corporate Address Solution |
| **Description** | Establish a premium corporate footprint with dedicated mailing and communication support. |
| **Price** | Request Proposal |
| **Features** | Premium Business Address · Courier Forwarding Facility · Conference room credits (Pay-and-use) · Lounge & Coworking access (Pay-and-use) |
| **CTA** | Contact Us Now |

#### Plan 2 — Virtual Classic ⭐ (Most Popular)
| Field | Content |
|---|---|
| **Subtitle** | Statutory Registrations Solution |
| **Description** | Designed for businesses requiring formal government registrations and tax compliance. |
| **Price** | Request Proposal |
| **Features** | Virtual Basic Features Included · GST Registration Authorized · Company Affairs Registration allowed · Complimentary CA advice on structuring |
| **CTA** | Register Address |
| **Badge** | Most Popular |

#### Plan 3 — Virtual Premium
| Field | Content |
|---|---|
| **Subtitle** | Run It Like A Boss Solution |
| **Description** | An all-in-one virtual plan loaded with physical office access credits and storage. |
| **Price** | Request Proposal |
| **Features** | Virtual Classic Features Included · Physical Locker Facility (for statutory books) · 1 Day Coworking Pass per month · 2 Hours Conference Room access per month |
| **CTA** | Go Premium |

#### Plan 4 — Virtual Platinum
| Field | Content |
|---|---|
| **Subtitle** | Your Personalized Virtual Office |
| **Description** | The ultimate hybrid workspace solution providing a dedicated physical address and desk representation. |
| **Price** | Request Proposal |
| **Features** | Virtual Premium Features Included · Independent office with dedicated seat · Proper seat allocation with desk signage · Priority board room scheduling |
| **CTA** | Go Platinum |

---

## 11. Footer (Global)
**Source:** `src/components/Footer.tsx`

### Brand Section
| Element | Content |
|---|---|
| **Brand Text** | 22workspace |
| **Tagline** | A premium, design-led business center and coworking environment designed to spark innovation, drive business growth, and connect entrepreneurs. |
| **CTA Link** | Schedule Consultation → Opens Booking Modal |

### Explore (Quick Links)
| Label | Link |
|---|---|
| About Us | /about |
| Dedicated Seat | /dedicated-seat |
| Private Office | /private-office |
| Open Desk Seating | /open-space |
| Conference Rooms | /meeting-room |
| Events Space | /event |
| Virtual Office Plans | /virtual-office |

### Our Locations

| Label | Building Name | Address | Metro |
|---|---|---|---|
| Location 1 - Asaf Ali Road | Corporate House | 1/22, ASAF ALI ROAD, NEW DELHI 110002 | Near New Delhi Metro Station |
| Location 2 - Asaf Ali Road | Sab House | 3/8, ASAF ALI ROAD, NEW DELHI 110002 | Near Delhi Gate Metro Station |
| Location 3 - South Delhi | East of Kailash Center | A-77, East of Kailash, New Delhi | — |

### Contact Info Bar
| Type | Content |
|---|---|
| **Phone** | +91 87005 13200 |
| **Email** | info@22workspace.com |
| **Working Hours** | Mon - Sat (8:00 AM - 8:00 PM) |

### Legal
| Element | Content |
|---|---|
| **Copyright** | © {current year} by 22Workspace (A brand of Corporate Buildcon LLP). All rights reserved. |
| **Links** | Privacy Policy · Terms of Service (both link to `#`) |

---

## 12. Booking Modal (Popup)
**Source:** `src/components/BookingModal.tsx`

### Modal Header
| Element | Content |
|---|---|
| **Eyebrow** | Book Your Space |
| **Headline** | Plan Your Visit |

### Form Fields
| Label | Type | Placeholder / Options |
|---|---|---|
| Full Name | text (required) | e.g. John Doe |
| Email Address | email (required) | e.g. john@example.com |
| Phone Number | tel (required) | e.g. +91 99999 99999 |
| Preferred Location | select | Corporate House (Central Delhi) · Sab House (Central Delhi) · East of Kailash (South Delhi) |
| Workspace Needed | select | Dedicated Seat (₹7,000/mo) · Private Office (₹7,000/desk/mo) · Open Space (₹5,000/mo) · Meeting Room (₹300/hr) · Events Space (₹1,500/hr) · Virtual Office (Basic/Classic/Premium/Platinum) |
| Special Requirements | textarea | Tell us about your team size or any custom requirements... |

### Submit
| Element | Content |
|---|---|
| **Submit Button** | Send Inquiry |

### Success State (Post-Submission)
| Element | Content |
|---|---|
| **Headline** | Inquiry Received |
| **Body** | Thank you for contacting 22workspace. Our community manager will reach out to you shortly. |

---

## All Images Used (Summary)

| Image (Unsplash) | Used On |
|---|---|
| `photo-1524758631624-e2822e304c36` | Homepage Tab 1, Dedicated Seat page, Private Office gallery, Open Space gallery |
| `photo-1497366216548-37526070297c` | Homepage hero BG, Homepage Tab 2, Private Office hero, Dedicated Seat gallery, Open Space gallery, Meeting Room gallery, Event gallery |
| `photo-1497215728101-856f4ea42174` | Homepage Tab 3, Open Space hero, Dedicated Seat gallery |
| `photo-1431540015161-0bf868a2d407` | Homepage Tab 4, Meeting Room hero |
| `photo-1511578314322-379afb476865` | Homepage Tab 5, Events Space hero |
| `photo-1522071820081-009f0129c71c` | About page image, Events Space gallery |
| `photo-1517502884422-41eaaced0168` | Private Office gallery, Meeting Room gallery |

---

## All CTAs / Button Labels Used (Summary)

| Button Label | Action | Pages Used On |
|---|---|---|
| Request Pricing | Opens Booking Modal | Homepage Hero |
| Explore Virtual Offices | Link to /virtual-office | Homepage Hero |
| Book Now | Opens Booking Modal (prefilled) | Homepage Workspace Tabs |
| View Details | Links to subpage | Homepage Workspace Tabs |
| Book A Tour | Opens Booking Modal | Navbar (desktop + mobile) |
| Schedule Consultation | Opens Booking Modal | Footer |
| Schedule A Visit | Opens Booking Modal | About Page |
| Inquire & Book Now | Opens Booking Modal (Dedicated Seat) | Dedicated Seat Page |
| Request Custom Proposal | Opens Booking Modal (Private Office) | Private Office Page |
| Inquire & Book Seating | Opens Booking Modal (Open Space) | Open Space Page |
| Book By The Hour | Opens Booking Modal (Meeting Room) | Meeting Room Page |
| Book Event Venue | Opens Booking Modal (Events Space) | Events Space Page |
| Contact Us Now | Opens Booking Modal (Virtual Basic) | Virtual Office Page |
| Register Address | Opens Booking Modal (Virtual Classic) | Virtual Office Page |
| Go Premium | Opens Booking Modal (Virtual Premium) | Virtual Office Page |
| Go Platinum | Opens Booking Modal (Virtual Platinum) | Virtual Office Page |
| Explore Virtual Plans | Link to /virtual-office | Homepage CTA Section |
| Send Inquiry | Submits form | Booking Modal |
| Contact | Opens Booking Modal | Navbar |
| Contact Us | Opens Booking Modal | Navbar Mobile |

---

*End of Content Audit*
