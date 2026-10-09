import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { OtpInput } from '../components/OtpInput';
import { CustomButton } from '../components/CustomButton';

interface OtpVerificationScreenProps {
    recipient?: string;
    onBackPress?: () => void;
    onVerifyNext?: () => void;
}

export const OtpVerificationScreen: React.FC<OtpVerificationScreenProps> = ({
    recipient = 'abc@gmail.com',
    onBackPress,
    onVerifyNext,
}) => {
    const [code, setCode] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.backButton} onPress={onBackPress} activeOpacity={0.8}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Enter the Code</Text>
                <Text style={styles.subtitle}>
                    A verification code has been sent to{'\n'}
                    <Text style={styles.recipientText}>{recipient}</Text>
                </Text>

                <OtpInput onCodeComplete={(c) => setCode(c)} />

                <Text style={styles.timerText}>You can resend the code in 24 seconds</Text>

                <CustomButton
                    title="Next"
                    onPress={onVerifyNext || (() => { })}
                    variant="primary"
                    style={styles.nextButton}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerRow: {
        height: 56,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    backButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: Colors.dark,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.gray500,
        lineHeight: 22,
        marginBottom: 20,
    },
    recipientText: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.dark,
    },
    timerText: {
        fontSize: 13,
        color: Colors.gray400,
        textAlign: 'center',
        marginVertical: 16,
    },
    nextButton: {
        marginTop: 8,
    },
});
