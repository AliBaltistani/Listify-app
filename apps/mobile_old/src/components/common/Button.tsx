// ============================================================
// Listify — Reusable Button Component
// ============================================================
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle, View, Image } from 'react-native';
import { colors, typography, borderRadius } from '../../theme/tokens';

type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'social';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: ButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    icon?: string; // URI for social auth icons
    iconComponent?: React.ReactNode;
    fullWidth?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
    icon,
    iconComponent,
    fullWidth = true,
    style,
    textStyle,
}) => {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            style={[
                styles.base,
                styles[variant],
                fullWidth && styles.fullWidth,
                isDisabled && styles.disabled,
                style,
            ]}
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'outlined' ? colors.primary : colors.white}
                    size="small"
                />
            ) : (
                <View style={styles.content}>
                    {icon && (
                        <Image source={{ uri: icon }} style={styles.icon} resizeMode="contain" />
                    )}
                    {iconComponent}
                    <Text style={[styles.text, styles[`${variant}Text` as keyof typeof styles], textStyle]}>
                        {title}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        paddingVertical: 13,
        borderRadius: borderRadius['2xl'],
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullWidth: {
        alignSelf: 'stretch',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 10,
    },
    text: {
        fontSize: typography.h4.fontSize,
        fontWeight: typography.h4.fontWeight,
    },
    disabled: {
        opacity: 0.6,
    },
    // Variant styles
    primary: {
        backgroundColor: colors.primary,
    },
    primaryText: {
        color: colors.white,
    },
    secondary: {
        backgroundColor: colors.dark,
    },
    secondaryText: {
        color: colors.white,
    },
    outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.border,
    },
    outlinedText: {
        color: colors.textPrimary,
    },
    social: {
        backgroundColor: colors.dark,
        borderWidth: 1,
        borderColor: '#494949',
        borderRadius: borderRadius.pill,
        paddingVertical: 14,
    },
    socialText: {
        color: '#FCFFFF',
        fontSize: 16,
        fontWeight: '400' as TextStyle['fontWeight'],
    },
});

export default React.memo(Button);
