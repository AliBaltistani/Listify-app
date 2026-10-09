import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

const INITIAL_RECENT_SEARCHES = [
    'iPhone 14 Pro Max',
    'MacBook M2',
    'Yamaha YBR',
    'Skardu iPad',
];

const POPULAR_CATEGORIES = [
    { name: 'Mobiles', icon: 'smartphone' },
    { name: 'Vehicles', icon: 'truck' },
    { name: 'Electronics', icon: 'tv' },
    { name: 'Property', icon: 'home' },
    { name: 'Fashion', icon: 'shopping-bag' },
    { name: 'Sports', icon: 'activity' },
];

const TRENDING_SEARCHES = [
    'iPhone 15 Pro',
    'Honda Civic 2022',
    'PS5 Console',
    'Apple Watch Ultra',
    'Toyota Corolla',
];

interface SearchScreenProps {
    onBackPress?: () => void;
    onSearchSubmit?: (query: string) => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
    onBackPress,
    onSearchSubmit,
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState(INITIAL_RECENT_SEARCHES);

    const removeRecent = (item: string) => {
        setRecentSearches(recentSearches.filter((s) => s !== item));
    };

    const clearAllRecent = () => {
        setRecentSearches([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Search Input Bar */}
            <View style={styles.headerBar}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>

                <View style={styles.searchInputPill}>
                    <Feather name="search" size={18} color={Colors.gray400} style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Type to search e.g. iPhone, Honda..."
                        placeholderTextColor={Colors.gray400}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        onSubmitEditing={() => onSearchSubmit && onSearchSubmit(searchQuery)}
                        autoFocus
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchQuery('')} activeOpacity={0.7}>
                            <Feather name="x-circle" size={16} color={Colors.gray400} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionTitle}>RECENT SEARCHES</Text>
                            <TouchableOpacity onPress={clearAllRecent} activeOpacity={0.7}>
                                <Text style={styles.clearAllText}>Clear All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.chipsWrap}>
                            {recentSearches.map((item) => (
                                <TouchableOpacity
                                    key={item}
                                    style={styles.recentChip}
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        setSearchQuery(item);
                                        onSearchSubmit && onSearchSubmit(item);
                                    }}
                                >
                                    <Text style={styles.recentChipText}>{item}</Text>
                                    <TouchableOpacity onPress={() => removeRecent(item)} activeOpacity={0.7}>
                                        <Feather name="x" size={14} color={Colors.gray500} style={{ marginLeft: 6 }} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}

                {/* Popular Categories */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>POPULAR CATEGORIES</Text>
                    <View style={styles.categoryGrid}>
                        {POPULAR_CATEGORIES.map((cat) => (
                            <TouchableOpacity
                                key={cat.name}
                                style={styles.categoryCard}
                                activeOpacity={0.8}
                                onPress={() => {
                                    setSearchQuery(cat.name);
                                    onSearchSubmit && onSearchSubmit(cat.name);
                                }}
                            >
                                <View style={styles.categoryIconCircle}>
                                    <Feather name={cat.icon as any} size={18} color={Colors.primary} />
                                </View>
                                <Text style={styles.categoryName}>{cat.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Trending Searches */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>TRENDING SEARCHES NEAR YOU</Text>
                    <View style={styles.trendingList}>
                        {TRENDING_SEARCHES.map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={styles.trendingRow}
                                activeOpacity={0.7}
                                onPress={() => {
                                    setSearchQuery(item);
                                    onSearchSubmit && onSearchSubmit(item);
                                }}
                            >
                                <View style={styles.trendingIconCircle}>
                                    <Feather name="trending-up" size={14} color={Colors.primary} />
                                </View>
                                <Text style={styles.trendingText}>{item}</Text>
                                <Feather name="chevron-right" size={16} color={Colors.gray400} />
                            </TouchableOpacity>
                        ))}
                    </View>
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
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        gap: 10,
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInputPill: {
        flex: 1,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#F3F4F6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    searchIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: Colors.dark,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    sectionContainer: {
        marginBottom: 24,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.gray400,
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    clearAllText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primary,
    },
    chipsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    recentChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 18,
    },
    recentChipText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.dark,
    },
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -4,
        gap: 8,
    },
    categoryCard: {
        width: '31%',
        backgroundColor: Colors.white,
        borderRadius: 14,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 4,
        elevation: 1,
    },
    categoryIconCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    categoryName: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.dark,
        textAlign: 'center',
    },
    trendingList: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        paddingHorizontal: 12,
    },
    trendingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    trendingIconCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    trendingText: {
        flex: 1,
        fontSize: 13,
        fontWeight: '600',
        color: Colors.dark,
    },
});
