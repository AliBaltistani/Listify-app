// ============================================================
// @listify/shared — User Validators (Zod)
// ============================================================
import { z } from 'zod';

export const updateProfileSchema = z.object({
    fullName: z.string().min(2).max(50).optional(),
    username: z.string().min(3).max(30)
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
        .optional(),
    phone: z.string().regex(/^\+923\d{9}$/, 'Phone must be in +923XXXXXXXXX format').optional(),
    avatar: z.string().url().optional().nullable(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
