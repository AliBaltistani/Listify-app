'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
    FolderTree,
    Plus,
    Trash2,
    Edit2,
    ChevronRight,
    GripVertical,
    Smartphone,
    Car,
    Home as HomeIcon,
    Shirt,
    Sparkles,
    CheckCircle2,
    Sliders,
    Type,
    List,
    CheckSquare,
    ToggleLeft,
} from 'lucide-react';
import { toast } from 'sonner';

interface CategoryField {
    id: string;
    name: string;
    key: string;
    type: 'TEXT' | 'NUMBER' | 'SELECT' | 'MULTISELECT' | 'TOGGLE';
    required: boolean;
    filterable: boolean;
    options?: string[];
}

interface Category {
    id: string;
    name: string;
    icon: string;
    subcategories: string[];
    fields: CategoryField[];
}

export default function CategoriesBuilderPage() {
    const [categories, setCategories] = React.useState<Category[]>([
        {
            id: 'cat-mobiles',
            name: 'Mobiles & Tablets',
            icon: 'Smartphone',
            subcategories: ['Smartphones', 'Tablets', 'Smart Watches', 'Accessories'],
            fields: [
                { id: 'f1', name: 'Brand', key: 'brand', type: 'SELECT', required: true, filterable: true, options: ['Apple', 'Samsung', 'Xiaomi', 'Vivo', 'Oppo', 'OnePlus'] },
                { id: 'f2', name: 'Model', key: 'model', type: 'TEXT', required: true, filterable: true },
                { id: 'f3', name: 'Storage Capacity', key: 'storage', type: 'SELECT', required: true, filterable: true, options: ['64GB', '128GB', '256GB', '512GB', '1TB'] },
                { id: 'f4', name: 'PTA Status', key: 'pta_status', type: 'SELECT', required: true, filterable: true, options: ['Approved', 'Non-PTA', 'CPID Approved', 'Passport Registered'] },
                { id: 'f5', name: 'Condition', key: 'condition', type: 'SELECT', required: true, filterable: true, options: ['New', 'Used (Like New)', 'Used (Good)', 'Refurbished'] },
            ],
        },
        {
            id: 'cat-vehicles',
            name: 'Vehicles & Cars',
            icon: 'Car',
            subcategories: ['Cars', 'Bikes & Motorcycles', 'Auto Parts', 'Commercial Vehicles'],
            fields: [
                { id: 'f6', name: 'Make', key: 'make', type: 'SELECT', required: true, filterable: true, options: ['Honda', 'Toyota', 'Suzuki', 'Hyundai', 'KIA', 'MG'] },
                { id: 'f7', name: 'Model Year', key: 'year', type: 'NUMBER', required: true, filterable: true },
                { id: 'f8', name: 'Mileage (km)', key: 'mileage', type: 'NUMBER', required: true, filterable: true },
                { id: 'f9', name: 'Fuel Type', key: 'fuel', type: 'SELECT', required: true, filterable: true, options: ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'CNG'] },
                { id: 'f10', name: 'Transmission', key: 'transmission', type: 'SELECT', required: true, filterable: true, options: ['Automatic', 'Manual'] },
            ],
        },
        {
            id: 'cat-property',
            name: 'Property & Rent',
            icon: 'Home',
            subcategories: ['Houses for Sale', 'Flats for Rent', 'Plots & Land', 'Commercial Space'],
            fields: [
                { id: 'f11', name: 'Property Type', key: 'property_type', type: 'SELECT', required: true, filterable: true, options: ['House', 'Flat / Apartment', 'Commercial Office', 'Plot'] },
                { id: 'f12', name: 'Area Size', key: 'area', type: 'TEXT', required: true, filterable: true },
                { id: 'f13', name: 'Bedrooms', key: 'bedrooms', type: 'SELECT', required: true, filterable: true, options: ['1', '2', '3', '4', '5+'] },
                { id: 'f14', name: 'Bathrooms', key: 'bathrooms', type: 'SELECT', required: true, filterable: true, options: ['1', '2', '3', '4', '5+'] },
            ],
        },
    ]);

    const [selectedCategoryId, setSelectedCategoryId] = React.useState<string>('cat-mobiles');

    const selectedCategory = categories.find((c) => c.id === selectedCategoryId) || categories[0];

    const handleAddField = () => {
        const newField: CategoryField = {
            id: `f-${Date.now()}`,
            name: 'New Custom Field',
            key: 'new_field',
            type: 'TEXT',
            required: false,
            filterable: true,
        };

        setCategories((prev) =>
            prev.map((cat) =>
                cat.id === selectedCategoryId ? { ...cat, fields: [...cat.fields, newField] } : cat
            )
        );
        toast.success('Added new custom field to schema!');
    };

    const handleDeleteField = (fieldId: string) => {
        setCategories((prev) =>
            prev.map((cat) =>
                cat.id === selectedCategoryId
                    ? { ...cat, fields: cat.fields.filter((f) => f.id !== fieldId) }
                    : cat
            )
        );
        toast.error('Field removed from category schema.');
    };

    const handleSaveSchema = () => {
        toast.success(`Category schema for "${selectedCategory.name}" saved & deployed to Mobile App!`);
    };

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
                        Define custom form specification schemas per category without writing any frontend code.
                    </p>
                </div>

                <Button variant="primary" onClick={handleSaveSchema} className="shadow-lg shadow-listify-orange/30">
                    <CheckCircle2 className="h-4 w-4" />
                    Save Schema to API
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Category Hierarchy Selector */}
                <Card className="lg:col-span-1">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-base font-bold">Categories</CardTitle>
                        <Button variant="ghost" size="icon">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {categories.map((cat) => {
                            const isSelected = cat.id === selectedCategoryId;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategoryId(cat.id)}
                                    className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${isSelected
                                            ? 'bg-listify-orange text-white shadow-md shadow-listify-orange/20 font-bold'
                                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <FolderTree className="h-4 w-4" />
                                        <div>
                                            <div className="text-sm font-semibold">{cat.name}</div>
                                            <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                                                {cat.fields.length} dynamic fields
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                                </button>
                            );
                        })}
                    </CardContent>
                </Card>

                {/* Right Column: Visual Drag & Drop Dynamic Field Builder */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle className="text-base font-bold">
                                Field Schema: {selectedCategory.name}
                            </CardTitle>
                            <CardDescription>
                                Form fields dynamically rendered on mobile Post-An-Ad wizard & filter sheets.
                            </CardDescription>
                        </div>

                        <Button variant="outline" size="sm" onClick={handleAddField}>
                            <Plus className="h-4 w-4" />
                            Add Custom Field
                        </Button>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {selectedCategory.fields.map((field, idx) => (
                            <div
                                key={field.id}
                                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 hover:border-listify-orange/50 transition-all group"
                            >
                                {/* Drag Handle */}
                                <div className="mt-2 text-slate-400 cursor-grab active:cursor-grabbing hover:text-slate-600">
                                    <GripVertical className="h-5 w-5" />
                                </div>

                                {/* Field Details Editor */}
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div>
                                        <label className="text-[11px] font-bold text-slate-500 uppercase">Field Label</label>
                                        <Input
                                            value={field.name}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setCategories((prev) =>
                                                    prev.map((c) =>
                                                        c.id === selectedCategoryId
                                                            ? {
                                                                ...c,
                                                                fields: c.fields.map((f) => (f.id === field.id ? { ...f, name: val } : f)),
                                                            }
                                                            : c
                                                    )
                                                );
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-500 uppercase">Field Key</label>
                                        <Input value={field.key} readOnly className="font-mono text-xs text-slate-400 bg-slate-100 dark:bg-slate-900" />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-500 uppercase">Field Type</label>
                                        <select
                                            value={field.type}
                                            onChange={(e) => {
                                                const val = e.target.value as any;
                                                setCategories((prev) =>
                                                    prev.map((c) =>
                                                        c.id === selectedCategoryId
                                                            ? {
                                                                ...c,
                                                                fields: c.fields.map((f) => (f.id === field.id ? { ...f, type: val } : f)),
                                                            }
                                                            : c
                                                    )
                                                );
                                            }}
                                            className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                                        >
                                            <option value="SELECT">Select Dropdown</option>
                                            <option value="TEXT">Short Text</option>
                                            <option value="NUMBER">Number Input</option>
                                            <option value="MULTISELECT">Multi-Select Checkboxes</option>
                                            <option value="TOGGLE">Yes / No Switch</option>
                                        </select>
                                    </div>

                                    {/* Options List if SELECT */}
                                    {field.options && (
                                        <div className="sm:col-span-3 text-xs space-y-1">
                                            <span className="font-bold text-slate-500">Allowed Options:</span>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {field.options.map((opt, oIdx) => (
                                                    <span key={oIdx} className="px-2 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                                                        {opt}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Toggles: Required & Filterable */}
                                    <div className="sm:col-span-3 flex items-center gap-6 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                                        <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={field.required}
                                                onChange={(e) => {
                                                    const val = e.target.checked;
                                                    setCategories((prev) =>
                                                        prev.map((c) =>
                                                            c.id === selectedCategoryId
                                                                ? {
                                                                    ...c,
                                                                    fields: c.fields.map((f) => (f.id === field.id ? { ...f, required: val } : f)),
                                                                }
                                                                : c
                                                        )
                                                    );
                                                }}
                                                className="rounded border-slate-300 text-listify-orange focus:ring-listify-orange"
                                            />
                                            <span>Required Field</span>
                                        </label>

                                        <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={field.filterable}
                                                onChange={(e) => {
                                                    const val = e.target.checked;
                                                    setCategories((prev) =>
                                                        prev.map((c) =>
                                                            c.id === selectedCategoryId
                                                                ? {
                                                                    ...c,
                                                                    fields: c.fields.map((f) => (f.id === field.id ? { ...f, filterable: val } : f)),
                                                                }
                                                                : c
                                                        )
                                                    );
                                                }}
                                                className="rounded border-slate-300 text-listify-orange focus:ring-listify-orange"
                                            />
                                            <span className="text-listify-orange">Add to Search Filter Sheet</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => handleDeleteField(field.id)}
                                    className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                                    title="Remove Field"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
