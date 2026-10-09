import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../theme/colors';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'dark' | 'outline';
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
    style,
    textStyle,
}) => {
    const isPrimary = variant === 'primary';
    const isDark = variant === 'dark';

    const bgStyle = isPrimary
        ? styles.bgPrimary
        : isDark
            ? styles.bgDark
            : styles.bgOutline;

    const titleStyle = isPrimary || isDark ? styles.textWhite : styles.textDark;

    return (
        <TouchableOpacity
            style={[styles.button, bgStyle, disabled && styles.disabled, style]}
            onPress={onPress}
            activeOpacity={0.85}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={isPrimary || isDark ? Colors.white : Colors.dark} />
            ) : (
                <Text style={[styles.text, titleStyle, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginVertical: 10,
        width: '100%',
    },
    bgPrimary: {
        backgroundColor: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },
    bgDark: {
        backgroundColor: Colors.dark,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    bgOutline: {
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderColor: Colors.gray300,
    },
    disabled: {
        opacity: 0.6,
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: -0.2,
    },
    textWhite: {
        color: Colors.white,
    },
    textDark: {
        color: Colors.dark,
    },
});
