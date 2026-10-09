// ============================================================
// @listify/shared — Config Types (API-driven, zero hardcoding)
// ============================================================

export interface CurrencyConfig {
    code: string;      // "PKR"
    symbol: string;    // "Rs"
    position: 'before' | 'after'; // "Rs 45,000" vs "45,000 PKR"
    decimals: number;
}

export interface CountryConfig {
    code: string;       // "PK"
    phoneCode: string;  // "+92"
    phoneMask: string;  // "(3XX) XXX-XXXX"
}

export interface ThemeConfig {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    success: string;
    warning: string;
    error: string;
}

export interface FeatureFlags {
    chat: boolean;
    socialAuth: boolean;
    phoneOTP: boolean;
    emailOTP: boolean;
    favorites: boolean;
    makeOffer: boolean;
    pushNotifications: boolean;
}

export interface HomepageSection {
    id: string;
    title: string;
    type: 'hero' | 'categories' | 'listings' | 'featured';
    visible: boolean;
    order: number;
}

export interface TabConfig {
    id: string;
    label: string;
    icon: string;
    visible: boolean;
    order: number;
}

export interface OnboardingSlide {
    id: string;
    title: string;
    description: string;
    image: string;
    order: number;
}

export interface AppConfig {
    appName: string;
    tagline: string;
    logo: string;
    currency: CurrencyConfig;
    country: CountryConfig;
    theme: ThemeConfig;
    features: FeatureFlags;
    limits: {
        maxImages: number;
        maxTitleLength: number;
        maxDescriptionLength: number;
        otpLength: number;
        otpExpiryMinutes: number;
    };
    sections: HomepageSection[];
    tabs: TabConfig[];
    onboarding: OnboardingSlide[];
}
