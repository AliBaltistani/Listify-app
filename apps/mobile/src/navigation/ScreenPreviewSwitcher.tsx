import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

export type ScreenName =
    | 'Splash'
    | 'Onboarding'
    | 'Login'
    | 'Register'
    | 'ForgotPassword'
    | 'OtpMethod'
    | 'OtpVerification'
    | 'Home'
    | 'CategoryDetails'
    | 'ProductDetails'
    | 'MessageGroup'
    | 'MessageDetail'
    | 'MyAdsDashboard'
    | 'SavedAds'
    | 'UserProfile'
    | 'EditProfile'
    | 'Settings'
    | 'Chats'
    | 'MyAds'
    | 'Account'
    | 'Search'
    | 'PostAdCategory'
    | 'PostAdLocation'
    | 'PostAdStep1'
    | 'PostAdSpecsMobile'
    | 'PostAdSpecsVehicle'
    | 'PostAdSpecsProperty'
    | 'PostAdStep2'
    | 'PostAdStep3'
    | 'PostAdSuccess'
    | 'Notifications'
    | 'FilterSortModal'
    | 'ReportAdModal';

interface ScreenPreviewSwitcherProps {
    currentScreen: ScreenName;
    onSelectScreen: (screen: ScreenName) => void;
}

const SCREENS: { key: ScreenName; label: string }[] = [
    // Part 1
    { key: 'Splash', label: '1. Splash' },
    { key: 'Onboarding', label: '2. Onboarding' },
    { key: 'Login', label: '3. Login' },
    { key: 'Register', label: '4. Register' },
    { key: 'ForgotPassword', label: '5. Reset Pass' },
    { key: 'OtpMethod', label: '6. OTP Method' },
    { key: 'OtpVerification', label: '7. OTP Code' },
    { key: 'Home', label: '8. Homepage' },

    // Part 2
    { key: 'CategoryDetails', label: '9. Category Grid' },
    { key: 'ProductDetails', label: '10. Product Details' },
    { key: 'MessageGroup', label: '11. Inbox Stories' },
    { key: 'MessageDetail', label: '12. Chat Offer' },
    { key: 'MyAdsDashboard', label: '13. Seller Dash' },
    { key: 'SavedAds', label: '14. Saved Favorites' },
    { key: 'UserProfile', label: '15. Profile Showcase' },
    { key: 'EditProfile', label: '16. Edit Profile' },
    { key: 'Settings', label: '17. Settings' },

    // Part 3
    { key: 'Search', label: '18. Search Page' },
    { key: 'PostAdCategory', label: '19. Post: Category' },
    { key: 'PostAdLocation', label: '20. Post: Location' },
    { key: 'PostAdStep1', label: '21. Post: Step 1 Info' },
    { key: 'PostAdSpecsMobile', label: '22. Specs: Mobiles' },
    { key: 'PostAdSpecsVehicle', label: '23. Specs: Vehicles' },
    { key: 'PostAdSpecsProperty', label: '24. Specs: Property' },
    { key: 'PostAdStep2', label: '25. Post: Step 2 Price' },
    { key: 'PostAdStep3', label: '26. Post: Step 3 Review' },
    { key: 'PostAdSuccess', label: '27. Post: Success' },

    // Part 4 Modals & Feed
    { key: 'Notifications', label: '28. Notifications' },
    { key: 'FilterSortModal', label: '29. Filter & Sort Sheet' },
    { key: 'ReportAdModal', label: '30. Report Ad Sheet' },

    // Tabs
    { key: 'Chats', label: '31. Chats Tab' },
    { key: 'MyAds', label: '32. My Ads Tab' },
    { key: 'Account', label: '33. Account Tab' },
];

export const ScreenPreviewSwitcher: React.FC<ScreenPreviewSwitcherProps> = ({
    currentScreen,
    onSelectScreen,
}) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.toggleHeader}
                onPress={() => setCollapsed(!collapsed)}
                activeOpacity={0.8}
            >
                <View style={styles.indicatorDot} />
                <Text style={styles.toggleTitle}>
                    Screen Preview (33 Total): <Text style={styles.activeLabel}>{currentScreen}</Text>
                </Text>
                <Feather
                    name={collapsed ? 'chevron-up' : 'chevron-down'}
                    size={16}
                    color={Colors.white}
                />
            </TouchableOpacity>

            {!collapsed && (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.chipsRow}
                >
                    {SCREENS.map((s) => {
                        const isActive = currentScreen === s.key;
                        return (
                            <TouchableOpacity
                                key={s.key}
                                style={[styles.chip, isActive && styles.chipActive]}
                                onPress={() => onSelectScreen(s.key)}
                                activeOpacity={0.8}
                            >
                                <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                                    {s.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 45,
        left: 12,
        right: 12,
        zIndex: 999,
        backgroundColor: '#1E1E24',
        borderRadius: 14,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
    },
    toggleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        height: 38,
        backgroundColor: '#17171C',
    },
    indicatorDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.primary,
        marginRight: 8,
    },
    toggleTitle: {
        flex: 1,
        fontSize: 12,
        fontWeight: '600',
        color: '#D1D5DB',
    },
    activeLabel: {
        color: Colors.white,
        fontWeight: '800',
    },
    chipsRow: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        gap: 6,
    },
    chip: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: '#2A2A32',
    },
    chipActive: {
        backgroundColor: Colors.primary,
    },
    chipText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#9CA3AF',
    },
    chipTextActive: {
        color: Colors.white,
        fontWeight: '800',
    },
});
