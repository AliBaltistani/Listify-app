# Listify — Platform Architecture Document

> **Version:** 2.0  
> **Last Updated:** 2026-10-07  
> **Scope:** Mobile App + Web Admin Portal + Unified Backend

---

## 1. Platform Overview — Unified Architecture

> [!IMPORTANT]
> Listify is a **3-part platform** — Mobile App, Web Admin Portal, and a single Unified Backend. All three share one codebase philosophy: **less code, high impact**.

```mermaid
graph TB
    subgraph SharedPkg["📦 Shared Package (@listify/shared)"]
        TYPES["TypeScript Types & Interfaces"]
        VALIDATORS["Validation Schemas (Zod)"]
        CONSTANTS["Enums, Constants, Config Types"]
        UTILS["Formatters, Helpers, i18n Keys"]
    end

    subgraph MobileApp["📱 Mobile App (React Native / Expo)"]
        M_UI["Screens & Components"]
        M_NAV["React Navigation"]
        M_STATE["Zustand + React Query"]
        M_API["API Service Layer"]
    end

    subgraph AdminPortal["🖥️ Web Admin Portal (Next.js)"]
        A_UI["Pages & Components"]
        A_NAV["Next.js Router"]
        A_STATE["Zustand + React Query"]
        A_API["API Service Layer"]
    end

    subgraph UnifiedBackend["☁️ Unified Backend (Node.js / Express)"]
        API_GW["REST API Gateway"]
        AUTH_SVC["Auth Service"]
        LISTING_SVC["Listings Service"]
        MSG_SVC["Messaging Service"]
        ADMIN_SVC["Admin Service"]
        CONFIG_SVC["Config & CMS Service"]
        NOTIFY_SVC["Notification Service"]
        MEDIA_SVC["Media / Upload Service"]
        SEARCH_SVC["Search Engine"]
        DB[("PostgreSQL")]
        CACHE_DB[("Redis")]
    end

    subgraph External["🔗 External Services"]
        GOOGLE["Google OAuth"]
        APPLE["Apple Sign-In"]
        SMS["SMS Gateway (OTP)"]
        MAPS["Maps / Geolocation"]
        PUSH["Push Notifications"]
        CDN["Cloudinary / S3 CDN"]
    end

    SharedPkg --> MobileApp
    SharedPkg --> AdminPortal
    SharedPkg --> UnifiedBackend

    M_UI --> M_STATE
    M_STATE --> M_API
    M_API --> API_GW

    A_UI --> A_STATE
    A_STATE --> A_API
    A_API --> API_GW

    API_GW --> AUTH_SVC
    API_GW --> LISTING_SVC
    API_GW --> MSG_SVC
    API_GW --> ADMIN_SVC
    API_GW --> CONFIG_SVC
    API_GW --> NOTIFY_SVC
    API_GW --> MEDIA_SVC
    API_GW --> SEARCH_SVC

    AUTH_SVC --> DB
    LISTING_SVC --> DB
    MSG_SVC --> DB
    ADMIN_SVC --> DB
    CONFIG_SVC --> CACHE_DB
    AUTH_SVC --> GOOGLE
    AUTH_SVC --> APPLE
    AUTH_SVC --> SMS
    LISTING_SVC --> MAPS
    NOTIFY_SVC --> PUSH
    MEDIA_SVC --> CDN
```

---

## 2. Tech Stack

### 📱 Mobile App
| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | React Native | 0.81.5 |
| Framework | Expo (Managed) | SDK 54 |
| Language | TypeScript | 5.9.2 |
| Navigation | React Navigation (Native Stack) | 7.x |
| State | Zustand + TanStack Query | Latest |
| Forms | React Hook Form + Zod | Latest |
| Gradients | expo-linear-gradient | 15.x |
| Icons | @expo/vector-icons | 15.x |
| Build | EAS CLI | Latest |

### 🖥️ Web Admin Portal
| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 14.x |
| Language | TypeScript | 5.9.2 |
| Styling | Tailwind CSS | 3.x |
| State | Zustand + TanStack Query | Latest |
| Forms | React Hook Form + Zod | Latest |
| Tables | TanStack Table | Latest |
| Charts | Recharts | Latest |
| Auth | NextAuth.js | Latest |

### ☁️ Unified Backend
| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | Node.js | 20.x LTS |
| Framework | Express.js | 4.x |
| Language | TypeScript | 5.9.2 |
| Database | PostgreSQL | 16.x |
| ORM | Prisma | Latest |
| Cache | Redis | 7.x |
| Auth | JWT + bcrypt | Latest |
| File Upload | Multer + Cloudinary | Latest |
| Validation | Zod (shared with frontend) | Latest |
| Real-time | Socket.io | Latest |
| Search | PostgreSQL Full-Text / Elasticsearch | Latest |

### 📦 Shared Package
| Layer | Technology | Purpose |
|-------|-----------|--------|
| Types | TypeScript interfaces | Shared between all 3 projects |
| Validation | Zod schemas | Same validation on frontend + backend |
| Constants | Enums, config types | Single source of truth |
| Utils | Formatters, helpers | Price formatting, date utils, etc. |

---

## 3. Project Structure

```
Listify-app/
├── App.tsx                          # Root navigator setup
├── package.json                     # Dependencies & scripts
├── src/
│   └── screens/                     # All screens as folders
│       ├── SpashScreen/             # Onboarding splash 1
│       ├── SpashScreen2/            # Onboarding splash 2
│       ├── SpashScreen3/            # Onboarding splash 3
│       ├── SpashScreen4/            # Onboarding splash 4
│       ├── LoginPage/               # Email + password login
│       ├── RegisterPage/            # Full registration form
│       ├── EmailOTPPage/            # Email OTP entry
│       ├── EmailOTPVerfication/     # Email OTP verification
│       ├── PhoneOTPPage/            # Phone OTP entry
│       ├── PhoneOTPVerification/    # Phone OTP verification
│       ├── ResetPasswordPage/       # Password reset
│       ├── Homepage/                # Main feed + categories
│       ├── Category_DetailsPage/    # Category listing grid
│       ├── ProductDetailsPage/      # Full product view (in both parts)
│       ├── SearchPage/              # Search interface
│       ├── FilterSortBottomSheet/   # Filter & sort modal
│       ├── PostAnAdSelectCategory/  # Ad wizard: category pick
│       ├── PostAnAdStep1PhotosBasicInfo/   # Step 1 variants (×4)
│       ├── PostAnAdStep2DescriptionPricing/ # Step 2
│       ├── PostAnAdStep3ReviewPublish/      # Step 3: review
│       ├── PostAnAdSetLocation/     # Map location picker
│       ├── PostAnAdMobilesTabletsDetailsSpecs/  # Mobile specs
│       ├── PostAnAdVehiclesCarsDetailsSpecs/    # Vehicle specs
│       ├── PostAnAdPropertyForSaleRentDetailsSpecs/ # Property specs
│       ├── PostAnAdSuccessScreen/   # Post success
│       ├── MyAdsSellerDashboard/    # Seller's ads list
│       ├── MessagePage/             # Conversation list
│       ├── MessageGroupPage/        # Chat thread
│       ├── UserProfile/             # Public profile
│       ├── EditProfile/             # Edit profile form
│       ├── Settings/                # App settings
│       ├── NotificationsActivityFeed/ # Notifications
│       ├── SavedAdsFavorites/       # Bookmarked ads
│       └── SafetyModerationReportSheet/ # Report modal
```

---

## 4. Navigation Architecture

```mermaid
graph TD
    ROOT["App Entry"]
    ROOT --> SPLASH["Splash Flow (4 screens)"]
    SPLASH --> AUTH["Auth Flow"]
    
    AUTH --> LOGIN["LoginPage"]
    AUTH --> REGISTER["RegisterPage"]
    AUTH --> RESET["ResetPasswordPage"]
    AUTH --> EMAIL_OTP["Email OTP Flow"]
    AUTH --> PHONE_OTP["Phone OTP Flow"]
    
    ROOT --> MAIN["Main Tab Navigator"]
    
    MAIN --> HOME_TAB["🏠 Home Tab"]
    MAIN --> SEARCH_TAB["🔍 Search Tab"]
    MAIN --> POST_TAB["➕ Post Ad Tab"]
    MAIN --> MSG_TAB["💬 Messages Tab"]
    MAIN --> PROFILE_TAB["👤 Profile Tab"]
    
    HOME_TAB --> HOMEPAGE["Homepage"]
    HOMEPAGE --> CATEGORY["Category Details"]
    HOMEPAGE --> PRODUCT["Product Details"]
    
    SEARCH_TAB --> SEARCH_PAGE["Search Page"]
    SEARCH_PAGE --> FILTER["Filter & Sort Sheet"]
    
    POST_TAB --> POST_CAT["Select Category"]
    POST_CAT --> POST_SPECS["Category Specs"]
    POST_SPECS --> POST_S1["Step 1: Photos"]
    POST_S1 --> POST_S2["Step 2: Description"]
    POST_S2 --> POST_LOC["Set Location"]
    POST_LOC --> POST_S3["Step 3: Review"]
    POST_S3 --> POST_OK["Success Screen"]
    
    MSG_TAB --> MSG_LIST["Message List"]
    MSG_LIST --> MSG_CHAT["Chat Thread"]
    
    PROFILE_TAB --> USER_PROFILE["User Profile"]
    USER_PROFILE --> EDIT_PROFILE["Edit Profile"]
    USER_PROFILE --> SETTINGS["Settings"]
    USER_PROFILE --> MY_ADS["My Ads Dashboard"]
    USER_PROFILE --> SAVED["Saved Ads"]
    USER_PROFILE --> NOTIFICATIONS["Notifications"]
```

> **Note:** Currently using a custom state-driven router (`AppNavigator.tsx`) with `ScreenPreviewSwitcher` to toggle between all 33 views for rapid UI development and review. The recommended long-term architecture above groups screens into logical `React Navigation` tab and nested stack navigators for production.

---

## 5. Data Flow Architecture

```mermaid
sequenceDiagram
    participant User
    participant Screen
    participant StateManager
    participant APIService
    participant Backend

    User->>Screen: Interacts (tap, type, scroll)
    Screen->>StateManager: Dispatch action
    StateManager->>APIService: Call API method
    APIService->>Backend: HTTP request (REST/GraphQL)
    Backend-->>APIService: Response (JSON)
    APIService-->>StateManager: Update state
    StateManager-->>Screen: Re-render with new data
    Screen-->>User: Updated UI
```

---

## 6. Screen Component Pattern

Each screen follows a consistent folder structure:

```
ScreenName/
└── index.tsx      # Screen component with inline styles
```

**Current Pattern:**
- Screens are functional components exported as default
- Using `SafeAreaView` as root wrapper
- `ScrollView` for scrollable content
- Inline `style` objects (no StyleSheet.create)
- Images loaded from remote CDN URLs
- `TouchableOpacity` for interactive elements
- `TextInput` with `useState` for form fields

---

## 7. Key Architecture Decisions

| Decision | Current State | Recommended |
|----------|--------------|-------------|
| **State Management** | Local `useState` per screen | Zustand + TanStack Query (shared pattern across app & admin) |
| **API Layer** | Not implemented (static UI) | Axios with typed service modules (shared types from `@listify/shared`) |
| **Styling** | Inline styles | StyleSheet.create + theme from API config |
| **Image Hosting** | tagjs CDN (temp URLs) | Cloudinary CDN with backend upload service |
| **Forms** | Manual `useState` | React Hook Form + Zod (schemas shared between frontend & backend) |
| **Navigation** | Flat stack (all screens) | Nested tab + stack navigators |
| **Authentication** | UI only | JWT auth with role-based access (user/admin) |
| **Backend** | None | Unified Node.js/Express serving both app & admin |
| **Database** | None | PostgreSQL with Prisma ORM |
| **Real-time** | None | Socket.io for chat + live notifications |
| **Admin Portal** | None | Next.js web dashboard for full platform management |
| **Shared Code** | None | `@listify/shared` package for types, validators, utils |

---

## 8. Unified Backend Architecture

> [!IMPORTANT]
> **ONE backend serves BOTH the mobile app AND the web admin portal.** Same database, same auth system, same API — different role-based permissions.

```mermaid
graph LR
    subgraph Clients
        APP["📱 Mobile App"]
        ADMIN["🖥️ Admin Portal"]
    end

    subgraph API["Unified REST API"]
        PUBLIC["/api/v1/* (Public + User)"]
        ADMIN_API["/api/v1/admin/* (Admin Only)"]
    end

    subgraph Middleware
        AUTH_MW["Auth Middleware (JWT)"]
        ROLE_MW["Role Guard (user/admin)"]
        VALIDATE_MW["Zod Validation"]
    end

    APP --> PUBLIC
    ADMIN --> PUBLIC
    ADMIN --> ADMIN_API
    PUBLIC --> AUTH_MW
    ADMIN_API --> AUTH_MW
    AUTH_MW --> ROLE_MW
    ROLE_MW --> VALIDATE_MW
```

### API Route Structure

```
/api/v1/
├── auth/                    # Both app & admin
│   ├── POST /login
│   ├── POST /register
│   ├── POST /otp/send
│   ├── POST /otp/verify
│   ├── POST /password/reset
│   └── POST /social/:provider
├── config/                  # App config (consumed by mobile app)
│   ├── GET /app             # AppConfig (name, theme, currency, features)
│   ├── GET /categories      # Dynamic categories + fields
│   ├── GET /filters         # Filter/sort options
│   ├── GET /onboarding      # Onboarding slides
│   └── GET /i18n/:locale    # Translation strings
├── listings/                # Marketplace
│   ├── GET /                # Browse (with filters, pagination)
│   ├── GET /:id             # Detail
│   ├── POST /               # Create (sellers)
│   ├── PUT /:id             # Update (owner)
│   ├── DELETE /:id          # Delete (owner/admin)
│   └── POST /:id/report     # Report listing
├── users/                   # Profiles
│   ├── GET /me              # Current user
│   ├── PUT /me              # Update profile
│   ├── GET /:id             # Public profile
│   └── GET /me/favorites    # Saved ads
├── messages/                # Chat
│   ├── GET /conversations   # Inbox
│   ├── GET /:conversationId # Thread
│   └── POST /               # Send message
├── notifications/           # Notifications
│   └── GET /                # Activity feed
├── media/                   # File uploads
│   └── POST /upload         # Image upload → CDN
│
└── admin/                   # 🔒 Admin-only routes
    ├── dashboard/
    │   └── GET /stats        # Platform analytics
    ├── config/
    │   ├── PUT /app           # Update app config
    │   ├── PUT /theme         # Update theme/colors
    │   └── PUT /features      # Toggle feature flags
    ├── categories/
    │   ├── POST /             # Create category
    │   ├── PUT /:id           # Update category
    │   ├── DELETE /:id        # Delete category
    │   └── PUT /:id/fields    # Manage dynamic fields
    ├── listings/
    │   ├── GET /              # All listings (with mod status)
    │   ├── PUT /:id/status    # Approve/reject/feature
    │   └── GET /reports       # Reported listings
    ├── users/
    │   ├── GET /              # All users
    │   ├── PUT /:id/status    # Ban/verify user
    │   └── PUT /:id/role      # Change role
    ├── content/
    │   ├── GET /sections      # Homepage sections
    │   ├── PUT /sections      # Reorder/rename sections
    │   ├── GET /onboarding    # Onboarding slides
    │   └── PUT /onboarding    # Update slides
    └── i18n/
        ├── GET /:locale       # Translation strings
        └── PUT /:locale       # Update translations
```

### Backend Folder Structure

```
backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Auto-generated migrations
├── src/
│   ├── app.ts                 # Express app setup
│   ├── server.ts              # Server entry point
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── config.routes.ts
│   │   ├── listing.routes.ts
│   │   ├── user.routes.ts
│   │   ├── message.routes.ts
│   │   ├── media.routes.ts
│   │   └── admin/             # Admin-only routes
│   │       ├── dashboard.routes.ts
│   │       ├── config.routes.ts
│   │       ├── categories.routes.ts
│   │       ├── listings.routes.ts
│   │       ├── users.routes.ts
│   │       └── content.routes.ts
│   ├── controllers/           # Route handlers
│   ├── services/              # Business logic
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── roleGuard.middleware.ts
│   │   ├── validate.middleware.ts  # Uses Zod from @listify/shared
│   │   └── upload.middleware.ts
│   ├── socket/                # Socket.io handlers
│   │   ├── chat.handler.ts
│   │   └── notification.handler.ts
│   ├── utils/
│   └── config/
├── package.json
└── tsconfig.json              # References @listify/shared
```

---

## 9. Monorepo Structure (Full Platform)

> [!IMPORTANT]
> **Single repository, three projects, one shared package.** This is the "less code, high impact" strategy — write types once, validate once, format once.

```
listify/
├── package.json                    # Root workspace config
├── turbo.json                      # Turborepo pipeline (or npm workspaces)
│
├── packages/
│   └── shared/                     # 📦 @listify/shared
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── types/              # Shared TypeScript interfaces
│           │   ├── user.types.ts       # User, UserProfile, AuthResponse
│           │   ├── listing.types.ts    # Listing, CreateListingDTO, ListingFilters
│           │   ├── category.types.ts   # Category, CategoryField, FieldType
│           │   ├── message.types.ts    # Conversation, Message
│           │   ├── config.types.ts     # AppConfig, ThemeConfig, FeatureFlags
│           │   └── api.types.ts        # ApiResponse, PaginatedResponse, ErrorResponse
│           ├── validators/         # Shared Zod schemas
│           │   ├── auth.schema.ts      # loginSchema, registerSchema, otpSchema
│           │   ├── listing.schema.ts   # createListingSchema, filterSchema
│           │   ├── user.schema.ts      # updateProfileSchema
│           │   └── category.schema.ts  # categoryFieldSchema
│           ├── constants/          # Shared enums & constants
│           │   ├── roles.ts            # UserRole.USER, UserRole.ADMIN
│           │   ├── status.ts           # ListingStatus, UserStatus
│           │   └── fieldTypes.ts       # FieldType.TEXT, SELECT, NUMBER, etc.
│           └── utils/              # Shared utility functions
│               ├── formatPrice.ts      # formatPrice(20000, 'PKR') → "Rs 20,000"
│               ├── formatDate.ts       # Relative time, locale-aware
│               ├── formatPhone.ts      # Phone formatting per country
│               └── slugify.ts          # URL-safe slugs
│
├── apps/
│   ├── mobile/                     # 📱 React Native / Expo App
│   │   ├── app.json
│   │   ├── App.tsx
│   │   ├── package.json            # depends on @listify/shared
│   │   └── src/
│   │       ├── navigation/
│   │       ├── screens/
│   │       ├── components/         # Mobile-specific components
│   │       ├── services/           # API calls (uses shared types)
│   │       ├── store/              # Zustand stores
│   │       ├── hooks/
│   │       └── theme/              # Loaded from API, not hardcoded
│   │
│   ├── admin/                      # 🖥️ Next.js Admin Portal
│   │   ├── next.config.js
│   │   ├── package.json            # depends on @listify/shared
│   │   └── src/
│   │       ├── app/                # Next.js App Router pages
│   │       │   ├── dashboard/
│   │       │   ├── categories/
│   │       │   ├── listings/
│   │       │   ├── users/
│   │       │   ├── config/
│   │       │   ├── content/
│   │       │   └── reports/
│   │       ├── components/         # Web-specific components
│   │       ├── services/           # API calls (uses shared types)
│   │       ├── store/              # Zustand stores
│   │       └── hooks/
│   │
│   └── backend/                    # ☁️ Unified Backend
│       ├── prisma/
│       ├── package.json            # depends on @listify/shared
│       └── src/
│           ├── routes/
│           ├── controllers/
│           ├── services/
│           ├── middleware/         # Uses shared Zod for validation
│           ├── socket/
│           └── config/
│
├── docs/                           # Documentation
└── .github/                        # CI/CD workflows
```

---

## 10. Shared Code Strategy — Less Code, High Impact

> [!CAUTION]
> **NEVER duplicate logic.** If the same thing exists in app, admin, and backend — it belongs in `@listify/shared`. If a component does the same job on app and admin — abstract it.

### What Goes in `@listify/shared`

```mermaid
graph TD
    SHARED["@listify/shared"]
    SHARED --> T["Types & Interfaces"]
    SHARED --> V["Zod Validation Schemas"]
    SHARED --> C["Constants & Enums"]
    SHARED --> U["Utility Functions"]

    T --> |"Used by"| APP["Mobile App"]
    T --> |"Used by"| ADMIN["Admin Portal"]
    T --> |"Used by"| BACK["Backend"]

    V --> |"Frontend validation"| APP
    V --> |"Frontend validation"| ADMIN
    V --> |"Backend validation"| BACK

    U --> APP
    U --> ADMIN
    U --> BACK
```

### Concrete Examples

```typescript
// packages/shared/src/types/listing.types.ts
// ✅ Written ONCE, used in 3 projects
export interface Listing {
  id: string;
  title: string;
  price: number;
  currency: string;
  categoryId: string;
  attributes: Record<string, any>;
  images: string[];
  location: { lat: number; lng: number; label: string };
  sellerId: string;
  status: ListingStatus;
  createdAt: string;
}

// packages/shared/src/validators/listing.schema.ts
// ✅ Same validation on mobile form, admin form, AND backend API
export const createListingSchema = z.object({
  title: z.string().min(3).max(100),
  price: z.number().positive(),
  categoryId: z.string().uuid(),
  description: z.string().min(10).max(5000),
  images: z.array(z.string().url()).min(1).max(10),
});

// packages/shared/src/utils/formatPrice.ts
// ✅ Used in mobile ListingCard, admin ListingsTable, and backend email templates
export const formatPrice = (amount: number, currency: string): string => {
  return new Intl.NumberFormat('en-PK', { style: 'currency', currency }).format(amount);
};
```

### Impact Measurement

| Without Shared | With Shared | Savings |
|---------------|------------|--------|
| 3× type definitions (app + admin + backend) | 1× in `@listify/shared` | **67% less code** |
| 3× validation logic | 1× Zod schema shared | **67% less code** |
| 3× price formatter | 1× util shared | **67% less code** |
| Bug fix in 3 places | Bug fix in 1 place | **67% less effort** |
| Type mismatch bugs | Impossible — single source | **100% type safety** |

---

## 11. Admin Portal Pages

| Page | Purpose | What Admin Controls |
|------|---------|--------------------|
| **Dashboard** | Platform overview | Users count, listings count, revenue, charts |
| **App Config** | Branding & settings | App name, logo, tagline, currency, phone format |
| **Theme** | Visual customization | Primary color, accent, fonts, dark mode |
| **Feature Flags** | Toggle features | Chat on/off, social auth on/off, OTP type |
| **Categories** | Category CRUD | Add/edit/delete/reorder categories |
| **Category Fields** | Dynamic form builder | Add/edit fields per category (drag & drop) |
| **Listings** | Content moderation | Approve, reject, feature, delete listings |
| **Reports** | Safety queue | Review reported listings, take action |
| **Users** | User management | View, verify, ban, change roles |
| **Content** | CMS | Homepage sections, onboarding slides, legal pages |
| **Translations** | i18n management | Edit translation strings per locale |
| **Notifications** | Push management | Send targeted push notifications |
