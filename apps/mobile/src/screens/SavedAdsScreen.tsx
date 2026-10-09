import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { ProductCard } from '../components/ProductCard';

const SAVED_ITEMS = [
    {
        id: '1',
        title: 'MacBook Pro M2 13-inch',
        price: '$1,200',
        location: 'Gulberg, Lahore',
        date: 'Yesterday',
        isFeatured: true,
        isVerified: true,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Google Pixel 7 Pro',
        price: '$450',
        location: 'DHA Phase 5, Lahore',
        date: '2 days ago',
        condition: 'Used',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'Nike Air Jordan 1',
        price: '$85',
        location: 'Johar Town, Metro',
        date: 'Yesterday',
        condition: 'New',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop',
    },
    {
        id: '4',
        title: 'iPad Pro 11-inch M1',
        price: '$620',
        location: 'Downtown, Metro',
        date: '3 days ago',
        condition: 'Like New',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop',
    },
    {
        id: '5',
        title: 'Sony WH-1000XM5 ANC',
        price: '$240',
        location: 'Model Town, Lahore',
        date: 'Yesterday',
        isVerified: true,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop',
    },
    {
        id: '6',
        title: 'Yamaha YBR 125G (2023)',
        price: '$1,450',
        location: 'Cantt, Lahore',
        date: '4 days ago',
        condition: '2.4k km',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500&auto=format&fit=crop',
    },
];

const CATEGORY_TABS = ['All items 12', 'Mobiles', 'Electronics', 'Vehicles'];

interface SavedAdsScreenProps {
    onBackPress?: () => void;
    onProductPress?: (id: string) => void;
}

export const SavedAdsScreen: React.FC<SavedAdsScreenProps> = ({
    onBackPress,
    onProductPress,
}) => {
    const [activeCategory, setActiveCategory] = useState('All items 12');

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Saved Ads <Text style={styles.countText}>(12)</Text></Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Feather name="search" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Feather name="sliders" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Category Pills Row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryPillsRow}
            >
                {CATEGORY_TABS.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                        <TouchableOpacity
                            key={cat}
                            style={[styles.catPill, isActive && styles.catPillActive]}
                            onPress={() => setActiveCategory(cat)}
                            activeOpacity={0.8}
                        >
                            <Text style={[styles.catPillText, isActive && styles.catPillTextActive]}>
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {/* Location / Sort Filter */}
            <View style={styles.subInfoRow}>
                <Text style={styles.subInfoText}>
                    Showing all saved items in <Text style={styles.boldLoc}>Lahore</Text>
                </Text>
                <TouchableOpacity style={styles.sortBtn} activeOpacity={0.7}>
                    <Feather name="sliders" size={12} color={Colors.gray600} style={{ marginRight: 4 }} />
                    <Text style={styles.sortText}>Recent</Text>
                </TouchableOpacity>
            </View>

            {/* 2-Column Product Grid */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.gridContent}
            >
                <View style={styles.gridRow}>
                    {SAVED_ITEMS.map((item) => (
                        <View key={item.id} style={styles.gridCol}>
                            <ProductCard
                                title={item.title}
                                price={item.price}
                                location={item.location}
                                date={item.date}
                                condition={item.condition}
                                isFeatured={item.isFeatured}
                                isVerified={item.isVerified}
                                isFavorite={true}
                                image={item.image}
                                onPress={() => onProductPress && onProductPress(item.id)}
                            />
                        </View>
                    ))}
                </View>

                {/* Footer End Notice */}
                <View style={styles.footerNotice}>
                    <View style={styles.bookmarkCircle}>
                        <Feather name="bookmark" size={20} color={Colors.primary} />
                    </View>
                    <Text style={styles.footerNoticeText}>You've reached the end of your saved ads.</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.exploreLinkText}>Explore more listings</Text>
                    </TouchableOpacity>
                </View>
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
    countText: {
        color: Colors.gray500,
        fontWeight: '600',
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
    categoryPillsRow: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 8,
    },
    catPill: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#EEF2F6',
    },
    catPillActive: {
        backgroundColor: Colors.primary,
    },
    catPillText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.gray600,
    },
    catPillTextActive: {
        color: Colors.white,
    },
    subInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 8,
    },
    subInfoText: {
        fontSize: 12,
        color: Colors.gray500,
    },
    boldLoc: {
        fontWeight: '700',
        color: Colors.dark,
    },
    sortBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray600,
    },
    gridContent: {
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    gridRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -6,
    },
    gridCol: {
        width: '50%',
        paddingHorizontal: 6,
    },
    footerNotice: {
        alignItems: 'center',
        marginVertical: 24,
    },
    bookmarkCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    footerNoticeText: {
        fontSize: 12,
        color: Colors.gray500,
    },
    exploreLinkText: {
        fontSize: 13,
        fontWeight: '800',
        color: Colors.primary,
        marginTop: 4,
    },
});
