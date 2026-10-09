import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../theme/colors';
import { BottomTabBar, TabName } from '../components/BottomTabBar';
import { Feather } from '@expo/vector-icons';

interface TabScreenProps {
    onTabChange?: (tab: TabName) => void;
}

export const ChatsScreen: React.FC<TabScreenProps> = ({ onTabChange }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconCircle}>
                    <Feather name="message-square" size={32} color={Colors.primary} />
                </View>
                <Text style={styles.title}>Messages & Chats</Text>
                <Text style={styles.subtitle}>Direct buyer & seller messaging will appear here.</Text>
            </View>
            <BottomTabBar activeTab="chats" onTabPress={(tab) => onTabChange && onTabChange(tab)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    iconCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.dark,
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 13,
        color: Colors.gray500,
        textAlign: 'center',
    },
});
