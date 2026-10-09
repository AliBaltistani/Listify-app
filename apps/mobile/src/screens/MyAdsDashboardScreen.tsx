import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { BottomTabBar, TabName } from '../components/BottomTabBar';

const SELLER_ADS = [
    {
        id: '1',
        title: 'iPhone 14 Pro Max 256GB - De...',
        price: '$890',
        posted: 'Posted 2 days ago',
        views: '142 views',
        status: 'Active',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Sony WH-1000XM5 ANC Silv...',
        price: '$295',
        posted: 'Posted 4 days ago',
        views: '99 views',
        status: 'Active',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'Trek Marlin 7 Gen 2 (Size M)',
        price: '$620',
        posted: 'Posted 1 week ago',
        views: '86 views',
        status: 'Active',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop',
    },
];

interface MyAdsDashboardScreenProps {
    onBackPress?: () => void;
    onTabChange?: (tab: TabName) => void;
}

export const MyAdsDashboardScreen: React.FC<MyAdsDashboardScreenProps> = ({
    onBackPress,
    onTabChange,
}) => {
    const [selectedTab, setSelectedTab] = useState<'active' | 'sold'>('active');

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Ads</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Feather name="search" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Feather name="sliders" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Active vs Sold Tab Switcher */}
                <View style={styles.tabBarContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, selectedTab === 'active' && styles.tabButtonActive]}
                        onPress={() => setSelectedTab('active')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.tabText, selectedTab === 'active' && styles.tabTextActive]}>
                            Active <Text style={styles.badgeNumber}>3</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tabButton, selectedTab === 'sold' && styles.tabButtonActive]}
                        onPress={() => setSelectedTab('sold')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.tabText, selectedTab === 'sold' && styles.tabTextActive]}>
                            Sold <Text style={styles.badgeNumber}>1</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Stats Row */}
                <View style={styles.statsRow}>
                    <View style={styles.statCard}>
                        <View style={styles.statIconEye}>
                            <Feather name="eye" size={18} color={Colors.primary} />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Total Views</Text>
                            <Text style={styles.statNumber}>327</Text>
                        </View>
                    </View>

                    <View style={styles.statCard}>
                        <View style={styles.statIconMsg}>
                            <Feather name="message-square" size={18} color="#0D9488" />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Inquiries</Text>
                            <Text style={styles.statNumber}>19</Text>
                        </View>
                    </View>
                </View>

                {/* Ads Cards List */}
                {SELLER_ADS.map((ad) => (
                    <View key={ad.id} style={styles.adCard}>
                        <View style={styles.cardMainRow}>
                            <View style={styles.imageWrapper}>
                                <Image source={{ uri: ad.image }} style={styles.adImage} />
                                <View style={styles.activeTag}>
                                    <Text style={styles.activeTagText}>Active</Text>
                                </View>
                            </View>

                            <View style={styles.adInfo}>
                                <View style={styles.adTitleRow}>
                                    <Text style={styles.adTitle} numberOfLines={1}>
                                        {ad.title}
                                    </Text>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Feather name="more-vertical" size={16} color={Colors.gray500} />
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.adPrice}>{ad.price}</Text>

                                <View style={styles.adFooterRow}>
                                    <Text style={styles.adPostedText}>{ad.posted}</Text>
                                    <Text style={styles.adViewsText}>👁 {ad.views}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Buttons Row */}
                        <View style={styles.cardActionRow}>
                            <TouchableOpacity style={styles.markSoldBtn} activeOpacity={0.8}>
                                <Feather name="check-circle" size={14} color={Colors.dark} style={{ marginRight: 4 }} />
                                <Text style={styles.markSoldText}>Mark as Sold</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.editAdBtn} activeOpacity={0.8}>
                                <Feather name="edit" size={14} color={Colors.primary} style={{ marginRight: 4 }} />
                                <Text style={styles.editAdText}>Edit Ad</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {/* Tip Banner */}
                <View style={styles.tipCard}>
                    <View style={styles.tipIconCircle}>
                        <Ionicons name="bulb-outline" size={18} color="#B45309" />
                    </View>
                    <Text style={styles.tipText}>
                        Ads with at least 4 clear photos get <Text style={styles.boldTip}>2.8x more buyer chats</Text> on Listify.
                    </Text>
                </View>
            </ScrollView>

            {/* Floating Sell FAB */}
            <TouchableOpacity style={styles.floatingSellFab} activeOpacity={0.9}>
                <Ionicons name="add" size={20} color={Colors.white} />
                <Text style={styles.sellFabText}>Sell</Text>
            </TouchableOpacity>

            {/* Bottom Navigation */}
            <BottomTabBar activeTab="myads" onTabPress={(tab) => onTabChange && onTabChange(tab)} />
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
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.dark,
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 8,
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 80,
    },
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: '#EEF2F6',
        borderRadius: 24,
        padding: 4,
        marginVertical: 12,
    },
    tabButton: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabButtonActive: {
        backgroundColor: Colors.primary,
    },
    tabText: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.gray600,
    },
    tabTextActive: {
        color: Colors.white,
    },
    badgeNumber: {
        fontSize: 11,
        fontWeight: '800',
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 14,
    },
    statCard: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 2,
    },
    statIconEye: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statIconMsg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#CCFBF1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 11,
        color: Colors.gray500,
    },
    statNumber: {
        fontSize: 18,
        fontWeight: '900',
        color: Colors.dark,
    },
    adCard: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 2,
    },
    cardMainRow: {
        flexDirection: 'row',
    },
    imageWrapper: {
        width: 90,
        height: 90,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: Colors.gray100,
    },
    adImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    activeTag: {
        position: 'absolute',
        top: 6,
        left: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    activeTagText: {
        fontSize: 9,
        fontWeight: '700',
        color: Colors.dark,
    },
    adInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    adTitleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    adTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.dark,
        flex: 1,
    },
    adPrice: {
        fontSize: 16,
        fontWeight: '900',
        color: Colors.primary,
    },
    adFooterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    adPostedText: {
        fontSize: 11,
        color: Colors.gray400,
    },
    adViewsText: {
        fontSize: 11,
        color: Colors.gray500,
    },
    cardActionRow: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 12,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    markSoldBtn: {
        flex: 1,
        height: 38,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    markSoldText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.dark,
    },
    editAdBtn: {
        flex: 1,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#FFF4ED',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editAdText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primary,
    },
    tipCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF6FF',
        borderRadius: 14,
        padding: 12,
        marginTop: 6,
        borderWidth: 1,
        borderColor: '#DBEAFE',
    },
    tipIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FEF3C7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    tipText: {
        flex: 1,
        fontSize: 11,
        color: '#1E40AF',
        lineHeight: 16,
    },
    boldTip: {
        fontWeight: '800',
        color: Colors.dark,
    },
    floatingSellFab: {
        position: 'absolute',
        bottom: 85,
        right: 20,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 24,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 6,
        gap: 4,
    },
    sellFabText: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.white,
    },
});
