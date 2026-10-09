import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../theme/colors';
import { AuthHeaderBanner } from '../components/AuthHeaderBanner';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { SocialButtons } from '../components/SocialButtons';

interface LoginScreenProps {
    onNavigateToRegister?: () => void;
    onNavigateToForgotPassword?: () => void;
    onNavigateToHome?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
    onNavigateToRegister,
    onNavigateToForgotPassword,
    onNavigateToHome,
}) => {
    return (
        <AuthHeaderBanner
            title="Log In"
            subtitle="Create an account or log in to explore about our app"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <CustomInput
                    label="Email"
                    iconName="mail"
                    placeholder="Full Name"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <CustomInput
                    label="Password"
                    iconName="lock"
                    placeholder="Full Name"
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.forgotButton}
                    onPress={onNavigateToForgotPassword}
                    activeOpacity={0.7}
                >
                    <Text style={styles.forgotText}>forget password</Text>
                </TouchableOpacity>

                <CustomButton
                    title="Sign In"
                    onPress={onNavigateToHome || (() => { })}
                    variant="primary"
                />

                <View style={styles.signUpRow}>
                    <Text style={styles.signUpLabel}>Dont have any account </Text>
                    <TouchableOpacity onPress={onNavigateToRegister} activeOpacity={0.7}>
                        <Text style={styles.signUpBold}>Sign Up</Text>
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
    forgotButton: {
        alignSelf: 'flex-end',
        marginBottom: 16,
        marginTop: -4,
    },
    forgotText: {
        fontSize: 13,
        color: Colors.dark,
        fontWeight: '600',
    },
    signUpRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 14,
    },
    signUpLabel: {
        fontSize: 13,
        color: Colors.gray600,
    },
    signUpBold: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
    },
    dividerRow: {
        alignItems: 'center',
        marginVertical: 12,
    },
    dividerText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray400,
        letterSpacing: 0.5,
    },
});
