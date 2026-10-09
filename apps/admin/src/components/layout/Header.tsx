'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, Moon, Sun, Shield, Wifi, Menu, LogOut } from 'lucide-react';
import { toast } from 'sonner';

interface HeaderProps {
    onOpenCommandPalette: () => void;
    onToggleMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    onOpenCommandPalette,
    onToggleMobileSidebar,
}) => {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const handleLogout = () => {
        toast.success('Logged out of admin session successfully.');
        router.push('/auth/login');
    };

    return (
        <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 sm:px-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
            {/* Left: Mobile Hamburger Toggle + Quick Search */}
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile Hamburger Button */}
                <button
                    onClick={onToggleMobileSidebar}
                    className="flex md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Open Mobile Navigation Drawer"
                >
                    <Menu className="h-6 w-6" />
                </button>

                {/* Command Palette Trigger */}
                <button
                    onClick={onOpenCommandPalette}
                    className="flex h-10 w-44 sm:w-72 items-center gap-2 sm:gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-3 text-xs sm:text-sm text-slate-400 transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-slate-700"
                >
                    <Search className="h-4 w-4 text-slate-400 shrink-0" />
                    <span className="flex-1 text-left truncate">Search listings, users...</span>
                    <kbd className="hidden sm:inline-flex h-5 items-center rounded border border-slate-200 bg-white px-1.5 font-mono text-[10px] font-semibold text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                        ⌘K
                    </kbd>
                </button>

                {/* Live Websocket Pulse */}
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                    <Wifi className="h-3.5 w-3.5 animate-pulse text-emerald-600" />
                    <span>Live Sync</span>
                </div>
            </div>

            {/* Right Action Icons & Logout */}
            <div className="flex items-center gap-1.5 sm:gap-3">
                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Toggle Theme"
                >
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                {/* Notifications Icon with Badge */}
                <div className="relative">
                    <button className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-listify-orange ring-2 ring-white dark:ring-slate-900" />
                    </button>
                </div>

                <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-0.5 sm:mx-1" />

                {/* Admin Profile Chip & Logout Action */}
                <div className="flex items-center gap-2 pl-1">
                    <div className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-listify-orange/10 text-listify-orange font-bold text-sm border border-listify-orange/30 shrink-0">
                        <Shield className="h-4 w-4" />
                    </div>
                    <div className="hidden md:flex flex-col text-left">
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                            Ali Baltistani
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            Super Admin
                        </span>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                        title="Sign Out of Admin Session"
                    >
                        <LogOut className="h-4.5 w-4.5" />
                    </button>
                </div>
            </div>
        </header>
    );
};
