'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, Users, FolderTree, Palette, SlidersHorizontal, ArrowRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [query, setQuery] = React.useState('');

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (isOpen) onClose();
                else {
                    // Trigger open via key
                }
            }
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const quickLinks = [
        { name: 'Pending Listings Moderation', category: 'Listings', href: '/listings', icon: ShoppingBag },
        { name: 'User Verification Queue', category: 'Users', href: '/users/verify', icon: Users },
        { name: 'Category & Spec Builder', category: 'Categories', href: '/categories', icon: FolderTree },
        { name: 'Live App Theme Simulator', category: 'CMS', href: '/config/theme', icon: Palette },
        { name: 'System Feature Flags', category: 'Config', href: '/config/features', icon: SlidersHorizontal },
    ];

    const filteredLinks = quickLinks.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    const handleNavigate = (href: string) => {
        router.push(href);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Dialog Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="relative z-50 w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 overflow-hidden"
                    >
                        {/* Input Bar */}
                        <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
                            <Search className="h-5 w-5 text-slate-400 shrink-0" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Type a command or search..."
                                className="w-full h-14 bg-transparent px-3 text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
                                autoFocus
                            />
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content List */}
                        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                            {filteredLinks.length === 0 ? (
                                <div className="p-8 text-center text-sm text-slate-500">No matching commands found.</div>
                            ) : (
                                filteredLinks.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleNavigate(item.href)}
                                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left group transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 group-hover:bg-listify-orange/10 group-hover:text-listify-orange">
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-xs text-slate-400">{item.category}</div>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </button>
                                    );
                                })
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
                            <span>Navigate with arrow keys</span>
                            <span>ESC to close</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
