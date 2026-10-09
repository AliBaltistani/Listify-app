'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Dialog } from '@/components/ui/Dialog';
import {
    LayoutTemplate,
    GripVertical,
    Eye,
    EyeOff,
    CheckCircle2,
    Plus,
    Edit2,
    Trash2,
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
    ]);

    // Modal States
    const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
    const [selectedSec, setSelectedSec] = React.useState<HomeSection | null>(null);

    // Form State
    const [secName, setSecName] = React.useState('');
    const [secType, setSecType] = React.useState('HORIZONTAL_SCROLL');
    const [secItemCount, setSecItemCount] = React.useState('10');

    const handleCreateSection = (e: React.FormEvent) => {
        e.preventDefault();
        const newSec: HomeSection = {
            id: `sec-${Date.now()}`,
            name: secName,
            type: secType,
            enabled: true,
            itemCount: parseInt(secItemCount || '10'),
        };
        setSections([...sections, newSec]);
        toast.success(`Section "${newSec.name}" added to homepage layout!`);
        setIsCreateModalOpen(false);
        setSecName('');
    };

    const handleEditSection = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSec) return;
        setSections((prev) =>
            prev.map((s) =>
                s.id === selectedSec.id
                    ? {
                        ...s,
                        name: secName,
                        type: secType,
                        itemCount: parseInt(secItemCount || '10'),
                    }
                    : s
            )
        );
        toast.success(`Section "${selectedSec.name}" updated!`);
        setIsEditModalOpen(false);
    };

    const handleOpenEdit = (sec: HomeSection) => {
        setSelectedSec(sec);
        setSecName(sec.name);
        setSecType(sec.type);
        setSecItemCount(sec.itemCount.toString());
        setIsEditModalOpen(true);
    };

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
                    <Button variant="outline" size="sm" onClick={() => setIsCreateModalOpen(true)}>
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

                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" onClick={() => handleOpenEdit(sec)}>
                                    <Edit2 className="h-4 w-4" /> Edit
                                </Button>
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

            {/* CREATE SECTION MODAL */}
            <Dialog
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Add Custom Home Section Block"
                description="Create a custom component block to display in the mobile app home screen."
                maxWidth="lg"
            >
                <form onSubmit={handleCreateSection} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Section Display Title</label>
                        <Input
                            placeholder="e.g. Featured Electronics Deals"
                            value={secName}
                            onChange={(e) => setSecName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Block Component Type</label>
                            <select
                                value={secType}
                                onChange={(e) => setSecType(e.target.value)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="HORIZONTAL_SCROLL">Horizontal Product Cards Scroll</option>
                                <option value="TWO_COLUMN_GRID">Two Column Product Grid</option>
                                <option value="PROMO_CAROUSEL">Hero Promotional Banner Carousel</option>
                                <option value="CATEGORY_ICON_GRID">Category Icon Grid</option>
                                <option value="DEALER_CAROUSEL">Verified Dealers Store Banner</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Max Display Limit</label>
                            <Input
                                type="number"
                                value={secItemCount}
                                onChange={(e) => setSecItemCount(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsCreateModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Section Block
                        </Button>
                    </div>
                </form>
            </Dialog>

            {/* EDIT SECTION MODAL */}
            <Dialog
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title={`Edit Section: ${selectedSec?.name}`}
                description="Update layout component parameters."
                maxWidth="lg"
            >
                <form onSubmit={handleEditSection} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Section Display Title</label>
                        <Input
                            value={secName}
                            onChange={(e) => setSecName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Block Component Type</label>
                            <select
                                value={secType}
                                onChange={(e) => setSecType(e.target.value)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="HORIZONTAL_SCROLL">Horizontal Product Cards Scroll</option>
                                <option value="TWO_COLUMN_GRID">Two Column Product Grid</option>
                                <option value="PROMO_CAROUSEL">Hero Promotional Banner Carousel</option>
                                <option value="CATEGORY_ICON_GRID">Category Icon Grid</option>
                                <option value="DEALER_CAROUSEL">Verified Dealers Store Banner</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Max Display Limit</label>
                            <Input
                                type="number"
                                value={secItemCount}
                                onChange={(e) => setSecItemCount(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsEditModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
