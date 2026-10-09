// ============================================================
// @listify/shared — Listing Validators (Zod)
// ============================================================
import { z } from 'zod';

export const createListingSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(100),
    description: z.string().min(10, 'Description must be at least 10 characters').max(5000),
    price: z.number().positive('Price must be positive'),
    currency: z.string().default('PKR'),
    categoryId: z.string().min(1, 'Category is required'),
    condition: z.enum(['new', 'used', 'refurbished']),
    location: z.object({
        lat: z.number(),
        lng: z.number(),
        label: z.string().min(1),
        city: z.string().min(1),
        area: z.string().min(1),
    }),
    images: z.array(z.string().url()).min(1, 'At least one image is required').max(10, 'Maximum 10 images'),
    attributes: z.record(z.unknown()).default({}),
    isNegotiable: z.boolean().default(false),
});

export const filterSchema = z.object({
    search: z.string().optional(),
    categoryId: z.string().optional(),
    condition: z.enum(['new', 'used', 'refurbished']).optional(),
    minPrice: z.number().min(0).optional(),
    maxPrice: z.number().min(0).optional(),
    city: z.string().optional(),
    sortBy: z.enum(['newest', 'price_asc', 'price_desc', 'nearest']).optional(),
    page: z.number().int().min(1).default(1),
    limit: z.number().int().min(1).max(50).default(20),
});

export type CreateListingInput = z.infer<typeof createListingSchema>;
export type FilterInput = z.infer<typeof filterSchema>;
