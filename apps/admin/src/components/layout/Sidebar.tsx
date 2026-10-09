'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    ShoppingBag,
    Flag,
    FolderTree,
    MapPin,
    Users,
    ShieldCheck,
    LayoutTemplate,
    Palette,
    SlidersHorizontal,
    BellRing,
    ShieldAlert,
    ChevronLeft,
    ChevronRight,
    Store,
    X,
    LogOut,
} from 'lucide-react';
import { toast } from 'sonner';

interface SidebarProps {
    isCollapsed: boolean;
    onToggleCollapse: () => void;
    isMobileOpen: boolean;
    onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    isCollapsed,
    onToggleCollapse,
    isMobileOpen,
    onCloseMobile,
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        toast.success('Logged out of admin session successfully.');
        router.push('/auth/login');
    };

    const navGroups = [
        {
            title: 'Overview',
            items: [{ name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard }],
        },
        {
            title: 'Marketplace Engine',
            items: [
                { name: 'Listings Moderation', href: '/listings', icon: ShoppingBag, badge: '12' },
                { name: 'Report Queue', href: '/reports', icon: Flag, badge: '4' },
                { name: 'Categories & Fields', href: '/categories', icon: FolderTree },
                { name: 'Locations & Regions', href: '/locations', icon: MapPin },
            ],
        },
        {
            title: 'Users & Trust',
            items: [
                { name: 'User Directory', href: '/users', icon: Users },
                { name: 'Verification Queue', href: '/users/verify', icon: ShieldCheck, badge: '7' },
            ],
        },
        {
            title: 'CMS & Branding',
            items: [
                { name: 'Homepage Sections', href: '/content', icon: LayoutTemplate },
                { name: 'App Theme Simulator', href: '/config/theme', icon: Palette },
            ],
        },
        {
            title: 'System & Config',
            items: [
                { name: 'Feature Flags', href: '/config/features', icon: SlidersHorizontal },
                { name: 'Push Broadcast', href: '/config/push', icon: BellRing },
                { name: 'Audit & Logs', href: '/system/audit', icon: ShieldAlert },
            ],
        },
    ];

    return (
        <>
            {/* Mobile Backdrop Overlay */}
            {isMobileOpen && (
                <div
                    onClick={onCloseMobile}
                    className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm md:hidden transition-opacity"
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50 flex flex-col h-full bg-slate-900 text-slate-300 border-r border-slate-800 transition-all duration-300 select-none md:static',
                    isCollapsed ? 'md:w-20' : 'md:w-64',
                    isMobileOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'
                )}
            >
                {/* Brand Header */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800/80">
                    <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden" onClick={onCloseMobile}>
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-listify-orange to-amber-500 text-white font-bold text-lg shadow-md shadow-listify-orange/30 shrink-0">
                            <Store className="h-5.5 w-5.5" />
                        </div>
                        {(!isCollapsed || isMobileOpen) && (
                            <div className="flex flex-col">
                                <span className="font-extrabold text-white tracking-tight text-lg leading-tight">
                                    Listify<span className="text-listify-orange">.Admin</span>
                                </span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                                    Control Portal
                                </span>
                            </div>
                        )}
                    </Link>

                    <button
                        onClick={onToggleCollapse}
                        className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    >
                        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </button>

                    <button
                        onClick={onCloseMobile}
                        className="flex md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Nav Items */}
                <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
                    {navGroups.map((group, idx) => (
                        <div key={idx} className="space-y-1">
                            {(!isCollapsed || isMobileOpen) && (
                                <h4 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400/80 mb-2">
                                    {group.title}
                                </h4>
                            )}
                            {group.items.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={onCloseMobile}
                                        className={cn(
                                            'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group relative',
                                            isActive
                                                ? 'bg-listify-orange text-white shadow-lg shadow-listify-orange/25 font-semibold'
                                                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                                        )}
                                        title={isCollapsed && !isMobileOpen ? item.name : undefined}
                                    >
                                        <Icon
                                            className={cn(
                                                'h-5 w-5 shrink-0 transition-transform group-hover:scale-110',
                                                isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                                            )}
                                        />
                                        {(!isCollapsed || isMobileOpen) && <span className="truncate flex-1">{item.name}</span>}

                                        {item.badge && (
                                            <span
                                                className={cn(
                                                    'px-2 py-0.5 text-[10px] font-bold rounded-full transition-colors',
                                                    isActive
                                                        ? 'bg-white text-listify-orange'
                                                        : 'bg-listify-orange/20 text-listify-orange group-hover:bg-listify-orange group-hover:text-white'
                                                )}
                                            >
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* User Footer Card & Logout */}
                <div className="p-3 border-t border-slate-800/80">
                    <div
                        className={cn(
                            'flex items-center justify-between p-2 rounded-xl bg-slate-800/50 gap-2',
                            isCollapsed && !isMobileOpen && 'justify-center'
                        )}
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold shrink-0">
                                SA
                            </div>
                            {(!isCollapsed || isMobileOpen) && (
                                <div className="flex flex-col min-w-0 flex-1">
                                    <span className="text-xs font-semibold text-white truncate">Super Admin</span>
                                    <span className="text-[10px] text-emerald-400 truncate flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        Active
                                    </span>
                                </div>
                            )}
                        </div>

                        {(!isCollapsed || isMobileOpen) && (
                            <button
                                onClick={handleLogout}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                title="Sign Out of Admin Session"
                            >
                                <LogOut className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
};
