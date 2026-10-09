'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Dialog } from '@/components/ui/Dialog';
import {
    MapPin,
    Plus,
    Search,
    Building2,
    Edit2,
    Trash2,
    Globe,
    Navigation,
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
            id: 'loc-skd',
            cityName: 'Skardu',
            province: 'Gilgit-Baltistan',
            totalListings: 850,
            popularSectors: ['Main Bazaar', 'Shangrila Road', 'Kachura', 'Airport Road'],
            active: true,
        },
    ]);

    // Modal States
    const [isCityModalOpen, setIsCityModalOpen] = React.useState(false);
    const [isSectorModalOpen, setIsSectorModalOpen] = React.useState(false);
    const [selectedCityForSector, setSelectedCityForSector] = React.useState<CityRegion | null>(null);

    // City Form State
    const [newCityName, setNewCityName] = React.useState('');
    const [newProvince, setNewProvince] = React.useState('Punjab');

    // Sector Form State
    const [newSectorName, setNewSectorName] = React.useState('');

    const handleCreateCity = (e: React.FormEvent) => {
        e.preventDefault();
        const newC: CityRegion = {
            id: `loc-${Date.now()}`,
            cityName: newCityName,
            province: newProvince,
            totalListings: 0,
            popularSectors: ['Main Area', 'Central Sector'],
            active: true,
        };
        setCities([...cities, newC]);
        toast.success(`City "${newC.cityName}" added to Listify regions!`);
        setIsCityModalOpen(false);
        setNewCityName('');
    };

    const handleAddSector = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCityForSector) return;
        setCities((prev) =>
            prev.map((c) =>
                c.id === selectedCityForSector.id
                    ? { ...c, popularSectors: [...c.popularSectors, newSectorName] }
                    : c
            )
        );
        toast.success(`Added sector "${newSectorName}" to ${selectedCityForSector.cityName}!`);
        setIsSectorModalOpen(false);
        setNewSectorName('');
    };

    const handleToggleCity = (id: string) => {
        setCities((prev) =>
            prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
        );
        toast.info('Updated city visibility status.');
    };

    const filteredCities = cities.filter(
        (c) =>
            (selectedProvince === 'ALL' || c.province === selectedProvince) &&
            (c.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.province.toLowerCase().includes(searchQuery.toLowerCase()))
    );

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

                <Button variant="primary" onClick={() => setIsCityModalOpen(true)} className="shadow-lg shadow-listify-orange/30">
                    <Plus className="h-4 w-4" />
                    Add City / Territory
                </Button>
            </div>

            {/* Filter Bar */}
            <Card className="p-4 space-y-4">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto">
                        {['ALL', 'Punjab', 'Sindh', 'Gilgit-Baltistan', 'Federal Capital (ICT)'].map((prov) => (
                            <button
                                key={prov}
                                onClick={() => setSelectedProvince(prov)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedProvince === prov
                                        ? 'bg-listify-orange text-white'
                                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                                    }`}
                            >
                                {prov}
                            </button>
                        ))}
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
                                <span className="text-[11px] font-bold text-slate-500 uppercase">Popular Sectors:</span>
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
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setSelectedCityForSector(city);
                                        setIsSectorModalOpen(true);
                                    }}
                                >
                                    <Plus className="h-3.5 w-3.5" /> Add Sector
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* CREATE CITY MODAL */}
            <Dialog
                isOpen={isCityModalOpen}
                onClose={() => setIsCityModalOpen(false)}
                title="Add New City / Territory"
                description="Register a new city boundary for marketplace listings."
                maxWidth="md"
            >
                <form onSubmit={handleCreateCity} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">City Name</label>
                        <Input
                            placeholder="e.g. Multan or Faisalabad"
                            value={newCityName}
                            onChange={(e) => setNewCityName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Province / Administrative Region</label>
                        <select
                            value={newProvince}
                            onChange={(e) => setNewProvince(e.target.value)}
                            className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                        >
                            <option value="Punjab">Punjab</option>
                            <option value="Sindh">Sindh</option>
                            <option value="Khyber Pakhtunkhwa (KPK)">Khyber Pakhtunkhwa (KPK)</option>
                            <option value="Balochistan">Balochistan</option>
                            <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                            <option value="Federal Capital (ICT)">Federal Capital (ICT)</option>
                            <option value="Azad Jammu & Kashmir (AJK)">Azad Jammu & Kashmir (AJK)</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsCityModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save City
                        </Button>
                    </div>
                </form>
            </Dialog>

            {/* ADD SECTOR MODAL */}
            <Dialog
                isOpen={isSectorModalOpen}
                onClose={() => setIsSectorModalOpen(false)}
                title={`Add Neighborhood Sector to ${selectedCityForSector?.cityName}`}
                description="Add sub-area location tag for precise buyer filtering."
                maxWidth="md"
            >
                <form onSubmit={handleAddSector} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Sector / Area Name</label>
                        <Input
                            placeholder="e.g. Johar Town Phase 2 or Bahria Town Sector F"
                            value={newSectorName}
                            onChange={(e) => setNewSectorName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsSectorModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Add Sector Tag
                        </Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
