import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

const INITIAL_NOTIFICATIONS = [
    {
        id: '1',
        section: 'TODAY',
        type: 'price_drop',
        title: 'Price Dropped!',
        message: 'iPhone 14 Pro Max is now 215,000 PKR (Was 225,000 PKR)',
        time: '10 mins ago',
        unread: true,
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&auto=format&fit=crop',
        actionText: 'View Ad',
    },
    {
        id: '2',
        section: 'TODAY',
        type: 'offer',
        title: 'New Counter Offer',
        message: 'Ali Khan made an offer of 210,000 PKR on your Honda Civic 2022',
        time: '1 hour ago',
        unread: true,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop',
        actionText: 'Review Offer',
    },
    {
        id: '3',
        section: 'TODAY',
        type: 'system',
        title: 'Listing Approved',
        message: 'Your ad "MacBook Pro M2 16GB" has been approved and is now live!',
        time: '3 hours ago',
        unread: false,
        actionText: 'Promote Ad',
    },
    {
        id: '4',
        section: 'YESTERDAY',
        type: 'security',
        title: 'Identity Verified! 🛡️',
        message: 'Your seller profile is now verified with a Blue Badge.',
        time: 'Yesterday, 4:20 PM',
        unread: false,
    },
    {
        id: '5',
        section: 'YESTERDAY',
        type: 'price_drop',
        title: 'Price Drop Alert',
        message: 'Sony WH-1000XM5 Headphones price dropped by 5,000 PKR',
        time: 'Yesterday, 11:15 AM',
        unread: false,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&auto=format&fit=crop',
        actionText: 'View Item',
    },
];

const TABS = ['All', 'System', 'Price Drops', 'Offers'];

interface NotificationsScreenProps {
    onBackPress?: () => void;
    onNotificationPress?: (notif: any) => void;
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
    onBackPress,
    onNotificationPress,
}) => {
    const [activeTab, setActiveTab] = useState('All');
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

    const markAllRead = () => {
        setNotifications(notifications.map((n) => ({ ...n, unread: false })));
    };

    const filteredNotifs = notifications.filter((n) => {
        if (activeTab === 'System') return n.type === 'system' || n.type === 'security';
        if (activeTab === 'Price Drops') return n.type === 'price_drop';
        if (activeTab === 'Offers') return n.type === 'offer';
        return true;
    });

    const todayNotifs = filteredNotifs.filter((n) => n.section === 'TODAY');
    const yesterdayNotifs = filteredNotifs.filter((n) => n.section === 'YESTERDAY');

    const renderNotifItem = (item: typeof INITIAL_NOTIFICATIONS[0]) => (
        <TouchableOpacity
            key={item.id}
            style={[styles.notifCard, item.unread && styles.notifCardUnread]}
            activeOpacity={0.8}
            onPress={() => onNotificationPress && onNotificationPress(item)}
        >
            <View style={styles.leftIconWrapper}>
                {item.type === 'price_drop' ? (
                    item.image ? (
                        <Image source={{ uri: item.image }} style={styles.itemThumb} />
                    ) : (
                        <View style={[styles.iconCircle, { backgroundColor: '#FEE2E2' }]}>
                            <Feather name="trending-down" size={18} color="#EF4444" />
                        </View>
                    )
                ) : item.type === 'offer' ? (
                    item.avatar ? (
                        <Image source={{ uri: item.avatar }} style={styles.avatarImg} />
                    ) : (
                        <View style={[styles.iconCircle, { backgroundColor: '#D1FAE5' }]}>
                            <Feather name="dollar-sign" size={18} color="#10B981" />
                        </View>
                    )
                ) : item.type === 'security' ? (
                    <View style={[styles.iconCircle, { backgroundColor: '#E0F2FE' }]}>
                        <Feather name="shield" size={18} color="#0284C7" />
                    </View>
                ) : (
                    <View style={[styles.iconCircle, { backgroundColor: '#FFEAD6' }]}>
                        <Feather name="check-circle" size={18} color={Colors.primary} />
                    </View>
                )}
            </View>

            <View style={styles.notifContent}>
                <View style={styles.titleRow}>
                    <Text style={styles.notifTitle}>{item.title}</Text>
                    {item.unread && <View style={styles.unreadDot} />}
                </View>
                <Text style={styles.notifMessage}>{item.message}</Text>
                <Text style={styles.notifTime}>{item.time}</Text>

                {item.actionText && (
                    <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
                        <Text style={styles.actionBtnText}>{item.actionText}</Text>
                        <Feather name="chevron-right" size={12} color={Colors.primary} />
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <TouchableOpacity onPress={markAllRead} activeOpacity={0.7}>
                    <Text style={styles.markReadText}>Mark All Read</Text>
                </TouchableOpacity>
            </View>

            {/* Filter Tabs */}
            <View style={styles.tabsRow}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.tabChip, isActive && styles.tabChipActive]}
                                onPress={() => setActiveTab(tab)}
                                activeOpacity={0.8}
                            >
                                <Text style={[styles.tabChipText, isActive && styles.tabChipTextActive]}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {todayNotifs.length > 0 && (
                    <View style={styles.sectionGroup}>
                        <Text style={styles.sectionHeader}>TODAY</Text>
                        {todayNotifs.map(renderNotifItem)}
                    </View>
                )}

                {yesterdayNotifs.length > 0 && (
                    <View style={styles.sectionGroup}>
                        <Text style={styles.sectionHeader}>YESTERDAY</Text>
                        {yesterdayNotifs.map(renderNotifItem)}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 56,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.dark,
    },
    markReadText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primary,
    },
    tabsRow: {
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        paddingVertical: 10,
    },
    tabsContainer: {
        paddingHorizontal: 20,
        gap: 8,
    },
    tabChip: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
    },
    tabChipActive: {
        backgroundColor: Colors.primary,
    },
    tabChipText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray600,
    },
    tabChipTextActive: {
        color: Colors.white,
        fontWeight: '800',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    sectionGroup: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 11,
        fontWeight: '800',
        color: Colors.gray400,
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    notifCard: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 4,
        elevation: 1,
    },
    notifCardUnread: {
        borderColor: '#FFD8C2',
        backgroundColor: '#FFFBF8',
    },
    leftIconWrapper: {
        marginRight: 12,
    },
    itemThumb: {
        width: 44,
        height: 44,
        borderRadius: 10,
    },
    avatarImg: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notifContent: {
        flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    notifTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.dark,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.primary,
    },
    notifMessage: {
        fontSize: 12,
        color: Colors.gray600,
        lineHeight: 17,
    },
    notifTime: {
        fontSize: 10,
        color: Colors.gray400,
        marginTop: 4,
    },
    actionBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        alignSelf: 'flex-start',
        backgroundColor: '#FFF4ED',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
    },
    actionBtnText: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.primary,
        marginRight: 4,
    },
});
