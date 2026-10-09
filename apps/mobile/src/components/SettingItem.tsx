import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

interface SettingItemProps {
    iconName: keyof typeof Feather.glyphMap;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    isDestructive?: boolean;
}

export const SettingItem: React.FC<SettingItemProps> = ({
    iconName,
    title,
    subtitle,
    onPress,
    isDestructive,
}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <View
                style={[
                    styles.iconCircle,
                    isDestructive && styles.iconCircleDestructive,
                ]}
            >
                <Feather
                    name={iconName}
                    size={18}
                    color={isDestructive ? '#E53E3E' : Colors.dark}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.title, isDestructive && styles.titleDestructive]}>
                    {title}
                </Text>
                {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    iconCircleDestructive: {
        backgroundColor: '#FEE2E2',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.dark,
    },
    titleDestructive: {
        color: '#E53E3E',
    },
    subtitle: {
        fontSize: 12,
        color: Colors.gray500,
        marginTop: 2,
    },
});
