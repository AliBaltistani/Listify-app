'use client';

import * as React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { Sheet } from '@/components/ui/Sheet';
import {
    Search,
    CheckCircle2,
    XCircle,
    Eye,
    Star,
    ShieldCheck,
    Smartphone,
    Car,
    Home as HomeIcon,
    Tag,
    AlertTriangle,
    ExternalLink,
    ChevronRight,
} from 'lucide-react';
import { toast } from 'sonner';

interface ListingItem {
    id: string;
    title: string;
    category: string;
    price: string;
    sellerName: string;
    sellerAvatar: string;
    sellerRating: number;
    sellerVerified: boolean;
    date: string;
    status: 'PENDING' | 'ACTIVE' | 'FLAGGED' | 'REJECTED';
    riskScore: 'LOW' | 'MEDIUM' | 'HIGH';
    image: string;
    description: string;
    location: string;
    specs: Record<string, string>;
}

export default function ListingsModerationPage() {
    const [activeTab, setActiveTab] = React.useState<'PENDING' | 'ACTIVE' | 'FLAGGED' | 'REJECTED'>('PENDING');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedListing, setSelectedListing] = React.useState<ListingItem | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [rejectReason, setRejectReason] = React.useState('');

    const listingsData: ListingItem[] = [
        {
            id: 'LST-9001',
            title: 'iPhone 15 Pro Max 256GB Natural Titanium (PTA Approved Official Warranty)',
            category: 'Mobiles & Tablets',
            price: 'PKR 345,000',
            sellerName: 'Usman Ali',
            sellerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
            sellerRating: 4.9,
            sellerVerified: true,
            date: '10 mins ago',
            status: 'PENDING',
            riskScore: 'LOW',
            image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
            description: 'Brand new pin-pack iPhone 15 Pro Max 256GB Natural Titanium. Official Mercan Warranty PTA Approved. 100% Battery health, zero scratches. Complete box with genuine cable.',
            location: 'Gulberg III, Lahore',
            specs: {
                Brand: 'Apple',
                Model: 'iPhone 15 Pro Max',
                Storage: '256GB',
                Condition: 'New (Pin Pack)',
                'PTA Status': 'Approved',
                Warranty: 'Official Warranty',
            },
        },
        {
            id: 'LST-9002',
            title: 'Honda Civic Oriel 1.5 VTEC Turbo 2022 White Bumper to Bumper Genuine',
            category: 'Vehicles & Cars',
            price: 'PKR 6,850,000',
            sellerName: 'Lahore Auto Motors',
            sellerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
            sellerRating: 5.0,
            sellerVerified: true,
            date: '24 mins ago',
            status: 'PENDING',
            riskScore: 'LOW',
            image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500',
            description: 'Honda Civic Oriel 2022 model, total genuine paint bumper to bumper. 18,000 km driven. Maintained through Honda authorized dealership. Leather seats, sunroof, push start.',
            location: 'DHA Phase 5, Lahore',
            specs: {
                Make: 'Honda',
                Model: 'Civic Oriel',
                Year: '2022',
                Mileage: '18,000 km',
                Fuel: 'Petrol',
                Transmission: 'Automatic',
            },
        },
        {
            id: 'LST-9003',
            title: '1 Kanal Brand New Designer House for Sale DHA Phase 6 Block M',
            category: 'Property & Rent',
            price: 'PKR 75,000,000',
            sellerName: 'Hamza Estate Consultants',
            sellerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
            sellerRating: 4.8,
            sellerVerified: true,
            date: '45 mins ago',
            status: 'PENDING',
            riskScore: 'LOW',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500',
            description: 'Luxury 1 Kanal Spanish architecture villa featuring 5 master bedrooms, Italian kitchen fitments, imported marble flooring, basement home cinema, and lush lawn.',
            location: 'DHA Phase 6, Lahore',
            specs: {
                Type: 'House for Sale',
                Area: '1 Kanal (500 Sq Yds)',
                Bedrooms: '5',
                Bathrooms: '6',
                Furnished: 'Semi-Furnished',
            },
        },
        {
            id: 'LST-8998',
            title: 'Suspicious Cheap Rolex Submariner Watch Unbelievable Price',
            category: 'Fashion & Luxury',
            price: 'PKR 15,000',
            sellerName: 'QuickSeller99',
            sellerAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150',
            sellerRating: 2.1,
            sellerVerified: false,
            date: '1 hour ago',
            status: 'FLAGGED',
            riskScore: 'HIGH',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
            description: 'Original Rolex watch imported from UK, urgent sale needed today. Send advance payment via JazzCash for immediate courier delivery.',
            location: 'Rawalpindi',
            specs: {
                Brand: 'Rolex',
                Condition: 'Refurbished',
            },
        },
    ];

    const filteredListings = listingsData.filter(
        (item) =>
            item.status === activeTab &&
            (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.id.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleOpenPreview = (listing: ListingItem) => {
        setSelectedListing(listing);
        setIsDrawerOpen(true);
    };

    const handleApprove = (id: string) => {
        toast.success(`Listing ${id} approved successfully and published to marketplace!`);
        setIsDrawerOpen(false);
    };

    const handleReject = (id: string) => {
        if (!rejectReason) {
            toast.error('Please select or specify a reason for rejection.');
            return;
        }
        toast.error(`Listing ${id} rejected. Reason sent to seller.`);
        setIsDrawerOpen(false);
        setRejectReason('');
    };

    return (
        <div className="space-y-6">
            {/* Header & Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                        Listings Moderation Queue
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Review, inspect, approve, or reject user-submitted marketplace ads.
                    </p>
                </div>
            </div>

            {/* Tabs & Search Bar Card */}
            <Card className="p-4 space-y-4">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                    {/* Status Tabs */}
                    <div className="flex items-center gap-1 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('PENDING')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'PENDING'
                                    ? 'bg-listify-orange text-white shadow-md shadow-listify-orange/20'
                                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            <span>Pending Review</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20">3</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('ACTIVE')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'ACTIVE'
                                    ? 'bg-listify-orange text-white shadow-md shadow-listify-orange/20'
                                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            <span>Active Listings</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('FLAGGED')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'FLAGGED'
                                    ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            <AlertTriangle className="h-3.5 w-3.5" />
                            <span>Flagged & Reported</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20">1</span>
                        </button>
                    </div>

                    {/* Search Box */}
                    <div className="w-full md:w-72">
                        <Input
                            placeholder="Search by title, seller, or ID..."
                            icon={<Search className="h-4 w-4" />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* High-Density Data Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Ad & Thumbnail</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price (PKR)</TableHead>
                            <TableHead>Seller Info</TableHead>
                            <TableHead>Risk</TableHead>
                            <TableHead>Submitted</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredListings.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-12 text-slate-400">
                                    No listings found in this category tab.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredListings.map((item) => (
                                <TableRow key={item.id} className="group cursor-pointer" onClick={() => handleOpenPreview(item)}>
                                    {/* Thumbnail & Title */}
                                    <TableCell className="font-medium max-w-xs">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                                            />
                                            <div className="truncate">
                                                <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-listify-orange transition-colors truncate">
                                                    {item.title}
                                                </div>
                                                <div className="text-xs text-slate-400 font-mono">{item.id}</div>
                                            </div>
                                        </div>
                                    </TableCell>

                                    {/* Category */}
                                    <TableCell>
                                        <Badge variant="outline" size="sm">
                                            {item.category}
                                        </Badge>
                                    </TableCell>

                                    {/* Price */}
                                    <TableCell className="font-bold text-listify-orange">{item.price}</TableCell>

                                    {/* Seller */}
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <img src={item.sellerAvatar} className="w-6 h-6 rounded-full object-cover" />
                                            <span className="text-xs font-semibold">{item.sellerName}</span>
                                            {item.sellerVerified && <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" title="Verified Seller" />}
                                        </div>
                                    </TableCell>

                                    {/* Risk Score */}
                                    <TableCell>
                                        {item.riskScore === 'HIGH' ? (
                                            <Badge variant="banned" size="sm">High Risk</Badge>
                                        ) : (
                                            <Badge variant="active" size="sm">Low Risk</Badge>
                                        )}
                                    </TableCell>

                                    {/* Date */}
                                    <TableCell className="text-xs text-slate-400">{item.date}</TableCell>

                                    {/* Actions */}
                                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleOpenPreview(item)}
                                                title="Inspect Ad Details"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="success"
                                                size="sm"
                                                onClick={() => handleApprove(item.id)}
                                            >
                                                <CheckCircle2 className="h-4 w-4" />
                                                Approve
                                            </Button>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleOpenPreview(item)}
                                            >
                                                <XCircle className="h-4 w-4" />
                                                Reject
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </Card>

            {/* Side-by-Side Mobile Preview & Moderation Sheet Drawer */}
            <Sheet
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title={`Inspect Ad: ${selectedListing?.id}`}
                subtitle="Review full listing details, specs, seller history, and compliance status"
                width="xl"
            >
                {selectedListing && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left: Mobile App Screen Simulator */}
                        <div className="space-y-4">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                                <span>Mobile App View</span>
                                <span className="text-[10px] text-emerald-600 font-mono">LIVE SIMULATOR</span>
                            </div>

                            <div className="relative mx-auto w-full max-w-[320px] rounded-[36px] border-[8px] border-slate-900 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden min-h-[540px] flex flex-col">
                                {/* Mobile Header Notch */}
                                <div className="w-full bg-slate-900 h-6 flex items-center justify-center">
                                    <div className="w-20 h-3 bg-black rounded-full" />
                                </div>

                                {/* Mobile Product Image Carousel */}
                                <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
                                    <img src={selectedListing.image} className="w-full h-full object-cover" />
                                    <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-md">
                                        1 / 4
                                    </div>
                                </div>

                                {/* Mobile Body Content */}
                                <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold text-listify-orange uppercase">{selectedListing.category}</span>
                                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">
                                            {selectedListing.title}
                                        </h3>
                                        <div className="text-base font-extrabold text-listify-orange">{selectedListing.price}</div>
                                    </div>

                                    {/* Dynamic Specs Chips */}
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {Object.entries(selectedListing.specs).map(([key, val], idx) => (
                                            <span key={idx} className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                                                {key}: <strong>{val}</strong>
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2">
                                        {selectedListing.description}
                                    </p>

                                    {/* Seller Card */}
                                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                                        <img src={selectedListing.sellerAvatar} className="w-9 h-9 rounded-full object-cover" />
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate flex items-center gap-1">
                                                {selectedListing.sellerName}
                                                {selectedListing.sellerVerified && <ShieldCheck className="h-3 w-3 text-emerald-600" />}
                                            </div>
                                            <div className="text-[10px] text-amber-500 font-semibold">{selectedListing.sellerRating} ⭐ Star Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Moderation Controls & Compliance Checklist */}
                        <div className="space-y-6">
                            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Automated Risk Check</h4>
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-center justify-between">
                                        <span>Prohibited Keyword Scan:</span>
                                        <Badge variant="active" size="sm">PASSED</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Seller Verification Status:</span>
                                        <Badge variant="verified" size="sm">VERIFIED USER</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Image Authenticity Match:</span>
                                        <Badge variant="active" size="sm">98% MATCH</Badge>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Moderator Decision</h4>

                                <Button
                                    variant="success"
                                    className="w-full h-11 text-sm font-bold shadow-lg shadow-emerald-500/20"
                                    onClick={() => handleApprove(selectedListing.id)}
                                >
                                    <CheckCircle2 className="h-5 w-5" />
                                    Approve & Publish Ad Immediately
                                </Button>

                                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                        Reason for Rejection (if rejecting):
                                    </label>
                                    <select
                                        value={rejectReason}
                                        onChange={(e) => setRejectReason(e.target.value)}
                                        className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                                    >
                                        <option value="">Select canned rejection reason...</option>
                                        <option value="MISLEADING_PRICE">Misleading or Suspicious Price</option>
                                        <option value="INAPPROPRIATE_PHOTOS">Inappropriate or Copyrighted Images</option>
                                        <option value="DUPLICATE_LISTING">Duplicate Listing</option>
                                        <option value="PROHIBITED_ITEM">Prohibited Item / Policy Violation</option>
                                        <option value="INCOMPLETE_SPECS">Incomplete Specs / Description</option>
                                    </select>

                                    <Button
                                        variant="danger"
                                        className="w-full h-10 text-xs font-bold"
                                        onClick={() => handleReject(selectedListing.id)}
                                    >
                                        <XCircle className="h-4 w-4" />
                                        Reject Listing & Notify Seller
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Sheet>
        </div>
    );
}
