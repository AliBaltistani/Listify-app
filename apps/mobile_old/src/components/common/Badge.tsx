// ============================================================
// Listify — Reusable Badge Component
// ============================================================
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, borderRadius } from '../../theme/tokens';

type BadgeVariant = 'featured' | 'verified' | 'new' | 'used' | 'refurbished' | 'negotiable';

interface BadgeProps {
    variant: BadgeVariant;
    label?: string;
    style?: ViewStyle;
}

const badgeConfig: Record<BadgeVariant, { bg: string; text: string; border?: string; defaultLabel: string }> = {
    featured: { bg: colors.featured, text: colors.black, defaultLabel: 'Featured' },
    verified: { bg: colors.successBadge, text: colors.successDark, defaultLabel: 'VERIFIED' },
    new: { bg: colors.gray100, text: colors.black, defaultLabel: 'New' },
    used: { bg: colors.gray100, text: colors.black, defaultLabel: 'Used' },
    refurbished: { bg: colors.gray100, text: colors.black, defaultLabel: 'Refurbished' },
    negotiable: { bg: colors.successLight, text: colors.success, border: colors.successBorder, defaultLabel: 'Negotiable' },
};

const Badge: React.FC<BadgeProps> = ({ variant, label, style }) => {
    const config = badgeConfig[variant];

    return (
        <View
            style={[
                styles.badge,
                { backgroundColor: config.bg },
                config.border && { borderWidth: 1, borderColor: config.border },
                style,
            ]}
        >
            <Text style={[styles.text, { color: config.text }]}>
                {label || config.defaultLabel}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        alignSelf: 'flex-start',
        borderRadius: borderRadius.sm,
        paddingVertical: 3,
        paddingHorizontal: 8,
    },
    text: {
        fontSize: 10,
        fontWeight: '700',
    },
});

export default React.memo(Badge);
