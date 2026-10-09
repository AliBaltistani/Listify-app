import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Colors, Shadows } from '../theme/colors';

export type TabName = 'home' | 'chats' | 'store' | 'myads' | 'account';

interface BottomTabBarProps {
    activeTab: TabName;
    onTabPress: (tab: TabName) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
    activeTab,
    onTabPress,
}) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.barContainer}>
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => onTabPress('home')}
                    activeOpacity={0.8}
                >
                    <Feather
                        name="home"
                        size={22}
                        color={activeTab === 'home' ? Colors.primary : Colors.gray400}
                    />
                    <Text
                        style={[
                            styles.tabLabel,
                            { color: activeTab === 'home' ? Colors.primary : Colors.gray500 },
                        ]}
                    >
                        HOME
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => onTabPress('chats')}
                    activeOpacity={0.8}
                >
                    <Feather
                        name="message-square"
                        size={22}
                        color={activeTab === 'chats' ? Colors.primary : Colors.gray400}
                    />
                    <Text
                        style={[
                            styles.tabLabel,
                            { color: activeTab === 'chats' ? Colors.primary : Colors.gray500 },
                        ]}
                    >
                        CHATS
                    </Text>
                </TouchableOpacity>

                <View style={styles.fabSpace}>
                    <TouchableOpacity
                        style={styles.fabButton}
                        onPress={() => onTabPress('store')}
                        activeOpacity={0.9}
                    >
                        <FontAwesome5 name="store" size={20} color={Colors.white} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => onTabPress('myads')}
                    activeOpacity={0.8}
                >
                    <Feather
                        name="heart"
                        size={22}
                        color={activeTab === 'myads' ? Colors.primary : Colors.gray400}
                    />
                    <Text
                        style={[
                            styles.tabLabel,
                            { color: activeTab === 'myads' ? Colors.primary : Colors.gray500 },
                        ]}
                    >
                        MY ADS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => onTabPress('account')}
                    activeOpacity={0.8}
                >
                    <Feather
                        name="user"
                        size={22}
                        color={activeTab === 'account' ? Colors.primary : Colors.gray400}
                    />
                    <Text
                        style={[
                            styles.tabLabel,
                            { color: activeTab === 'account' ? Colors.primary : Colors.gray500 },
                        ]}
                    >
                        ACCOUNT
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 10,
    },
    barContainer: {
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 8,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 10,
        fontWeight: '700',
        marginTop: 4,
        letterSpacing: 0.4,
    },
    fabSpace: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fabButton: {
        position: 'absolute',
        top: -26,
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: Colors.white,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 8,
    },
});
