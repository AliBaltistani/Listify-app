# Listify Platform — Memory Document

> **Purpose:** Persistent context for any AI agent or developer joining at any stage.  
> **Last Updated:** 2026-10-07  
> **Version:** 3.0 — Post Phase 1 Foundation

---

## 1. What Is Listify?

Listify is a **full-stack classified ads platform** targeting the **Pakistani market** with three parts:

| Part | Tech | Purpose |
|------|------|---------|
| 📱 **Mobile App** | React Native / Expo SDK 54 | Buyer & seller marketplace |
| 🖥️ **Admin Portal** | Next.js (Web) | Full platform management — categories, listings, users, config, content |
| ☁️ **Unified Backend** | Node.js / Express + PostgreSQL | Single API serving both app and admin |
| 📦 **Shared Package** | `@listify/shared` (TypeScript) | Types, validators (Zod), utils — shared across all 3 projects |

Users can buy, sell, and discover products locally — similar to OLX/Dubizzle but with a modern UI. **Everything is admin-configurable with zero code changes.**

---

## 2. Current State

| Aspect | Status |
|--------|--------|
| **Stage** | ✅ Phase 1 Foundation complete — monorepo established |
| **Monorepo** | ✅ npm workspaces: `packages/shared`, `apps/mobile`, `apps/backend`, `apps/admin` |
| **Shared Package** | ✅ `@listify/shared` — 6 type files, 3 Zod validators, 4 utils, 3 constants |
| **Navigation** | ✅ Tab + nested stacks (Auth, Home, Search, PostAd, Messages, Profile) |
| **Design System** | ✅ Theme tokens (`tokens.ts`) + ThemeContext + 7 reusable components |
| **TypeScript** | ✅ Zero compilation errors across all packages |
| **Backend** | ❌ Placeholder only — no APIs implemented |
| **State Management** | Local `useState` only — Zustand + TanStack Query not yet integrated |
| **Images** | ⚠️ Figma-generated screens still use remote CDN URLs (expiring) |
| **Forms** | Working text inputs but no validation or submission logic connected |
| **Authentication** | UI complete, no backend integration |
| **API Layer** | ❌ Not implemented |

---

## 3. Project Structure

```
c:\wamp64\www\ReactNative\Listify-app\
├── .docs/                          # Documentation suite (7 files)
├── .gitignore
├── package.json                    # npm workspaces root
├── tsconfig.base.json              # Shared TS config (strict, ES2022)
├── packages/
│   └── shared/                     # @listify/shared
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts            # Barrel export
│           ├── types/              # user, listing, category, message, config, api
│           ├── validators/         # auth.schema, listing.schema, user.schema (Zod)
│           ├── constants/          # roles, status, fieldTypes
│           └── utils/              # formatPrice, formatDate, formatPhone, slugify
└── apps/
    ├── mobile/                     # Expo SDK 54 app
    │   ├── App.tsx                 # Entry: SafeAreaProvider → ThemeProvider → NavigationContainer
    │   ├── app.json, package.json, tsconfig.json
    │   └── src/
    │       ├── declarations.d.ts   # Type stubs + global alert shim
    │       ├── navigation/         # 9 files: Root, Auth, Home, Search, PostAd, Messages, Profile, MainTabs, types
    │       ├── screens/            # 37 merged screens (from original part1 + part2)
    │       ├── components/common/  # Button, TextInput, ListingCard, Badge, Avatar, EmptyState, LoadingSkeleton
    │       └── theme/              # tokens.ts (colors, typography, spacing, shadows) + ThemeContext.tsx
    ├── backend/                    # Placeholder (package.json only)
    └── admin/                      # Placeholder (package.json only)
```

---

## 4. Complete Screen Map (37 Screens)

### Auth & Onboarding (11 screens)

| Screen | Purpose |
|--------|---------|
| `SplashScreen` (×4) | Onboarding splash 1–4 |
| `LoginPage` | Email + Password login, social auth (Apple/Google) |
| `RegisterPage` | Full Name, Phone (PAK +923), Email, Username, Password |
| `EmailOTPPage` | Email OTP entry |
| `EmailOTPVerification` | Email OTP verification |
| `PhoneOTPPage` | Phone OTP entry |
| `PhoneOTPVerification` | Phone OTP verification |
| `ResetPasswordPage` | Password reset |

### Home & Marketplace (3 screens)

| Screen | Purpose |
|--------|---------|
| `Homepage` | Main feed: Hero banner, categories, "Near to Me", "Featured" |
| `Category_DetailsPage` | Listings grid within a category |
| `ProductDetailsPage` | Full product view with specs, seller info, contact |

### Search & Discovery (2 screens)

| Screen | Purpose |
|--------|---------|
| `SearchPage` | Search bar + results grid |
| `FilterSortBottomSheet` | Filter/sort modal (price, condition, location, sort) |

### Post Ad Wizard (12 screens)

| Screen | Purpose |
|--------|---------|
| `PostAnAdSelectCategory` | Category picker |
| `PostAnAdStep1PhotosBasicInfo` (×4) | Photo upload variants |
| `PostAnAdMobilesTabletsDetailsSpecs` | Specs: Mobiles & Tablets |
| `PostAnAdVehiclesCarsDetailsSpecs` | Specs: Vehicles & Cars |
| `PostAnAdPropertyForSaleRentDetailsSpecs` | Specs: Property |
| `PostAnAdStep2DescriptionPricing` | Description + Pricing |
| `PostAnAdSetLocation` | Map location picker |
| `PostAnAdStep3ReviewPublish` | Review & Publish |
| `PostAnAdSuccessScreen` | Post confirmation |

### Messaging (2 screens)

| Screen | Purpose |
|--------|---------|
| `MessagePage` | Conversation inbox |
| `MessageGroupPage` | Individual chat thread |

### Profile & Engagement (7 screens)

| Screen | Purpose |
|--------|---------|
| `UserProfile` | Public profile view |
| `EditProfile` | Edit profile form |
| `Settings` | App preferences |
| `MyAdsSellerDashboard` | Seller's ad management |
| `SavedAdsFavorites` | Bookmarked/favorited ads |
| `NotificationsActivityFeed` | Activity notifications |
| `SafetyModerationReportSheet` | Report listing modal |

---

## 5. Navigation Architecture

```
RootNavigator (conditional)
├── AuthStack (not authenticated)
│   ├── SplashScreen (×4)
│   ├── LoginPage
│   ├── RegisterPage
│   ├── EmailOTPPage → EmailOTPVerification
│   ├── PhoneOTPPage → PhoneOTPVerification
│   └── ResetPasswordPage
└── MainTabs (authenticated) — 5-tab bottom navigator
    ├── HomeTab → HomeStack (Homepage → Category → ProductDetails)
    ├── SearchTab → SearchStack (Search → Filter → ProductDetails)
    ├── PostAdTab → PostAdStack (12-screen wizard)
    ├── MessagesTab → MessagesStack (Inbox → Chat)
    └── ProfileTab → ProfileStack (Profile → Edit → Settings → MyAds → Saved → Notifications → Report)
```

---

## 6. Tech Stack Summary

### Mobile App
| Technology | Version | Status |
|-----------|---------|--------|
| React Native | 0.81.5 | ✅ Installed |
| Expo (Managed) | SDK 54 | ✅ Installed |
| TypeScript | 5.9.2 | ✅ Configured |
| React Navigation (Tabs + Stacks) | 7.x | ✅ Configured |
| Zustand + TanStack Query | Latest | ⬜ Not yet |
| React Hook Form + Zod | Latest | ⬜ Not yet |

### Admin Portal (Web)
| Technology | Version | Status |
|-----------|---------|--------|
| Next.js (App Router) | 14.x | ⬜ Placeholder |

### Unified Backend
| Technology | Version | Status |
|-----------|---------|--------|
| Node.js / Express | 20.x / 4.x | ⬜ Placeholder |
| PostgreSQL + Prisma | 16.x | ⬜ Not started |

---

## 7. @listify/shared Package Contents

| Category | Files | Contents |
|----------|-------|----------|
| **Types** | 6 files | `User`, `Listing`, `Category`, `Message`, `AppConfig`, `ApiResponse<T>` |
| **Validators** | 3 files | `loginSchema`, `registerSchema`, `otpSchema`, `createListingSchema`, `filterSchema`, `updateProfileSchema` |
| **Constants** | 3 files | `UserRole`, `UserStatus`, `ListingStatus`, `ListingCondition`, `FieldType` |
| **Utils** | 4 files | `formatPrice()`, `formatDate()`, `formatPhone()`, `slugify()` |

---

## 8. Reusable Components (`apps/mobile/src/components/common/`)

| Component | Variants/Features |
|-----------|-------------------|
| `Button` | primary, secondary, outlined, social; loading state; icon support |
| `TextInput` | icon, label, error state, focus border |
| `ListingCard` | grid, list, featured; favorite toggle; condition badge |
| `Badge` | featured, verified, new, used, refurbished, negotiable |
| `Avatar` | image or placeholder fallback |
| `EmptyState` | icon, title, description, optional action button |
| `LoadingSkeleton` | animated shimmer with configurable dimensions |

---

## 9. Known Issues & Remaining Debt

| Issue | Severity | Details |
|-------|----------|---------|
| Remote image URLs expire | High | Figma CDN URLs expire — need Cloudinary/S3 |
| No StyleSheet.create | Medium | Auto-generated screens use inline styles |
| Anonymous exports | Medium | Screen components use `export default (props) =>` |
| No TypeScript types on screens | Medium | Screen props are untyped |
| No form validation connected | Medium | Inputs accept any value |
| Placeholder alert() calls | Low | All `onPress` handlers show `alert('Pressed!')` |
| `strict: false` in mobile tsconfig | Low | Relaxed for auto-generated code, will re-enable in Phase 2 |

### ✅ Resolved Issues
- ~~Two separate projects (part1/part2)~~ → Merged into `apps/mobile`
- ~~Flat navigation~~ → Tab + nested stacks
- ~~Typo: SpashScreen~~ → Renamed to `SplashScreen`
- ~~Typo: EmailOTPVerfication~~ → Renamed to `EmailOTPVerification`
- ~~Trailing spaces in screen names~~ → Fixed
- ~~No shared types~~ → `@listify/shared` with 6 type files
- ~~No design system~~ → `tokens.ts` + 7 reusable components

---

## 10. Immediate Next Steps (Priority Order)

1. **Set up backend** — Express + Prisma + PostgreSQL schema
2. **Implement auth APIs** — Register, Login, OTP, JWT tokens
3. **Connect auth screens** — Zustand store + React Hook Form + Zod validation
4. **Replace remote images** — Download to local assets or Cloudinary CDN
5. **Build admin portal** — Next.js with config, categories, listings management
6. **Connect marketplace screens** — TanStack Query for data fetching
7. **Re-enable strict TypeScript** — Gradually refactor auto-generated screens

---

## 11. Documentation Index

| Document | Path | Purpose |
|----------|------|---------|
| **README** | `.docs/README.md` | **Start here** — Overview, prerequisites, setup guide |
| PRD | `.docs/PRD.md` | Product requirements, features, success metrics |
| Architecture | `.docs/architecture.md` | Unified platform design, monorepo, API routes, shared code |
| Rules | `.docs/rules.md` | Zero hardcoding, less-code-high-impact, coding conventions |
| Phases | `.docs/phases.md` | Development roadmap with checklists |
| Design | `.docs/design.md` | Color palette, typography, component specs |
| Memory | `.docs/memory.md` | **This file** — Global context for onboarding |

---

## 12. Core Development Philosophy

> [!CAUTION]
> These three principles govern ALL development decisions. Violating any is a blocker.

| Principle | What It Means |
|-----------|---------------|
| **🚫 Zero Hardcoding** | No string, color, label, category, config, or content may be hardcoded. Everything comes from the backend/admin panel. Changing the app name from "Listify" to "BazaarPK" must require ZERO code changes. |
| **⚡ Less Code, High Impact** | Write types ONCE in `@listify/shared`, validate ONCE with shared Zod schemas, format ONCE with shared utils. One `DynamicForm` component replaces N category-specific forms. One `ListingCard` with variants replaces N card components. |
| **🔄 100% Reusable** | Admin panel controls everything: categories, fields, themes, sections, translations, features. Adding a new category with 10 custom fields = admin panel only, zero frontend code. |

**The Golden Test:** Rebrand to "BazaarPK", change color to green, add 5 new categories, switch PKR to AED — all from admin panel with **ZERO code changes**. If impossible, the architecture is wrong.
