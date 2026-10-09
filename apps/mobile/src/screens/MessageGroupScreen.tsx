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
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

const STORIES = [
    { id: '1', name: 'My status', isMe: true, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop' },
    { id: '2', name: 'Adil', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop' },
    { id: '3', name: 'Marina', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop' },
    { id: '4', name: 'Dean', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop' },
    { id: '5', name: 'Max', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop' },
];

const CHATS = [
    {
        id: '1',
        name: 'Alex Linderson',
        message: 'How are you today?',
        time: '2 min ago',
        unread: 3,
        online: true,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
    },
    {
        id: '2',
        name: 'Team Align',
        message: "Don't miss to attend the meeting.",
        time: '2 min ago',
        unread: 4,
        online: true,
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&auto=format&fit=crop',
    },
    {
        id: '3',
        name: 'John Abraham',
        message: 'Hey! Can you join the meeting?',
        time: '2 min ago',
        unread: 0,
        online: false,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'Sabila Sayma',
        message: 'How are you today?',
        time: '2 min ago',
        unread: 0,
        online: false,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
    },
    {
        id: '5',
        name: 'John Borino',
        message: 'Have a good day 🌸',
        time: '2 min ago',
        unread: 0,
        online: true,
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop',
    },
    {
        id: '6',
        name: 'Angel Dayna',
        message: 'How are you today?',
        time: '2 min ago',
        unread: 0,
        online: false,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop',
    },
];

interface MessageGroupScreenProps {
    onBackPress?: () => void;
    onSelectChat?: (id: string) => void;
}

export const MessageGroupScreen: React.FC<MessageGroupScreenProps> = ({
    onBackPress,
    onSelectChat,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Orange Top Header */}
            <View style={styles.orangeHeader}>
                <View style={styles.headerTopRow}>
                    <TouchableOpacity onPress={onBackPress} activeOpacity={0.8}>
                        <Ionicons name="chevron-back" size={22} color={Colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Home</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop' }}
                            style={styles.profileAvatar}
                        />
                    </TouchableOpacity>
                </View>

                {/* Stories Horizontal Row */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.storiesContainer}
                >
                    {STORIES.map((s) => (
                        <TouchableOpacity key={s.id} style={styles.storyItem} activeOpacity={0.8}>
                            <View style={[styles.storyRing, s.isMe && styles.storyRingMe]}>
                                <Image source={{ uri: s.image }} style={styles.storyImage} />
                                {s.isMe && (
                                    <View style={styles.plusBadge}>
                                        <Ionicons name="add" size={10} color={Colors.white} />
                                    </View>
                                )}
                            </View>
                            <Text style={styles.storyName}>{s.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Main Content White Container */}
            <View style={styles.contentCard}>
                <View style={styles.handleBar} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.chatList}>
                    {CHATS.map((chat) => (
                        <TouchableOpacity
                            key={chat.id}
                            style={styles.chatRow}
                            activeOpacity={0.7}
                            onPress={() => onSelectChat && onSelectChat(chat.id)}
                        >
                            <View style={styles.chatAvatarWrapper}>
                                <Image source={{ uri: chat.image }} style={styles.chatAvatar} />
                                {chat.online && <View style={styles.onlineDot} />}
                            </View>

                            <View style={styles.chatContentCol}>
                                <View style={styles.chatHeaderRow}>
                                    <Text style={styles.chatName}>{chat.name}</Text>
                                    <Text style={styles.chatTime}>{chat.time}</Text>
                                </View>
                                <View style={styles.chatMessageRow}>
                                    <Text style={styles.chatMessageText} numberOfLines={1}>
                                        {chat.message}
                                    </Text>
                                    {chat.unread > 0 && (
                                        <View style={styles.unreadBadge}>
                                            <Text style={styles.unreadText}>{chat.unread}</Text>
                                        </View>
                                    )}
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
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
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.white,
    },
    profileAvatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    storiesContainer: {
        gap: 16,
    },
    storyItem: {
        alignItems: 'center',
        width: 60,
    },
    storyRing: {
        width: 58,
        height: 58,
        borderRadius: 29,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.9)',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyRingMe: {
        borderColor: Colors.white,
    },
    storyImage: {
        width: '100%',
        height: '100%',
        borderRadius: 26,
    },
    plusBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary,
        borderWidth: 1.5,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyName: {
        fontSize: 11,
        fontWeight: '600',
        color: Colors.white,
        marginTop: 6,
        textAlign: 'center',
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
    chatList: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    chatRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    chatAvatarWrapper: {
        position: 'relative',
        marginRight: 14,
    },
    chatAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    onlineDot: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#10B981',
        borderWidth: 2,
        borderColor: Colors.white,
    },
    chatContentCol: {
        flex: 1,
    },
    chatHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    chatName: {
        fontSize: 15,
        fontWeight: '800',
        color: Colors.dark,
    },
    chatTime: {
        fontSize: 11,
        color: Colors.gray400,
    },
    chatMessageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatMessageText: {
        fontSize: 13,
        color: Colors.gray500,
        flex: 1,
        marginRight: 8,
    },
    unreadBadge: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#EF4444',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadText: {
        fontSize: 10,
        fontWeight: '800',
        color: Colors.white,
    },
});
