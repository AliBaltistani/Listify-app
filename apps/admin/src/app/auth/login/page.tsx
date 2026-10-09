'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import {
    Store,
    Lock,
    Mail,
    Eye,
    EyeOff,
    ShieldCheck,
    ArrowRight,
    Sparkles,
    KeyRound,
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = React.useState('ali.admin@listify.pk');
    const [password, setPassword] = React.useState('SuperSecret2026!');
    const [showPassword, setShowPassword] = React.useState(false);
    const [otpCode, setOtpCode] = React.useState('');
    const [requires2FA, setRequires2FA] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            if (!requires2FA) {
                setRequires2FA(true);
                toast.info('2FA Security Prompt: Enter 6-digit authentication code sent to your mobile app.');
            } else {
                toast.success('Admin authentication verified! Redirecting to Command Center...');
                router.push('/dashboard');
            }
        }, 800);
    };

    const fillDemoCreds = () => {
        setEmail('ali.admin@listify.pk');
        setPassword('SuperSecret2026!');
        toast.success('Demo admin credentials populated.');
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4 relative overflow-hidden">
            {/* Background Glow Elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-listify-orange/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md space-y-6 relative z-10">
                {/* Brand Logo Header */}
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-listify-orange to-amber-500 text-white shadow-xl shadow-listify-orange/30">
                        <Store className="h-7 w-7" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white">
                        Listify<span className="text-listify-orange">.Admin</span>
                    </h1>
                    <p className="text-xs text-slate-400">
                        Super Administrator & Moderation Command Portal
                    </p>
                </div>

                {/* Card */}
                <Card className="border-slate-800 bg-slate-900/90 backdrop-blur-xl p-2 sm:p-4 shadow-2xl">
                    <CardHeader className="space-y-1 pb-4">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-bold text-white">
                                {requires2FA ? 'Two-Factor Authentication' : 'Admin Sign In'}
                            </CardTitle>
                            <Badge variant="verified" size="sm">
                                <ShieldCheck className="h-3 w-3" /> Secure 256-Bit
                            </Badge>
                        </div>
                        <CardDescription className="text-xs text-slate-400">
                            {requires2FA
                                ? 'Enter the 6-digit OTP code sent to your registered admin device'
                                : 'Enter your staff credentials to access marketplace controls'}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleLoginSubmit} className="space-y-4">
                            {!requires2FA ? (
                                <>
                                    <div>
                                        <label className="text-xs font-bold text-slate-400 uppercase">Staff Email Address</label>
                                        <Input
                                            type="email"
                                            icon={<Mail className="h-4 w-4" />}
                                            placeholder="admin@listify.pk"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-bold text-slate-400 uppercase">Password</label>
                                            <Link
                                                href="/auth/forgot-password"
                                                className="text-[11px] font-semibold text-listify-orange hover:underline"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                icon={<Lock className="h-4 w-4" />}
                                                placeholder="••••••••••••"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-3 text-slate-400 hover:text-white"
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase">6-Digit Security OTP</label>
                                    <Input
                                        type="text"
                                        icon={<KeyRound className="h-4 w-4" />}
                                        placeholder="e.g. 894-210"
                                        value={otpCode}
                                        onChange={(e) => setOtpCode(e.target.value)}
                                        className="font-mono text-center text-lg tracking-widest"
                                        maxLength={6}
                                        required
                                    />
                                </div>
                            )}

                            <Button
                                type="submit"
                                variant="primary"
                                disabled={isLoading}
                                className="w-full h-11 text-sm font-bold shadow-lg shadow-listify-orange/30"
                            >
                                {isLoading ? (
                                    'Verifying Credentials...'
                                ) : requires2FA ? (
                                    'Verify OTP & Enter Dashboard'
                                ) : (
                                    <>
                                        Sign In to Admin Portal <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>

                        {/* Quick Demo Fill Pill */}
                        {!requires2FA && (
                            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                                <span className="text-slate-400 text-[11px]">Testing demo access?</span>
                                <button
                                    type="button"
                                    onClick={fillDemoCreds}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-[11px] font-semibold transition-colors"
                                >
                                    <Sparkles className="h-3 w-3 text-listify-orange" /> Auto-Fill Demo
                                </button>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Security Footer */}
                <p className="text-center text-[11px] text-slate-500">
                    Unauthorized administrative access attempts are recorded in IP audit logs.
                </p>
            </div>
        </div>
    );
}
