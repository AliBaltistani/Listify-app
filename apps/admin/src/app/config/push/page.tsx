'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Dialog } from '@/components/ui/Dialog';
import {
    BellRing,
    Send,
    Users,
    Smartphone,
    CheckCircle2,
    Clock,
    Sparkles,
    Calendar,
    Plus,
} from 'lucide-react';
import { toast } from 'sonner';

export default function PushBroadcastPage() {
    const [title, setTitle] = React.useState('🔥 Mega Weekend Clearance Sale!');
    const [body, setBody] = React.useState('Up to 30% off on PTA Approved iPhones & Honda Motorbikes in Lahore & Karachi. Tap to explore top deal ads now!');
    const [targetAudience, setTargetAudience] = React.useState('ALL_USERS');
    const [deepLink, setDeepLink] = React.useState('listify://listings/featured');

    // Modal State
    const [isScheduleModalOpen, setIsScheduleModalOpen] = React.useState(false);
    const [scheduleDate, setScheduleDate] = React.useState('2026-10-10');
    const [scheduleTime, setScheduleTime] = React.useState('18:00');

    const handleSendPush = () => {
        toast.success('Push notification broadcast queued & sent to 18,240 active mobile devices!');
    };

    const handleSchedulePush = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(`Push notification scheduled for ${scheduleDate} at ${scheduleTime}!`);
        setIsScheduleModalOpen(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <BellRing className="h-6 w-6 text-listify-orange shrink-0" />
                        Push Broadcast & Mobile Marketing
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Compose and broadcast instant push notifications to mobile app users across Pakistan.
                    </p>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => setIsScheduleModalOpen(true)} className="flex-1 sm:flex-none">
                        <Calendar className="h-4 w-4" /> Schedule Campaign
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleSendPush} className="flex-1 sm:flex-none shadow-lg shadow-listify-orange/30">
                        <Send className="h-4 w-4" />
                        Broadcast Push Now
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Notification Form */}
                <div className="lg:col-span-7 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base font-bold">Push Notification Campaign</CardTitle>
                            <CardDescription>Compose title, body message, and deep link navigation route</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Notification Title</label>
                                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Message Body</label>
                                <textarea
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    className="w-full h-24 rounded-xl border border-slate-200 p-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">App Deep Link Route</label>
                                <Input value={deepLink} onChange={(e) => setDeepLink(e.target.value)} className="font-mono text-xs" />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Target Audience Segment</label>
                                <select
                                    value={targetAudience}
                                    onChange={(e) => setTargetAudience(e.target.value)}
                                    className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                                >
                                    <option value="ALL_USERS">All Mobile App Users (18,240)</option>
                                    <option value="BUYERS_ONLY">Active Buyers Only (12,400)</option>
                                    <option value="SELLERS_ONLY">Registered Sellers & Dealers (5,840)</option>
                                    <option value="LAHORE_REGION">Lahore & Punjab Users Only</option>
                                    <option value="KARACHI_REGION">Karachi & Sindh Users Only</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Live Mobile Lockscreen Simulator */}
                <div className="lg:col-span-5 space-y-4 flex flex-col items-center">
                    <div className="w-full max-w-[320px] sm:max-w-[340px] flex items-center justify-between px-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Lockscreen Preview</span>
                        <Badge variant="active" size="sm">
                            <Sparkles className="h-3 w-3" /> Live Simulator
                        </Badge>
                    </div>

                    <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[42px] border-[10px] border-slate-900 bg-slate-950 text-white shadow-2xl overflow-hidden min-h-[480px] sm:min-h-[500px] flex flex-col p-4 justify-start space-y-8">
                        {/* Lockscreen Clock */}
                        <div className="text-center pt-8 space-y-1">
                            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">16:05</div>
                            <div className="text-xs text-slate-400 font-medium">Friday, October 9</div>
                        </div>

                        {/* Simulated Notification Card */}
                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 space-y-2 shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-md bg-listify-orange flex items-center justify-center text-[10px] font-bold text-white">
                                        L
                                    </div>
                                    <span className="text-xs font-bold text-white">Listify</span>
                                </div>
                                <span className="text-[10px] text-slate-400">now</span>
                            </div>

                            <div className="space-y-1">
                                <div className="text-xs font-bold text-white leading-snug">{title}</div>
                                <div className="text-[11px] text-slate-300 leading-relaxed">{body}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SCHEDULE MODAL */}
            <Dialog
                isOpen={isScheduleModalOpen}
                onClose={() => setIsScheduleModalOpen(false)}
                title="Schedule Push Campaign"
                description="Set future date and time for automated push dispatch."
                maxWidth="md"
            >
                <form onSubmit={handleSchedulePush} className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Dispatch Date</label>
                            <Input
                                type="date"
                                value={scheduleDate}
                                onChange={(e) => setScheduleDate(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Dispatch Time</label>
                            <Input
                                type="time"
                                value={scheduleTime}
                                onChange={(e) => setScheduleTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsScheduleModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Confirm Schedule
                        </Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
