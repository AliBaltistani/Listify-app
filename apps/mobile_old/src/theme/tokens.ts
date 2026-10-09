// ============================================================
// Listify — Design System Theme Tokens
// All values from design.md — will be API-driven via ThemeConfig
// ============================================================

export const colors = {
    // Primary
    primary: '#FC6901',
    primaryDark: '#E05A00',
    primaryLight: '#FF9D5E',
    primaryPale: '#FAD2B7',
    secondary: '#FF5500',

    // Neutrals
    white: '#FFFFFF',
    surface: '#F9FAFB',
    surfaceBorder: '#F3F4F6',
    border: '#E8E8E8',
    borderLight: '#EBEBF6',
    gray100: '#D9D9D9',
    dark: '#131214',
    black: '#000000',

    // Text
    textPrimary: '#000000',
    textDark: '#111827',
    textBody: '#151515',
    textSecondary: '#475569',
    textTertiary: '#0F172A',
    textDescription: '#545454',
    textMuted: '#9CA3AF',
    textPlaceholder: '#98A1B2',
    textLink: '#667084',

    // Semantic
    success: '#047857',
    successLight: '#ECFDF5',
    successBorder: '#A7F3D0',
    successBadge: '#D1FAE5',
    successDark: '#065F46',
    successAccent: '#059669',
    warning: '#F59E0B',
    featured: '#FDE68A',
    specOrange: '#FFF7ED',
    specOrangeBorder: '#FFEDD5',
    blue: '#3B82F6',
    blueText: '#2563EB',
    purple: '#7E22CE',
    purpleLight: '#FAF5FF',
    purpleBorder: '#F3E8FF',

    // Transparent
    transparent: 'transparent',
    overlay: 'rgba(0,0,0,0.5)',
} as const;

export const typography = {
    display: { fontSize: 32, fontWeight: '700' as const, lineHeight: 40 },
    h1: { fontSize: 24, fontWeight: '400' as const, lineHeight: 32 },
    h2: { fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
    h3: { fontSize: 20, fontWeight: '400' as const, lineHeight: 26 },
    h4: { fontSize: 16, fontWeight: '700' as const, lineHeight: 22 },
    body: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
    bodyBold: { fontSize: 14, fontWeight: '700' as const, lineHeight: 20 },
    caption: { fontSize: 12, fontWeight: '400' as const, lineHeight: 18 },
    captionBold: { fontSize: 12, fontWeight: '700' as const, lineHeight: 18 },
    small: { fontSize: 11, fontWeight: '700' as const, lineHeight: 16 },
    xSmall: { fontSize: 10, fontWeight: '400' as const, lineHeight: 14 },
} as const;

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 40,
} as const;

export const borderRadius = {
    sm: 4,
    md: 8,
    lg: 10,
    xl: 12,
    '2xl': 14,
    '3xl': 16,
    round: 25,
    pill: 50,
    circle: 9999,
} as const;

export const shadows = {
    card: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 20,
        elevation: 20,
    },
    sm: {
        shadowColor: '#000000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
    },
} as const;

export const gradients = {
    heroBanner: ['#FAD2B7', '#FF9D5E', '#E7A072'] as const,
} as const;

export const theme = {
    colors,
    typography,
    spacing,
    borderRadius,
    shadows,
    gradients,
} as const;

export type Theme = typeof theme;

export default theme;
