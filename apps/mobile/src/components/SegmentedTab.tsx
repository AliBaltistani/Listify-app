import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

export type OtpType = 'phone' | 'email';

interface SegmentedTabProps {
    selectedTab: OtpType;
    onTabChange: (tab: OtpType) => void;
}

export const SegmentedTab: React.FC<SegmentedTabProps> = ({
    selectedTab,
    onTabChange,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.tab,
                    selectedTab === 'phone' && styles.activeTab,
                ]}
                onPress={() => onTabChange('phone')}
                activeOpacity={0.8}
            >
                <Feather
                    name="smartphone"
                    size={16}
                    color={selectedTab === 'phone' ? Colors.primary : Colors.gray500}
                    style={styles.icon}
                />
                <Text
                    style={[
                        styles.tabText,
                        selectedTab === 'phone' ? styles.activeTabText : styles.inactiveTabText,
                    ]}
                >
                    Phone Number
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.tab,
                    selectedTab === 'email' && styles.activeTab,
                ]}
                onPress={() => onTabChange('email')}
                activeOpacity={0.8}
            >
                <Feather
                    name="mail"
                    size={16}
                    color={selectedTab === 'email' ? Colors.primary : Colors.gray500}
                    style={styles.icon}
                />
                <Text
                    style={[
                        styles.tabText,
                        selectedTab === 'email' ? styles.activeTabText : styles.inactiveTabText,
                    ]}
                >
                    Email Address
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: 14,
        padding: 4,
        marginBottom: 20,
        height: 48,
    },
    tab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    activeTab: {
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    icon: {
        marginRight: 6,
    },
    tabText: {
        fontSize: 13,
        fontWeight: '600',
    },
    activeTabText: {
        color: Colors.dark,
        fontWeight: '700',
    },
    inactiveTabText: {
        color: Colors.gray500,
    },
});
