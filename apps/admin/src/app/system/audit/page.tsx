'use client';

import * as React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/Table';
import { Sheet } from '@/components/ui/Sheet';
import {
    ShieldAlert,
    Search,
    Lock,
    Clock,
    UserCheck,
    Terminal,
    Eye,
    FileCode,
    Shield,
    Filter,
} from 'lucide-react';

interface AuditLog {
    id: string;
    adminEmail: string;
    action: string;
    resource: string;
    ipAddress: string;
    timestamp: string;
    status: 'SUCCESS' | 'WARNING' | 'CRITICAL';
    details: string;
}

export default function SystemAuditPage() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedLog, setSelectedLog] = React.useState<AuditLog | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const logs: AuditLog[] = [
        {
            id: 'AUD-9901',
            adminEmail: 'ali.admin@listify.pk',
            action: 'SUSPEND_USER_ACCOUNT',
            resource: 'User USR-1094 (QuickSeller99)',
            ipAddress: '182.185.120.44 (Lahore, PK)',
            timestamp: '10 mins ago',
            status: 'CRITICAL',
            details: JSON.stringify({ reason: 'Fraudulent Rolex Submariner ad', severity: 'CRITICAL', ip: '182.185.120.44' }, null, 2),
        },
        {
            id: 'AUD-9900',
            adminEmail: 'system.bot@listify.pk',
            action: 'AI_ANTISPAM_TAKEDOWN',
            resource: 'Listing LST-8955',
            ipAddress: '10.0.4.12 (Internal Redis Worker)',
            timestamp: '35 mins ago',
            status: 'WARNING',
            details: JSON.stringify({ scanner: 'GPT4_MODERATION', confidenceScore: 0.94, matches: ['advance payment scam'] }, null, 2),
        },
        {
            id: 'AUD-9899',
            adminEmail: 'ali.admin@listify.pk',
            action: 'UPDATE_THEME_TOKENS',
            resource: 'Mobile App Branding Config',
            ipAddress: '182.185.120.44 (Lahore, PK)',
            timestamp: '2 hours ago',
            status: 'SUCCESS',
            details: JSON.stringify({ primaryColor: '#FC6901', appName: 'Listify' }, null, 2),
        },
    ];

    const handleInspect = (log: AuditLog) => {
        setSelectedLog(log);
        setIsDrawerOpen(true);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <Shield className="h-6 w-6 text-slate-900 dark:text-slate-100" />
                        System Audit & Security Logs
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Immutable security audit log tracking administrative mutations, security events, and IP addresses.
                    </p>
                </div>

                <Badge variant="verified" size="md">
                    AES-256 Audit Trail Active
                </Badge>
            </div>

            <Card className="p-4 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="w-full sm:w-72">
                        <Input
                            placeholder="Search by Admin Email, IP or Action..."
                            icon={<Search className="h-4 w-4" />}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4" /> Export CSV Logs
                    </Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Log ID & Time</TableHead>
                            <TableHead>Admin Account</TableHead>
                            <TableHead>Action Mutated</TableHead>
                            <TableHead>Target Resource</TableHead>
                            <TableHead>IP Location</TableHead>
                            <TableHead className="text-right">Payload</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {logs.map((log) => (
                            <TableRow key={log.id} className="cursor-pointer" onClick={() => handleInspect(log)}>
                                <TableCell>
                                    <div className="font-mono text-xs font-bold text-slate-900 dark:text-slate-100">{log.id}</div>
                                    <div className="text-[11px] text-slate-400">{log.timestamp}</div>
                                </TableCell>
                                <TableCell className="text-xs font-medium text-slate-700 dark:text-slate-300">{log.adminEmail}</TableCell>
                                <TableCell>
                                    <Badge variant={log.status === 'CRITICAL' ? 'banned' : log.status === 'WARNING' ? 'pending' : 'active'} size="sm" className="font-mono text-[10px]">
                                        {log.action}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-xs text-slate-900 dark:text-slate-100 font-semibold">{log.resource}</TableCell>
                                <TableCell className="font-mono text-xs text-slate-500">{log.ipAddress}</TableCell>
                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                    <Button variant="ghost" size="sm" onClick={() => handleInspect(log)}>
                                        <FileCode className="h-4 w-4" /> Inspect
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {/* JSON Payload Inspector Drawer */}
            <Sheet
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title={`Audit Payload: ${selectedLog?.id}`}
                subtitle={`Action: ${selectedLog?.action} • By: ${selectedLog?.adminEmail}`}
                width="md"
            >
                {selectedLog && (
                    <div className="space-y-4">
                        <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-1">
                            <div>// Log Details</div>
                            <div>Admin: {selectedLog.adminEmail}</div>
                            <div>IP: {selectedLog.ipAddress}</div>
                            <div>Time: {selectedLog.timestamp}</div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-500 uppercase">JSON Event Body</span>
                            <pre className="p-4 rounded-2xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800">
                                {selectedLog.details}
                            </pre>
                        </div>
                    </div>
                )}
            </Sheet>
        </div>
    );
}
