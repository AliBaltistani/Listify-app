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
import { ListifyLogo } from '../components/ListifyLogo';
import { ProductCard } from '../components/ProductCard';
import { BottomTabBar, TabName } from '../components/BottomTabBar';

const CATEGORY_PRODUCTS = [
    {
        id: '1',
        title: 'Macbook 14',
        price: 'Rs 45000/-',
        location: 'Gulberg Phase 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Macbook 14',
        price: 'Rs 45000/-',
        location: 'Gulberg Phase 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'Macbook 14',
        price: 'Rs 45000/-',
        location: 'Gulberg Phase 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop',
    },
    {
        id: '4',
        title: 'Macbook 14',
        price: 'Rs 45000/-',
        location: 'Gulberg Phase 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop',
    },
    {
        id: '5',
        title: 'Macbook 14',
        price: 'Rs 45000/-',
        location: 'Gulberg Phase 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop',
    },
    {
        id: '6',
        title: 'Macbook 14',
        price: 'Rs 45000/-',
        location: 'Gulberg Phase 4, Lah...',
        date: '22 Sep',
        condition: 'New',
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop',
    },
];

interface CategoryDetailsScreenProps {
    onProductPress?: (id: string) => void;
    onTabChange?: (tab: TabName) => void;
    onFilterPress?: () => void;
    onSearchPress?: () => void;
    onNotificationPress?: () => void;
}

export const CategoryDetailsScreen: React.FC<CategoryDetailsScreenProps> = ({
    onProductPress,
    onTabChange,
    onFilterPress,
    onSearchPress,
    onNotificationPress,
}) => {
    const [activeFilters, setActiveFilters] = useState(['Laptop', 'Smart phones']);

    const removeFilter = (filter: string) => {
        setActiveFilters(activeFilters.filter((f) => f !== filter));
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Header Bar */}
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
                </View>
            </View>

            {/* Sub Header Title & Controls */}
            <View style={styles.subHeaderRow}>
                <Text style={styles.categoryTitle}>4500 APPAREL</Text>

                <View style={styles.controlsRight}>
                    <TouchableOpacity style={styles.dropdownButton} activeOpacity={0.8} onPress={onFilterPress}>
                        <Text style={styles.dropdownText}>New</Text>
                        <Feather name="chevron-down" size={14} color={Colors.gray600} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconControl} activeOpacity={0.7} onPress={onFilterPress}>
                        <Ionicons name="grid-outline" size={16} color={Colors.gray600} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconControl} activeOpacity={0.7} onPress={onFilterPress}>
                        <Feather name="sliders" size={16} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Active Filter Chips Row */}
            {activeFilters.length > 0 && (
                <View style={styles.filterChipsRow}>
                    {activeFilters.map((filter) => (
                        <TouchableOpacity
                            key={filter}
                            style={styles.chip}
                            activeOpacity={0.8}
                            onPress={() => removeFilter(filter)}
                        >
                            <Text style={styles.chipText}>{filter}</Text>
                            <Feather name="x" size={14} color={Colors.white} style={styles.chipCloseIcon} />
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            {/* 2-Column Product Grid */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.gridContainer}
            >
                <View style={styles.gridRow}>
                    {CATEGORY_PRODUCTS.map((prod) => (
                        <View key={prod.id} style={styles.gridCol}>
                            <ProductCard
                                title={prod.title}
                                price={prod.price}
                                location={prod.location}
                                date={prod.date}
                                condition={prod.condition}
                                isFeatured={prod.isFeatured}
                                image={prod.image}
                                onPress={() => onProductPress && onProductPress(prod.id)}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Tab Bar */}
            <BottomTabBar activeTab="home" onTabPress={(tab) => onTabChange && onTabChange(tab)} />
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
    subHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: Colors.gray700,
        letterSpacing: 0.5,
    },
    controlsRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEF2F6',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        gap: 4,
    },
    dropdownText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.dark,
    },
    iconControl: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#EEF2F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterChipsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 12,
        gap: 10,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 20,
    },
    chipText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.white,
    },
    chipCloseIcon: {
        marginLeft: 6,
    },
    gridContainer: {
        paddingHorizontal: 16,
        paddingBottom: 24,
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
});
