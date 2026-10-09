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
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { CustomButton } from '../components/CustomButton';

interface PostAdStep3ScreenProps {
    onBackPress?: () => void;
    onEditAdDetails?: () => void;
    onPublishSuccess?: () => void;
}

export const PostAdStep3Screen: React.FC<PostAdStep3ScreenProps> = ({
    onBackPress,
    onEditAdDetails,
    onPublishSuccess,
}) => {
    const [agreedToTerms, setAgreedToTerms] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Review & Publish</Text>
                <View style={{ width: 36 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Ad Preview Card Header */}
                <View style={styles.previewCardHeaderRow}>
                    <Text style={styles.sectionTitle}>AD PREVIEW</Text>
                    <TouchableOpacity onPress={onEditAdDetails} activeOpacity={0.7}>
                        <Text style={styles.editText}>Edit Details</Text>
                    </TouchableOpacity>
                </View>

                {/* Ad Preview Box */}
                <View style={styles.previewBox}>
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop',
                        }}
                        style={styles.previewCoverImage}
                    />
                    <View style={styles.photoCountBadge}>
                        <Feather name="camera" size={10} color={Colors.white} style={{ marginRight: 4 }} />
                        <Text style={styles.photoCountText}>3 Photos</Text>
                    </View>

                    <View style={styles.previewBody}>
                        <Text style={styles.previewPrice}>225,000 PKR</Text>
                        <Text style={styles.previewTitle}>
                            iPhone 14 Pro Max 256GB Space Black - Mint Condition
                        </Text>

                        <View style={styles.locRow}>
                            <Feather name="map-pin" size={12} color={Colors.gray400} style={{ marginRight: 4 }} />
                            <Text style={styles.locText}>Gulberg III, Lahore • Just now</Text>
                        </View>

                        <View style={styles.specsChipsRow}>
                            <View style={styles.specChip}>
                                <Text style={styles.specChipText}>8 GB RAM</Text>
                            </View>
                            <View style={styles.specChip}>
                                <Text style={styles.specChipText}>256 GB Storage</Text>
                            </View>
                            <View style={styles.specChip}>
                                <Text style={styles.specChipText}>PTA Official</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Seller Info Confirmation */}
                <View style={styles.sellerCard}>
                    <View style={styles.sellerCardHeader}>
                        <Text style={styles.cardHeaderTitle}>Seller Contact Info</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.editContactText}>Edit Info</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sellerRow}>
                        <View style={styles.avatarCircle}>
                            <Image
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
                                }}
                                style={styles.avatarImg}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.sellerName}>Jhon Abraham</Text>
                            <Text style={styles.sellerPhone}>(320) 555-0104 • Verified</Text>
                        </View>
                        <Ionicons name="checkmark-circle" size={20} color="#0D9488" />
                    </View>
                </View>

                {/* Safety & Policy Notice */}
                <TouchableOpacity
                    style={styles.termsRow}
                    activeOpacity={0.8}
                    onPress={() => setAgreedToTerms(!agreedToTerms)}
                >
                    <View style={[styles.checkbox, agreedToTerms && styles.checkboxChecked]}>
                        {agreedToTerms && <Ionicons name="checkmark" size={14} color={Colors.white} />}
                    </View>
                    <Text style={styles.termsText}>
                        I confirm that this listing complies with Listify's <Text style={styles.boldTerms}>Posting Rules</Text> & <Text style={styles.boldTerms}>Safety Policy</Text>.
                    </Text>
                </TouchableOpacity>

                {/* Publish Action Button */}
                <View style={styles.btnWrapper}>
                    <CustomButton
                        title="🚀 Publish Ad Now"
                        onPress={() => onPublishSuccess && onPublishSuccess()}
                    />
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
        paddingBottom: 40,
    },
    previewCardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.gray400,
        letterSpacing: 0.5,
    },
    editText: {
        fontSize: 12,
        fontWeight: '800',
        color: Colors.primary,
    },
    previewBox: {
        backgroundColor: Colors.white,
        borderRadius: 18,
        overflow: 'hidden',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
    },
    previewCoverImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    photoCountBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    photoCountText: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.white,
    },
    previewBody: {
        padding: 14,
    },
    previewPrice: {
        fontSize: 20,
        fontWeight: '900',
        color: Colors.primary,
        marginBottom: 4,
    },
    previewTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: Colors.dark,
        marginBottom: 8,
    },
    locRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    locText: {
        fontSize: 11,
        color: Colors.gray500,
    },
    specsChipsRow: {
        flexDirection: 'row',
        gap: 6,
    },
    specChip: {
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    specChipText: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.gray700,
    },
    sellerCard: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    sellerCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardHeaderTitle: {
        fontSize: 13,
        fontWeight: '800',
        color: Colors.dark,
    },
    editContactText: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.primary,
    },
    sellerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 10,
    },
    avatarImg: {
        width: '100%',
        height: '100%',
    },
    sellerName: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.dark,
    },
    sellerPhone: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 1,
    },
    termsRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: Colors.gray400,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 2,
    },
    checkboxChecked: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    termsText: {
        flex: 1,
        fontSize: 11,
        color: Colors.gray600,
        lineHeight: 16,
    },
    boldTerms: {
        fontWeight: '700',
        color: Colors.dark,
    },
    btnWrapper: {
        marginTop: 6,
    },
});
