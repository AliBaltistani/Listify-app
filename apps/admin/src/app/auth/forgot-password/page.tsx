'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Store, Mail, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminForgotPasswordPage() {
    const [email, setEmail] = React.useState('');
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        toast.success(`Password reset security link sent to ${email}`);
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
                    <p className="text-xs text-slate-400">Password Recovery Portal</p>
                </div>

                <Card className="border-slate-800 bg-slate-900/90 backdrop-blur-xl p-2 sm:p-4 shadow-2xl">
                    <CardHeader className="space-y-1 pb-4">
                        <CardTitle className="text-lg font-bold text-white">Reset Staff Password</CardTitle>
                        <CardDescription className="text-xs text-slate-400">
                            Enter your registered staff email address to receive an encrypted reset link
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase">Staff Email Address</label>
                                    <Input
                                        type="email"
                                        icon={<Mail className="h-4 w-4" />}
                                        placeholder="ali.admin@listify.pk"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <Button type="submit" variant="primary" className="w-full h-11 text-sm font-bold shadow-lg shadow-listify-orange/30">
                                    <Send className="h-4 w-4" /> Send Reset Link
                                </Button>
                            </form>
                        ) : (
                            <div className="text-center py-4 space-y-3">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-sm font-bold text-white">Reset Email Sent</h3>
                                <p className="text-xs text-slate-400">
                                    We've sent a 15-minute security recovery link to <strong>{email}</strong>. Please check your inbox.
                                </p>
                                <div className="pt-2">
                                    <Link href="/auth/reset-password?token=demo123">
                                        <Button variant="outline" size="sm" className="w-full text-xs">
                                            Simulate Token Click & Reset Password
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className="mt-4 pt-4 border-t border-slate-800 text-center">
                            <Link href="/auth/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                                <ArrowLeft className="h-3.5 w-3.5" /> Back to Sign In
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
