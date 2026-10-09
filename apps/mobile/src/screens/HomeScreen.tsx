import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { ListifyLogo } from '../components/ListifyLogo';
import { BottomTabBar, TabName } from '../components/BottomTabBar';

const { width } = Dimensions.get('window');

const CATEGORIES = [
    { id: '1', title: 'Mobiles', image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=200&auto=format&fit=crop' },
    { id: '2', title: 'Property', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=200&auto=format&fit=crop' },
    { id: '3', title: 'Vehicles', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&auto=format&fit=crop' },
    { id: '4', title: 'Bikes', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=200&auto=format&fit=crop' },
    { id: '5', title: 'flat', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&auto=format&fit=crop' },
    { id: '6', title: 'Fashions', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&auto=format&fit=crop' },
];

const NEAR_TO_ME = [
    {
        id: '1',
        title: 'Macbook 14',
        price: 'Rs 45000/-',
        location: 'Gulberg Phase 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'I Phone 14 p',
        price: 'Rs 48000/-',
        location: 'Pareeshan chowk skd...',
        date: '22 Sep',
        condition: 'New',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'I pad 20 po',
        price: 'Rs 25000/-',
        location: 'Agha 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop',
    },
];

const FEATURED = [
    {
        id: '1',
        title: 'MacBook Pro M5',
        price: 'Rs 125000/-',
        location: 'Skardu, Gilgit',
        date: '24 Sep',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Infinix Note 60 Pro',
        price: 'Rs 32000/-',
        location: 'Main Mall, Lah...',
        date: '23 Sep',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop',
    },
];

interface HomeScreenProps {
    onTabChange?: (tab: TabName) => void;
    onSearchPress?: () => void;
    onNotificationPress?: () => void;
    onSavedAdsPress?: () => void;
    onFilterPress?: () => void;
    onCategoryPress?: (cat: string) => void;
    onProductPress?: (item?: any) => void;
    onPostAdPress?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
    onTabChange,
    onSearchPress,
    onNotificationPress,
    onSavedAdsPress,
    onFilterPress,
    onCategoryPress,
    onProductPress,
    onPostAdPress,
}) => {
    const [activeTab, setActiveTab] = useState<TabName>('home');

    const handleTabPress = (tab: TabName) => {
        setActiveTab(tab);
        if (onTabChange) onTabChange(tab);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Top Header */}
                <View style={styles.headerRow}>
                    <ListifyLogo variant="orange" size="medium" />

                    <View style={styles.headerIconsRow}>
                        <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7} onPress={onSearchPress}>
                            <Feather name="search" size={18} color={Colors.dark} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7} onPress={onNotificationPress}>
                            <Feather name="bell" size={18} color={Colors.dark} />
                            <View style={styles.badgeDot} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7} onPress={onSavedAdsPress}>
                            <Feather name="heart" size={18} color={Colors.dark} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Location & Filter Bar */}
                <View style={styles.locationBarRow}>
                    <TouchableOpacity style={styles.locationPill} activeOpacity={0.8} onPress={onSearchPress}>
                        <Ionicons name="location-outline" size={18} color={Colors.gray500} style={styles.locIcon} />
                        <Text style={styles.locationText}>Skardu, Lahore</Text>
                        <Feather name="chevron-right" size={16} color={Colors.gray600} style={styles.locArrow} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton} activeOpacity={0.8} onPress={onFilterPress}>
                        <Feather name="sliders" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                </View>

                {/* Promo Ad Carousel Banner */}
                <View style={styles.bannerContainer}>
                    <View style={styles.bannerCard}>
                        <View style={styles.bannerContent}>
                            <View style={styles.adBadge}>
                                <Text style={styles.adBadgeText}>Ad</Text>
                            </View>

                            <Text style={styles.bannerBrand}>Nike</Text>
                            <Text style={styles.bannerModel}>Free Metcon</Text>
                            <Text style={styles.bannerPrice}>$ 120.99</Text>
                        </View>

                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop' }}
                            style={styles.bannerShoeImage}
                        />
                    </View>

                    <View style={styles.carouselPagination}>
                        <View style={[styles.carouselDot, styles.carouselDotActive]} />
                        <View style={styles.carouselDot} />
                        <View style={styles.carouselDot} />
                    </View>
                </View>

                {/* Browse Categories Section */}
                <View style={styles.sectionHeader}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Browse Categories</Text>
                        <Text style={styles.countBadge}>15+</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.seeMoreText}>See more</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesList}
                >
                    {CATEGORIES.map((cat) => (
                        <TouchableOpacity
                            key={cat.id}
                            style={styles.categoryItem}
                            activeOpacity={0.8}
                            onPress={() => onCategoryPress && onCategoryPress(cat.title)}
                        >
                            <View style={styles.categoryCircle}>
                                <Image source={{ uri: cat.image }} style={styles.categoryImage} />
                            </View>
                            <Text style={styles.categoryTitle}>{cat.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Near to me Section */}
                <View style={styles.sectionHeader}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Near to me</Text>
                        <Text style={styles.countBadge}>10+</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={onSearchPress}>
                        <Text style={styles.seeMoreText}>See more</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listingsHorizontalList}
                >
                    {NEAR_TO_ME.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.listingCard}
                            activeOpacity={0.9}
                            onPress={() => onProductPress && onProductPress(item)}
                        >
                            <View style={styles.listingImageWrapper}>
                                <Image source={{ uri: item.image }} style={styles.listingImage} />
                                <TouchableOpacity style={styles.bookmarkButton} activeOpacity={0.8} onPress={onSavedAdsPress}>
                                    <Feather name="bookmark" size={14} color={Colors.white} />
                                </TouchableOpacity>
                                <View style={styles.featuredBadge}>
                                    <Text style={styles.featuredBadgeText}>Featured</Text>
                                </View>
                            </View>

                            <View style={styles.listingInfo}>
                                <View style={styles.titleConditionRow}>
                                    <Text style={styles.listingTitle} numberOfLines={1}>
                                        {item.title}
                                    </Text>
                                    {item.condition && (
                                        <View style={styles.conditionTag}>
                                            <Text style={styles.conditionText}>{item.condition}</Text>
                                        </View>
                                    )}
                                </View>

                                <Text style={styles.listingPrice}>{item.price}</Text>

                                <View style={styles.locationDateRow}>
                                    <Text style={styles.listingLocation} numberOfLines={1}>
                                        {item.location}
                                    </Text>
                                    <Text style={styles.listingDate}>{item.date}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Featured Section */}
                <View style={styles.sectionHeader}>
                    <View style={styles.sectionTitleRow}>
                        <Text style={styles.sectionTitle}>Featured</Text>
                        <Text style={styles.countBadge}>10+</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={onSearchPress}>
                        <Text style={styles.seeMoreText}>See more</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.gridSection}>
                    {FEATURED.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.gridCard}
                            activeOpacity={0.9}
                            onPress={() => onProductPress && onProductPress(item)}
                        >
                            <View style={styles.listingImageWrapper}>
                                <Image source={{ uri: item.image }} style={styles.listingImage} />
                                <TouchableOpacity style={styles.bookmarkButton} activeOpacity={0.8} onPress={onSavedAdsPress}>
                                    <Feather name="bookmark" size={14} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.listingInfo}>
                                <Text style={styles.listingTitle}>{item.title}</Text>
                                <Text style={styles.listingPrice}>{item.price}</Text>
                                <Text style={styles.listingLocation}>{item.location}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollContent: {
        paddingBottom: 24,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 8,
    },
    headerIconsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    badgeDot: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 7,
        height: 7,
        borderRadius: 3.5,
        backgroundColor: Colors.primary,
    },
    locationBarRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 12,
        gap: 12,
    },
    locationPill: {
        flex: 1,
        height: 48,
        backgroundColor: Colors.white,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    locIcon: {
        marginRight: 8,
    },
    locationText: {
        flex: 1,
        fontSize: 13,
        fontWeight: '600',
        color: Colors.dark,
    },
    locArrow: {
        marginLeft: 4,
    },
    filterButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    bannerContainer: {
        paddingHorizontal: 20,
        marginVertical: 8,
    },
    bannerCard: {
        height: 160,
        borderRadius: 24,
        backgroundColor: '#FF9E66',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        overflow: 'hidden',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 4,
    },
    bannerContent: {
        flex: 1,
        zIndex: 2,
    },
    adBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignSelf: 'flex-start',
        marginBottom: 6,
    },
    adBadgeText: {
        fontSize: 10,
        fontWeight: '800',
        color: Colors.dark,
    },
    bannerBrand: {
        fontSize: 26,
        fontWeight: '900',
        fontStyle: 'italic',
        color: Colors.dark,
    },
    bannerModel: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.95)',
        fontWeight: '600',
    },
    bannerPrice: {
        fontSize: 16,
        fontWeight: '800',
        color: Colors.dark,
        marginTop: 6,
    },
    bannerShoeImage: {
        width: 170,
        height: 140,
        resizeMode: 'contain',
        transform: [{ rotate: '-15deg' }],
        marginRight: -20,
    },
    carouselPagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        marginTop: 12,
    },
    carouselDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.gray300,
    },
    carouselDotActive: {
        width: 14,
        backgroundColor: Colors.primary,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 12,
    },
    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.dark,
    },
    countBadge: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.gray500,
        marginLeft: 6,
    },
    seeMoreText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.gray500,
    },
    categoriesList: {
        paddingHorizontal: 20,
        gap: 16,
    },
    categoryItem: {
        alignItems: 'center',
        width: 62,
    },
    categoryCircle: {
        width: 58,
        height: 58,
        borderRadius: 29,
        overflow: 'hidden',
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    categoryTitle: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.dark,
        marginTop: 6,
        textAlign: 'center',
    },
    listingsHorizontalList: {
        paddingHorizontal: 20,
        gap: 14,
    },
    listingCard: {
        width: 180,
        backgroundColor: Colors.white,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 6,
    },
    listingImageWrapper: {
        width: '100%',
        height: 140,
        backgroundColor: Colors.gray100,
    },
    listingImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bookmarkButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    featuredBadge: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        backgroundColor: '#F5D65A',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
    },
    featuredBadgeText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#333333',
    },
    listingInfo: {
        padding: 10,
    },
    titleConditionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listingTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
        flex: 1,
    },
    conditionTag: {
        backgroundColor: Colors.gray200,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginLeft: 4,
    },
    conditionText: {
        fontSize: 9,
        fontWeight: '600',
        color: Colors.gray700,
    },
    listingPrice: {
        fontSize: 13,
        fontWeight: '800',
        color: Colors.dark,
        marginVertical: 4,
    },
    locationDateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listingLocation: {
        fontSize: 10,
        color: Colors.gray500,
        flex: 1,
    },
    listingDate: {
        fontSize: 10,
        color: Colors.gray500,
        marginLeft: 4,
    },
    gridSection: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 14,
    },
    gridCard: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 3,
    },
});
