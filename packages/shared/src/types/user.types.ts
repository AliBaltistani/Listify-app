// ============================================================
// @listify/shared — User Types
// ============================================================

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    BANNED = 'banned',
    PENDING_VERIFICATION = 'pending_verification',
}

export interface User {
    id: string;
    fullName: string;
    username: string;
    email: string;
    phone: string;
    avatar: string | null;
    role: UserRole;
    status: UserStatus;
    isVerified: boolean;
    rating: number;
    ratingsCount: number;
    memberSince: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserProfile {
    id: string;
    fullName: string;
    username: string;
    avatar: string | null;
    isVerified: boolean;
    rating: number;
    ratingsCount: number;
    memberSince: string;
    listingsCount: number;
}

export interface AuthResponse {
    user: User;
    token: string;
    refreshToken: string;
}

export interface OTPRequest {
    type: 'phone' | 'email';
    destination: string;
}

export interface OTPVerification {
    type: 'phone' | 'email';
    destination: string;
    code: string;
}
