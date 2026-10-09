// ============================================================
// Listify — Reusable Avatar Component
// ============================================================
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/tokens';

interface AvatarProps {
    uri?: string | null;
    size?: number;
    style?: any;
}

const Avatar: React.FC<AvatarProps> = ({ uri, size = 48, style }) => {
    const borderRadiusVal = size / 2;

    if (uri) {
        return (
            <Image
                source={{ uri }}
                style={[
                    { width: size, height: size, borderRadius: borderRadiusVal },
                    style,
                ]}
                resizeMode="cover"
            />
        );
    }

    return (
        <View
            style={[
                styles.placeholder,
                { width: size, height: size, borderRadius: borderRadiusVal },
                style,
            ]}
        >
            <Ionicons name="person" size={size * 0.5} color={colors.textMuted} />
        </View>
    );
};

const styles = StyleSheet.create({
    placeholder: {
        backgroundColor: colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default React.memo(Avatar);
