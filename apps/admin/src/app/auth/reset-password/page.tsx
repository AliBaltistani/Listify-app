'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Store, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminResetPasswordPage() {
    const router = useRouter();
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const hasMinLength = newPassword.length >= 8;
    const hasSymbol = /[!@#$%^&*]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            toast.success('Admin password updated successfully! Please sign in with your new credentials.');
            router.push('/auth/login');
        }, 800);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-listify-orange/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md space-y-6 relative z-10">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-listify-orange to-amber-500 text-white shadow-xl shadow-listify-orange/30">
                        <Store className="h-7 w-7" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-white">
                        Listify<span className="text-listify-orange">.Admin</span>
                    </h1>
                    <p className="text-xs text-slate-400">Set New Security Password</p>
                </div>

                <Card className="border-slate-800 bg-slate-900/90 backdrop-blur-xl p-2 sm:p-4 shadow-2xl">
                    <CardHeader className="space-y-1 pb-4">
                        <CardTitle className="text-lg font-bold text-white">Create New Password</CardTitle>
                        <CardDescription className="text-xs text-slate-400">
                            Ensure your new administrative password meets enterprise complexity rules
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase">New Password</label>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        icon={<Lock className="h-4 w-4" />}
                                        placeholder="••••••••••••"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
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

                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase">Confirm Password</label>
                                <Input
                                    type="password"
                                    icon={<Lock className="h-4 w-4" />}
                                    placeholder="••••••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password Checklist */}
                            <div className="p-3 rounded-xl bg-slate-800/60 space-y-1.5 text-xs">
                                <div className={`flex items-center gap-2 ${hasMinLength ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}>
                                    <Check className="h-3.5 w-3.5" /> At least 8 characters
                                </div>
                                <div className={`flex items-center gap-2 ${hasNumber ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}>
                                    <Check className="h-3.5 w-3.5" /> Contains a number (0-9)
                                </div>
                                <div className={`flex items-center gap-2 ${hasSymbol ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}>
                                    <Check className="h-3.5 w-3.5" /> Contains special symbol (!@#$)
                                </div>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                disabled={isLoading}
                                className="w-full h-11 text-sm font-bold shadow-lg shadow-listify-orange/30"
                            >
                                {isLoading ? 'Updating Password...' : 'Save & Login'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
