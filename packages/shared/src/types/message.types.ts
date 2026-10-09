// ============================================================
// @listify/shared — Message Types
// ============================================================

export interface Conversation {
    id: string;
    listingId: string;
    listingTitle: string;
    listingThumbnail: string;
    participants: {
        id: string;
        name: string;
        avatar: string | null;
    }[];
    lastMessage: {
        text: string;
        senderId: string;
        createdAt: string;
        isRead: boolean;
    } | null;
    unreadCount: number;
    createdAt: string;
    updatedAt: string;
}

export interface Message {
    id: string;
    conversationId: string;
    senderId: string;
    text: string;
    attachments: string[];
    isRead: boolean;
    createdAt: string;
}
