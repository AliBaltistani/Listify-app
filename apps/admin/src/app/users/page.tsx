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
    Users,
    Search,
    ShieldCheck,
    UserX,
    UserPlus,
    Phone,
    Mail,
    Eye,
    CheckCircle2,
    Lock,
    Edit2,
} from 'lucide-react';
import { toast } from 'sonner';

interface UserItem {
    id: string;
    name: string;
    phone: string;
    email: string;
    role: 'BUYER' | 'SELLER' | 'VERIFIED_DEALER' | 'MODERATOR' | 'SUPER_ADMIN';
    verified: boolean;
    status: 'ACTIVE' | 'SUSPENDED' | 'BANNED';
    joinedDate: string;
    listingsCount: number;
}

export default function UsersPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedUser, setSelectedUser] = React.useState<UserItem | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

    // Form State
    const [userName, setUserName] = React.useState('');
    const [userPhone, setUserPhone] = React.useState('+92 300 ');
    const [userEmail, setUserEmail] = React.useState('');
    const [userRole, setUserRole] = React.useState<'BUYER' | 'SELLER' | 'VERIFIED_DEALER' | 'MODERATOR' | 'SUPER_ADMIN'>('SELLER');
    const [isDealerVerified, setIsDealerVerified] = React.useState(false);

    const [users, setUsers] = React.useState<UserItem[]>([
        {
            id: 'USR-1094',
            name: 'QuickSeller99',
            phone: '+92 300 1234567',
            email: 'seller99@gmail.com',
            role: 'SELLER',
            verified: false,
            status: 'SUSPENDED',
            joinedDate: '3 months ago',
            listingsCount: 14,
        },
        {
            id: 'USR-1080',
            name: 'TechHub Lahore',
            phone: '+92 321 9876543',
            email: 'sales@techhub.pk',
            role: 'VERIFIED_DEALER',
            verified: true,
            status: 'ACTIVE',
            joinedDate: '1 year ago',
            listingsCount: 88,
        },
        {
            id: 'USR-1001',
            name: 'Ali Baltistani',
            phone: '+92 345 5556677',
            email: 'ali.admin@listify.pk',
            role: 'SUPER_ADMIN',
            verified: true,
            status: 'ACTIVE',
            joinedDate: '2 years ago',
            listingsCount: 0,
        },
    ]);

    const handleCreateUser = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: UserItem = {
            id: `USR-${Math.floor(1000 + Math.random() * 9000)}`,
            name: userName,
            phone: userPhone,
            email: userEmail || `${userName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
            role: userRole,
            verified: isDealerVerified || userRole === 'VERIFIED_DEALER',
            status: 'ACTIVE',
            joinedDate: 'Just now',
            listingsCount: 0,
        };
        setUsers([newUser, ...users]);
        toast.success(`User account "${newUser.name}" created with role ${newUser.role}!`);
        setIsCreateModalOpen(false);
        setUserName('');
        setUserPhone('+92 300 ');
    };

    const handleEditUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedUser) return;
        setUsers((prev) =>
            prev.map((u) =>
                u.id === selectedUser.id
                    ? {
                        ...u,
                        name: userName,
                        phone: userPhone,
                        email: userEmail,
                        role: userRole,
                        verified: isDealerVerified,
                    }
                    : u
            )
        );
        toast.success(`User ${selectedUser.id} profile updated!`);
        setIsEditModalOpen(false);
    };

    const handleOpenEdit = (u: UserItem) => {
        setSelectedUser(u);
        setUserName(u.name);
        setUserPhone(u.phone);
        setUserEmail(u.email);
        setUserRole(u.role);
        setIsDealerVerified(u.verified);
        setIsEditModalOpen(true);
    };

    const handleInspect = (u: UserItem) => {
        setSelectedUser(u);
        setIsDrawerOpen(true);
    };

    const handleToggleSuspend = (id: string) => {
        setUsers((prev) =>
            prev.map((u) => {
                if (u.id === id) {
                    const nextStatus = u.status === 'SUSPENDED' ? 'ACTIVE' : 'SUSPENDED';
                    toast.info(`User ${id} status set to ${nextStatus}.`);
                    return { ...u, status: nextStatus };
                }
                return u;
            })
        );
    };

    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.phone.includes(searchQuery) ||
            u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            u.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Users className="h-6 w-6 text-listify-orange" />
                        User Directory & Trust Management
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Manage buyer & seller accounts, issue verified dealer badges, and assign staff permissions.
                    </p>
                </div>

                <Button variant="primary" onClick={() => setIsCreateModalOpen(true)} className="shadow-lg shadow-listify-orange/30">
                    <UserPlus className="h-4 w-4" />
                    Create User / Admin Account
                </Button>
            </div>

            <Card className="p-4 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="w-full sm:w-72">
                        <Input
                            placeholder="Search by name, phone (+92), or email..."
                            icon={<Search className="h-4 w-4" />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User ID & Name</TableHead>
                            <TableHead>Contact Phone & Email</TableHead>
                            <TableHead>Account Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Active Ads</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredUsers.map((user) => (
                            <TableRow key={user.id} className="cursor-pointer" onClick={() => handleInspect(user)}>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-xs text-slate-900 dark:text-slate-100 flex items-center gap-1">
                                                {user.name}
                                                {user.verified && <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />}
                                            </div>
                                            <div className="font-mono text-[10px] text-slate-400">{user.id}</div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="font-mono text-xs text-slate-800 dark:text-slate-200">{user.phone}</div>
                                    <div className="text-[11px] text-slate-400">{user.email}</div>
                                </TableCell>

                                <TableCell>
                                    <Badge variant={user.role === 'SUPER_ADMIN' ? 'banned' : user.role === 'VERIFIED_DEALER' ? 'verified' : 'outline'} size="sm">
                                        {user.role}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    <Badge variant={user.status === 'ACTIVE' ? 'active' : 'banned'} size="sm">
                                        {user.status}
                                    </Badge>
                                </TableCell>

                                <TableCell className="font-bold text-xs text-slate-700 dark:text-slate-300">{user.listingsCount}</TableCell>

                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex items-center justify-end gap-1">
                                        <Button variant="ghost" size="sm" onClick={() => handleOpenEdit(user)}>
                                            <Edit2 className="h-4 w-4" /> Edit
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={() => handleInspect(user)}>
                                            <Eye className="h-4 w-4" /> Inspect
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* CREATE USER MODAL */}
            <Dialog
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Create New Account / Staff Admin"
                description="Register a new user account and assign system authorization roles."
                maxWidth="lg"
            >
                <form onSubmit={handleCreateUser} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                        <Input
                            placeholder="e.g. Usman Ghani"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Pakistani Mobile Phone (+92)</label>
                            <Input
                                placeholder="+92 300 1234567"
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                            <Input
                                type="email"
                                placeholder="usman@gmail.com"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Account Authorization Role</label>
                            <select
                                value={userRole}
                                onChange={(e) => setUserRole(e.target.value as any)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="BUYER">Buyer / Standard User</option>
                                <option value="SELLER">Registered Seller</option>
                                <option value="VERIFIED_DEALER">Verified Commercial Dealer</option>
                                <option value="MODERATOR">Staff Moderation Officer</option>
                                <option value="SUPER_ADMIN">Platform Super Administrator</option>
                            </select>
                        </div>

                        <div className="flex items-center pt-5">
                            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isDealerVerified}
                                    onChange={(e) => setIsDealerVerified(e.target.checked)}
                                    className="rounded border-slate-300 text-listify-orange focus:ring-listify-orange"
                                />
                                <span>Issue Verified Blue Badge Immediately</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <Button variant="ghost" type="button" onClick={() => setIsCreateModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Create User Account
                        </Button>
                    </div>
                </form>
            </Dialog>

            {/* EDIT USER MODAL */}
            <Dialog
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title={`Edit User: ${selectedUser?.name}`}
                description="Update user role or verification status."
                maxWidth="lg"
            >
                <form onSubmit={handleEditUser} className="space-y-4 pt-2">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                        <Input value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Phone</label>
                            <Input value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                            <Input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase">Account Authorization Role</label>
                            <select
                                value={userRole}
                                onChange={(e) => setUserRole(e.target.value as any)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-900 focus:ring-2 focus:ring-listify-orange dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                            >
                                <option value="BUYER">Buyer / Standard User</option>
                                <option value="SELLER">Registered Seller</option>
                                <option value="VERIFIED_DEALER">Verified Commercial Dealer</option>
                                <option value="MODERATOR">Staff Moderation Officer</option>
                                <option value="SUPER_ADMIN">Platform Super Administrator</option>
                            </select>
                        </div>

                        <div className="flex items-center pt-5">
                            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isDealerVerified}
                                    onChange={(e) => setIsDealerVerified(e.target.checked)}
                                    className="rounded border-slate-300 text-listify-orange focus:ring-listify-orange"
                                />
                                <span>Verified Badge Active</span>
                            </label>
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
                title={`User Profile: ${selectedUser?.name}`}
                subtitle={`ID: ${selectedUser?.id} • Role: ${selectedUser?.role}`}
                width="md"
            >
                {selectedUser && (
                    <div className="space-y-6">
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 space-y-2 text-xs">
                            <div className="flex justify-between">
                                <span>Phone:</span>
                                <strong className="font-mono">{selectedUser.phone}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Email:</span>
                                <strong>{selectedUser.email}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Joined Date:</span>
                                <strong>{selectedUser.joinedDate}</strong>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <Button
                                variant={selectedUser.status === 'SUSPENDED' ? 'success' : 'danger'}
                                className="w-full h-11 font-bold"
                                onClick={() => handleToggleSuspend(selectedUser.id)}
                            >
                                {selectedUser.status === 'SUSPENDED' ? 'Lift Suspension & Re-Activate' : 'Suspend Account Immediately'}
                            </Button>
                        </div>
                    </div>
                )}
            </Sheet>
        </div>
    );
}
