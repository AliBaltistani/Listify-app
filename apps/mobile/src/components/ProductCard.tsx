import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

export interface ProductCardProps {
    title: string;
    price: string;
    location: string;
    date?: string;
    image: string;
    condition?: string;
    isFeatured?: boolean;
    isVerified?: boolean;
    isFavorite?: boolean;
    onPress?: () => void;
    onFavoritePress?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    title,
    price,
    location,
    date,
    image,
    condition,
    isFeatured,
    isVerified,
    isFavorite,
    onPress,
    onFavoritePress,
}) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />

                {isFeatured && (
                    <View style={styles.featuredBadge}>
                        <Text style={styles.featuredText}>Featured</Text>
                    </View>
                )}

                <TouchableOpacity
                    style={styles.actionButton}
                    activeOpacity={0.8}
                    onPress={onFavoritePress}
                >
                    {isFavorite ? (
                        <Ionicons name="heart" size={16} color="#E53E3E" />
                    ) : (
                        <Feather name="bookmark" size={14} color={Colors.white} />
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.info}>
                <View style={styles.titleRow}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    {condition && (
                        <View style={styles.conditionTag}>
                            <Text style={styles.conditionText}>{condition}</Text>
                        </View>
                    )}
                </View>

                <Text style={styles.price}>{price}</Text>

                <View style={styles.footerRow}>
                    <Text style={styles.location} numberOfLines={1}>
                        {location}
                    </Text>
                    {isVerified ? (
                        <Text style={styles.verifiedText}>Verified</Text>
                    ) : (
                        date && <Text style={styles.dateText}>{date}</Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 14,
    },
    imageContainer: {
        width: '100%',
        height: 145,
        backgroundColor: Colors.gray100,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
    featuredText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#333333',
    },
    actionButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    info: {
        padding: 10,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
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
    price: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.primary,
        marginVertical: 4,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        fontSize: 10,
        color: Colors.gray500,
        flex: 1,
    },
    dateText: {
        fontSize: 10,
        color: Colors.gray500,
        marginLeft: 4,
    },
    verifiedText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#10B981',
        marginLeft: 4,
    },
});
