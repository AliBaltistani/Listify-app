import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface SocialButtonsProps {
    onApplePress?: () => void;
    onGooglePress?: () => void;
}

export const SocialButtons: React.FC<SocialButtonsProps> = ({
    onApplePress,
    onGooglePress,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.socialButton}
                onPress={onApplePress}
                activeOpacity={0.8}
            >
                <FontAwesome5 name="apple" size={22} color={Colors.white} style={styles.icon} />
                <Text style={styles.buttonText}>Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.socialButton}
                onPress={onGooglePress}
                activeOpacity={0.8}
            >
                <View style={styles.googleIconCircle}>
                    <Text style={styles.googleG}>G</Text>
                </View>
                <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        marginVertical: 14,
    },
    socialButton: {
        flex: 1,
        height: 52,
        backgroundColor: '#17171C',
        borderRadius: 26,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        marginRight: 10,
    },
    googleIconCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    googleG: {
        color: '#4285F4',
        fontWeight: '900',
        fontSize: 15,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: '700',
    },
});
