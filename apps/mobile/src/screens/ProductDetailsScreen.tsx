import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { ListifyLogo } from '../components/ListifyLogo';

interface ProductDetailsScreenProps {
    onBackPress?: () => void;
    onChatWithSeller?: () => void;
    onSellerProfilePress?: () => void;
    onReportPress?: () => void;
}

export const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
    onBackPress,
    onChatWithSeller,
    onSellerProfilePress,
    onReportPress,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Header */}
            <View style={styles.headerRow}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={onBackPress} style={styles.backBtn} activeOpacity={0.7}>
                        <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                    </TouchableOpacity>
                    <ListifyLogo variant="orange" size="medium" />
                </View>

                <View style={styles.headerIconsRow}>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Feather name="search" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Feather name="bell" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Main Product Image Carousel */}
                <View style={styles.imageGalleryContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop' }}
                        style={styles.mainImage}
                    />
                    <View style={styles.galleryOverlayButtons}>
                        <TouchableOpacity style={styles.overlayCircleBtn} activeOpacity={0.8}>
                            <Feather name="bookmark" size={16} color={Colors.dark} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.overlayCircleBtn} activeOpacity={0.8}>
                            <Feather name="share-2" size={16} color={Colors.dark} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.carouselDots}>
                        <View style={[styles.dot, styles.dotActive]} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                </View>

                {/* Title Header Section */}
                <View style={styles.titleSection}>
                    <View style={styles.titlePriceRow}>
                        <Text style={styles.headingTitle}>APPLE IPAD 79C</Text>
                        <Text style={styles.headingPrice}>2000pkr</Text>
                    </View>
                    <Text style={styles.metaSubtext}>Condition: Used – Excellent</Text>
                    <Text style={styles.metaSubtext}>Location: Skardu, Gilgit-Baltistan</Text>

                    {/* Accordions */}
                    <TouchableOpacity style={styles.accordionRow} activeOpacity={0.7}>
                        <Text style={styles.accordionTitle}>CONTACT & COMMUNICATION</Text>
                        <Feather name="chevron-down" size={16} color={Colors.gray600} />
                    </TouchableOpacity>
                    <Text style={styles.accordionSubtext}>
                        Have questions about this item? Contact the seller directly through secure in-app messaging or call the seller.
                    </Text>

                    <TouchableOpacity style={styles.accordionRow} activeOpacity={0.7}>
                        <Text style={styles.accordionTitle}>Chat with Seller | Call Seller</Text>
                        <Feather name="chevron-down" size={16} color={Colors.gray600} />
                    </TouchableOpacity>
                </View>

                {/* Main Product Card */}
                <View style={styles.cardBox}>
                    <Text style={styles.categorySubtext}>TABLET / APPLE</Text>

                    <View style={styles.cardHeaderRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.productMainTitle}>APPLE IPAD 79C (10th Gen)</Text>
                            <Text style={styles.productSpecSub}>64GB Wi-Fi • Gorgeous Blue Finish</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceBig}>20,000 <Text style={styles.pkrSmall}>PKR</Text></Text>
                            <View style={styles.negotiableBadge}>
                                <Text style={styles.negotiableText}>Slightly Negotiable</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.metaFooterRow}>
                        <Ionicons name="location-outline" size={14} color={Colors.gray500} />
                        <Text style={styles.locationText}>Skardu, Gilgit-Baltistan</Text>
                        <Text style={styles.viewsText}>3 hours ago • 👁 142 views</Text>
                    </View>
                </View>

                {/* Key Highlights & Specs */}
                <View style={styles.cardBox}>
                    <Text style={styles.sectionHeaderTitle}>KEY HIGHLIGHTS & SPECS</Text>
                    <View style={styles.pillsWrap}>
                        <View style={styles.specPill}>
                            <Text style={styles.specPillLabel}>Storage: <Text style={styles.specPillVal}>64 GB</Text></Text>
                        </View>
                        <View style={styles.specPill}>
                            <Text style={styles.specPillLabel}>Connectivity: <Text style={styles.specPillVal}>Wi-Fi Only</Text></Text>
                        </View>
                        <View style={styles.specPill}>
                            <Text style={styles.specPillLabel}>Color: <Text style={{ color: '#2563EB', fontWeight: '700' }}>● Blue</Text></Text>
                        </View>
                        <View style={[styles.specPill, { borderColor: '#10B981', backgroundColor: '#ECFDF5' }]}>
                            <Text style={{ fontSize: 11, fontWeight: '700', color: '#059669' }}>Battery: 98% Health</Text>
                        </View>
                        <View style={styles.specPill}>
                            <Text style={styles.specPillLabel}>In Box: <Text style={styles.specPillVal}>Original 20W + Cable</Text></Text>
                        </View>
                        <View style={[styles.specPill, { borderColor: '#A855F7', backgroundColor: '#F3E8FF' }]}>
                            <Text style={{ fontSize: 11, fontWeight: '700', color: '#7E22CE' }}>PTA Official / Local</Text>
                        </View>
                    </View>
                </View>

                {/* Seller Profile Card */}
                <TouchableOpacity style={styles.cardBox} activeOpacity={0.9} onPress={onSellerProfilePress}>
                    <View style={styles.sellerHeaderRow}>
                        <View style={styles.sellerAvatarCircle}>
                            <Text style={styles.sellerInitials}>MB</Text>
                            <View style={styles.verifiedCheckDot}>
                                <Ionicons name="checkmark-sharp" size={10} color={Colors.white} />
                            </View>
                        </View>

                        <View style={styles.sellerInfoCol}>
                            <View style={styles.sellerNameRow}>
                                <Text style={styles.sellerName}>Muhammad Bilal</Text>
                                <View style={styles.verifiedBadge}>
                                    <Text style={styles.verifiedBadgeText}>VERIFIED</Text>
                                </View>
                            </View>
                            <Text style={styles.sellerSubtext}>★ 4.9 (48 ratings) • Member since 2022</Text>
                        </View>

                        <TouchableOpacity style={styles.profileLink} onPress={onSellerProfilePress}>
                            <Text style={styles.profileLinkText}>Profile</Text>
                            <Feather name="chevron-right" size={14} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sellerStatsRow}>
                        <View style={styles.statBox}>
                            <Feather name="check-circle" size={14} color="#10B981" />
                            <Text style={styles.statLabel}>CNIC Checked</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statVal}>&lt; 15 mins</Text>
                            <Text style={styles.statSub}>Response</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={[styles.statVal, { color: Colors.primary }]}>42 items sold</Text>
                            <Text style={styles.statSub}>Sales</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Item Location */}
                <View style={styles.cardBox}>
                    <Text style={styles.sectionHeaderTitle}>ITEM LOCATION</Text>
                    <View style={styles.locationHeaderRow}>
                        <View>
                            <Text style={styles.locName}>Skardu, Gilgit-Baltistan</Text>
                            <Text style={styles.locSub}>College Road Market Area • ~3.2 km away</Text>
                        </View>
                        <TouchableOpacity style={styles.directionsBtn} activeOpacity={0.8}>
                            <Text style={styles.directionsBtnText}>Get Directions</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Map Preview */}
                    <View style={styles.mapPreviewCard}>
                        <View style={styles.mapPinContainer}>
                            <View style={styles.pinCircle}>
                                <Ionicons name="location" size={20} color={Colors.white} />
                            </View>
                            <View style={styles.pinTag}>
                                <Text style={styles.pinTagText}>Approximate Location</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Description Section */}
                <View style={styles.cardBox}>
                    <Text style={styles.sectionHeaderTitle}>DESCRIPTION</Text>
                    <Text style={styles.descriptionText}>
                        iPad in pristine condition, used lightly for study and entertainment. Screen protected with high-grade matte tempered glass since unboxing.
                        {'\n\n'}
                        Zero scratches, zero scuffs, and no screen burns. TrueTone and TouchID work seamlessly. Battery health stands at 98% with excellent multi-day standby performance.
                    </Text>

                    <Text style={styles.boldSectionTitle}>Included in Deal:</Text>
                    <View style={styles.checkRow}>
                        <Feather name="check" size={14} color="#10B981" />
                        <Text style={styles.checkText}>Original Apple iPad Retail Box (Matching Serial)</Text>
                    </View>
                    <View style={styles.checkRow}>
                        <Feather name="check" size={14} color="#10B981" />
                        <Text style={styles.checkText}>Original Apple 20W USB-C Power Adapter</Text>
                    </View>
                    <View style={styles.checkRow}>
                        <Feather name="check" size={14} color="#10B981" />
                        <Text style={styles.checkText}>Braided USB-C Charging Cable (1m)</Text>
                    </View>
                    <View style={styles.checkRow}>
                        <Feather name="check" size={14} color="#10B981" />
                        <Text style={styles.checkText}>Pre-applied 9H Tempered Screen Protector + Folio Case</Text>
                    </View>

                    <Text style={styles.italicReason}>
                        Reason for selling: Upgrading to iPad Pro M2. Hand-to-hand deal preferred in Skardu center.
                    </Text>
                </View>

                {/* Listify Safe Trading Guarantee */}
                <View style={styles.safetyCard}>
                    <View style={styles.safetyHeader}>
                        <View style={styles.shieldIcon}>
                            <MaterialCommunityIcons name="shield-check" size={20} color={Colors.white} />
                        </View>
                        <Text style={styles.safetyTitle}>LISTIFY SAFE TRADING GUARANTEE</Text>
                    </View>
                    <Text style={styles.safetyText}>
                        Always inspect device and check Apple iCloud activation lock before paying. Meet in safe, public day-lit locations. Never send advance booking deposits.
                    </Text>
                    <View style={styles.safetyActionsRow}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.safetyLinkText}>Read Safety Tips</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={onReportPress}>
                            <Text style={styles.reportText}>🚩 Report this ad</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Sticky Bottom Action Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={styles.chatButton}
                    activeOpacity={0.85}
                    onPress={onChatWithSeller}
                >
                    <Text style={styles.chatButtonText}>Chat with Seller</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.msgIconButton} activeOpacity={0.85} onPress={onChatWithSeller}>
                    <Ionicons name="chatbubble-ellipses-outline" size={22} color={Colors.white} />
                </TouchableOpacity>
            </View>
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
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerIconsRow: {
        flexDirection: 'row',
        gap: 10,
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
        paddingBottom: 90,
    },
    imageGalleryContainer: {
        height: 280,
        backgroundColor: '#E0E7FF',
        position: 'relative',
    },
    mainImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    galleryOverlayButtons: {
        position: 'absolute',
        top: 14,
        right: 14,
        gap: 10,
    },
    overlayCircleBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselDots: {
        position: 'absolute',
        bottom: 12,
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 6,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    dotActive: {
        width: 14,
        backgroundColor: Colors.primary,
    },
    titleSection: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: Colors.white,
    },
    titlePriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headingTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.dark,
        letterSpacing: 0.5,
    },
    headingPrice: {
        fontSize: 20,
        fontWeight: '900',
        color: Colors.primary,
    },
    metaSubtext: {
        fontSize: 13,
        color: Colors.gray600,
        marginTop: 4,
    },
    accordionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    accordionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
    },
    accordionSubtext: {
        fontSize: 12,
        color: Colors.gray500,
        marginTop: 4,
        lineHeight: 17,
    },
    cardBox: {
        backgroundColor: Colors.white,
        borderRadius: 18,
        marginHorizontal: 16,
        marginTop: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 5,
        elevation: 2,
    },
    categorySubtext: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.gray400,
        letterSpacing: 0.5,
        marginBottom: 4,
    },
    cardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productMainTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: Colors.dark,
    },
    productSpecSub: {
        fontSize: 12,
        color: Colors.gray500,
        marginTop: 2,
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    priceBig: {
        fontSize: 18,
        fontWeight: '900',
        color: Colors.primary,
    },
    pkrSmall: {
        fontSize: 11,
        fontWeight: '700',
    },
    negotiableBadge: {
        backgroundColor: '#ECFDF5',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        marginTop: 4,
    },
    negotiableText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#059669',
    },
    metaFooterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    locationText: {
        fontSize: 12,
        color: Colors.gray600,
        marginLeft: 4,
        flex: 1,
    },
    viewsText: {
        fontSize: 11,
        color: Colors.gray400,
    },
    sectionHeaderTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.gray400,
        letterSpacing: 0.5,
        marginBottom: 10,
    },
    pillsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    specPill: {
        backgroundColor: '#F3F4F6',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 14,
    },
    specPillLabel: {
        fontSize: 11,
        color: Colors.gray600,
    },
    specPillVal: {
        fontWeight: '700',
        color: Colors.dark,
    },
    sellerHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sellerAvatarCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sellerInitials: {
        fontSize: 16,
        fontWeight: '800',
        color: Colors.white,
    },
    verifiedCheckDot: {
        position: 'absolute',
        bottom: -1,
        right: -1,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#10B981',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sellerInfoCol: {
        flex: 1,
        marginLeft: 12,
    },
    sellerNameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    sellerName: {
        fontSize: 15,
        fontWeight: '800',
        color: Colors.dark,
    },
    verifiedBadge: {
        backgroundColor: '#ECFDF5',
        borderWidth: 1,
        borderColor: '#A7F3D0',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    verifiedBadgeText: {
        fontSize: 9,
        fontWeight: '800',
        color: '#059669',
    },
    sellerSubtext: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 2,
    },
    profileLink: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileLinkText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primary,
    },
    sellerStatsRow: {
        flexDirection: 'row',
        marginTop: 14,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        gap: 8,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        borderRadius: 10,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.dark,
        marginTop: 4,
    },
    statVal: {
        fontSize: 11,
        fontWeight: '800',
        color: Colors.dark,
    },
    statSub: {
        fontSize: 9,
        color: Colors.gray500,
    },
    locationHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    locName: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.dark,
    },
    locSub: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 2,
    },
    directionsBtn: {
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 14,
    },
    directionsBtnText: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.primary,
    },
    mapPreviewCard: {
        height: 120,
        backgroundColor: '#E2E8F0',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    mapPinContainer: {
        alignItems: 'center',
    },
    pinCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    pinTag: {
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        marginTop: 6,
    },
    pinTagText: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.dark,
    },
    descriptionText: {
        fontSize: 13,
        color: Colors.gray700,
        lineHeight: 19,
        marginBottom: 12,
    },
    boldSectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: Colors.dark,
        marginBottom: 8,
    },
    checkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    checkText: {
        fontSize: 12,
        color: Colors.gray700,
        marginLeft: 6,
    },
    italicReason: {
        fontSize: 11,
        fontStyle: 'italic',
        color: Colors.gray500,
        marginTop: 12,
    },
    safetyCard: {
        backgroundColor: '#FFF9F0',
        borderWidth: 1,
        borderColor: '#FFE8CC',
        borderRadius: 18,
        marginHorizontal: 16,
        marginTop: 12,
        padding: 16,
    },
    safetyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    shieldIcon: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    safetyTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.dark,
        letterSpacing: 0.5,
    },
    safetyText: {
        fontSize: 12,
        color: '#665544',
        lineHeight: 17,
        marginBottom: 12,
    },
    safetyActionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#FFE8CC',
    },
    safetyLinkText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.primary,
    },
    reportText: {
        fontSize: 12,
        color: Colors.gray600,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 76,
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 12,
    },
    chatButton: {
        flex: 1,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
    },
    chatButtonText: {
        fontSize: 15,
        fontWeight: '800',
        color: Colors.white,
    },
    msgIconButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
