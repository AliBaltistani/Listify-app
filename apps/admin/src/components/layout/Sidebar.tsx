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

    const showExpanded = !isCollapsed || isMobileOpen;

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
                    'fixed inset-y-0 left-0 z-50 flex flex-col h-full bg-slate-900 text-slate-300 border-r border-slate-800 transition-all duration-300 select-none md:static shrink-0',
                    isCollapsed ? 'md:w-20' : 'md:w-64',
                    isMobileOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'
                )}
            >
                {/* Brand Header */}
                <div
                    className={cn(
                        'flex items-center h-16 border-b border-slate-800/80 px-3',
                        showExpanded ? 'justify-between' : 'justify-center'
                    )}
                >
                    <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden" onClick={onCloseMobile}>
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-listify-orange to-amber-500 text-white font-bold text-lg shadow-md shadow-listify-orange/30 shrink-0">
                            <Store className="h-5.5 w-5.5" />
                        </div>
                        {showExpanded && (
                            <div className="flex flex-col min-w-0">
                                <span className="font-extrabold text-white tracking-tight text-lg leading-tight truncate">
                                    Listify<span className="text-listify-orange">.Admin</span>
                                </span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold truncate">
                                    Control Portal
                                </span>
                            </div>
                        )}
                    </Link>

                    {/* Desktop Collapse Toggle */}
                    <button
                        onClick={onToggleCollapse}
                        className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    >
                        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </button>

                    {/* Mobile Close Button */}
                    <button
                        onClick={onCloseMobile}
                        className="flex md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Nav Items (Custom Scrollbar styling to prevent overflow lines) */}
                <div className="flex-1 overflow-y-auto px-2 sm:px-3 py-4 space-y-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {navGroups.map((group, idx) => (
                        <div key={idx} className="space-y-1">
                            {showExpanded ? (
                                <h4 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400/80 mb-2 truncate">
                                    {group.title}
                                </h4>
                            ) : (
                                <div className="h-px bg-slate-800/60 my-2 mx-2" />
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
                                            showExpanded ? 'justify-start' : 'justify-center',
                                            isActive
                                                ? 'bg-listify-orange text-white shadow-lg shadow-listify-orange/25 font-semibold'
                                                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                                        )}
                                        title={!showExpanded ? item.name : undefined}
                                    >
                                        <Icon
                                            className={cn(
                                                'h-5 w-5 shrink-0 transition-transform group-hover:scale-110',
                                                isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                                            )}
                                        />

                                        {showExpanded && <span className="truncate flex-1">{item.name}</span>}

                                        {/* Badge Pill handling */}
                                        {item.badge && (
                                            showExpanded ? (
                                                <span
                                                    className={cn(
                                                        'px-2 py-0.5 text-[10px] font-bold rounded-full transition-colors shrink-0',
                                                        isActive
                                                            ? 'bg-white text-listify-orange'
                                                            : 'bg-listify-orange/20 text-listify-orange group-hover:bg-listify-orange group-hover:text-white'
                                                    )}
                                                >
                                                    {item.badge}
                                                </span>
                                            ) : (
                                                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-listify-orange ring-2 ring-slate-900 animate-pulse" />
                                            )
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
                            'flex items-center p-2 rounded-xl bg-slate-800/50 gap-2',
                            showExpanded ? 'justify-between' : 'justify-center'
                        )}
                    >
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold shrink-0">
                                SA
                            </div>
                            {showExpanded && (
                                <div className="flex flex-col min-w-0 flex-1">
                                    <span className="text-xs font-semibold text-white truncate">Super Admin</span>
                                    <span className="text-[10px] text-emerald-400 truncate flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                                        Active Session
                                    </span>
                                </div>
                            )}
                        </div>

                        {showExpanded && (
                            <button
                                onClick={handleLogout}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
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
