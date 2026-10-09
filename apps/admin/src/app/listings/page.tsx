'use client';

import * as React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { Sheet } from '@/components/ui/Sheet';
import { Dialog } from '@/components/ui/Dialog';
import {
    Search,
    CheckCircle2,
    XCircle,
    Eye,
    Plus,
    ShieldCheck,
    Smartphone,
    ExternalLink,
    Edit2,
    Upload,
    DollarSign,
    Tag,
    MapPin,
    User,
} from 'lucide-react';
import { toast } from 'sonner';

interface ListingItem {
    id: string;
    title: string;
    category: string;
    price: string;
    sellerName: string;
    sellerVerified: boolean;
    city: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    riskScore: 'LOW' | 'HIGH';
    image: string;
    date: string;
}

export default function ListingsPage() {
    const [activeTab, setActiveTab] = React.useState<'PENDING' | 'APPROVED' | 'REJECTED'>('PENDING');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedListing, setSelectedListing] = React.useState<ListingItem | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

    // Form State
    const [newTitle, setNewTitle] = React.useState('');
    const [newCategory, setNewCategory] = React.useState('Mobiles & Tablets');
    const [newPrice, setNewPrice] = React.useState('');
    const [newCity, setNewCity] = React.useState('Lahore');
    const [newSeller, setNewSeller] = React.useState('Verified Official Store');
    const [newDescription, setNewDescription] = React.useState('');
    const [isPromoted, setIsPromoted] = React.useState(true);

    const [listings, setListings] = React.useState<ListingItem[]>([
        {
            id: 'LST-9001',
            title: 'iPhone 15 Pro Max 256GB Natural Titanium (PTA Approved)',
            category: 'Mobiles & Tablets',
            price: 'PKR 345,000',
            sellerName: 'Hamza Khan',
            sellerVerified: true,
            city: 'Lahore',
            status: 'PENDING',
            riskScore: 'LOW',
            image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
            date: '10 mins ago',
        },
        {
            id: 'LST-9002',
            title: 'Honda Civic RS 1.5 Turbo 2023 Unregistered Black',
            category: 'Vehicles & Motors',
            price: 'PKR 8,450,000',
            sellerName: 'QuickMotors PK',
            sellerVerified: true,
            city: 'Karachi',
            status: 'PENDING',
            riskScore: 'LOW',
            image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500',
            date: '25 mins ago',
        },
        {
            id: 'LST-8995',
            title: 'DHA Phase 6 1 Kanal Luxury Modern Villa',
            category: 'Real Estate & Property',
            price: 'PKR 75,000,000',
            sellerName: 'DHA Estate Agency',
            sellerVerified: true,
            city: 'Lahore',
            status: 'APPROVED',
            riskScore: 'LOW',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500',
            date: '1 hour ago',
        },
    ]);

    const filteredListings = listings.filter(
        (l) =>
            l.status === activeTab &&
            (l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                l.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                l.sellerName.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleInspect = (item: ListingItem) => {
        setSelectedListing(item);
        setIsDrawerOpen(true);
    };

    const handleOpenEdit = (item: ListingItem) => {
        setSelectedListing(item);
        setNewTitle(item.title);
        setNewPrice(item.price.replace('PKR ', ''));
        setNewCategory(item.category);
        setNewCity(item.city);
        setIsEditModalOpen(true);
    };

    const handleCreateListing = (e: React.FormEvent) => {
        e.preventDefault();
        const created: ListingItem = {
            id: `LST-${Math.floor(1000 + Math.random() * 9000)}`,
            title: newTitle || 'Untitled Listing',
            category: newCategory,
            price: `PKR ${parseInt(newPrice || '0').toLocaleString()}`,
            sellerName: newSeller,
            sellerVerified: true,
            city: newCity,
            status: 'APPROVED',
            riskScore: 'LOW',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
            date: 'Just now',
        };

        setListings([created, ...listings]);
        toast.success(`Admin Listing ${created.id} created & published live!`);
        setIsCreateModalOpen(false);
        setNewTitle('');
        setNewPrice('');
    };

    const handleSaveEdit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedListing) return;
        setListings((prev) =>
            prev.map((l) =>
                l.id === selectedListing.id
                    ? {
                        ...l,
                        title: newTitle,
                        price: `PKR ${newPrice}`,
                        category: newCategory,
                        city: newCity,
                    }
                    : l
            )
        );
        toast.success(`Listing ${selectedListing.id} updated!`);
        setIsEditModalOpen(false);
    };

    const handleApprove = (id: string) => {
        setListings((prev) =>
            prev.map((l) => (l.id === id ? { ...l, status: 'APPROVED' } : l))
        );
        toast.success(`Listing ${id} approved & published!`);
        setIsDrawerOpen(false);
    };

    const handleReject = (id: string) => {
        setListings((prev) =>
            prev.map((l) => (l.id === id ? { ...l, status: 'REJECTED' } : l))
        );
        toast.error(`Listing ${id} rejected.`);
        setIsDrawerOpen(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Tag className="h-6 w-6 text-listify-orange" />
                        Listing Moderation & Catalog Queue
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Review user ads, create official admin featured listings, and manage marketplace catalog items.
                    </p>
                </div>

                <Button
                    variant="primary"
                    onClick={() => setIsCreateModalOpen(true)}
                    className="shadow-lg shadow-listify-orange/30"
                >
                    <Plus className="h-4 w-4" />
                    Create Admin Listing
                </Button>
            </div>

            {/* Main Table Card */}
            <Card className="p-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setActiveTab('PENDING')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'PENDING'
                                    ? 'bg-listify-orange text-white shadow-md shadow-listify-orange/20'
                                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            Pending Approval ({listings.filter((l) => l.status === 'PENDING').length})
                        </button>
                        <button
                            onClick={() => setActiveTab('APPROVED')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'APPROVED'
                                    ? 'bg-listify-orange text-white shadow-md shadow-listify-orange/20'
                                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            Published Ads ({listings.filter((l) => l.status === 'APPROVED').length})
                        </button>
                        <button
                            onClick={() => setActiveTab('REJECTED')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'REJECTED'
                                    ? 'bg-listify-orange text-white shadow-md shadow-listify-orange/20'
                                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            Rejected Queue ({listings.filter((l) => l.status === 'REJECTED').length})
                        </button>
                    </div>

                    <div className="w-full sm:w-72">
                        <Input
                            placeholder="Search by ID, title or seller..."
                            icon={<Search className="h-4 w-4" />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Data Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Listing ID & Product</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Seller Account</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredListings.map((item) => (
                            <TableRow key={item.id} className="cursor-pointer" onClick={() => handleInspect(item)}>
                                <TableCell className="max-w-xs">
                                    <div className="flex items-center gap-3">
                                        <img src={item.image} className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-800" />
                                        <div className="truncate">
                                            <div className="font-mono text-[11px] text-slate-400 font-bold">{item.id}</div>
                                            <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{item.title}</div>
                                            <div className="text-[10px] text-slate-400">{item.date}</div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                                        {item.category}
                                    </Badge>
                                </TableCell>

                                <TableCell className="font-extrabold text-xs text-listify-orange">{item.price}</TableCell>

                                <TableCell>
                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                                        <span>{item.sellerName}</span>
                                        {item.sellerVerified && <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />}
                                    </div>
                                </TableCell>

                                <TableCell className="text-xs text-slate-500">{item.city}</TableCell>

                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex items-center justify-end gap-1">
                                        <Button variant="ghost" size="sm" onClick={() => handleOpenEdit(item)}>
                                            <Edit2 className="h-4 w-4" /> Edit
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={() => handleInspect(item)}>
                                            <Eye className="h-4 w-4" /> Inspect
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* CREATE LISTING MODAL */}
            <Dialog
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Create Admin / Featured Listing"
                description="Post a new featured marketplace ad directly from the admin panel."
                maxWidth="xl"
            >
                <form onSubmit={handleCreateListing} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Product Title</label>
                        <Input
                            placeholder="e.g. iPhone 15 Pro Max 256GB Dual SIM PTA"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Category</label>
                            <select
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="Mobiles & Tablets">Mobiles & Tablets</option>
                                <option value="Vehicles & Motors">Vehicles & Motors</option>
                                <option value="Real Estate & Property">Real Estate & Property</option>
                                <option value="Electronics & Appliances">Electronics & Appliances</option>
                                <option value="Fashion & Accessories">Fashion & Accessories</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Price (PKR)</label>
                            <Input
                                type="number"
                                placeholder="e.g. 345000"
                                value={newPrice}
                                onChange={(e) => setNewPrice(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">City Territory</label>
                            <select
                                value={newCity}
                                onChange={(e) => setNewCity(e.target.value)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="Lahore">Lahore</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Rawalpindi">Rawalpindi</option>
                                <option value="Skardu">Skardu</option>
                                <option value="Peshawar">Peshawar</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Posting Seller Identity</label>
                            <Input
                                value={newSeller}
                                onChange={(e) => setNewSeller(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Description Copy</label>
                        <textarea
                            placeholder="Provide item condition, warranty status, specifications..."
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="w-full h-24 rounded-xl border border-slate-200 p-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                        />
                    </div>

                    {/* Upload Dropzone */}
                    <div className="p-4 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-center space-y-1">
                        <Upload className="h-6 w-6 text-slate-400 mx-auto" />
                        <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">Click to upload listing photos</div>
                        <div className="text-[10px] text-slate-400">PNG, JPG up to 10MB</div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsCreateModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Publish Listing
                        </Button>
                    </div>
                </form>
            </Dialog>

            {/* EDIT LISTING MODAL */}
            <Dialog
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title={`Edit Listing: ${selectedListing?.id}`}
                description="Update price, title, or category placement for this listing."
                maxWidth="lg"
            >
                <form onSubmit={handleSaveEdit} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Listing Title</label>
                        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Price (PKR)</label>
                            <Input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} required />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">City</label>
                            <select
                                value={newCity}
                                onChange={(e) => setNewCity(e.target.value)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="Lahore">Lahore</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Rawalpindi">Rawalpindi</option>
                                <option value="Skardu">Skardu</option>
                            </select>
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

            {/* INSPECT DRAWER */}
            <Sheet
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title={`Inspect Ad: ${selectedListing?.id}`}
                subtitle={`Seller: ${selectedListing?.sellerName} • ${selectedListing?.city}`}
                width="lg"
            >
                {selectedListing && (
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <img src={selectedListing.image} className="w-full h-56 rounded-2xl object-cover border border-slate-200 dark:border-slate-800" />
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">{selectedListing.title}</h3>
                                <span className="text-lg font-extrabold text-listify-orange">{selectedListing.price}</span>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <Button variant="success" className="w-full h-11 font-bold" onClick={() => handleApprove(selectedListing.id)}>
                                <CheckCircle2 className="h-5 w-5" /> Approve & Publish Listing
                            </Button>
                            <Button variant="danger" className="w-full h-10 font-bold" onClick={() => handleReject(selectedListing.id)}>
                                <XCircle className="h-4 w-4" /> Reject Listing
                            </Button>
                        </div>
                    </div>
                )}
            </Sheet>
        </div>
    );
}
