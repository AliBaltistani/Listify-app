'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { Toaster } from 'sonner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname?.startsWith('/auth');

    const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);

    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <head>
                <title>Listify Admin Control Portal</title>
                <meta name="description" content="Listify Admin Marketplace Management Portal" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body className="flex h-full bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 antialiased overflow-hidden" suppressHydrationWarning>
                {isAuthPage ? (
                    <div className="w-full h-full overflow-y-auto">
                        {children}
                    </div>
                ) : (
                    <>
                        {/* Responsive Sidebar */}
                        <Sidebar
                            isCollapsed={isSidebarCollapsed}
                            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                            isMobileOpen={isMobileSidebarOpen}
                            onCloseMobile={() => setIsMobileSidebarOpen(false)}
                        />

                        {/* Main Content Area */}
                        <div className="flex flex-1 flex-col h-full min-w-0 overflow-hidden">
                            {/* Top Header */}
                            <Header
                                onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
                                onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                            />

                            {/* Page Body Viewport */}
                            <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 min-w-0">
                                {children}
                            </main>
                        </div>

                        {/* Global Command Palette Dialog */}
                        <CommandPalette
                            isOpen={isCommandPaletteOpen}
                            onClose={() => setIsCommandPaletteOpen(false)}
                        />
                    </>
                )}

                {/* Sonner Toast Notifications */}
                <Toaster position="top-right" richColors />
            </body>
        </html>
    );
}
