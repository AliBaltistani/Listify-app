import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { ListifyLogo } from './ListifyLogo';

interface AuthHeaderBannerProps {
    title: string;
    subtitle: string;
    onBackPress?: () => void;
    showBack?: boolean;
    children: React.ReactNode;
}

export const AuthHeaderBanner: React.FC<AuthHeaderBannerProps> = ({
    title,
    subtitle,
    onBackPress,
    showBack = false,
    children,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBackground}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.topRow}>
                        {showBack ? (
                            <TouchableOpacity style={styles.backButton} onPress={onBackPress} activeOpacity={0.8}>
                                <Ionicons name="chevron-back" size={20} color={Colors.primary} />
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.placeholder} />
                        )}
                    </View>

                    <View style={styles.headerContent}>
                        <ListifyLogo variant="white" size="medium" />
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.subtitleText}>{subtitle}</Text>
                    </View>
                </SafeAreaView>
            </View>

            <View style={styles.cardContainer}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerBackground: {
        backgroundColor: Colors.primary,
        paddingBottom: 45,
        paddingTop: 10,
    },
    safeArea: {
        paddingHorizontal: 20,
    },
    topRow: {
        height: 44,
        justifyContent: 'center',
    },
    backButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    placeholder: {
        height: 38,
    },
    headerContent: {
        alignItems: 'center',
        marginTop: 5,
        paddingHorizontal: 15,
    },
    titleText: {
        fontSize: 28,
        fontWeight: '800',
        color: Colors.white,
        marginTop: 14,
        marginBottom: 6,
        letterSpacing: -0.3,
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: 13,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        lineHeight: 18,
        maxWidth: 280,
    },
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        paddingHorizontal: 22,
        paddingTop: 24,
    },
});
