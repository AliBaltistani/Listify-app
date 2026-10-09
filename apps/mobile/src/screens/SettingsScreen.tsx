import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { SettingItem } from '../components/SettingItem';

interface SettingsScreenProps {
    onBackPress?: () => void;
    onNavigateToAccountProfile?: () => void;
    onSignOut?: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
    onBackPress,
    onNavigateToAccountProfile,
    onSignOut,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Orange Header */}
            <View style={styles.orangeHeader}>
                <View style={styles.headerTopRow}>
                    <TouchableOpacity onPress={onBackPress} activeOpacity={0.8} style={styles.backBtn}>
                        <Ionicons name="chevron-back" size={20} color={Colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Settings</Text>
                    <View style={{ width: 36 }} />
                </View>
            </View>

            {/* Main Content White Card Overlay */}
            <View style={styles.contentCard}>
                <View style={styles.handleBar} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* User Profile Header Card */}
                    <TouchableOpacity
                        style={styles.userCard}
                        activeOpacity={0.85}
                        onPress={onNavigateToAccountProfile}
                    >
                        <View style={styles.avatarYellowCircle}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop' }}
                                style={styles.avatarImage}
                            />
                        </View>

                        <View style={styles.userInfoCol}>
                            <Text style={styles.userName}>Jhon Abraham</Text>
                            <Text style={styles.userStatus}>Never give up 💪</Text>
                        </View>

                        <TouchableOpacity style={styles.qrButton} activeOpacity={0.8}>
                            <MaterialCommunityIcons name="qrcode-scan" size={22} color="#0D9488" />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    {/* Settings Options List */}
                    <SettingItem
                        iconName="key"
                        title="Account"
                        subtitle="Privacy, security, change number"
                        onPress={onNavigateToAccountProfile}
                    />

                    <SettingItem
                        iconName="message-square"
                        title="Chat"
                        subtitle="Chat history,theme,wallpapers"
                    />

                    <SettingItem
                        iconName="bell"
                        title="Notifications"
                        subtitle="Messages, group and others"
                    />

                    <SettingItem
                        iconName="help-circle"
                        title="Help"
                        subtitle="Help center,contact us, privacy policy"
                    />

                    <SettingItem
                        iconName="sliders"
                        title="Storage and data"
                        subtitle="Network usage, stogare usage"
                    />

                    <SettingItem
                        iconName="users"
                        title="Invite a friend"
                    />

                    <SettingItem
                        iconName="log-out"
                        title="Sign Out"
                        isDestructive
                        onPress={onSignOut}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    orangeHeader: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 24,
    },
    headerTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.white,
    },
    contentCard: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 12,
        overflow: 'hidden',
    },
    handleBar: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#E5E7EB',
        alignSelf: 'center',
        marginBottom: 16,
    },
    scrollContent: {
        paddingBottom: 36,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    avatarYellowCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F59E0B',
        padding: 2,
        marginRight: 14,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 28,
    },
    userInfoCol: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.dark,
    },
    userStatus: {
        fontSize: 12,
        color: Colors.gray500,
        marginTop: 2,
    },
    qrButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EEF2F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: '#F3F4F6',
        marginVertical: 12,
        marginHorizontal: 20,
    },
});
