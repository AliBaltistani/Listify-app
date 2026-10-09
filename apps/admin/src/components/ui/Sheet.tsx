import * as React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Sheet: React.FC<SheetProps> = ({
    isOpen,
    onClose,
    title,
    subtitle,
    children,
    width = 'lg',
}) => {
    const widths = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-full',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
                    />

                    {/* Drawer Content */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={cn(
                            'relative z-50 flex flex-col h-full w-full bg-white shadow-2xl dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800',
                            widths[width]
                        )}
                    >
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                            <div>
                                {title && <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h2>}
                                {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Body Container */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
