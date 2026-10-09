import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

const CATEGORIES = [
    {
        id: 'mobiles',
        title: 'Mobiles & Tablets',
        subtext: 'Smartphones, Tablets, Smartwatches & Accessories',
        icon: 'smartphone',
        badge: 'Popular',
    },
    {
        id: 'vehicles',
        title: 'Vehicles & Cars',
        subtext: 'Cars, Motorcycles, Spare Parts & Boats',
        icon: 'truck',
        badge: 'Popular',
    },
    {
        id: 'property',
        title: 'Property for Sale & Rent',
        subtext: 'Houses, Apartments, Commercial & Land Plots',
        icon: 'home',
    },
    {
        id: 'electronics',
        title: 'Electronics & Appliances',
        subtext: 'Laptops, TVs, Cameras, ACs & Audio',
        icon: 'tv',
    },
    {
        id: 'fashion',
        title: 'Fashion & Beauty',
        subtext: 'Clothing, Shoes, Jewelry & Watches',
        icon: 'shopping-bag',
    },
    {
        id: 'furniture',
        title: 'Furniture & Decor',
        subtext: 'Sofa sets, Beds, Tables & Garden Accessories',
        icon: 'box',
    },
    {
        id: 'sports',
        title: 'Sports & Hobbies',
        subtext: 'Bicycles, Gym Gear, Books & Instruments',
        icon: 'activity',
    },
    {
        id: 'pets',
        title: 'Animals & Pets',
        subtext: 'Dogs, Cats, Birds, Fish & Pet Food',
        icon: 'heart',
    },
];

interface PostAdCategoryScreenProps {
    onBackPress?: () => void;
    onSelectCategory?: (categoryId: string) => void;
}

export const PostAdCategoryScreen: React.FC<PostAdCategoryScreenProps> = ({
    onBackPress,
    onSelectCategory,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Select Category</Text>
                <View style={{ width: 36 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.subtitle}>
                    What are you listing today? Select the best matching category.
                </Text>

                <View style={styles.listContainer}>
                    {CATEGORIES.map((cat) => (
                        <TouchableOpacity
                            key={cat.id}
                            style={styles.categoryCard}
                            activeOpacity={0.8}
                            onPress={() => onSelectCategory && onSelectCategory(cat.id)}
                        >
                            <View style={styles.iconCircle}>
                                <Feather name={cat.icon as any} size={20} color={Colors.primary} />
                            </View>

                            <View style={styles.infoCol}>
                                <View style={styles.titleRow}>
                                    <Text style={styles.categoryTitle}>{cat.title}</Text>
                                    {cat.badge && (
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}>{cat.badge}</Text>
                                        </View>
                                    )}
                                </View>
                                <Text style={styles.subtextText}>{cat.subtext}</Text>
                            </View>

                            <Feather name="chevron-right" size={18} color={Colors.gray400} />
                        </TouchableOpacity>
                    ))}
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    subtitle: {
        fontSize: 13,
        color: Colors.gray600,
        marginBottom: 16,
    },
    listContainer: {
        gap: 12,
    },
    categoryCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 5,
        elevation: 2,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    infoCol: {
        flex: 1,
        marginRight: 8,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    categoryTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.dark,
    },
    badge: {
        backgroundColor: '#FEF3C7',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 9,
        fontWeight: '800',
        color: '#B45309',
    },
    subtextText: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 2,
    },
});
