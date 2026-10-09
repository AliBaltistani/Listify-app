# Listify App — Product Requirements Document (PRD)

> **Version:** 1.0  
> **Last Updated:** 2026-10-07  
> **Platform:** iOS & Android (React Native / Expo)  
> **Target Market:** Pakistan (PKR currency, PTA compliance, PAK +923 phone codes)

---

## 1. Product Vision

**Listify** is a mobile-first classified ads marketplace that enables users to buy, sell, and discover products and services in their local area. Think of it as a modern, location-aware alternative to OLX/Dubizzle — built natively for the Pakistani market with sleek UX, robust seller tools, and trust features like verified profiles and safety moderation.

---

## 2. Target Users

| Persona | Description |
|---------|-------------|
| **Buyer** | End-users looking to browse, search, filter, and purchase items across categories (mobiles, vehicles, property, fashion, etc.) |
| **Seller** | Individual or casual sellers who want to list items, manage ads, track views, and communicate with buyers |
| **Admin** | Platform operators who moderate listings, handle reports, and manage trust & safety |

---

## 3. Core Features

### 3.1 Onboarding & Authentication
| Feature | Details |
|---------|---------|
| Splash Screens | 4 onboarding/splash screens with branding, value props, and gradient visuals |
| Login | Email + Password login with "Forget Password" link |
| Registration | Full Name, Phone Number (PAK +923 format), Email, Username, Password |
| Social Auth | Apple Sign-In and Google Sign-In buttons |
| Phone OTP | Phone number verification via OTP input (6-digit) |
| Email OTP | Email verification via OTP input (6-digit) |
| Reset Password | Dedicated reset password screen |

### 3.2 Homepage & Discovery
| Feature | Details |
|---------|---------|
| Hero Banner | Gradient promotional banner with featured product and price (e.g., Nike Free Metcon $120.99) |
| Location Bar | Shows current location (e.g., "Skardu, Lahore") with location picker dropdown |
| Browse Categories | 15+ category grid — Mobiles, Property, Vehicles, Bikes, Flats, Fashions, etc. with "See more" link |
| Near to Me | Location-based listings section showing nearby items with price, condition tag ("New"), location, and date |
| Featured Section | Highlighted/promoted listings with "Featured" badge and heart/favorite icon |
| Bottom Navigation | 5-tab: Home, Search, Post Ad (+), Messages, Profile |

### 3.3 Search & Filtering
| Feature | Details |
|---------|---------|
| Search Page | Full search interface with search bar, recent searches, and results grid |
| Filter & Sort | Bottom sheet modal with filters for Price Range, Condition, Location, Category, Sort By (Newest, Price Low-High, etc.) |

### 3.4 Category & Product Details
| Feature | Details |
|---------|---------|
| Category Details Page | Grid/list of ads within a selected category with thumbnails, prices, and location |
| Product Details Page | Full product view with: Image gallery (swipeable with dot indicators), Product title + price (PKR), Condition & location info, Contact section (Chat with Seller / Call Seller), Key Highlights & Specs (Storage, Connectivity, Color swatch, Battery health, In-Box contents, PTA status), Seller profile card (avatar, name, "VERIFIED" badge, star rating 4.9, ratings count), Similar listings section, Make Offer button, Share & Report actions |

### 3.5 Post an Ad (Multi-Step Wizard)
| Step | Details |
|------|---------|
| Select Category | Hierarchical category picker |
| Step 1: Photos & Basic Info | Photo upload (multiple variants/UI states), title, basic details |
| Category-Specific Specs | Dynamic forms per category: **Mobiles & Tablets** — Brand, Model, Storage, Condition, PTA status; **Vehicles & Cars** — Make, Model, Year, Mileage, Fuel type, Transmission; **Property** — Type (Sale/Rent), Area, Bedrooms, Price |
| Step 2: Description & Pricing | Long description text area, price input, negotiable toggle |
| Set Location | Map-based location picker for ad placement |
| Step 3: Review & Publish | Full preview of listing before submission |
| Success Screen | Confirmation with visual celebration |

### 3.6 Seller Dashboard
| Feature | Details |
|---------|---------|
| My Ads | List of seller's own active/inactive ads with status, views, and management options |

### 3.7 Messaging
| Feature | Details |
|---------|---------|
| Message Page | List of all conversations (buyer ↔ seller threads) |
| Message Group Page | Individual chat thread with message bubbles, timestamp, and input bar |

### 3.8 User Profile & Settings
| Feature | Details |
|---------|---------|
| User Profile | Public profile view with avatar, name, member since, listings, and rating |
| Edit Profile | Editable form for profile picture, name, and details |
| Settings | Preferences, account management, and app settings |

### 3.9 Engagement & Trust
| Feature | Details |
|---------|---------|
| Notifications | Activity feed with likes, messages, and system notifications |
| Saved Ads (Favorites) | Heart icon to save/bookmark ads; dedicated saved ads page with grid view |
| Safety & Moderation | Report sheet (bottom sheet modal) for flagging inappropriate/scam listings |

---

## 4. Functional Requirements

### FR-01: User Authentication
- Users MUST be able to register with Full Name, Phone, Email, Username, Password
- Users MUST verify identity via Phone OTP **or** Email OTP
- Users MAY authenticate via Apple or Google social login
- Users MUST be able to reset forgotten passwords

### FR-02: Listing Management
- Sellers MUST be able to create listings through a multi-step wizard
- Listings MUST include photos, title, description, price, category, location
- Category-specific fields MUST be displayed dynamically (Mobiles vs Vehicles vs Property)
- Sellers MUST be able to view and manage their active ads via Dashboard

### FR-03: Search & Discovery
- Users MUST be able to search listings by keyword
- Users MUST be able to filter by category, price range, condition, and location
- Users MUST be able to sort results (Newest, Price ascending/descending)
- Homepage MUST show location-based ("Near to Me") and promoted ("Featured") listings

### FR-04: Communication
- Buyers MUST be able to message sellers via in-app messaging
- Users MUST be able to view conversation history
- Product detail page MUST offer "Chat with Seller" and "Call Seller" options

### FR-05: Trust & Safety
- Seller profiles MUST display verification badge where applicable
- Users MUST be able to report listings via the Safety & Moderation sheet
- Seller profiles MUST show star rating and total ratings count

### FR-06: Engagement
- Users MUST be able to save/favorite listings
- Users MUST receive notifications for relevant activity
- Listings MUST support "Featured" promotion badges

---

## 5. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| **Platform** | iOS 15+ and Android 10+ |
| **Framework** | React Native 0.81+ via Expo SDK 54 |
| **Performance** | First meaningful paint < 2s, smooth 60fps scrolling |
| **Offline** | Cached home feed and saved ads available offline |
| **Localization** | Urdu language support planned for v2 |
| **Currency** | PKR (Pakistani Rupee) as primary, support for $ display |
| **Accessibility** | WCAG 2.1 AA compliance target |

---

## 6. Success Metrics

| Metric | Target |
|--------|--------|
| DAU / MAU Ratio | > 30% |
| Avg. Session Duration | > 4 minutes |
| Listing Completion Rate | > 70% (start → publish) |
| Message Response Rate | > 50% within 1 hour |
| Crash-Free Rate | > 99.5% |

---

## 7. Out of Scope (v1)

- Payment gateway / in-app transactions
- Shipping & logistics integration
- Business/Store seller accounts
- AI-powered price suggestions
- Dark mode theme
- Multi-language (Urdu) support
