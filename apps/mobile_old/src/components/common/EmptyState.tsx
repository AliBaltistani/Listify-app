// ============================================================
// Listify — Reusable EmptyState Component
// ============================================================
import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing } from '../../theme/tokens';
import Button from './Button';

interface EmptyStateProps {
    icon?: keyof typeof Ionicons.glyphMap;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    style?: ViewStyle;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    icon = 'file-tray-outline',
    title,
    description,
    actionLabel,
    onAction,
    style,
}) => {
    return (
        <View style={[styles.container, style]}>
            <Ionicons name={icon} size={64} color={colors.textMuted} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            {description && <Text style={styles.description}>{description}</Text>}
            {actionLabel && onAction && (
                <Button
                    title={actionLabel}
                    onPress={onAction}
                    fullWidth={false}
                    style={styles.button}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing['3xl'],
    },
    icon: {
        marginBottom: spacing.lg,
    },
    title: {
        color: colors.textPrimary,
        fontSize: typography.h4.fontSize,
        fontWeight: typography.h4.fontWeight,
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
    description: {
        color: colors.textSecondary,
        fontSize: typography.body.fontSize,
        textAlign: 'center',
        marginBottom: spacing['2xl'],
    },
    button: {
        paddingHorizontal: 32,
    },
});

export default React.memo(EmptyState);
