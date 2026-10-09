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

const POPULAR_CITIES = [
    { name: 'Lahore', province: 'Punjab', isPopular: true },
    { name: 'Karachi', province: 'Sindh', isPopular: true },
    { name: 'Islamabad', province: 'Capital Territory', isPopular: true },
    { name: 'Rawalpindi', province: 'Punjab', isPopular: true },
    { name: 'Faisalabad', province: 'Punjab' },
    { name: 'Multan', province: 'Punjab' },
    { name: 'Peshawar', province: 'Khyber Pakhtunkhwa' },
    { name: 'Quetta', province: 'Balochistan' },
    { name: 'Sialkot', province: 'Punjab' },
    { name: 'Gujranwala', province: 'Punjab' },
];

interface PostAdLocationScreenProps {
    onBackPress?: () => void;
    onSelectLocation?: (city: string) => void;
}

export const PostAdLocationScreen: React.FC<PostAdLocationScreenProps> = ({
    onBackPress,
    onSelectLocation,
}) => {
    const [query, setQuery] = useState('');

    const filteredCities = POPULAR_CITIES.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Set Location</Text>
                <View style={{ width: 36 }} />
            </View>

            {/* Search Input Bar */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Feather name="map-pin" size={18} color={Colors.primary} style={{ marginRight: 8 }} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search city, area or landmark..."
                        placeholderTextColor={Colors.gray400}
                        value={query}
                        onChangeText={setQuery}
                    />
                    {query.length > 0 && (
                        <TouchableOpacity onPress={() => setQuery('')}>
                            <Feather name="x-circle" size={16} color={Colors.gray400} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Auto Detect GPS Button */}
                <TouchableOpacity
                    style={styles.gpsCard}
                    activeOpacity={0.8}
                    onPress={() => onSelectLocation && onSelectLocation('Lahore (GPS Detected)')}
                >
                    <View style={styles.gpsCircle}>
                        <Ionicons name="navigate-outline" size={20} color={Colors.primary} />
                    </View>
                    <View style={styles.gpsTextCol}>
                        <Text style={styles.gpsTitle}>Use Current Location</Text>
                        <Text style={styles.gpsSubtext}>Enable GPS for instant automatic detection</Text>
                    </View>
                    <Feather name="chevron-right" size={18} color={Colors.primary} />
                </TouchableOpacity>

                {/* Popular Cities Section */}
                <Text style={styles.sectionTitle}>POPULAR CITIES</Text>

                <View style={styles.cityList}>
                    {filteredCities.map((city) => (
                        <TouchableOpacity
                            key={city.name}
                            style={styles.cityRow}
                            activeOpacity={0.7}
                            onPress={() => onSelectLocation && onSelectLocation(city.name)}
                        >
                            <Feather name="map-pin" size={16} color={Colors.gray400} style={{ marginRight: 12 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.cityName}>{city.name}</Text>
                                <Text style={styles.cityProvince}>{city.province}</Text>
                            </View>
                            {city.isPopular && (
                                <View style={styles.popularBadge}>
                                    <Text style={styles.popularBadgeText}>POPULAR</Text>
                                </View>
                            )}
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
    searchContainer: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    searchBar: {
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F3F4F6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    searchInput: {
        flex: 1,
        fontSize: 13,
        color: Colors.dark,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    gpsCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF4ED',
        borderWidth: 1,
        borderColor: '#FFD8C2',
        borderRadius: 16,
        padding: 14,
        marginBottom: 20,
    },
    gpsCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    gpsTextCol: {
        flex: 1,
    },
    gpsTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.primary,
    },
    gpsSubtext: {
        fontSize: 11,
        color: Colors.gray600,
        marginTop: 2,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.gray400,
        letterSpacing: 0.5,
        marginBottom: 12,
    },
    cityList: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        paddingHorizontal: 16,
    },
    cityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    cityName: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.dark,
    },
    cityProvince: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 1,
    },
    popularBadge: {
        backgroundColor: '#FEF3C7',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    popularBadgeText: {
        fontSize: 9,
        fontWeight: '800',
        color: '#B45309',
    },
});
