import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { CustomButton } from '../components/CustomButton';

interface PostAdSuccessScreenProps {
    onViewAdPress?: () => void;
    onHomePress?: () => void;
}

export const PostAdSuccessScreen: React.FC<PostAdSuccessScreenProps> = ({
    onViewAdPress,
    onHomePress,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Celebration Graphic */}
                <View style={styles.circleGraphicOuter}>
                    <View style={styles.circleGraphicInner}>
                        <Ionicons name="checkmark-sharp" size={48} color={Colors.white} />
                    </View>
                </View>

                {/* Success Header & Subtitle */}
                <Text style={styles.title}>Ad Published Successfully! 🎉</Text>
                <Text style={styles.subtitle}>
                    Your ad <Text style={styles.boldItem}>"iPhone 14 Pro Max 256GB"</Text> is now live and visible to buyers across Listify.
                </Text>

                {/* Boost Tip Banner */}
                <View style={styles.boostBanner}>
                    <View style={styles.boostIconCircle}>
                        <Feather name="zap" size={20} color="#D97706" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.boostTitle}>Boost Your Ad Visibility</Text>
                        <Text style={styles.boostSubtext}>
                            Featured ads get up to <Text style={styles.boldBoost}>5x more views</Text> and sell 3x faster on average.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.promoteBtn} activeOpacity={0.8}>
                        <Text style={styles.promoteBtnText}>Boost Ad</Text>
                    </TouchableOpacity>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonGroup}>
                    <CustomButton title="View Your Live Ad" onPress={() => onViewAdPress && onViewAdPress()} />
                    <TouchableOpacity
                        style={styles.outlineBtn}
                        activeOpacity={0.8}
                        onPress={onHomePress}
                    >
                        <Text style={styles.outlineBtnText}>Back to Homepage</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 28,
        alignItems: 'center',
    },
    circleGraphicOuter: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: '#FFEAD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    circleGraphicInner: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
        elevation: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: '900',
        color: Colors.dark,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 13,
        color: Colors.gray600,
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 28,
    },
    boldItem: {
        fontWeight: '800',
        color: Colors.dark,
    },
    boostBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FEF3C7',
        borderRadius: 18,
        padding: 14,
        marginBottom: 32,
        borderWidth: 1,
        borderColor: '#FDE68A',
        gap: 12,
    },
    boostIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boostTitle: {
        fontSize: 13,
        fontWeight: '800',
        color: '#92400E',
    },
    boostSubtext: {
        fontSize: 10,
        color: '#B45309',
        marginTop: 2,
    },
    boldBoost: {
        fontWeight: '800',
        color: Colors.dark,
    },
    promoteBtn: {
        backgroundColor: '#D97706',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 14,
    },
    promoteBtnText: {
        fontSize: 11,
        fontWeight: '800',
        color: Colors.white,
    },
    buttonGroup: {
        width: '100%',
        gap: 12,
    },
    outlineBtn: {
        height: 48,
        borderRadius: 24,
        borderWidth: 1.5,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    outlineBtnText: {
        fontSize: 14,
        fontWeight: '800',
        color: Colors.dark,
    },
});
