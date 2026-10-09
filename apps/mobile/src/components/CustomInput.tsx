import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface CustomInputProps extends TextInputProps {
    label?: string;
    iconName?: keyof typeof Feather.glyphMap;
    isPhoneInput?: boolean;
    countryCode?: string;
    onCountryPress?: () => void;
    rightElement?: React.ReactNode;
    isRequired?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
    label,
    iconName,
    isPhoneInput = false,
    countryCode = 'PAK +923',
    onCountryPress,
    rightElement,
    isRequired = false,
    style,
    ...props
}) => {
    return (
        <View style={styles.container}>
            {label && (
                <Text style={styles.label}>
                    {label} {isRequired && <Text style={{ color: Colors.primary }}>*</Text>}
                </Text>
            )}

            <View style={styles.inputWrapper}>
                {isPhoneInput ? (
                    <TouchableOpacity
                        style={styles.countryPicker}
                        onPress={onCountryPress}
                        activeOpacity={0.7}
                    >
                        <View style={styles.flagBadge}>
                            <Text style={styles.flagEmoji}>🇵🇰</Text>
                        </View>
                        <Text style={styles.countryCodeText}>{countryCode}</Text>
                        <Feather name="chevron-down" size={16} color={Colors.gray600} style={styles.chevronIcon} />
                    </TouchableOpacity>
                ) : iconName ? (
                    <View style={styles.iconContainer}>
                        <Feather name={iconName} size={18} color={Colors.gray400} />
                    </View>
                ) : null}

                <TextInput
                    style={[styles.input, style]}
                    placeholderTextColor="#A0A0A0"
                    {...props}
                />

                {rightElement && <View style={styles.rightContainer}>{rightElement}</View>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
        marginBottom: 6,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
    },
    iconContainer: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryPicker: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        borderRightWidth: 1,
        borderRightColor: '#E5E7EB',
        marginRight: 10,
    },
    flagBadge: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#116834',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    flagEmoji: {
        fontSize: 14,
    },
    countryCodeText: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
        marginRight: 4,
    },
    chevronIcon: {
        marginLeft: 2,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 14,
        color: Colors.dark,
    },
    rightContainer: {
        marginLeft: 8,
    },
});
