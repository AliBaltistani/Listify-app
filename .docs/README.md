# 📱 Listify App — Project Overview & Setup Guide

> **A modern classified ads marketplace for Pakistan — Buy, Sell & Discover Locally**

---

## What Is Listify?

Listify is a mobile-first classified ads marketplace built with **React Native (Expo)** targeting the Pakistani market. Users can browse, search, post, and buy/sell items across categories like Mobiles, Vehicles, Property, Fashion, and more — with location-based discovery, in-app messaging, and seller verification.

---

## 📑 Documentation Index

| Document | Description |
|----------|-------------|
| [PRD](PRD.md) | Product requirements, features, user personas, success metrics |
| [Architecture](architecture.md) | System design, tech stack, navigation, data flow, recommended structure |
| [Rules](rules.md) | Coding conventions, naming, styling, API patterns, security |
| [Phases](phases.md) | 5-phase development roadmap with checklists |
| [Design](design.md) | Color palette, typography, spacing, component specs |
| [Memory](memory.md) | Full project context, screen map, known issues, next steps |

---

## 🛠 Tech Stack

| Layer | Technology | Version | Status |
|-------|-----------|---------|--------|
| Runtime | React Native | 0.81.5 | ✅ |
| Framework | Expo (Managed) | SDK 54 | ✅ |
| Language | TypeScript | 5.9.2 | ✅ |
| Navigation | React Navigation (Tabs + Stacks) | 7.x | ✅ |
| Shared Types | `@listify/shared` (Zod + TS) | 1.0.0 | ✅ |
| Gradients | expo-linear-gradient | 15.x | ✅ |
| Icons | @expo/vector-icons | 15.x | ✅ |
| Safe Area | react-native-safe-area-context | 5.x | ✅ |
| Screens | react-native-screens | 4.x | ✅ |

---

## ⚙️ Prerequisites

### System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| **Node.js** | 18.x LTS | 20.x LTS |
| **npm** | 9.x | 10.x |
| **Git** | 2.30+ | Latest |
| **OS** | Windows 10 / macOS 12 / Ubuntu 20 | Latest |
| **RAM** | 8 GB | 16 GB |

### Mobile Development

| Tool | Purpose | Install |
|------|---------|---------|
| **Expo CLI** | Build & run the app | `npm install -g expo-cli` or use `npx expo` |
| **Expo Go** (Phone) | Test on physical device | [iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) |
| **Android Studio** | Android emulator (optional) | [Download](https://developer.android.com/studio) |
| **Xcode** (macOS only) | iOS simulator (optional) | Mac App Store |

### API Keys & Config

```env
# apps/mobile/.env
EXPO_PUBLIC_API_BASE_URL=https://your-api.com/api
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
EXPO_PUBLIC_MAPS_API_KEY=your-google-maps-key

# apps/backend/.env
DATABASE_URL=postgresql://...
JWT_SECRET=your-jwt-secret
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
CLOUDINARY_URL=cloudinary://...
```

---

## 🚀 Quick Start

### First-time setup (one command)

```bash
# From the monorepo root — installs ALL workspaces + mobile deps automatically
npm install
```

> **How it works:** `npm install` at the root runs a `postinstall` hook (`scripts/postinstall.js`) which automatically installs the mobile app's dependencies locally in `apps/mobile/node_modules`. This is required because React Native's Metro bundler must find `metro`, `expo`, and related packages in the **local** `node_modules`, not the hoisted workspace root. This happens automatically every time you run `npm install`.

### Running the app

```bash
# From the monorepo root:
npm start              # Start Expo dev server (interactive menu)
npm run start:android  # Open directly on Android
npm run start:ios      # Open directly on iOS (macOS only)
npm run start:web      # Open in browser

# Or from apps/mobile directly:
cd apps/mobile && npx expo start
```

Then press `a` (Android), `i` (iOS), `w` (Web), or scan the QR code with **Expo Go**.

### All root-level scripts

| Script | Description |
|--------|-------------|
| `npm install` | Install all deps + auto-run mobile local install |
| `npm start` | Start the Expo dev server |
| `npm run start:android` | Start + launch Android |
| `npm run start:ios` | Start + launch iOS |
| `npm run start:web` | Start + launch web |
| `npm run build:shared` | Compile `@listify/shared` TypeScript |
| `npm run typecheck` | Run TypeScript checks across all packages |
| `npm run dev:backend` | Start the backend server |

### CI/CD

The `postinstall` script detects CI environments (`process.env.CI`) and skips the automatic mobile install. In CI, install workspace packages manually:

```bash
# CI setup
npm install                              # Root + shared
npm install --prefix apps/mobile --legacy-peer-deps  # Mobile
```

---

## 📂 Project Structure

```
Listify-app/                        # Monorepo root (npm workspaces)
├── .docs/                          # Documentation (7 files)
├── packages/
│   └── shared/                     # @listify/shared — types, validators, utils
│       └── src/
│           ├── types/              # user, listing, category, message, config, api
│           ├── validators/         # auth, listing, user (Zod schemas)
│           ├── constants/          # roles, status, fieldTypes
│           └── utils/              # formatPrice, formatDate, formatPhone, slugify
└── apps/
    ├── mobile/                     # Expo SDK 54 app (33 screens)
    │   ├── App.tsx                 # Entry point
    │   └── src/
    │       ├── navigation/         # State-driven router mapping all views
    │       ├── screens/            # 33 fully interactive screen components
    │       ├── components/common/  # Reusable UI components
    │       └── theme/              # Design tokens + ThemeContext
    ├── backend/                    # Placeholder — Node.js/Express
    └── admin/                      # Placeholder — Next.js admin portal
```

---

## 📱 Screen Overview (33 Screens)

| Group | Count | Screens |
|-------|-------|---------|
| **Onboarding** | 4 | SplashScreen (×4) |
| **Auth** | 7 | Login, Register, Email OTP (×2), Phone OTP (×2), Reset Password |
| **Marketplace** | 3 | Homepage, Category Details, Product Details |
| **Search** | 2 | Search Page, Filter/Sort Sheet |
| **Post Ad** | 8 | Category → Location → Step 1 → Specs (×3) → Step 2 → Step 3 → Success |
| **Messaging** | 2 | Message List, Chat Thread |
| **Profile** | 7 | Profile, Edit, Settings, My Ads, Saved, Notifications, Report |

---

## 🎨 Brand Quick Reference

| Element | Value |
|---------|-------|
| **Primary Color** | `#FC6901` (Orange) |
| **Dark Background** | `#131214` |
| **Success/Verified** | `#047857` |
| **Price Highlight** | `#FF5500` |
| **Featured Badge** | `#FDE68A` |
| **Currency** | PKR (Pakistani Rupee) |
| **Phone Format** | PAK +923 |

---

## ✅ Phase 1 Completed

- [x] Monorepo with npm workspaces
- [x] `@listify/shared` package (types, validators, utils)
- [x] 33 screens covering Auth, Marketplace, Seller Tools, and Profile functionality
- [x] Full interactive navigation routing across all app features
- [x] Design system tokens + ThemeContext
- [x] Reusable components (Button, TextInput, ListingCard, Badge, Avatar, EmptyState)
- [x] Zero TypeScript compilation errors
- [x] Old directories cleaned up

## ⬜ Phase 2 Next

- [ ] Backend setup (Express + Prisma + PostgreSQL)
- [ ] Authentication APIs + frontend integration
- [ ] Zustand + TanStack Query state management
- [ ] Replace expiring CDN images

---

## 🗺 Development Roadmap

| Phase | Focus | Duration | Status |
|-------|-------|----------|--------|
| **1** | Foundation, Design System, & All UI Screens | 3 weeks | ✅ Done |
| **2** | Core Marketplace & Auth Config | 4 weeks | ⬜ Next |
| **3** | Seller & Messaging Integration | 3 weeks | ⬜ |
| **4** | Engagement, Edge Cases & Polish | 3 weeks | ⬜ |
| **5** | Testing & App Store Launch | 2 weeks | ⬜ |

> See [phases.md](phases.md) for full breakdown.
