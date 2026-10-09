// ============================================================
// Listify — Reusable ListingCard Component
// ============================================================
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, borderRadius, spacing, shadows } from '../../theme/tokens';

type CardVariant = 'grid' | 'list' | 'featured';

interface ListingCardProps {
    title: string;
    price: string;
    condition?: string;
    location?: string;
    date?: string;
    thumbnail?: string;
    isFeatured?: boolean;
    isFavorited?: boolean;
    variant?: CardVariant;
    onPress?: () => void;
    onFavorite?: () => void;
    style?: ViewStyle;
}

const ListingCard: React.FC<ListingCardProps> = ({
    title,
    price,
    condition,
    location,
    date,
    thumbnail,
    isFeatured = false,
    isFavorited = false,
    variant = 'grid',
    onPress,
    onFavorite,
    style,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                variant === 'list' && styles.containerList,
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            {/* Image */}
            <View style={[styles.imageWrapper, variant === 'list' && styles.imageWrapperList]}>
                {thumbnail ? (
                    <Image
                        source={{ uri: thumbnail }}
                        style={[styles.image, variant === 'list' && styles.imageList]}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={[styles.imagePlaceholder, variant === 'list' && styles.imageList]}>
                        <Ionicons name="image-outline" size={40} color={colors.textMuted} />
                    </View>
                )}

                {/* Favorite Icon */}
                {onFavorite && (
                    <TouchableOpacity style={styles.favoriteButton} onPress={onFavorite}>
                        <Ionicons
                            name={isFavorited ? 'heart' : 'heart-outline'}
                            size={20}
                            color={isFavorited ? '#EF4444' : colors.white}
                        />
                    </TouchableOpacity>
                )}

                {/* Featured Badge */}
                {isFeatured && (
                    <View style={styles.featuredBadge}>
                        <Text style={styles.featuredText}>Featured</Text>
                    </View>
                )}
            </View>

            {/* Info */}
            <View style={[styles.info, variant === 'list' && styles.infoList]}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.price}>{price}</Text>

                {condition && (
                    <View style={styles.conditionBadge}>
                        <Text style={styles.conditionText}>{condition}</Text>
                    </View>
                )}

                {(location || date) && (
                    <View style={styles.meta}>
                        {location && (
                            <Text style={styles.metaText} numberOfLines={1}>{location}</Text>
                        )}
                        {date && <Text style={styles.metaText}>{date}</Text>}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.md,
        overflow: 'hidden',
    },
    containerList: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.surfaceBorder,
        ...shadows.sm,
    },
    imageWrapper: {
        position: 'relative',
    },
    imageWrapperList: {
        width: 120,
    },
    image: {
        width: '100%',
        height: 155,
        borderRadius: 7,
    },
    imageList: {
        height: '100%',
        borderRadius: 0,
    },
    imagePlaceholder: {
        width: '100%',
        height: 155,
        borderRadius: 7,
        backgroundColor: colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
    },
    favoriteButton: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    featuredBadge: {
        position: 'absolute',
        bottom: 6,
        left: 6,
        backgroundColor: colors.featured,
        borderRadius: borderRadius.sm,
        paddingVertical: 3,
        paddingHorizontal: 6,
    },
    featuredText: {
        color: colors.black,
        fontSize: 10,
        fontWeight: '700',
    },
    info: {
        paddingTop: spacing.xs,
    },
    infoList: {
        flex: 1,
        padding: spacing.md,
        justifyContent: 'center',
    },
    title: {
        color: colors.textPrimary,
        fontSize: typography.caption.fontSize,
        marginBottom: 3,
    },
    price: {
        color: colors.textPrimary,
        fontSize: typography.body.fontSize,
        fontWeight: '700',
        marginBottom: 4,
    },
    conditionBadge: {
        alignSelf: 'flex-start',
        backgroundColor: colors.gray100,
        borderRadius: 3,
        paddingVertical: 2,
        paddingHorizontal: 8,
        marginBottom: 4,
    },
    conditionText: {
        color: colors.black,
        fontSize: 11,
        fontWeight: '700',
    },
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    metaText: {
        color: colors.textTertiary,
        fontSize: 10,
    },
});

export default React.memo(ListingCard);
