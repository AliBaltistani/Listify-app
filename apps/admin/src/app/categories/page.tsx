'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Dialog } from '@/components/ui/Dialog';
import {
    FolderTree,
    Plus,
    Trash2,
    Edit2,
    CheckCircle2,
    Layers,
    Smartphone,
    Car,
    Home,
    Sliders,
    Type,
    ListFilter,
    CheckSquare,
    HelpCircle,
    Hash,
} from 'lucide-react';
import { toast } from 'sonner';

interface FieldSpec {
    id: string;
    label: string;
    key: string;
    type: 'SELECT' | 'TEXT' | 'NUMBER' | 'BOOLEAN';
    required: boolean;
    filterable: boolean;
    options?: string[];
}

interface CategoryNode {
    id: string;
    name: string;
    slug: string;
    icon: string;
    fieldsCount: number;
    subcategories: string[];
}

export default function CategoryBuilderPage() {
    const [categories, setCategories] = React.useState<CategoryNode[]>([
        {
            id: 'cat-mobiles',
            name: 'Mobiles & Tablets',
            slug: 'mobiles-tablets',
            icon: 'Smartphone',
            fieldsCount: 5,
            subcategories: ['Mobile Phones', 'Tablets', 'Smart Watches', 'Accessories'],
        },
        {
            id: 'cat-vehicles',
            name: 'Vehicles & Motors',
            slug: 'vehicles-motors',
            icon: 'Car',
            fieldsCount: 6,
            subcategories: ['Cars', 'Motorcycles', 'Spare Parts', 'Bicycles', 'Commercial Vehicles'],
        },
        {
            id: 'cat-property',
            name: 'Real Estate & Property',
            slug: 'real-estate-property',
            icon: 'Home',
            fieldsCount: 4,
            subcategories: ['Land & Plots', 'Houses for Sale', 'Apartments for Rent', 'Commercial Property'],
        },
    ]);

    const [selectedCatId, setSelectedCatId] = React.useState<string>('cat-mobiles');

    const [fields, setFields] = React.useState<FieldSpec[]>([
        { id: 'f-1', label: 'Brand / Make', key: 'brand', type: 'SELECT', required: true, filterable: true, options: ['Apple', 'Samsung', 'Xiaomi', 'Vivo', 'Oppo', 'Infinix'] },
        { id: 'f-2', label: 'PTA Verification Status', key: 'pta_status', type: 'SELECT', required: true, filterable: true, options: ['PTA Approved', 'Non-PTA / VIP', 'CPID Approved'] },
        { id: 'f-3', label: 'Internal Storage', key: 'storage_gb', type: 'SELECT', required: true, filterable: true, options: ['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'] },
        { id: 'f-4', label: 'RAM Memory Size', key: 'ram_gb', type: 'SELECT', required: false, filterable: true, options: ['4 GB', '6 GB', '8 GB', '12 GB'] },
        { id: 'f-5', label: 'Battery Health Percentage', key: 'battery_health', type: 'NUMBER', required: false, filterable: false },
    ]);

    // Modal States
    const [isCatModalOpen, setIsCatModalOpen] = React.useState(false);
    const [isFieldModalOpen, setIsFieldModalOpen] = React.useState(false);

    // Category Form State
    const [catName, setCatName] = React.useState('');
    const [catSlug, setCatSlug] = React.useState('');
    const [catIcon, setCatIcon] = React.useState('Smartphone');

    // Field Form State
    const [fieldLabel, setFieldLabel] = React.useState('');
    const [fieldKey, setFieldKey] = React.useState('');
    const [fieldType, setFieldType] = React.useState<'SELECT' | 'TEXT' | 'NUMBER' | 'BOOLEAN'>('SELECT');
    const [fieldOptions, setFieldOptions] = React.useState('');
    const [isRequired, setIsRequired] = React.useState(true);
    const [isFilterable, setIsFilterable] = React.useState(true);

    const handleCreateCategory = (e: React.FormEvent) => {
        e.preventDefault();
        const newCat: CategoryNode = {
            id: `cat-${Date.now()}`,
            name: catName,
            slug: catSlug || catName.toLowerCase().replace(/\s+/g, '-'),
            icon: catIcon,
            fieldsCount: 0,
            subcategories: [],
        };
        setCategories([...categories, newCat]);
        setSelectedCatId(newCat.id);
        toast.success(`Category "${newCat.name}" created!`);
        setIsCatModalOpen(false);
        setCatName('');
        setCatSlug('');
    };

    const handleCreateField = (e: React.FormEvent) => {
        e.preventDefault();
        const opts = fieldOptions ? fieldOptions.split(',').map((s) => s.trim()) : undefined;
        const newF: FieldSpec = {
            id: `f-${Date.now()}`,
            label: fieldLabel,
            key: fieldKey || fieldLabel.toLowerCase().replace(/\s+/g, '_'),
            type: fieldType,
            required: isRequired,
            filterable: isFilterable,
            options: opts,
        };
        setFields([...fields, newF]);
        toast.success(`Dynamic field "${newF.label}" added to schema!`);
        setIsFieldModalOpen(false);
        setFieldLabel('');
        setFieldKey('');
        setFieldOptions('');
    };

    const handleDeleteField = (id: string) => {
        setFields(fields.filter((f) => f.id !== id));
        toast.info('Field removed from schema.');
    };

    const activeCategory = categories.find((c) => c.id === selectedCatId) || categories[0];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <FolderTree className="h-6 w-6 text-listify-orange" />
                        Dynamic Category & Field Builder
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Define dynamic product specifications, form attributes, and search filters with zero hardcoding.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" onClick={() => setIsCatModalOpen(true)}>
                        <Plus className="h-4 w-4" /> Add New Category
                    </Button>
                    <Button variant="primary" onClick={() => setIsFieldModalOpen(true)} className="shadow-lg shadow-listify-orange/30">
                        <Plus className="h-4 w-4" /> Add Field Specification
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Category Navigation Tree */}
                <div className="lg:col-span-4 space-y-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-3">
                            <CardTitle className="text-base font-bold">Categories</CardTitle>
                            <Badge variant="active" size="sm">{categories.length} Top Categories</Badge>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    onClick={() => setSelectedCatId(cat.id)}
                                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${selectedCatId === cat.id
                                            ? 'bg-listify-orange/10 border-listify-orange text-listify-orange shadow-sm'
                                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {cat.icon === 'Smartphone' && <Smartphone className="h-5 w-5" />}
                                        {cat.icon === 'Car' && <Car className="h-5 w-5" />}
                                        {cat.icon === 'Home' && <Home className="h-5 w-5" />}
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{cat.name}</h4>
                                            <p className="text-[10px] text-slate-400">{cat.subcategories.length} subcategories</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Dynamic Fields Schema Editor */}
                <div className="lg:col-span-8 space-y-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-base font-bold flex items-center gap-2">
                                    <Sliders className="h-5 w-5 text-listify-orange" />
                                    Dynamic Attribute Fields for "{activeCategory?.name}"
                                </CardTitle>
                                <CardDescription>
                                    These form fields appear in the mobile app posting wizard & search filter sheet.
                                </CardDescription>
                            </div>

                            <Button variant="primary" size="sm" onClick={() => setIsFieldModalOpen(true)}>
                                <Plus className="h-4 w-4" /> Add Attribute Field
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-3">
                            {fields.map((field) => (
                                <div
                                    key={field.id}
                                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{field.label}</span>
                                            <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                                                {field.key}
                                            </Badge>
                                            <Badge variant="default" size="sm">
                                                {field.type}
                                            </Badge>
                                        </div>

                                        {field.options && (
                                            <div className="flex flex-wrap gap-1 pt-1">
                                                {field.options.map((opt, oIdx) => (
                                                    <span key={oIdx} className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] text-slate-600 dark:text-slate-400">
                                                        {opt}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                                            {field.required && <Badge variant="verified" size="sm">Required</Badge>}
                                            {field.filterable && <Badge variant="active" size="sm">Search Filter</Badge>}
                                        </div>

                                        <Button variant="ghost" size="sm" onClick={() => handleDeleteField(field.id)}>
                                            <Trash2 className="h-4 w-4 text-rose-500" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* CREATE CATEGORY MODAL */}
            <Dialog
                isOpen={isCatModalOpen}
                onClose={() => setIsCatModalOpen(false)}
                title="Add New Category"
                description="Create a top-level category node for the marketplace."
                maxWidth="md"
            >
                <form onSubmit={handleCreateCategory} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Category Name</label>
                        <Input
                            placeholder="e.g. Fashion & Apparel"
                            value={catName}
                            onChange={(e) => setCatName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Category Slug</label>
                        <Input
                            placeholder="e.g. fashion-apparel"
                            value={catSlug}
                            onChange={(e) => setCatSlug(e.target.value)}
                            className="font-mono text-xs"
                        />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsCatModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Category
                        </Button>
                    </div>
                </form>
            </Dialog>

            {/* CREATE DYNAMIC FIELD MODAL */}
            <Dialog
                isOpen={isFieldModalOpen}
                onClose={() => setIsFieldModalOpen(false)}
                title={`Add Dynamic Field Spec to ${activeCategory?.name}`}
                description="Define custom specification attribute fetched dynamically by the mobile app."
                maxWidth="lg"
            >
                <form onSubmit={handleCreateField} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Field Label Name</label>
                        <Input
                            placeholder="e.g. PTA Status or Transmission"
                            value={fieldLabel}
                            onChange={(e) => setFieldLabel(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Technical Key</label>
                            <Input
                                placeholder="e.g. pta_status"
                                value={fieldKey}
                                onChange={(e) => setFieldKey(e.target.value)}
                                className="font-mono text-xs"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Field Data Type</label>
                            <select
                                value={fieldType}
                                onChange={(e) => setFieldType(e.target.value as any)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="SELECT">Dropdown Select (Options list)</option>
                                <option value="TEXT">Freeform Text Input</option>
                                <option value="NUMBER">Numeric Input</option>
                                <option value="BOOLEAN">Yes / No Switch Toggle</option>
                            </select>
                        </div>
                    </div>

                    {fieldType === 'SELECT' && (
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Dropdown Options (Comma Separated)</label>
                            <Input
                                placeholder="e.g. PTA Approved, Non-PTA, CPID Approved"
                                value={fieldOptions}
                                onChange={(e) => setFieldOptions(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div className="flex items-center gap-6 pt-2">
                        <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isRequired}
                                onChange={(e) => setIsRequired(e.target.checked)}
                                className="rounded border-slate-300 text-listify-orange focus:ring-listify-orange"
                            />
                            <span>Required Mandatory Field</span>
                        </label>

                        <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isFilterable}
                                onChange={(e) => setIsFilterable(e.target.checked)}
                                className="rounded border-slate-300 text-listify-orange focus:ring-listify-orange"
                            />
                            <span>Enable in Mobile Search Filter Sheet</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsFieldModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Dynamic Field
                        </Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
