import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { AuthHeaderBanner } from '../components/AuthHeaderBanner';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

interface ForgotPasswordScreenProps {
    onBackPress?: () => void;
    onNavigateToLogin?: () => void;
    onSendResetLink?: () => void;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
    onBackPress,
    onNavigateToLogin,
    onSendResetLink,
}) => {
    return (
        <AuthHeaderBanner
            title="Forgot Password"
            subtitle="Enter your registered email address to receive password reset instructions"
            showBack
            onBackPress={onBackPress}
        >
            <View style={styles.container}>
                <View style={styles.infoBox}>
                    <Feather name="info" size={18} color={Colors.primary} style={styles.infoIcon} />
                    <Text style={styles.infoText}>
                        We will send a password reset verification link or code to verify your identity.
                    </Text>
                </View>

                <CustomInput
                    label="Email"
                    iconName="mail"
                    placeholder="Full Name"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <CustomButton
                    title="Send Reset Link"
                    onPress={onSendResetLink || (() => { })}
                    variant="primary"
                    style={styles.actionButton}
                />

                <View style={styles.signUpRow}>
                    <Text style={styles.signUpLabel}>Remember your password ? </Text>
                    <TouchableOpacity onPress={onNavigateToLogin} activeOpacity={0.7}>
                        <Text style={styles.signUpBold}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthHeaderBanner>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF9F0',
        borderWidth: 1,
        borderColor: '#FFE8CC',
        borderRadius: 14,
        padding: 14,
        marginBottom: 20,
    },
    infoIcon: {
        marginRight: 10,
    },
    infoText: {
        flex: 1,
        fontSize: 12,
        color: '#665544',
        lineHeight: 17,
        fontWeight: '500',
    },
    actionButton: {
        marginTop: 10,
    },
    signUpRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signUpLabel: {
        fontSize: 13,
        color: Colors.gray600,
    },
    signUpBold: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.primary,
    },
});
