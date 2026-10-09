'use client';

import * as React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { Sheet } from '@/components/ui/Sheet';
import {
    Users,
    Search,
    ShieldCheck,
    ShieldAlert,
    Ban,
    Phone,
    Mail,
    Calendar,
    CheckCircle2,
    XCircle,
    MoreVertical,
    Star,
    ShoppingBag,
} from 'lucide-react';
import { toast } from 'sonner';

interface UserRecord {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'USER' | 'SELLER' | 'VERIFIED_DEALER' | 'ADMIN';
    verified: boolean;
    status: 'ACTIVE' | 'SUSPENDED' | 'BANNED';
    joinedDate: string;
    activeAds: number;
    totalReports: number;
    avatar: string;
}

export default function UsersDirectoryPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedUser, setSelectedUser] = React.useState<UserRecord | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const usersList: UserRecord[] = [
        {
            id: 'USR-1092',
            name: 'Usman Ali',
            email: 'usman.ali@gmail.com',
            phone: '+923001234567',
            role: 'VERIFIED_DEALER',
            verified: true,
            status: 'ACTIVE',
            joinedDate: 'Jan 2024',
            activeAds: 14,
            totalReports: 0,
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        },
        {
            id: 'USR-1093',
            name: 'Lahore Auto Motors',
            email: 'sales@lahoreautos.pk',
            phone: '+923219876543',
            role: 'VERIFIED_DEALER',
            verified: true,
            status: 'ACTIVE',
            joinedDate: 'Mar 2024',
            activeAds: 28,
            totalReports: 1,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        },
        {
            id: 'USR-1094',
            name: 'QuickSeller99',
            email: 'quickseller99@tempmail.com',
            phone: '+923451122334',
            role: 'USER',
            verified: false,
            status: 'SUSPENDED',
            joinedDate: 'Yesterday',
            activeAds: 1,
            totalReports: 5,
            avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150',
        },
    ];

    const filteredUsers = usersList.filter(
        (u) =>
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.phone.includes(searchQuery) ||
            u.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleInspectUser = (user: UserRecord) => {
        setSelectedUser(user);
        setIsDrawerOpen(true);
    };

    const handleIssueBadge = (userId: string) => {
        toast.success(`Verified Seller Badge issued to ${userId}!`);
        setIsDrawerOpen(false);
    };

    const handleBanUser = (userId: string) => {
        toast.error(`Account ${userId} has been BANNED permanently.`);
        setIsDrawerOpen(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Users className="h-6 w-6 text-listify-orange" />
                        User Directory & Verification Queue
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Manage buyer & seller accounts, issue trust badges, and handle suspensions.
                    </p>
                </div>
            </div>

            {/* Main Table Card */}
            <Card className="p-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="w-full sm:w-80">
                        <Input
                            placeholder="Search by name, email, phone (+923)..."
                            icon={<Search className="h-4 w-4" />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Badge variant="verified" size="md">
                            18,240 Total Users
                        </Badge>
                        <Badge variant="pending" size="md">
                            7 Verification Requests
                        </Badge>
                    </div>
                </div>

                {/* High Density Users Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User & Avatar</TableHead>
                            <TableHead>Contact (PAK +923)</TableHead>
                            <TableHead>Role & Trust</TableHead>
                            <TableHead>Active Ads</TableHead>
                            <TableHead>Reports</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredUsers.map((user) => (
                            <TableRow key={user.id} className="cursor-pointer" onClick={() => handleInspectUser(user)}>
                                {/* User Name */}
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} className="w-9 h-9 rounded-full object-cover shrink-0" />
                                        <div>
                                            <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                                                {user.name}
                                                {user.verified && <ShieldCheck className="h-4 w-4 text-emerald-600" />}
                                            </div>
                                            <div className="text-xs text-slate-400 font-mono">{user.id}</div>
                                        </div>
                                    </div>
                                </TableCell>

                                {/* Contact */}
                                <TableCell>
                                    <div className="text-xs space-y-0.5">
                                        <div className="font-mono text-slate-700 dark:text-slate-300">{user.phone}</div>
                                        <div className="text-slate-400">{user.email}</div>
                                    </div>
                                </TableCell>

                                {/* Role */}
                                <TableCell>
                                    {user.role === 'VERIFIED_DEALER' ? (
                                        <Badge variant="featured" size="sm">Dealer Verified</Badge>
                                    ) : (
                                        <Badge variant="outline" size="sm">Standard User</Badge>
                                    )}
                                </TableCell>

                                {/* Active Ads */}
                                <TableCell className="font-bold text-slate-900 dark:text-slate-100">{user.activeAds}</TableCell>

                                {/* Reports */}
                                <TableCell>
                                    {user.totalReports > 0 ? (
                                        <Badge variant="banned" size="sm">{user.totalReports} Reports</Badge>
                                    ) : (
                                        <span className="text-xs text-slate-400">Clean</span>
                                    )}
                                </TableCell>

                                {/* Status */}
                                <TableCell>
                                    {user.status === 'ACTIVE' && <Badge variant="active" size="sm">Active</Badge>}
                                    {user.status === 'SUSPENDED' && <Badge variant="banned" size="sm">Suspended</Badge>}
                                </TableCell>

                                {/* Actions */}
                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                    <Button variant="ghost" size="sm" onClick={() => handleInspectUser(user)}>
                                        Inspect
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* User Detail Side Drawer */}
            <Sheet
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title={`User Account: ${selectedUser?.name}`}
                subtitle={`ID: ${selectedUser?.id} • Joined ${selectedUser?.joinedDate}`}
                width="md"
            >
                {selectedUser && (
                    <div className="space-y-6">
                        {/* Header Avatar Card */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                            <img src={selectedUser.avatar} className="w-16 h-16 rounded-full object-cover shadow-sm" />
                            <div>
                                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                                    {selectedUser.name}
                                    {selectedUser.verified && <ShieldCheck className="h-5 w-5 text-emerald-600" />}
                                </h3>
                                <p className="text-xs text-slate-500">{selectedUser.email}</p>
                                <p className="text-xs font-mono text-listify-orange font-bold mt-1">{selectedUser.phone}</p>
                            </div>
                        </div>

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-center">
                                <div className="text-xs text-slate-500 font-medium">Active Ads</div>
                                <div className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{selectedUser.activeAds}</div>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-center">
                                <div className="text-xs text-slate-500 font-medium">Reports Flagged</div>
                                <div className="text-xl font-extrabold text-rose-600">{selectedUser.totalReports}</div>
                            </div>
                        </div>

                        {/* Action Section */}
                        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Trust & Verification Actions</h4>

                            {!selectedUser.verified ? (
                                <Button
                                    variant="success"
                                    className="w-full h-10 text-xs font-bold"
                                    onClick={() => handleIssueBadge(selectedUser.id)}
                                >
                                    <ShieldCheck className="h-4 w-4" />
                                    Grant Verified Seller Badge
                                </Button>
                            ) : (
                                <Badge variant="verified" size="md" className="w-full justify-center py-2">
                                    <ShieldCheck className="h-4 w-4" /> Verified Seller Status Active
                                </Badge>
                            )}

                            <Button
                                variant="danger"
                                className="w-full h-10 text-xs font-bold"
                                onClick={() => handleBanUser(selectedUser.id)}
                            >
                                <Ban className="h-4 w-4" />
                                Suspend Account & Remove Active Ads
                            </Button>
                        </div>
                    </div>
                )}
            </Sheet>
        </div>
    );
}
