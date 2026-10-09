// ============================================================
// @listify/shared — Auth Validators (Zod)
// ============================================================
import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters').max(50),
    phone: z.string().regex(/^\+923\d{9}$/, 'Phone must be in +923XXXXXXXXX format'),
    email: z.string().email('Invalid email address'),
    username: z.string().min(3, 'Username must be at least 3 characters').max(30)
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
    password: z.string().min(6, 'Password must be at least 6 characters').max(100),
});

export const otpSchema = z.object({
    code: z.string().length(6, 'OTP must be exactly 6 digits').regex(/^\d+$/, 'OTP must contain only digits'),
    type: z.enum(['phone', 'email']),
    destination: z.string().min(1),
});

export const resetPasswordSchema = z.object({
    email: z.string().email('Invalid email address'),
});

export const newPasswordSchema = z.object({
    token: z.string().min(1),
    password: z.string().min(6, 'Password must be at least 6 characters').max(100),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});

// Inferred types
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type OTPInput = z.infer<typeof otpSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type NewPasswordInput = z.infer<typeof newPasswordSchema>;
