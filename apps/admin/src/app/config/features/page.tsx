'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
    SlidersHorizontal,
    ShieldAlert,
    MessageSquare,
    DollarSign,
    PhoneCall,
    Sparkles,
    CheckCircle2,
    Lock,
} from 'lucide-react';
import { toast } from 'sonner';

interface FeatureFlag {
    key: string;
    name: string;
    description: string;
    enabled: boolean;
    category: 'CORE' | 'TRUST_SAFETY' | 'MONETIZATION' | 'EXPERIMENTAL';
}

export default function FeatureFlagsPage() {
    const [flags, setFlags] = React.useState<FeatureFlag[]>([
        {
            key: 'enable_in_app_chat',
            name: 'In-App Buyer-Seller Realtime Chat',
            description: 'Allows buyers and sellers to negotiate via WebSocket instant messaging inside mobile app.',
            enabled: true,
            category: 'CORE',
        },
        {
            key: 'enable_phone_masking',
            name: 'Seller Phone Number Masking & OTP Guard',
            description: 'Hides seller raw phone numbers behind single-use virtual relay numbers to prevent spam calls.',
            enabled: true,
            category: 'TRUST_SAFETY',
        },
        {
            key: 'enable_ai_antispam',
            name: 'Automated AI Anti-Spam & Fraud Scanner',
            description: 'Scans image text and listing descriptions for scam patterns before publishing.',
            enabled: true,
            category: 'TRUST_SAFETY',
        },
        {
            key: 'enable_price_bidding',
            name: 'Make an Offer / Price Bidding Engine',
            description: 'Enables interactive buyer price bidding on negotiable listings.',
            enabled: true,
            category: 'CORE',
        },
        {
            key: 'enable_promoted_ads_payment',
            name: 'JazzCash & EasyPaisa Promoted Ads Checkout',
            description: 'Allows sellers to pay for featured listing spots directly via local mobile wallets.',
            enabled: true,
            category: 'MONETIZATION',
        },
        {
            key: 'emergency_maintenance_mode',
            name: 'Emergency Platform Maintenance Mode',
            description: 'Locks mobile app to read-only view and displays global maintenance notice.',
            enabled: false,
            category: 'EXPERIMENTAL',
        },
    ]);

    const toggleFlag = (key: string) => {
        setFlags((prev) =>
            prev.map((f) => {
                if (f.key === key) {
                    const updated = !f.enabled;
                    if (key === 'emergency_maintenance_mode' && updated) {
                        toast.warning('EMERGENCY MAINTENANCE MODE ENABLED! Mobile app locked.');
                    } else {
                        toast.info(`Feature flag "${f.name}" is now ${updated ? 'ENABLED' : 'DISABLED'}.`);
                    }
                    return { ...f, enabled: updated };
                }
                return f;
            })
        );
    };

    const handleSaveFlags = () => {
        toast.success('System Feature Flags synced to backend Redis cache!');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <SlidersHorizontal className="h-6 w-6 text-listify-orange" />
                        System Feature Flags & Config Toggles
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Control platform capabilities, security guards, and emergency switches instantly.
                    </p>
                </div>

                <Button variant="primary" onClick={handleSaveFlags} className="shadow-lg shadow-listify-orange/30">
                    <CheckCircle2 className="h-4 w-4" />
                    Save & Broadcast Flags
                </Button>
            </div>

            <div className="space-y-4">
                {flags.map((flag) => (
                    <Card key={flag.key} className="p-6 transition-all hover:border-slate-300 dark:hover:border-slate-700">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="space-y-1 max-w-2xl">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{flag.name}</h3>
                                    <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                                        {flag.key}
                                    </Badge>
                                    {flag.category === 'TRUST_SAFETY' && <Badge variant="verified" size="sm">Security Guard</Badge>}
                                    {flag.category === 'EXPERIMENTAL' && <Badge variant="banned" size="sm">High Impact</Badge>}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{flag.description}</p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                                <button
                                    onClick={() => toggleFlag(flag.key)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${flag.enabled ? 'bg-listify-orange' : 'bg-slate-300 dark:bg-slate-700'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${flag.enabled ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                                <span className="text-xs font-bold w-16 text-right text-slate-700 dark:text-slate-300">
                                    {flag.enabled ? 'ACTIVE' : 'OFF'}
                                </span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
