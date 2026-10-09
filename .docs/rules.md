# Listify App — Development Rules & Conventions

> **Version:** 1.1  
> **Last Updated:** 2026-10-07

---

## 🚨 STRICT RULES — ZERO HARDCODING & 100% DYNAMIC

> [!CAUTION]
> These rules are **NON-NEGOTIABLE**. Any violation is a blocker and must be fixed before merging. The app must be **fully configurable from the admin panel** — changing a name, label, category, color, or any content must **NEVER** require a single line of code edit.

---

### Rule 1: ABSOLUTELY ZERO HARDCODED VALUES

**Nothing — not a single string, number, color, URL, label, or config — may be hardcoded in the frontend.**

```typescript
// ❌ STRICTLY FORBIDDEN — Hardcoded text
<Text>{"Listify"}</Text>
<Text>{"Browse Categories"}</Text>
<Text>{"Near to Me"}</Text>
<Text>{"PKR"}</Text>

// ✅ REQUIRED — Always from config/API
<Text>{appConfig.appName}</Text>
<Text>{t('home.browseCategories')}</Text>
<Text>{sections.nearToMe.title}</Text>
<Text>{appConfig.currency.code}</Text>
```

**What MUST come from backend/config (not hardcoded):**

| Data Type | Examples | Source |
|-----------|---------|--------|
| App name & branding | "Listify", tagline, logo URL | Admin Panel → App Config API |
| Section titles | "Browse Categories", "Near to Me", "Featured" | Admin Panel → Content API |
| Category names & icons | "Mobiles", "Vehicles", "Property" | Admin Panel → Categories API |
| Category-specific fields | Brand, Model, Year, Bedrooms, etc. | Admin Panel → Category Fields API |
| Labels & button text | "Sign In", "Post Ad", "Chat with Seller" | Localization / i18n strings from API |
| Colors & theme | Primary, secondary, accent colors | Admin Panel → Theme Config API |
| Currency | PKR, $, symbol, format | Admin Panel → App Config API |
| Phone format | +923, country code, mask | Admin Panel → App Config API |
| OTP length & expiry | 6 digits, 5 minutes | Backend config |
| Max images per listing | 10 | Backend config |
| Filter options | Conditions, sort types | Admin Panel → Filter Config API |
| Onboarding slides | Images, titles, descriptions | Admin Panel → Content API |
| Bottom tab labels & icons | HOME, Search, Post, Messages, Profile | Admin Panel → Navigation Config API |
| Footer/legal text | Terms, Privacy, Contact | Admin Panel → Content API |
| Feature flags | Enable/disable chat, social auth, etc. | Admin Panel → Feature Flags API |

---

### Rule 2: EVERYTHING MUST BE DYNAMIC & API-DRIVEN

**The app is a rendering engine — it renders what the backend tells it to.**

```typescript
// ❌ FORBIDDEN — Static category list
const categories = [
  { name: 'Mobiles', icon: 'phone' },
  { name: 'Vehicles', icon: 'car' },
];

// ✅ REQUIRED — Fetched from API
const { data: categories } = useQuery(['categories'], categoryService.getAll);
```

**Dynamic architecture requirements:**

| Requirement | Implementation |
|-------------|---------------|
| **Categories** | Fetched from API. Admin can add/remove/rename/reorder categories without any code change. |
| **Category fields** | Each category has dynamic form fields defined in the backend. Adding a new field to "Mobiles" (e.g., "5G Support") requires ZERO frontend code. |
| **Listing specs** | Spec chips (Storage, Color, Battery) are driven by the category fields API, not hardcoded component props. |
| **Homepage sections** | Section order, visibility, titles, and content are all API-driven. Admin can show/hide "Featured", rename "Near to Me", or add a new section — no code change. |
| **Onboarding slides** | Content, images, order, and count are fetched from CMS/API. Admin can change from 4 slides to 3, or update copy, without code. |
| **Navigation tabs** | Tab labels, icons, order, and visibility come from config API. Hiding "Messages" tab = admin toggle, not code deletion. |
| **Filter options** | Filter types, condition options, sort options — all from API. Adding a new sort option = backend config only. |
| **Theme & colors** | Primary color, accent, dark mode — fetched from admin config. Rebranding from orange to blue = admin panel change. |

---

### Rule 3: 100% REUSABLE COMPONENTS — BUILD ONCE, CONFIGURE INFINITELY

**Every component must be data-driven and reusable. No screen-specific or category-specific logic in UI components.**

```typescript
// ❌ FORBIDDEN — Category-specific component
const MobileSpecsForm = () => (
  <>
    <TextInput label="Brand" />
    <TextInput label="Model" />
    <TextInput label="Storage" />
  </>
);

// ✅ REQUIRED — Generic dynamic form driven by schema
const DynamicForm: React.FC<{ fields: FormField[] }> = ({ fields }) => (
  <>
    {fields.map(field => (
      <DynamicField key={field.id} config={field} />
    ))}
  </>
);

// Usage — same component for ANY category
<DynamicForm fields={categoryFields} />  // Works for Mobiles, Vehicles, Property, or ANY new category
```

**Reusability mandates:**

| Component | Reusability Rule |
|-----------|-----------------|
| **DynamicForm** | Single form component renders ANY category's specs. Fields (text, select, number, toggle, date) defined by schema from API. |
| **ListingCard** | One card component for all listings. Layout adapts to data (show/hide badge, price format, condition tag). |
| **SectionList** | Generic horizontal/grid section. Title, data, layout, "See more" action — all from props/API. |
| **SpecChip** | Single chip component. Label, value, color scheme — all from props. No hardcoded "Storage" or "Battery". |
| **FilterSheet** | Filter options built from API schema. Adding a new filter = backend config, not new UI code. |
| **AuthForm** | Login and Register use the same form component with different field configs. |
| **OTPInput** | Single OTP component works for both phone and email — length, type from props. |
| **BottomSheet** | One reusable bottom sheet for Filters, Reports, Actions — content via children/render props. |

---

### Rule 4: ADMIN PANEL MUST CONTROL EVERYTHING

**The admin panel is the single source of truth for all app content and configuration.**

| Admin Can Change | Without Code Edit? |
|------------------|--------------------|
| App name / logo / tagline | ✅ YES — Config API |
| Primary brand color | ✅ YES — Theme API |
| Add/remove/rename categories | ✅ YES — Categories API |
| Add new fields to any category | ✅ YES — Category Fields API |
| Change homepage section titles | ✅ YES — Content API |
| Reorder homepage sections | ✅ YES — Content API |
| Update onboarding slides | ✅ YES — Content API |
| Change currency (PKR → USD) | ✅ YES — Config API |
| Change country/phone format | ✅ YES — Config API |
| Enable/disable features (chat, social auth) | ✅ YES — Feature Flags |
| Update legal text (Terms, Privacy) | ✅ YES — Content API |
| Change filter/sort options | ✅ YES — Filter Config API |
| Add new notification types | ✅ YES — Notification Config API |
| Moderate/block/feature listings | ✅ YES — Admin Actions API |

---

### Rule 5: LOCALIZATION-READY FROM DAY ONE

```typescript
// ❌ FORBIDDEN — Raw strings in components
<Text>{"Sign In"}</Text>
<Text>{"Don't have an account?"}</Text>

// ✅ REQUIRED — i18n translation keys
<Text>{t('auth.signIn')}</Text>
<Text>{t('auth.noAccount')}</Text>
```

| Rule | Details |
|------|---------|
| All user-visible text MUST use i18n keys | Use `react-i18next` or similar |
| Translation strings fetched from backend | Admin can update translations without deploy |
| RTL support ready | Layout must flip for Urdu/Arabic |
| Date/number formatting | Use `Intl` APIs with locale from config |
| Currency formatting | Symbol, position, decimals — all from config |

---

### Rule 6: CONFIGURATION OVER CODE

**The app must follow a "configuration over code" philosophy.**

```typescript
// src/config/app.config.ts — Loaded from API on app start
interface AppConfig {
  appName: string;
  logo: string;
  tagline: string;
  currency: { code: string; symbol: string; position: 'before' | 'after' };
  country: { code: string; phoneCode: string; phoneMask: string };
  theme: { primary: string; secondary: string; accent: string };
  features: { chat: boolean; socialAuth: boolean; phoneOTP: boolean; emailOTP: boolean };
  limits: { maxImages: number; maxTitleLength: number; otpLength: number; otpExpiry: number };
  sections: { id: string; title: string; visible: boolean; order: number }[];
  tabs: { id: string; label: string; icon: string; visible: boolean; order: number }[];
}
```

| Principle | Implementation |
|-----------|---------------|
| **Config-first** | App loads `AppConfig` from API on launch. Everything uses this config. |
| **Feature flags** | Every feature has an on/off toggle. Disabled features hide UI automatically. |
| **Schema-driven forms** | Form fields are JSON schemas from API, rendered by a generic form engine. |
| **Theme injection** | Colors/fonts injected via React Context from API config, not constants file. |
| **Content management** | All static text (labels, titles, descriptions) from CMS API. |
| **Graceful defaults** | If API is unreachable, use cached config; never crash from missing config. |

---

### Rule 7: DATA MODEL FLEXIBILITY

**Database and API models must be flexible enough to handle changes without schema migrations.**

```typescript
// ❌ FORBIDDEN — Rigid model with hardcoded fields
interface Listing {
  brand: string;      // Only works for mobiles
  bedrooms: number;   // Only works for property
  mileage: number;    // Only works for vehicles
}

// ✅ REQUIRED — Flexible model with dynamic attributes
interface Listing {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: Location;
  images: string[];
  attributes: Record<string, any>;  // Dynamic key-value pairs from category schema
  metadata: Record<string, any>;    // Extensible metadata
}
```

---

> [!IMPORTANT]
> **The golden test:** If the client rebrands from "Listify" to "BazaarPK", changes the primary color from orange to green, adds 5 new categories with unique form fields, and switches currency from PKR to AED — **can this be done entirely from the admin panel with ZERO code changes?** If the answer is NO, the architecture is wrong.

---

## 1. Project Setup

| Rule | Details |
|------|---------|
| **Runtime** | Expo SDK 54+ (Managed Workflow) |
| **Language** | TypeScript (strict mode) — no `.js` files |
| **Node** | 18+ LTS |
| **Package Manager** | npm (lock file committed) |

---

## 2. File & Folder Naming

| Convention | Example |
|------------|---------|
| Screen folders | `PascalCase` — `LoginPage/`, `ProductDetailsPage/` |
| Screen entry point | `index.tsx` inside each screen folder |
| Component files | `PascalCase.tsx` — `ListingCard.tsx`, `ChatBubble.tsx` |
| Hooks | `camelCase` with `use` prefix — `useAuth.ts`, `useListings.ts` |
| Services | `camelCase` with `.service.ts` suffix — `auth.service.ts` |
| Store files | `camelCase` with `use` prefix + `Store` — `useAuthStore.ts` |
| Utils | `camelCase.ts` — `formatPrice.ts`, `validators.ts` |
| Types | `PascalCase.ts` or `types.ts` — `Listing.ts`, `User.ts` |
| Constants | `UPPER_SNAKE_CASE` inside — `API_BASE_URL`, `MAX_IMAGES` |

---

## 3. Component Rules

### 3.1 Screen Components
```typescript
// ✅ Correct — Named functional component with typed props
const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  return <SafeAreaView>...</SafeAreaView>;
};
export default LoginPage;

// ❌ Avoid — Anonymous default export
export default (props) => { ... };
```

### 3.2 Reusable Components
- Every reusable component MUST have typed props
- Components MUST NOT contain business logic (use hooks)
- Components MUST NOT make API calls directly
- Use `React.memo()` for list item components

### 3.3 Styling
```typescript
// ✅ Use StyleSheet.create
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
});

// ❌ Avoid inline style objects
style={{ flex: 1, backgroundColor: '#FFFFFF' }}
```

---

## 4. Navigation Rules

| Rule | Details |
|------|---------|
| Navigator type | `createNativeStackNavigator` for stacks, `createBottomTabNavigator` for tabs |
| Screen names | Must match folder name — `"LoginPage"`, `"Homepage"` |
| Type safety | Use typed navigation with `RootStackParamList` |
| Headers | Default `headerShown: false` — custom headers per screen |
| Deep linking | Configure URL scheme for all public screens |

---

## 5. State Management Rules

| Scope | Solution |
|-------|----------|
| **Screen-local** | `useState` / `useReducer` — form inputs, toggles, modals |
| **Cross-screen** | Zustand store — auth state, user profile, cart |
| **Server state** | React Query / TanStack Query — listings, messages, notifications |
| **Persistent** | AsyncStorage via Zustand persist middleware |

---

## 6. API & Networking Rules

```typescript
// ✅ Service layer pattern
// src/services/listing.service.ts
export const listingService = {
  getAll: (params: ListingsParams) => api.get<Listing[]>('/listings', { params }),
  getById: (id: string) => api.get<Listing>(`/listings/${id}`),
  create: (data: CreateListingDTO) => api.post<Listing>('/listings', data),
};
```

| Rule | Details |
|------|---------|
| HTTP client | Axios with base config (baseURL, timeout, interceptors) |
| Auth header | Bearer token injected via Axios interceptor |
| Error handling | Global error interceptor + per-request try/catch |
| Loading states | Always show skeleton/spinner during data fetch |
| Retry logic | Auto-retry failed GET requests (max 3 retries) |

---

## 7. Image & Media Rules

| Rule | Details |
|------|---------|
| Format | JPEG for photos, PNG for icons, WebP when supported |
| Max upload size | 5 MB per image, max 10 images per listing |
| CDN | All images served via CDN (never local device paths in production) |
| Caching | Use `expo-image` or `react-native-fast-image` for caching |
| Placeholder | Show gray skeleton placeholder while images load |
| Optimization | Compress before upload; resize to max 1200px width |

---

## 8. Brand & Color Rules

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#FC6901` | CTA buttons, active tabs, brand accent |
| `primaryDark` | `#E05A00` | Pressed/hover state |
| `secondary` | `#FF5500` | Price highlights |
| `background` | `#FFFFFF` | Screen backgrounds |
| `surface` | `#F9FAFB` | Cards, elevated surfaces |
| `border` | `#E8E8E8` | Input borders, dividers |
| `textPrimary` | `#000000` | Headings, primary text |
| `textSecondary` | `#475569` | Descriptions, metadata |
| `textMuted` | `#9CA3AF` | Timestamps, placeholder text |
| `success` | `#047857` | Verified badge, battery health |
| `warning` | `#F59E0B` | Star ratings |
| `featured` | `#FDE68A` | Featured badge background |
| `dark` | `#131214` | Social auth buttons |

---

## 9. Typography Rules

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| H1 | 32px | Bold | Screen titles (Login, Register) |
| H2 | 24px | Regular | Product title |
| H3 | 20px | Regular | Section headers (Featured, Near to Me) |
| H4 | 16px | Bold | Sub-headers, button text |
| Body | 14px | Regular | Description, general text |
| Caption | 12px | Regular | Metadata, specs, labels |
| Small | 10px | Regular | Timestamps, category names |
| Micro | 11px | Bold | Badges, tags |

---

## 10. Code Quality Rules

| Rule | Details |
|------|---------|
| **Linting** | ESLint with `@react-native-community/eslint-config` |
| **Formatting** | Prettier (2-space indent, single quotes, trailing commas) |
| **Type checking** | `tsc --noEmit` — zero errors allowed |
| **Imports** | Absolute imports via `tsconfig.json` paths (`@/screens/...`) |
| **No `any`** | `any` type is prohibited — use `unknown` or proper types |
| **No console.log** | Use a logger utility in production builds |
| **Git hooks** | Husky + lint-staged for pre-commit checks |

---

## 11. Performance Rules

| Rule | Target |
|------|--------|
| FlatList for lists | Never use `ScrollView` for dynamic lists > 10 items |
| Lazy loading | Use `React.lazy` + `Suspense` for heavy screens |
| Image optimization | Use `expo-image` with content-fit and caching |
| Memo usage | `React.memo` on list items, `useMemo` for expensive calculations |
| Bundle size | Monitor with `expo-doctor`; keep < 20MB |

---

## 12. Security Rules

| Rule | Details |
|------|---------|
| Token storage | Store auth tokens in `expo-secure-store`, NOT AsyncStorage |
| Input sanitization | Sanitize all user inputs before API submission |
| Deep link validation | Validate all deep link parameters |
| OTP expiry | OTPs expire after 5 minutes; max 3 retry attempts |
| Secure communication | HTTPS only; certificate pinning for production |
| Report abuse | Every listing must have a "Report" option |

---

## 13. Git Workflow

| Rule | Details |
|------|---------|
| Branch naming | `feature/screen-name`, `fix/bug-description`, `chore/task` |
| Commit messages | Conventional Commits — `feat:`, `fix:`, `chore:`, `docs:` |
| PR reviews | Minimum 1 approval required |
| Main branch | `main` — always deployable |
| Release branch | `release/v1.0.0` — for app store submissions |

---

## 🚀 14. LESS CODE, HIGH IMPACT — Core Development Philosophy

> [!CAUTION]
> Every line of code is a liability. Before writing ANY code, ask: **"Does this already exist somewhere? Can I reuse it? Can one component do the job of three?"** If the answer is yes — reuse, don't rebuild.

### 14.1 The Rule of One

| Principle | Rule |
|-----------|------|
| **One type** | Every data structure is defined ONCE in `@listify/shared`, used everywhere |
| **One validator** | Every Zod schema is written ONCE, validates on frontend AND backend |
| **One formatter** | `formatPrice()`, `formatDate()`, `formatPhone()` — written ONCE in shared utils |
| **One component** | If app and admin both show a "listing card" — abstract the logic, platform-specific only the rendering |
| **One API service** | Service function signatures are identical in app and admin — only the Axios instance differs |
| **One source of truth** | Config, categories, translations — backend DB is the ONLY source, never local constants |

### 14.2 Write Less, Impact More

```typescript
// ❌ BAD — 3 separate components for 3 category forms (300+ lines × 3)
<MobileSpecsForm />
<VehicleSpecsForm />
<PropertySpecsForm />

// ✅ GOOD — 1 dynamic form component (100 lines total, works for ANY category)
<DynamicForm schema={categoryFields} />

// ❌ BAD — Separate validation in app, admin, and backend (same rules × 3)
// app: if (title.length < 3) setError('Too short')
// admin: if (title.length < 3) setError('Too short')
// backend: if (req.body.title.length < 3) return res.status(400)

// ✅ GOOD — One Zod schema, three consumers
import { createListingSchema } from '@listify/shared';
// app: uses with React Hook Form
// admin: uses with React Hook Form
// backend: uses in validate middleware
```

### 14.3 Component Reuse Checklist

Before creating ANY new component, answer these:

- [ ] Does a similar component already exist in `components/common/`?
- [ ] Can the existing component handle this with an additional prop?
- [ ] Is this component needed in both app AND admin? → Abstract shared logic to a hook
- [ ] Am I hardcoding data that should come from the API?
- [ ] Can I make this component render different layouts based on a `variant` prop instead of creating a new component?

### 14.4 Smart Abstractions

| Instead Of | Build This | Impact |
|-----------|-----------|--------|
| `LoginForm` + `RegisterForm` + `ResetForm` | `AuthForm` with `mode` prop | 3→1 components |
| `PhoneOTPScreen` + `EmailOTPScreen` | `OTPScreen` with `type` prop | 2→1 screens |
| `MobileFilter` + `VehicleFilter` + `PropertyFilter` | `DynamicFilterSheet` from API schema | N→1 components |
| Manual fetch + loading + error in every screen | `useApiQuery(key, fn)` custom hook | 50% less boilerplate |
| Inline `try/catch` in every API call | Global error interceptor + toast | Write error handling ONCE |
| Screen-specific empty states | `<EmptyState icon={} title={} action={} />` generic | 1 component, infinite uses |
| Copy-paste listing cards across screens | `<ListingCard data={listing} variant="grid|list|featured" />` | 1 component, 3 layouts |

---

## 15. Unified Platform Development Rules

### 15.1 Monorepo Rules

| Rule | Details |
|------|---------|
| **Workspace** | Use npm workspaces or Turborepo to manage `packages/shared`, `apps/mobile`, `apps/admin`, `apps/backend` |
| **Shared imports** | Always import types/validators/utils from `@listify/shared`, never duplicate |
| **Dependency sync** | Shared dependencies (TypeScript, Zod) must be the same version across all projects |
| **Build order** | `@listify/shared` → `backend` → `mobile` + `admin` (shared builds first) |
| **Single tsconfig base** | Root `tsconfig.base.json` extended by all projects for consistent compiler options |

### 15.2 Backend Must Serve Both Clients

```typescript
// ❌ FORBIDDEN — Separate APIs for app and admin
app.use('/app-api', appRoutes);    // One API for mobile
app.use('/admin-api', adminRoutes); // Different API for admin

// ✅ REQUIRED — Unified API with role-based access
app.use('/api/v1', publicRoutes);           // Shared by both
app.use('/api/v1/admin', adminGuard, adminRoutes);  // Admin-only, same base
```

| Rule | Details |
|------|---------|
| **One API** | Single Express server serves both app and admin portal |
| **Role-based access** | JWT tokens contain role (user/admin); middleware enforces permissions |
| **Shared auth** | Same login/register endpoint; admin gets elevated permissions |
| **Same DB** | One PostgreSQL database, one Prisma schema, one migration history |
| **Same models** | Listing, User, Category — same tables serve both mobile queries and admin CRUD |

### 15.3 Shared Hook Patterns (App ↔ Admin)

```typescript
// Both app and admin use the SAME hook logic pattern
// The API service layer is identical — only the UI rendering differs

// packages/shared or each app's hooks/
const useListings = (filters: ListingFilters) => {
  return useQuery({
    queryKey: ['listings', filters],
    queryFn: () => listingService.getAll(filters),
  });
};

// Mobile: renders FlatList with ListingCard
// Admin: renders TanStack Table with DataRow
// Same data, same types, same hook — different UI
```

### 15.4 API Service Layer Pattern

```typescript
// ✅ Both app and admin use THIS EXACT SAME pattern
// Only the base URL / auth token source differs

// apps/mobile/src/services/listing.service.ts
// apps/admin/src/services/listing.service.ts
import type { Listing, CreateListingDTO, PaginatedResponse } from '@listify/shared';

export const listingService = {
  getAll: (params: ListingFilters) =>
    api.get<PaginatedResponse<Listing>>('/listings', { params }),
  getById: (id: string) =>
    api.get<Listing>(`/listings/${id}`),
  create: (data: CreateListingDTO) =>
    api.post<Listing>('/listings', data),
  update: (id: string, data: Partial<CreateListingDTO>) =>
    api.put<Listing>(`/listings/${id}`, data),
  delete: (id: string) =>
    api.delete(`/listings/${id}`),
};
```

---

## 16. Code Review Checklist

> Every PR must pass these checks before merge:

- [ ] **Zero hardcoded strings** — All text from i18n or API
- [ ] **Zero hardcoded colors** — All from theme context
- [ ] **Zero duplicated types** — All from `@listify/shared`
- [ ] **Zero duplicated validation** — Zod schemas from shared
- [ ] **Component reuse** — No new component if existing one can be extended
- [ ] **API-driven** — No static data that should come from backend
- [ ] **TypeScript strict** — No `any`, all props typed
- [ ] **Responsive** — Admin portal works on mobile + desktop
- [ ] **Loading states** — Skeleton/spinner during data fetch
- [ ] **Error states** — Graceful error handling with retry option
- [ ] **Empty states** — Meaningful UI when no data

