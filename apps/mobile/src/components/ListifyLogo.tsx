import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface ListifyLogoProps {
    variant?: 'white' | 'orange' | 'dark';
    size?: 'small' | 'medium' | 'large';
}

export const ListifyLogo: React.FC<ListifyLogoProps> = ({
    variant = 'white',
    size = 'medium',
}) => {
    const isWhite = variant === 'white';
    const isOrange = variant === 'orange';

    const textColor = isWhite ? '#FFFFFF' : isOrange ? Colors.primary : Colors.dark;
    const tagBg = isWhite ? '#FFFFFF' : isOrange ? Colors.primary : Colors.dark;
    const tagIconColor = isWhite ? Colors.primary : '#FFFFFF';

    const scale = size === 'small' ? 0.75 : size === 'large' ? 1.3 : 1;

    return (
        <View style={[styles.container, { transform: [{ scale }] }]}>
            <View style={styles.logoRow}>
                <View style={[styles.tagIconWrapper, { backgroundColor: tagBg }]}>
                    <FontAwesome5 name="tag" size={14} color={tagIconColor} style={styles.tagIcon} />
                </View>
                <View style={styles.textStack}>
                    <Text style={[styles.brandName, { color: textColor }]}>Listify</Text>
                    <Text style={[styles.appName, { color: textColor }]}>app</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagIconWrapper: {
        width: 28,
        height: 28,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
        transform: [{ rotate: '-15deg' }],
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },
    tagIcon: {
        transform: [{ rotate: '90deg' }],
    },
    textStack: {
        justifyContent: 'center',
    },
    brandName: {
        fontSize: 28,
        fontWeight: '800',
        letterSpacing: -0.5,
        lineHeight: 30,
        fontFamily: 'System',
    },
    appName: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: -0.2,
        marginTop: -4,
        alignSelf: 'flex-end',
        fontFamily: 'System',
    },
});
