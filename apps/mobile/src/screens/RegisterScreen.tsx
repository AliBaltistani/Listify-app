import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../theme/colors';
import { AuthHeaderBanner } from '../components/AuthHeaderBanner';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { SocialButtons } from '../components/SocialButtons';

interface RegisterScreenProps {
    onNavigateToLogin?: () => void;
    onNavigateToOtpMethod?: () => void;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
    onNavigateToLogin,
    onNavigateToOtpMethod,
}) => {
    return (
        <AuthHeaderBanner
            title="Register Now"
            subtitle="Create an account or Sign up to explore about our app"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <CustomInput
                    label="Full Name"
                    iconName="user"
                    placeholder="Full Name"
                />

                <CustomInput
                    label="Phone Number"
                    isPhoneInput
                    countryCode="PAK +923"
                    placeholder="(000) 000-0000"
                    keyboardType="phone-pad"
                />

                <CustomInput
                    label="Email"
                    iconName="mail"
                    placeholder="Full Name"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <CustomInput
                    label="Username"
                    iconName="user"
                    placeholder="Full Name"
                    autoCapitalize="none"
                />

                <CustomInput
                    label="Password"
                    iconName="lock"
                    placeholder="Full Name"
                    secureTextEntry
                />

                <CustomButton
                    title="Sign Up"
                    onPress={onNavigateToOtpMethod || (() => { })}
                    variant="primary"
                />

                <View style={styles.signInRow}>
                    <Text style={styles.signInLabel}>Already have and account </Text>
                    <TouchableOpacity onPress={onNavigateToLogin} activeOpacity={0.7}>
                        <Text style={styles.signInBold}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.dividerRow}>
                    <Text style={styles.dividerText}>OR</Text>
                </View>

                <SocialButtons />
            </ScrollView>
        </AuthHeaderBanner>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 30,
    },
    signInRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 14,
    },
    signInLabel: {
        fontSize: 13,
        color: Colors.gray600,
    },
    signInBold: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
    },
    dividerRow: {
        alignItems: 'center',
        marginVertical: 10,
    },
    dividerText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray400,
        letterSpacing: 0.5,
    },
});
