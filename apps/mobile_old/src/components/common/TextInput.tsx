// ============================================================
// Listify — Reusable TextInput Component
// ============================================================
import React, { useState } from 'react';
import { View, TextInput as RNTextInput, Text, StyleSheet, TextInputProps as RNTextInputProps, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, borderRadius, spacing } from '../../theme/tokens';

interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
    label?: string;
    error?: string;
    icon?: keyof typeof Ionicons.glyphMap;
    containerStyle?: ViewStyle;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    error,
    icon,
    containerStyle,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View
                style={[
                    styles.inputWrapper,
                    isFocused && styles.inputWrapperFocused,
                    error && styles.inputWrapperError,
                ]}
            >
                {icon && (
                    <Ionicons
                        name={icon}
                        size={14}
                        color={colors.textPlaceholder}
                        style={styles.icon}
                    />
                )}
                <RNTextInput
                    style={styles.input}
                    placeholderTextColor={colors.textPlaceholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing['2xl'],
    },
    label: {
        color: colors.textBody,
        fontSize: typography.captionBold.fontSize,
        fontWeight: typography.captionBold.fontWeight,
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.border,
        borderRadius: borderRadius.lg,
        borderWidth: 1,
    },
    inputWrapperFocused: {
        borderColor: colors.primary,
    },
    inputWrapperError: {
        borderColor: '#EF4444',
    },
    icon: {
        marginLeft: 13,
        marginRight: 16,
    },
    input: {
        flex: 1,
        color: colors.textPrimary,
        fontSize: typography.caption.fontSize,
        paddingVertical: 13,
        paddingHorizontal: 13,
    },
    error: {
        color: '#EF4444',
        fontSize: 11,
        marginTop: 4,
    },
});

export default React.memo(TextInput);
