// ============================================================
// Listify — Main Tab Navigator (5 tabs)
// ============================================================
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MainTabParamList } from './types';
import { colors } from '../theme/tokens';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import PostAdStack from './PostAdStack';
import MessagesStack from './MessagesStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator<MainTabParamList>();

const PostAdButton: React.FC = () => null; // Placeholder for custom center button

const MainTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

                    switch (route.name) {
                        case 'HomeTab':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'SearchTab':
                            iconName = focused ? 'search' : 'search-outline';
                            break;
                        case 'PostAdTab':
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                            break;
                        case 'MessagesTab':
                            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                            break;
                        case 'ProfileTab':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                    }

                    // Special styling for Post Ad center button
                    if (route.name === 'PostAdTab') {
                        return (
                            <View style={styles.postAdButton}>
                                <Ionicons name="add" size={32} color={colors.white} />
                            </View>
                        );
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchStack}
                options={{ tabBarLabel: 'Search' }}
            />
            <Tab.Screen
                name="PostAdTab"
                component={PostAdStack}
                options={{ tabBarLabel: '' }}
            />
            <Tab.Screen
                name="MessagesTab"
                component={MessagesStack}
                options={{ tabBarLabel: 'Messages' }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{ tabBarLabel: 'Profile' }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 8,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.surfaceBorder,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
    },
    tabBarLabel: {
        fontSize: 10,
        fontWeight: '500',
    },
    postAdButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
});

export default MainTabs;
