'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
    MapPin,
    Plus,
    Search,
    CheckCircle2,
    ChevronRight,
    Globe,
    Building2,
    Navigation,
    Edit2,
    Trash2,
} from 'lucide-react';
import { toast } from 'sonner';

interface CityRegion {
    id: string;
    cityName: string;
    province: string;
    totalListings: number;
    popularSectors: string[];
    active: boolean;
}

export default function LocationsPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedProvince, setSelectedProvince] = React.useState<string>('ALL');

    const [cities, setCities] = React.useState<CityRegion[]>([
        {
            id: 'loc-lhr',
            cityName: 'Lahore',
            province: 'Punjab',
            totalListings: 12450,
            popularSectors: ['DHA Phase 1-9', 'Gulberg I-III', 'Johar Town', 'Model Town', 'Bahria Town'],
            active: true,
        },
        {
            id: 'loc-khi',
            cityName: 'Karachi',
            province: 'Sindh',
            totalListings: 9820,
            popularSectors: ['DHA Phase 1-8', 'Clifton', 'PECHS', 'Gulshan-e-Iqbal', 'North Nazimabad'],
            active: true,
        },
        {
            id: 'loc-isb',
            cityName: 'Islamabad',
            province: 'Federal Capital (ICT)',
            totalListings: 5600,
            popularSectors: ['F-6', 'F-7', 'F-10', 'G-11', 'E-11', 'Bahria Town Enclave'],
            active: true,
        },
        {
            id: 'loc-rwp',
            cityName: 'Rawalpindi',
            province: 'Punjab',
            totalListings: 3400,
            popularSectors: ['Saddar', 'Satellite Town', 'Bahria Town Phase 1-8', 'Chaklala Scheme 3'],
            active: true,
        },
        {
            id: 'loc-skd',
            cityName: 'Skardu',
            province: 'Gilgit-Baltistan',
            totalListings: 850,
            popularSectors: ['Main Bazaar', 'Shangrila Road', 'Kachura', 'Airport Road'],
            active: true,
        },
        {
            id: 'loc-pew',
            cityName: 'Peshawar',
            province: 'Khyber Pakhtunkhwa (KPK)',
            totalListings: 2100,
            popularSectors: ['Hayatabad Phase 1-7', 'University Road', 'University Town'],
            active: true,
        },
    ]);

    const filteredCities = cities.filter(
        (c) =>
            (selectedProvince === 'ALL' || c.province === selectedProvince) &&
            (c.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.province.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleAddCity = () => {
        toast.success('Added new location zone!');
    };

    const handleToggleCity = (id: string) => {
        setCities((prev) =>
            prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
        );
        toast.info('Updated city visibility status.');
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-listify-orange" />
                        Locations & Regions Engine
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Manage supported Pakistan provinces, major cities, and neighborhood sector hierarchies.
                    </p>
                </div>

                <Button variant="primary" onClick={handleAddCity} className="shadow-lg shadow-listify-orange/30">
                    <Plus className="h-4 w-4" />
                    Add City / Territory
                </Button>
            </div>

            {/* Filter Bar */}
            <Card className="p-4 space-y-4">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto">
                        <button
                            onClick={() => setSelectedProvince('ALL')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedProvince === 'ALL'
                                    ? 'bg-listify-orange text-white'
                                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                }`}
                        >
                            All Regions
                        </button>
                        <button
                            onClick={() => setSelectedProvince('Punjab')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedProvince === 'Punjab'
                                    ? 'bg-listify-orange text-white'
                                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                }`}
                        >
                            Punjab
                        </button>
                        <button
                            onClick={() => setSelectedProvince('Sindh')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedProvince === 'Sindh'
                                    ? 'bg-listify-orange text-white'
                                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                }`}
                        >
                            Sindh
                        </button>
                        <button
                            onClick={() => setSelectedProvince('Gilgit-Baltistan')}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedProvince === 'Gilgit-Baltistan'
                                    ? 'bg-listify-orange text-white'
                                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                }`}
                        >
                            Gilgit-Baltistan
                        </button>
                    </div>

                    <div className="w-full md:w-64">
                        <Input
                            placeholder="Search city or province..."
                            icon={<Search className="h-4 w-4" />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Cities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {filteredCities.map((city) => (
                        <div
                            key={city.id}
                            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-sm hover:border-listify-orange/50 transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                        <Building2 className="h-5 w-5 text-listify-orange" />
                                        {city.cityName}
                                    </h3>
                                    <p className="text-xs text-slate-400">{city.province}</p>
                                </div>
                                <Badge variant={city.active ? 'active' : 'banned'} size="sm">
                                    {city.active ? 'ACTIVE' : 'DISABLED'}
                                </Badge>
                            </div>

                            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
                                <span className="text-slate-500 font-medium">Active Ads Volume:</span>
                                <span className="font-extrabold text-slate-900 dark:text-slate-100">{city.totalListings.toLocaleString()} ads</span>
                            </div>

                            <div className="space-y-1.5">
                                <span className="text-[11px] font-bold text-slate-500 uppercase">Popular Neighborhoods:</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {city.popularSectors.map((sector, sIdx) => (
                                        <span key={sIdx} className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                                            {sector}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-2 flex items-center justify-between">
                                <Button variant="ghost" size="sm" onClick={() => handleToggleCity(city.id)}>
                                    {city.active ? 'Deactivate' : 'Enable'}
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Edit2 className="h-3.5 w-3.5" /> Edit Sectors
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
