import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/colors';

export interface ChatMessage {
    id: string;
    sender: 'me' | 'other';
    senderName?: string;
    senderAvatar?: string;
    text?: string;
    image?: string;
    audioDuration?: string;
    time: string;
    isTealVoiceNote?: boolean;
}

interface ChatBubbleProps {
    message: ChatMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
    const isMe = message.sender === 'me';

    return (
        <View style={[styles.wrapper, isMe ? styles.wrapperMe : styles.wrapperOther]}>
            {!isMe && message.senderAvatar && (
                <Image source={{ uri: message.senderAvatar }} style={styles.avatar} />
            )}

            <View style={styles.contentContainer}>
                {!isMe && message.senderName && (
                    <Text style={styles.senderName}>{message.senderName}</Text>
                )}

                {/* Text message */}
                {message.text && (
                    <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleOther]}>
                        <Text style={[styles.text, isMe ? styles.textMe : styles.textOther]}>
                            {message.text}
                        </Text>
                    </View>
                )}

                {/* Image Attachment */}
                {message.image && (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: message.image }} style={styles.attachedImage} />
                    </View>
                )}

                {/* Voice Note */}
                {message.audioDuration && (
                    <View
                        style={[
                            styles.audioBubble,
                            message.isTealVoiceNote ? styles.audioBubbleTeal : isMe ? styles.bubbleMe : styles.bubbleOther,
                        ]}
                    >
                        <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
                            <Ionicons
                                name="play"
                                size={16}
                                color={message.isTealVoiceNote ? Colors.white : isMe ? Colors.white : Colors.primary}
                            />
                        </TouchableOpacity>

                        <View style={styles.waveformContainer}>
                            {[12, 18, 14, 22, 10, 16, 20, 12, 18, 14, 22, 10, 16, 12, 18, 14].map((h, i) => (
                                <View
                                    key={i}
                                    style={[
                                        styles.waveformBar,
                                        { height: h },
                                        message.isTealVoiceNote || isMe
                                            ? { backgroundColor: 'rgba(255, 255, 255, 0.7)' }
                                            : { backgroundColor: Colors.primary },
                                    ]}
                                />
                            ))}
                        </View>

                        <Text
                            style={[
                                styles.audioDurationText,
                                message.isTealVoiceNote || isMe ? { color: Colors.white } : { color: Colors.dark },
                            ]}
                        >
                            {message.audioDuration}
                        </Text>
                    </View>
                )}

                <Text style={[styles.timeText, isMe ? styles.timeMe : styles.timeOther]}>
                    {message.time}
                </Text>
            </View>

            {isMe && message.senderAvatar && (
                <Image source={{ uri: message.senderAvatar }} style={styles.avatar} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'flex-start',
    },
    wrapperMe: {
        justifyContent: 'flex-end',
    },
    wrapperOther: {
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginHorizontal: 8,
    },
    contentContainer: {
        maxWidth: '75%',
    },
    senderName: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.dark,
        marginBottom: 4,
    },
    bubble: {
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 10,
    },
    bubbleOther: {
        backgroundColor: '#F0F2F5',
        borderTopLeftRadius: 4,
    },
    bubbleMe: {
        backgroundColor: '#059669', // Teal green as in message page screenshot
        borderTopRightRadius: 4,
    },
    text: {
        fontSize: 13,
        lineHeight: 18,
    },
    textOther: {
        color: Colors.dark,
    },
    textMe: {
        color: Colors.white,
        fontWeight: '500',
    },
    imageContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        marginTop: 6,
        width: 240,
        height: 140,
    },
    attachedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    audioBubble: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 6,
        gap: 8,
    },
    audioBubbleTeal: {
        backgroundColor: '#059669',
    },
    playButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    waveformContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        flex: 1,
        height: 24,
    },
    waveformBar: {
        width: 3,
        borderRadius: 1.5,
    },
    audioDurationText: {
        fontSize: 11,
        fontWeight: '600',
        marginLeft: 4,
    },
    timeText: {
        fontSize: 10,
        color: Colors.gray400,
        marginTop: 4,
    },
    timeMe: {
        textAlign: 'right',
    },
    timeOther: {
        textAlign: 'left',
    },
});
