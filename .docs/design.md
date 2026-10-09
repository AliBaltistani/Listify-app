# Listify App — Design System Document

> **Version:** 1.0  
> **Last Updated:** 2026-10-07

---

## 1. Brand Identity

| Attribute | Value |
|-----------|-------|
| **App Name** | Listify |
| **Tagline** | Buy, Sell & Discover Locally |
| **Logo** | Orange wordmark on white or white wordmark on orange |
| **Market** | Pakistan (PKR, Urdu-ready) |
| **Personality** | Modern, Trustworthy, Vibrant, Accessible |

---

## 2. Color Palette

### Primary Colors
| Token | Hex | Swatch | Usage |
|-------|-----|--------|-------|
| `primary` | `#FC6901` | 🟠 | CTA buttons, active tab, brand accents, login/register backgrounds |
| `primaryDark` | `#E05A00` | 🟠 | Pressed state, header gradients |
| `primaryLight` | `#FF9D5E` | 🟠 | Gradient midpoint on hero banners |
| `primaryPale` | `#FAD2B7` | 🟡 | Gradient start on hero banners |
| `secondary` | `#FF5500` | 🔴 | Price highlights on product details |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#FFFFFF` | Screen backgrounds, card backgrounds |
| `surface` | `#F9FAFB` | Spec chips, elevated surfaces |
| `surfaceBorder` | `#F3F4F6` | Card borders, dividers |
| `border` | `#E8E8E8` | Input field borders |
| `borderLight` | `#EBEBF6` | Page frame borders |
| `gray100` | `#D9D9D9` | Condition tag background (New) |
| `dark` | `#131214` | Social auth button backgrounds |
| `black` | `#000000` | Primary text |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `textPrimary` | `#000000` | Headings, product titles |
| `textDark` | `#111827` | Spec values, seller name |
| `textBody` | `#151515` | Form labels |
| `textSecondary` | `#475569` | Category counts, section "See more" links |
| `textTertiary` | `#0F172A` | Category names, location + date text |
| `textDescription` | `#545454` | Product description text |
| `textMuted` | `#9CA3AF` | Timestamps, breadcrumbs, placeholder text |
| `textPlaceholder` | `#98A1B2` | Input placeholder text |
| `textLink` | `#667084` | "Already have an account" text |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#047857` | Verified badge text, negotiable label |
| `successLight` | `#ECFDF5` | Negotiable badge background |
| `successBorder` | `#A7F3D0` | Negotiable badge border |
| `successBadge` | `#D1FAE5` | Verified badge background |
| `successDark` | `#065F46` | Battery health text |
| `successAccent` | `#059669` | Battery label text |
| `warning` | `#F59E0B` | Star rating color |
| `featured` | `#FDE68A` | Featured badge background |
| `specOrange` | `#FFF7ED` | Storage spec chip background |
| `specOrangeBorder` | `#FFEDD5` | Storage spec chip border |
| `blue` | `#3B82F6` | Color swatch dot |
| `blueText` | `#2563EB` | Color name text |
| `purple` | `#7E22CE` | PTA status text |
| `purpleLight` | `#FAF5FF` | PTA chip background |
| `purpleBorder` | `#F3E8FF` | PTA chip border |

---

## 3. Typography

> **Font Family:** System default (San Francisco on iOS, Roboto on Android)  
> *Recommended upgrade:* Google Fonts — Inter or Outfit

### Scale
| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `Display` | 32px | Bold (700) | 40px | Auth screen titles ("Log In", "Register Now") |
| `H1` | 24px | Regular (400) | 32px | Product title ("APPLE IPAD 79C") |
| `H2` | 22px | Bold (700) | 28px | Price on product detail ("2000pkr") |
| `H3` | 20px | Regular (400) / Bold | 26px | Section titles ("Near to Me", "Featured") |
| `H4` | 16px | Bold (700) | 22px | Button text, sub-headers, price on homepage |
| `Body` | 14px | Regular (400) | 20px | General text, descriptions |
| `BodyBold` | 14px | Bold (700) | 20px | Seller name, spec values |
| `Caption` | 12px | Regular (400) | 18px | Input labels, spec labels, metadata |
| `CaptionBold` | 12px | Bold (700) | 18px | Form field labels, spec section headers |
| `Small` | 11px | Bold (700) | 16px | Condition tags ("New"), badge text |
| `XSmall` | 10px | Regular (400) | 14px | Category names, timestamps, "HOME" tab label |

---

## 4. Spacing & Layout

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Icon-to-text gaps, minor paddings |
| `sm` | 6–8px | Badge padding, small gaps |
| `md` | 12–13px | Input padding, section gaps |
| `lg` | 16px | Card padding, section margins |
| `xl` | 20px | Screen horizontal padding |
| `2xl` | 24px | Inter-section spacing |
| `3xl` | 40–42px | Major section breaks |

### Screen Layout
```
┌──────────────────────────────┐
│  Status Bar                  │
│  ────────────────────────── │
│  Header (Logo + Actions)    │  ← paddingHorizontal: 10-21px
│  ────────────────────────── │
│  Content (ScrollView)       │  ← paddingHorizontal: 19-20px
│  ...                        │
│  ...                        │
│  ────────────────────────── │
│  Bottom Tab Bar             │  ← 5 tabs with icons + labels
└──────────────────────────────┘
```

---

## 5. Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 3–4px | Condition tags, small badges |
| `md` | 6–8px | Images, icons, category thumbnails |
| `lg` | 10px | Input fields |
| `xl` | 12px | Spec chips, badges |
| `2xl` | 14px | CTA buttons |
| `3xl` | 16px | Product detail cards |
| `round` | 22–25px | Image gallery, hero banner |
| `pill` | 40–50px | Auth form container, social buttons, location bar |
| `circle` | 9999px | Avatars, color swatches |

---

## 6. Component Specifications

### 6.1 Buttons

**Primary CTA:**
```
Background: #FC6901
Text: #FFFFFF, 16px Bold
Border Radius: 14px
Padding: 13px vertical, full width
```

**Social Auth Button:**
```
Background: #131214
Border: 1px #494949
Text: #FCFFFF, 16px Regular
Border Radius: 50px (pill)
Padding: 14px vertical
Icon: 32×32px (Apple/Google logo)
```

### 6.2 Input Fields
```
Background: #FFFFFF
Border: 1px #E8E8E8
Border Radius: 10px
Padding: 13px vertical, 13px left
Icon: 14×14px left-aligned
Placeholder: #98A1B2, 12px
Label: #151515, 12px Bold (above input)
```

### 6.3 Listing Card
```
Image: borderRadius 7px, 155×155px
Title: #000000, 12px
Price: #000000, 14px
Condition Tag: #D9D9D9 bg, 11px, 3px border radius
Favorite Icon: 23×23px top-right overlay
Featured Badge: #FDE68A bg, 10px text, 4px border radius
Location: #0F172A, 10px
Date: #0F172A, 10px
```

### 6.4 Spec Chips
```
Layout: Horizontal wrap
Background: #F9FAFB (default), #FFF7ED (highlight), #ECFDF5 (success)
Border: 1px, matching tone
Border Radius: 12px
Padding: 7px vertical, 13px horizontal
Label: #6B7280, 12px
Value: #111827, 12px Bold
```

### 6.5 Seller Profile Card
```
Avatar: 48×48px
Name: #111827, 14px Bold
Verified Badge: #D1FAE5 bg, #065F46 text, 10px Bold
Rating: Star icon + #F59E0B "4.9", 12px Bold
Ratings Count: #6B7280, 12px
```

### 6.6 Bottom Navigation
```
Height: ~70px
Background: Image-based (custom design)
Active Icon: 24×24px
Active Label: #FC6901, 10px
Inactive Label: default color, 10px
Tabs: HOME, [Tab2], POST(+), [Tab3], [Tab4]
```

---

## 7. Gradients

### Hero Banner Gradient
```
Direction: Top → Bottom
Colors: ['#FAD2B7', '#FF9D5E', '#E7A072']
Usage: Homepage promotional banner
```

### Auth Background
```
Solid: #FC6901
Form Container: #FFFFFF with borderRadius: 40px
```

---

## 8. Shadows & Elevation

### Card Shadow (Product Details)
```css
shadowColor: #0000000D
shadowOpacity: 0.1
shadowOffset: { width: 0, height: 4 }
shadowRadius: 20
elevation: 20  /* Android */
```

---

## 9. Iconography

| Category | Size | Style |
|----------|------|-------|
| Navigation icons | 24×24px | Outlined |
| Category icons | 48×48px | Filled/colored |
| Action icons (favorite, share) | 23×23px | Outlined |
| Form icons (email, lock) | 14×14px | Outlined |
| Status icons (star, location) | 12–14px | Filled |

---

## 10. Screen Design Inventory

### Authentication Screens
| Screen | Key Elements |
|--------|-------------|
| Splash 1–4 | Full-bleed branded gradient/image, logo, tagline, action button |
| Login | Orange top section → white rounded form, Email + Password inputs, Sign In CTA, Apple/Google social buttons |
| Register | Same layout as Login, Full Name + Phone + Email + Username + Password fields |
| Phone OTP | 6-digit OTP input, Phone number display, Resend timer |
| Email OTP | Same as Phone OTP with email context |
| Reset Password | Email input, Reset CTA |

### Marketplace Screens
| Screen | Key Elements |
|--------|-------------|
| Homepage | Status bar, Logo + icons header, Location bar, Hero banner, Category grid, Near to Me horizontal scroll, Featured section, Bottom tabs |
| Category Details | Back button, Category title, Listing grid, Sort/filter options |
| Product Details | Image carousel, Title + price, Specs chips, Seller card, Contact section, Similar listings |
| Search | Search input, Recent searches, Results grid |
| Filter Sheet | Bottom sheet modal, Price range, Condition, Location, Sort options |

### Seller Screens
| Screen | Key Elements |
|--------|-------------|
| Post Ad: Category | Category tree picker |
| Post Ad: Photos | Image upload grid, Photo count |
| Post Ad: Specs | Dynamic form per category |
| Post Ad: Description | Textarea, Price input, Negotiable toggle |
| Post Ad: Location | Map view, Address input |
| Post Ad: Review | Full preview, Edit + Publish buttons |
| Post Ad: Success | Checkmark animation, Share CTA |
| My Ads Dashboard | Tab filters (Active/Inactive), Ad cards with stats |

### Profile & Engagement Screens
| Screen | Key Elements |
|--------|-------------|
| User Profile | Avatar, Name, Rating, Member since, Listings |
| Edit Profile | Profile photo picker, Form fields |
| Settings | Section list with toggles |
| Notifications | Activity feed list |
| Saved Ads | Grid of favorited listings |
| Report Sheet | Bottom modal, Reason picker, Submit button |
