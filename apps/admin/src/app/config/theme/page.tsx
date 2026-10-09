'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
    Palette,
    CheckCircle2,
    Sparkles,
    Smartphone,
    Car,
    Sliders,
    Type,
    LayoutTemplate,
    Search,
    Grid,
    Heart,
    Home,
    User,
    PlusCircle,
    MessageSquare,
} from 'lucide-react';
import { toast } from 'sonner';

export default function AppThemeSimulatorPage() {
    const [appName, setAppName] = React.useState('Listify');
    const [tagline, setTagline] = React.useState('Buy, Sell & Discover Locally');
    const [primaryColor, setPrimaryColor] = React.useState('#FC6901');
    const [heroTitle, setHeroTitle] = React.useState('Nike Free Metcon 4');
    const [heroPrice, setHeroPrice] = React.useState('PKR 34,500');
    const [currencySymbol, setCurrencySymbol] = React.useState('PKR');

    const presetColors = [
        { name: 'Listify Orange', hex: '#FC6901' },
        { name: 'Emerald Trust', hex: '#059669' },
        { name: 'Royal Indigo', hex: '#4F46E5' },
        { name: 'Rose Red', hex: '#E11D48' },
        { name: 'Midnight Dark', hex: '#111827' },
    ];

    const handleDeployTheme = () => {
        toast.success('New theme & app config deployed to Listify Mobile App API!');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Palette className="h-6 w-6 text-listify-orange" />
                        Live App Theme & Branding Simulator
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Rebrand, change primary colors, and customize marketplace copy with instant live mobile preview.
                    </p>
                </div>

                <Button variant="primary" onClick={handleDeployTheme} className="shadow-lg shadow-listify-orange/30">
                    <CheckCircle2 className="h-4 w-4" />
                    Deploy Theme to Mobile App
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Admin Controls & Tokens */}
                <div className="space-y-6">
                    {/* Brand Identity */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base font-bold">App Branding & Copy</CardTitle>
                            <CardDescription>Primary marketplace text fetched dynamically by the mobile app</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">App Name</label>
                                <Input value={appName} onChange={(e) => setAppName(e.target.value)} />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Tagline</label>
                                <Input value={tagline} onChange={(e) => setTagline(e.target.value)} />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Currency Code / Symbol</label>
                                <Input value={currencySymbol} onChange={(e) => setCurrencySymbol(e.target.value)} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Color Palette Selector */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base font-bold">Primary Brand Color</CardTitle>
                            <CardDescription>Injects primary color tokens into mobile app ThemeContext</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    className="w-12 h-12 rounded-xl cursor-pointer border-0 p-0"
                                />
                                <Input
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    className="font-mono text-sm font-bold uppercase w-36"
                                />
                            </div>

                            <div className="space-y-2 pt-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">Preset Brand Tokens:</span>
                                <div className="flex flex-wrap gap-2">
                                    {presetColors.map((p, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setPrimaryColor(p.hex)}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium hover:border-slate-400 transition-colors"
                                        >
                                            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: p.hex }} />
                                            <span>{p.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Hero Banner Promo Editor */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base font-bold">Homepage Hero Banner Promo</CardTitle>
                            <CardDescription>Customize featured hero banner title & price tag</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Banner Product Title</label>
                                <Input value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Banner Price Display</label>
                                <Input value={heroPrice} onChange={(e) => setHeroPrice(e.target.value)} />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Real-Time Mobile App Simulator */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Real-Time Mobile Simulator</span>
                        <Badge variant="active" size="sm">
                            <Sparkles className="h-3 w-3" /> Live Render Engine
                        </Badge>
                    </div>

                    <div className="relative mx-auto w-full max-w-[340px] rounded-[42px] border-[10px] border-slate-900 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden min-h-[620px] flex flex-col transition-all">
                        {/* Notch */}
                        <div className="w-full bg-slate-900 h-6 flex items-center justify-center">
                            <div className="w-24 h-3 bg-black rounded-full" />
                        </div>

                        {/* Dynamic Header */}
                        <div className="p-4 space-y-3 border-b border-slate-100 dark:border-slate-800" style={{ backgroundColor: primaryColor, color: '#FFF' }}>
                            <div className="flex items-center justify-between">
                                <span className="font-extrabold text-lg tracking-tight">{appName}</span>
                                <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded-full font-bold">Skardu, Lahore</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl text-xs text-white placeholder-white/70">
                                <Search className="h-4 w-4" />
                                <span>Search in {appName}...</span>
                            </div>
                        </div>

                        {/* Dynamic Hero Banner */}
                        <div className="p-4 flex-1 space-y-4 overflow-y-auto">
                            <div className="p-4 rounded-2xl text-white shadow-lg space-y-2 relative overflow-hidden" style={{ backgroundColor: primaryColor }}>
                                <span className="text-[10px] font-bold uppercase bg-white/20 px-2 py-0.5 rounded-full">SPECIAL PROMO</span>
                                <h4 className="text-base font-bold leading-tight">{heroTitle}</h4>
                                <div className="text-sm font-extrabold">{heroPrice}</div>
                            </div>

                            {/* Category Grid */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-slate-100">
                                    <span>Categories</span>
                                    <span className="text-[10px]" style={{ color: primaryColor }}>See all</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center gap-1">
                                        <Smartphone className="h-4 w-4" style={{ color: primaryColor }} />
                                        <span>Mobiles</span>
                                    </div>
                                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center gap-1">
                                        <Car className="h-4 w-4" style={{ color: primaryColor }} />
                                        <span>Vehicles</span>
                                    </div>
                                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center gap-1">
                                        <Home className="h-4 w-4" style={{ color: primaryColor }} />
                                        <span>Property</span>
                                    </div>
                                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center gap-1">
                                        <Grid className="h-4 w-4" style={{ color: primaryColor }} />
                                        <span>More</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mock Product Feed */}
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">Near To Me ({currencySymbol})</span>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-1">
                                        <div className="h-20 rounded-lg bg-slate-200 dark:bg-slate-800" />
                                        <div className="text-[11px] font-bold truncate">iPhone 15 Pro</div>
                                        <div className="text-[10px] font-extrabold" style={{ color: primaryColor }}>{currencySymbol} 345,000</div>
                                    </div>
                                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 space-y-1">
                                        <div className="h-20 rounded-lg bg-slate-200 dark:bg-slate-800" />
                                        <div className="text-[11px] font-bold truncate">Honda Civic 2022</div>
                                        <div className="text-[10px] font-extrabold" style={{ color: primaryColor }}>{currencySymbol} 6.8M</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Tab Bar */}
                        <div className="h-14 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around text-[10px] font-bold">
                            <div className="flex flex-col items-center" style={{ color: primaryColor }}>
                                <Home className="h-4 w-4" />
                                <span>HOME</span>
                            </div>
                            <div className="flex flex-col items-center text-slate-400">
                                <Search className="h-4 w-4" />
                                <span>SEARCH</span>
                            </div>
                            <div className="flex flex-col items-center text-white p-2 rounded-full shadow-md" style={{ backgroundColor: primaryColor }}>
                                <PlusCircle className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col items-center text-slate-400">
                                <MessageSquare className="h-4 w-4" />
                                <span>CHAT</span>
                            </div>
                            <div className="flex flex-col items-center text-slate-400">
                                <User className="h-4 w-4" />
                                <span>PROFILE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
