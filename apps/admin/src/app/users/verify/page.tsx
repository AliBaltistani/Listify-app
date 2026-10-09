'use client';

import * as React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { Sheet } from '@/components/ui/Sheet';
import {
    ShieldCheck,
    Search,
    CheckCircle2,
    XCircle,
    FileCheck,
    Building,
    User,
    Clock,
    Eye,
    ExternalLink,
} from 'lucide-react';
import { toast } from 'sonner';

interface VerificationRequest {
    id: string;
    applicantName: string;
    businessName: string;
    cnicNumber: string;
    ntnNumber: string;
    phone: string;
    dateSubmitted: string;
    docImageFront: string;
    docImageBack: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export default function VerificationQueuePage() {
    const [selectedReq, setSelectedReq] = React.useState<VerificationRequest | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const requests: VerificationRequest[] = [
        {
            id: 'VRF-701',
            applicantName: 'Usman Ali',
            businessName: 'Mercan Mobiles SKD',
            cnicNumber: '71101-1234567-1',
            ntnNumber: 'NTN-894120-4',
            phone: '+923001234567',
            dateSubmitted: '2 hours ago',
            docImageFront: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
            docImageBack: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
            status: 'PENDING',
        },
        {
            id: 'VRF-702',
            applicantName: 'Lahore Auto Motors',
            businessName: 'Lahore Auto Motors Pvt Ltd',
            cnicNumber: '35202-9876543-3',
            ntnNumber: 'NTN-554411-9',
            phone: '+923219876543',
            dateSubmitted: '5 hours ago',
            docImageFront: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500',
            docImageBack: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500',
            status: 'PENDING',
        },
    ];

    const handleInspect = (req: VerificationRequest) => {
        setSelectedReq(req);
        setIsDrawerOpen(true);
    };

    const handleApproveBadge = (id: string) => {
        toast.success(`Verification request ${id} approved! Verified Dealer Badge issued.`);
        setIsDrawerOpen(false);
    };

    const handleRejectBadge = (id: string) => {
        toast.error(`Verification request ${id} rejected.`);
        setIsDrawerOpen(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <ShieldCheck className="h-6 w-6 text-emerald-600" />
                        Seller & Dealer Verification Queue
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Inspect submitted CNIC cards, NTN certificates, and business licenses to issue trust badges.
                    </p>
                </div>

                <Badge variant="verified" size="md">
                    2 Requests Pending Review
                </Badge>
            </div>

            <Card className="p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Request ID</TableHead>
                            <TableHead>Applicant & Business</TableHead>
                            <TableHead>CNIC / NTN</TableHead>
                            <TableHead>Phone Contact</TableHead>
                            <TableHead>Submitted</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {requests.map((req) => (
                            <TableRow key={req.id} className="cursor-pointer" onClick={() => handleInspect(req)}>
                                <TableCell className="font-bold text-xs text-slate-900 dark:text-slate-100">{req.id}</TableCell>
                                <TableCell>
                                    <div className="font-semibold text-xs text-slate-900 dark:text-slate-100">{req.applicantName}</div>
                                    <div className="text-[11px] text-listify-orange font-medium">{req.businessName}</div>
                                </TableCell>
                                <TableCell className="font-mono text-xs text-slate-600 dark:text-slate-400">{req.cnicNumber}</TableCell>
                                <TableCell className="font-mono text-xs text-slate-700 dark:text-slate-300">{req.phone}</TableCell>
                                <TableCell className="text-xs text-slate-400">{req.dateSubmitted}</TableCell>
                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                    <Button variant="success" size="sm" onClick={() => handleInspect(req)}>
                                        <Eye className="h-4 w-4" /> Inspect Documents
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* Document Review Drawer */}
            <Sheet
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title={`Review Documents: ${selectedReq?.applicantName}`}
                subtitle={`Business: ${selectedReq?.businessName} • CNIC: ${selectedReq?.cnicNumber}`}
                width="lg"
            >
                {selectedReq && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">CNIC Front Copy</span>
                                <img src={selectedReq.docImageFront} className="w-full h-40 rounded-xl object-cover border border-slate-200 dark:border-slate-800" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">Business License / NTN</span>
                                <img src={selectedReq.docImageBack} className="w-full h-40 rounded-xl object-cover border border-slate-200 dark:border-slate-800" />
                            </div>
                        </div>

                        <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs">
                            <div className="flex justify-between">
                                <span>Applicant Name:</span>
                                <strong className="text-slate-900 dark:text-slate-100">{selectedReq.applicantName}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Business Title:</span>
                                <strong className="text-listify-orange">{selectedReq.businessName}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax NTN Number:</span>
                                <strong className="font-mono">{selectedReq.ntnNumber}</strong>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <Button variant="success" className="w-full h-11 text-xs font-bold" onClick={() => handleApproveBadge(selectedReq.id)}>
                                <ShieldCheck className="h-5 w-5" /> Grant Verified Dealer Status & Badge
                            </Button>
                            <Button variant="danger" className="w-full h-10 text-xs font-bold" onClick={() => handleRejectBadge(selectedReq.id)}>
                                <XCircle className="h-4 w-4" /> Reject Request
                            </Button>
                        </div>
                    </div>
                )}
            </Sheet>
        </div>
    );
}
