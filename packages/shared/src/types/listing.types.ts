// ============================================================
// @listify/shared — Listing Types
// ============================================================

export enum ListingStatus {
    DRAFT = 'draft',
    PENDING = 'pending',
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    REJECTED = 'rejected',
    EXPIRED = 'expired',
    SOLD = 'sold',
}

export enum ListingCondition {
    NEW = 'new',
    USED = 'used',
    REFURBISHED = 'refurbished',
}

export interface ListingLocation {
    lat: number;
    lng: number;
    label: string;
    city: string;
    area: string;
}

export interface Listing {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    categoryId: string;
    categoryName: string;
    condition: ListingCondition;
    location: ListingLocation;
    images: string[];
    attributes: Record<string, unknown>;
    isFeatured: boolean;
    isNegotiable: boolean;
    viewCount: number;
    sellerId: string;
    sellerName: string;
    sellerAvatar: string | null;
    sellerIsVerified: boolean;
    sellerRating: number;
    status: ListingStatus;
    createdAt: string;
    updatedAt: string;
}

export interface CreateListingDTO {
    title: string;
    description: string;
    price: number;
    currency: string;
    categoryId: string;
    condition: ListingCondition;
    location: ListingLocation;
    images: string[];
    attributes: Record<string, unknown>;
    isNegotiable: boolean;
}

export interface ListingFilters {
    search?: string;
    categoryId?: string;
    condition?: ListingCondition;
    minPrice?: number;
    maxPrice?: number;
    city?: string;
    lat?: number;
    lng?: number;
    radius?: number;
    sortBy?: 'newest' | 'price_asc' | 'price_desc' | 'nearest';
    page?: number;
    limit?: number;
}

export interface ListingSummary {
    id: string;
    title: string;
    price: number;
    currency: string;
    condition: ListingCondition;
    location: { label: string; city: string };
    thumbnail: string;
    isFeatured: boolean;
    createdAt: string;
}
