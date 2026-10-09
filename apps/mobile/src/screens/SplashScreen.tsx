import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/colors';
import { ListifyLogo } from '../components/ListifyLogo';

interface SplashScreenProps {
    onContinue?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onContinue }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.95}
            onPress={onContinue}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <ListifyLogo variant="white" size="large" />
                    <Text style={styles.subtitle}>Sell & Buy Online Marketplace</Text>
                </View>
                <Text style={styles.tapToContinue}>Tap anywhere to start</Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.white,
        marginTop: 24,
        textAlign: 'center',
        letterSpacing: -0.2,
    },
    tapToContinue: {
        position: 'absolute',
        bottom: 40,
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
