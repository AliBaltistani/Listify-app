'use client';

import * as React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { Sheet } from '@/components/ui/Sheet';
import {
    Flag,
    Search,
    AlertTriangle,
    ShieldAlert,
    CheckCircle2,
    XCircle,
    Eye,
    UserX,
    FileText,
    Clock,
    ExternalLink,
} from 'lucide-react';
import { toast } from 'sonner';

interface ReportItem {
    id: string;
    listingId: string;
    listingTitle: string;
    listingPrice: string;
    listingImage: string;
    reportedBy: string;
    reasonCategory: 'SCAM_FRAUD' | 'MISLEADING_PRICE' | 'PROHIBITED_ITEM' | 'INAPPROPRIATE_PHOTOS';
    description: string;
    sellerName: string;
    sellerId: string;
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
    date: string;
    status: 'PENDING' | 'RESOLVED' | 'DISMISSED';
}

export default function SafetyReportsPage() {
    const [activeTab, setActiveTab] = React.useState<'PENDING' | 'RESOLVED' | 'DISMISSED'>('PENDING');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedReport, setSelectedReport] = React.useState<ReportItem | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const reportsList: ReportItem[] = [
        {
            id: 'RPT-4012',
            listingId: 'LST-8998',
            listingTitle: 'Suspicious Cheap Rolex Submariner Watch Unbelievable Price',
            listingPrice: 'PKR 15,000',
            listingImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
            reportedBy: 'Muhammad Bilal (+923005556677)',
            reasonCategory: 'SCAM_FRAUD',
            description: 'Seller asked for 50% advance JazzCash payment before dispatching watch. When asked for location meeting, seller stopped replying.',
            sellerName: 'QuickSeller99',
            sellerId: 'USR-1094',
            severity: 'CRITICAL',
            date: '15 mins ago',
            status: 'PENDING',
        },
        {
            id: 'RPT-4011',
            listingId: 'LST-8955',
            listingTitle: 'iPhone 13 128GB Non-PTA Factory Unlocked',
            listingPrice: 'PKR 85,000',
            listingImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
            reportedBy: 'Aamir Khan',
            reasonCategory: 'MISLEADING_PRICE',
            description: 'Listing says 85k PKR, but when contacted seller says actual price is 110k PKR and 85k was only down payment.',
            sellerName: 'TechHub Lahore',
            sellerId: 'USR-1080',
            severity: 'HIGH',
            date: '1 hour ago',
            status: 'PENDING',
        },
        {
            id: 'RPT-4009',
            listingId: 'LST-8910',
            listingTitle: 'Used Sofa Set 5 Seater Genuine Leather',
            listingPrice: 'PKR 35,000',
            listingImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
            reportedBy: 'Sara Ahmed',
            reasonCategory: 'INAPPROPRIATE_PHOTOS',
            description: 'Photos downloaded directly from Google image search, not actual item photos.',
            sellerName: 'HomeStorePK',
            sellerId: 'USR-1044',
            severity: 'MEDIUM',
            date: '3 hours ago',
            status: 'PENDING',
        },
    ];

    const filteredReports = reportsList.filter(
        (r) =>
            r.status === activeTab &&
            (r.listingTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.reportedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.id.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleInspectReport = (report: ReportItem) => {
        setSelectedReport(report);
        setIsDrawerOpen(true);
    };

    const handleAction = (actionType: 'REMOVE_AD' | 'BAN_SELLER' | 'DISMISS') => {
        if (actionType === 'REMOVE_AD') {
            toast.success(`Listing ${selectedReport?.listingId} removed & report resolved!`);
        } else if (actionType === 'BAN_SELLER') {
            toast.error(`Seller ${selectedReport?.sellerName} has been BANNED.`);
        } else {
            toast.info(`Report ${selectedReport?.id} dismissed.`);
        }
        setIsDrawerOpen(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Flag className="h-6 w-6 text-rose-600" />
                        Safety & Moderation Report Queue
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Review community-flagged marketplace listings, scam reports, and policy violations.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Badge variant="banned" size="md">
                        1 Critical Fraud Report
                    </Badge>
                </div>
            </div>

            {/* Main Table Card */}
            <Card className="p-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                    {/* Tabs */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setActiveTab('PENDING')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'PENDING'
                                ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            Pending Reports (3)
                        </button>
                        <button
                            onClick={() => setActiveTab('RESOLVED')}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'RESOLVED'
                                ? 'bg-listify-orange text-white shadow-md shadow-listify-orange/20'
                                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                                }`}
                        >
                            Resolved History
                        </button>
                    </div>

                    {/* Search Box */}
                    <div className="w-full sm:w-72">
                        <Input
                            placeholder="Search reports or listing ID..."
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
                            <TableHead>Report ID & Date</TableHead>
                            <TableHead>Target Listing</TableHead>
                            <TableHead>Report Reason</TableHead>
                            <TableHead>Severity</TableHead>
                            <TableHead>Reported By</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredReports.map((report) => (
                            <TableRow key={report.id} className="cursor-pointer" onClick={() => handleInspectReport(report)}>
                                <TableCell>
                                    <div className="font-bold text-slate-900 dark:text-slate-100 text-xs">{report.id}</div>
                                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                                        <Clock className="h-3 w-3" /> {report.date}
                                    </div>
                                </TableCell>

                                <TableCell className="max-w-xs">
                                    <div className="flex items-center gap-3">
                                        <img src={report.listingImage} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                                        <div className="truncate">
                                            <div className="text-xs font-semibold truncate text-slate-900 dark:text-slate-100">{report.listingTitle}</div>
                                            <div className="text-[11px] text-listify-orange font-bold">{report.listingPrice}</div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Badge variant="outline" size="sm" className="font-mono text-[10px]">
                                        {report.reasonCategory}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    {report.severity === 'CRITICAL' && <Badge variant="banned" size="sm">CRITICAL FRAUD</Badge>}
                                    {report.severity === 'HIGH' && <Badge variant="pending" size="sm">HIGH SEVERITY</Badge>}
                                    {report.severity === 'MEDIUM' && <Badge variant="default" size="sm">MEDIUM</Badge>}
                                </TableCell>

                                <TableCell className="text-xs text-slate-600 dark:text-slate-300">{report.reportedBy}</TableCell>

                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                    <Button variant="ghost" size="sm" onClick={() => handleInspectReport(report)}>
                                        <Eye className="h-4 w-4" /> Inspect
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* Report Details Drawer */}
            <Sheet
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title={`Inspect Report: ${selectedReport?.id}`}
                subtitle={`Flagged on Listing ${selectedReport?.listingId}`}
                width="lg"
            >
                {selectedReport && (
                    <div className="space-y-6">
                        {/* Target Listing Header */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                            <img src={selectedReport.listingImage} className="w-16 h-16 rounded-xl object-cover" />
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{selectedReport.listingTitle}</h3>
                                <div className="text-sm font-extrabold text-listify-orange mt-0.5">{selectedReport.listingPrice}</div>
                                <div className="text-xs text-slate-500 mt-1">Seller: <strong>{selectedReport.sellerName}</strong> ({selectedReport.sellerId})</div>
                            </div>
                        </div>

                        {/* Complainant Statement */}
                        <div className="space-y-2 p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/50">
                            <div className="flex items-center justify-between text-xs font-bold text-rose-700 dark:text-rose-400">
                                <span className="flex items-center gap-1.5">
                                    <AlertTriangle className="h-4 w-4" /> Flagger Evidence Statement
                                </span>
                                <span>Category: {selectedReport.reasonCategory}</span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                "{selectedReport.description}"
                            </p>
                            <div className="text-[11px] text-slate-400 pt-1">Submitted by: {selectedReport.reportedBy}</div>
                        </div>

                        {/* Resolution Actions */}
                        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Moderator Resolution Tools</h4>

                            <Button variant="danger" className="w-full h-10 text-xs font-bold" onClick={() => handleAction('REMOVE_AD')}>
                                <XCircle className="h-4 w-4" /> Take Down Listing Immediately
                            </Button>

                            <Button variant="outline" className="w-full h-10 text-xs font-bold border-rose-300 text-rose-700 hover:bg-rose-50" onClick={() => handleAction('BAN_SELLER')}>
                                <UserX className="h-4 w-4" /> Ban Seller Account Permanently
                            </Button>

                            <Button variant="ghost" className="w-full h-10 text-xs font-semibold text-slate-500" onClick={() => handleAction('DISMISS')}>
                                <CheckCircle2 className="h-4 w-4" /> Dismiss Report as False Flag
                            </Button>
                        </div>
                    </div>
                )}
            </Sheet>
        </div>
    );
}
