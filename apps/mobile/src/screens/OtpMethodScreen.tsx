import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { AuthHeaderBanner } from '../components/AuthHeaderBanner';
import { SegmentedTab, OtpType } from '../components/SegmentedTab';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

interface OtpMethodScreenProps {
    onBackPress?: () => void;
    onSendOtp?: (type: OtpType) => void;
}

export const OtpMethodScreen: React.FC<OtpMethodScreenProps> = ({
    onBackPress,
    onSendOtp,
}) => {
    const [selectedTab, setSelectedTab] = useState<OtpType>('email');
    const [deliveryMethod, setDeliveryMethod] = useState<'sms' | 'whatsapp'>('sms');

    const isEmail = selectedTab === 'email';

    return (
        <AuthHeaderBanner
            title="Get Started now"
            subtitle="Create an account or log in to explore about our app"
            showBack
            onBackPress={onBackPress}
        >
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>
                    {isEmail ? 'Add your email address' : 'Add your contact number'}
                </Text>
                <Text style={styles.sectionSubtitle}>
                    {isEmail
                        ? 'A verification code will be sent to this email.'
                        : 'A verification code will be sent to this number.'}
                </Text>

                <SegmentedTab
                    selectedTab={selectedTab}
                    onTabChange={(tab) => setSelectedTab(tab)}
                />

                {isEmail ? (
                    <CustomInput
                        label="Email"
                        iconName="mail"
                        placeholder="Full Name"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                ) : (
                    <View>
                        <CustomInput
                            label="Phone Number"
                            isPhoneInput
                            countryCode="PAK +923"
                            placeholder="(000) 000-0000"
                            keyboardType="phone-pad"
                        />

                        <View style={styles.radioRow}>
                            <TouchableOpacity
                                style={styles.radioOption}
                                onPress={() => setDeliveryMethod('sms')}
                                activeOpacity={0.7}
                            >
                                <View
                                    style={[
                                        styles.radioDot,
                                        deliveryMethod === 'sms' && styles.radioDotActive,
                                    ]}
                                />
                                <Text style={styles.radioLabel}>SMS Delivery</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.radioOption}
                                onPress={() => setDeliveryMethod('whatsapp')}
                                activeOpacity={0.7}
                            >
                                <View
                                    style={[
                                        styles.radioDot,
                                        deliveryMethod === 'whatsapp' && styles.radioDotActive,
                                    ]}
                                />
                                <Text style={styles.radioLabel}>WhatsApp Available</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                <View style={styles.noticeBox}>
                    <Feather name="info" size={18} color={Colors.primary} style={styles.noticeIcon} />
                    <Text style={styles.noticeText}>
                        By tapping <Text style={styles.noticeBold}>Send OTP</Text>, you agree to receive SMS or
                        security emails for authentication purposes. Standard rates may apply.
                    </Text>
                </View>

                <CustomButton
                    title="Send OTP"
                    onPress={() => onSendOtp && onSendOtp(selectedTab)}
                    variant="primary"
                    style={styles.sendButton}
                />
            </View>
        </AuthHeaderBanner>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.dark,
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: 13,
        color: Colors.gray500,
        marginBottom: 16,
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginBottom: 16,
        marginTop: -4,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: Colors.gray400,
        marginRight: 6,
    },
    radioDotActive: {
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
    },
    radioLabel: {
        fontSize: 12,
        color: Colors.gray600,
        fontWeight: '500',
    },
    noticeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF9F0',
        borderWidth: 1,
        borderColor: '#FFE8CC',
        borderRadius: 14,
        padding: 14,
        marginVertical: 16,
    },
    noticeIcon: {
        marginRight: 10,
    },
    noticeText: {
        flex: 1,
        fontSize: 12,
        color: '#665544',
        lineHeight: 17,
    },
    noticeBold: {
        fontWeight: '700',
        color: Colors.dark,
    },
    sendButton: {
        marginTop: 8,
    },
});
