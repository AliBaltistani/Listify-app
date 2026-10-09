import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';
import { ChatBubble, ChatMessage } from '../components/ChatBubble';
import { CounterOfferCard } from '../components/CounterOfferCard';

const INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: '1',
        sender: 'other',
        senderName: 'Irfan Ali',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
        text: 'hey Bilal How are you?',
        time: '09:25 AM',
    },
    {
        id: '2',
        sender: 'other',
        senderName: 'Irfan Ali',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
        text: 'I want to buy this three phones?',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop',
        time: '09:25 AM',
    },
    {
        id: '3',
        sender: 'other',
        senderName: 'Irfan Ali',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
        audioDuration: '00:16',
        time: '09:25 AM',
    },
    {
        id: '4',
        sender: 'me',
        senderName: 'You',
        senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
        text: 'Ok Bro Done what is you Budget?',
        time: '09:25 AM',
    },
    {
        id: '5',
        sender: 'me',
        senderName: 'You',
        senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
        audioDuration: '00:16',
        isTealVoiceNote: true,
        time: '09:25 AM',
    },
];

interface MessageDetailScreenProps {
    onBackPress?: () => void;
}

export const MessageDetailScreen: React.FC<MessageDetailScreenProps> = ({ onBackPress }) => {
    const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (!inputText.trim()) return;
        const newMsg: ChatMessage = {
            id: Date.now().toString(),
            sender: 'me',
            senderName: 'You',
            senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
            text: inputText,
            time: '09:26 AM',
        };
        setMessages([...messages, newMsg]);
        setInputText('');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={onBackPress} activeOpacity={0.7} style={styles.backBtn}>
                        <Ionicons name="chevron-back" size={20} color={Colors.dark} />
                    </TouchableOpacity>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop' }}
                        style={styles.headerAvatar}
                    />
                    <View>
                        <Text style={styles.headerName}>Irfan Ali</Text>
                        <Text style={styles.headerRole}>Buyer Person</Text>
                    </View>
                </View>

                <View style={styles.headerRightIcons}>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Ionicons name="call-outline" size={18} color={Colors.dark} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
                        <Ionicons name="videocam-outline" size={20} color={Colors.dark} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Pinned Product Header Bar */}
            <View style={styles.pinnedProductBar}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&auto=format&fit=crop' }}
                    style={styles.pinnedThumb}
                />
                <View style={styles.pinnedInfo}>
                    <Text style={styles.pinnedTitle}>APPLE IPAD 79C (10th Gen)</Text>
                    <Text style={styles.pinnedMeta}>
                        <Text style={styles.pinnedPrice}>2000 pkr</Text> • Skardu • Used
                    </Text>
                </View>
                <TouchableOpacity style={styles.makeOfferBtn} activeOpacity={0.8}>
                    <Text style={styles.makeOfferBtnText}>Make Offer</Text>
                </TouchableOpacity>
                <Feather name="chevron-right" size={16} color={Colors.gray400} />
            </View>

            {/* Messages List */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.messagesContainer}
            >
                {messages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg} />
                ))}

                {/* Counter Offer Card */}
                <CounterOfferCard
                    productName="iPad 79C"
                    amount="1,850 PKR"
                    status="Pending"
                    onAccept={() => { }}
                    onCounter={() => { }}
                />
            </ScrollView>

            {/* Bottom Toolbar Input */}
            <View style={styles.bottomToolbar}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Feather name="paperclip" size={20} color={Colors.gray600} />
                </TouchableOpacity>

                <View style={styles.inputPill}>
                    <TextInput
                        style={styles.input}
                        placeholder="Write your message"
                        placeholderTextColor={Colors.gray400}
                        value={inputText}
                        onChangeText={setInputText}
                        onSubmitEditing={handleSend}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                    <Feather name="file-text" size={20} color={Colors.gray600} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <Feather name="camera" size={20} color={Colors.gray600} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={handleSend}>
                    <Feather name="mic" size={20} color={Colors.gray600} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    backBtn: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerAvatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
    },
    headerName: {
        fontSize: 15,
        fontWeight: '800',
        color: Colors.dark,
    },
    headerRole: {
        fontSize: 11,
        color: Colors.gray400,
    },
    headerRightIcons: {
        flexDirection: 'row',
        gap: 8,
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pinnedProductBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        marginHorizontal: 16,
        marginVertical: 10,
        padding: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    pinnedThumb: {
        width: 44,
        height: 44,
        borderRadius: 8,
        marginRight: 10,
    },
    pinnedInfo: {
        flex: 1,
    },
    pinnedTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.dark,
    },
    pinnedMeta: {
        fontSize: 11,
        color: Colors.gray500,
        marginTop: 2,
    },
    pinnedPrice: {
        fontWeight: '800',
        color: Colors.primary,
    },
    makeOfferBtn: {
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 14,
        marginRight: 6,
    },
    makeOfferBtnText: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.primary,
    },
    messagesContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    bottomToolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        gap: 12,
    },
    inputPill: {
        flex: 1,
        height: 40,
        backgroundColor: '#F3F4F6',
        borderRadius: 20,
        paddingHorizontal: 14,
        justifyContent: 'center',
    },
    input: {
        fontSize: 13,
        color: Colors.dark,
    },
});
