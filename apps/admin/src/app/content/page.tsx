'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
    LayoutTemplate,
    GripVertical,
    Eye,
    EyeOff,
    CheckCircle2,
    Plus,
    Sparkles,
    Sliders,
} from 'lucide-react';
import { toast } from 'sonner';

interface HomeSection {
    id: string;
    name: string;
    type: string;
    enabled: boolean;
    itemCount: number;
}

export default function HomepageCMSPage() {
    const [sections, setSections] = React.useState<HomeSection[]>([
        { id: 'sec-hero', name: 'Hero Carousel Banners', type: 'PROMO_CAROUSEL', enabled: true, itemCount: 3 },
        { id: 'sec-cats', name: 'Top Category Grid', type: 'CATEGORY_ICON_GRID', enabled: true, itemCount: 8 },
        { id: 'sec-promoted', name: 'Featured & Promoted Ads', type: 'HORIZONTAL_SCROLL', enabled: true, itemCount: 10 },
        { id: 'sec-near', name: 'Near To Me (GPS Radius)', type: 'TWO_COLUMN_GRID', enabled: true, itemCount: 20 },
        { id: 'sec-dealers', name: 'Verified Dealer Stores', type: 'DEALER_CAROUSEL', enabled: true, itemCount: 5 },
        { id: 'sec-recent', name: 'Recently Added Ads', type: 'INFINITE_LIST', enabled: true, itemCount: 50 },
    ]);

    const toggleSection = (id: string) => {
        setSections((prev) =>
            prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
        );
    };

    const handleSaveCMS = () => {
        toast.success('Homepage section layout saved! Mobile app home feed updated instantly.');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <LayoutTemplate className="h-6 w-6 text-listify-orange" />
                        Homepage Section Layout CMS
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Reorder and toggle mobile app home feed components dynamically without app store deployment.
                    </p>
                </div>

                <Button variant="primary" onClick={handleSaveCMS} className="shadow-lg shadow-listify-orange/30">
                    <CheckCircle2 className="h-4 w-4" />
                    Publish Homepage Layout
                </Button>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-base font-bold">Active Mobile Home Feed Sections</CardTitle>
                        <CardDescription>Drag handles to adjust display order on mobile app landing screen</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4" /> Add Custom Section Block
                    </Button>
                </CardHeader>
                <CardContent className="space-y-3">
                    {sections.map((sec, idx) => (
                        <div
                            key={sec.id}
                            className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${sec.enabled
                                    ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                                    : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200/60 dark:border-slate-800/60 opacity-60'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-slate-400 cursor-grab hover:text-slate-600">
                                    <GripVertical className="h-5 w-5" />
                                </div>
                                <div className="w-8 h-8 rounded-xl bg-listify-orange/10 text-listify-orange font-bold text-xs flex items-center justify-center">
                                    #{idx + 1}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                        {sec.name}
                                        <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                                            {sec.type}
                                        </Badge>
                                    </h4>
                                    <p className="text-xs text-slate-400">Displaying {sec.itemCount} items max</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => toggleSection(sec.id)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${sec.enabled
                                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                                            : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                        }`}
                                >
                                    {sec.enabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                    <span>{sec.enabled ? 'Visible' : 'Hidden'}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
