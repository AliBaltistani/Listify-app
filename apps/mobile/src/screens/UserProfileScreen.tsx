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
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface UserProfileScreenProps {
    onBackPress?: () => void;
    onEditProfilePress?: () => void;
    onSignOut?: () => void;
}

export const UserProfileScreen: React.FC<UserProfileScreenProps> = ({
    onBackPress,
    onEditProfilePress,
    onSignOut,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Orange Header */}
            <View style={styles.orangeHeader}>
                <TouchableOpacity onPress={onBackPress} activeOpacity={0.8} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={20} color={Colors.white} />
                </TouchableOpacity>

                <View style={styles.avatarSection}>
                    <View style={styles.avatarYellowCircle}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop' }}
                            style={styles.avatarImage}
                        />
                    </View>
                    <Text style={styles.userName}>Jhon Abraham</Text>
                    <Text style={styles.userHandle}>@jhonabraham</Text>

                    {/* Header Quick Action Buttons */}
                    <View style={styles.actionButtonsRow}>
                        <TouchableOpacity style={styles.actionCircleBtn} activeOpacity={0.8}>
                            <Ionicons name="chatbubble-outline" size={18} color={Colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionCircleBtn} activeOpacity={0.8}>
                            <Ionicons name="videocam-outline" size={18} color={Colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionCircleBtn} activeOpacity={0.8} onPress={onEditProfilePress}>
                            <Feather name="edit-2" size={16} color={Colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionCircleBtn} activeOpacity={0.8}>
                            <Feather name="more-horizontal" size={18} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Main Content Card Overlay */}
            <View style={styles.contentCard}>
                <View style={styles.handleBar} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* User Details List */}
                    <View style={styles.infoGroup}>
                        <Text style={styles.infoLabel}>Display Name</Text>
                        <Text style={styles.infoValue}>Jhon Abraham</Text>
                    </View>

                    <View style={styles.infoGroup}>
                        <Text style={styles.infoLabel}>Email Address</Text>
                        <Text style={styles.infoValue}>jhonabraham20@gmail.com</Text>
                    </View>

                    <View style={styles.infoGroup}>
                        <Text style={styles.infoLabel}>Address</Text>
                        <Text style={styles.infoValue}>33 street west subidbazar,sylhet</Text>
                    </View>

                    <View style={styles.infoGroup}>
                        <Text style={styles.infoLabel}>Phone Number</Text>
                        <Text style={styles.infoValue}>(320) 555-0104</Text>
                    </View>

                    {/* My Products Showcase */}
                    <View style={styles.productsHeaderRow}>
                        <Text style={styles.sectionTitle}>My Products</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.productRow}>
                        <View style={styles.productThumbCard}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&auto=format&fit=crop' }}
                                style={styles.productThumbImage}
                            />
                        </View>

                        <View style={styles.productThumbCard}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&auto=format&fit=crop' }}
                                style={styles.productThumbImage}
                            />
                        </View>

                        <View style={styles.productThumbCard}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop' }}
                                style={styles.productThumbImage}
                            />
                            <View style={styles.overlayCount}>
                                <Text style={styles.overlayCountText}>255+</Text>
                            </View>
                        </View>
                    </View>

                    {/* Sign Out Link */}
                    <TouchableOpacity style={styles.signOutRow} onPress={onSignOut} activeOpacity={0.7}>
                        <Text style={styles.signOutText}>Sign Out</Text>
                        <Feather name="log-out" size={16} color="#E53E3E" style={styles.signOutIcon} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    orangeHeader: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 30,
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarSection: {
        alignItems: 'center',
        marginTop: 8,
    },
    avatarYellowCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F59E0B',
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 47,
    },
    userName: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.white,
        marginTop: 10,
    },
    userHandle: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 2,
    },
    actionButtonsRow: {
        flexDirection: 'row',
        gap: 14,
        marginTop: 16,
    },
    actionCircleBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentCard: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 12,
        overflow: 'hidden',
    },
    handleBar: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#E5E7EB',
        alignSelf: 'center',
        marginBottom: 16,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 36,
    },
    infoGroup: {
        marginBottom: 16,
    },
    infoLabel: {
        fontSize: 12,
        color: Colors.gray400,
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 16,
        fontWeight: '800',
        color: Colors.dark,
    },
    productsHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: Colors.dark,
    },
    viewAllText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#0D9488',
    },
    productRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    productThumbCard: {
        flex: 1,
        height: 100,
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: Colors.gray100,
    },
    productThumbImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlayCount: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayCountText: {
        fontSize: 16,
        fontWeight: '900',
        color: Colors.white,
    },
    signOutRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    signOutText: {
        fontSize: 15,
        fontWeight: '800',
        color: '#E53E3E',
    },
    signOutIcon: {
        marginLeft: 8,
    },
});
