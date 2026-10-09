import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'verified' | 'pending' | 'banned' | 'active' | 'featured' | 'negotiable' | 'outline' | 'default';
    size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
    className,
    variant = 'default',
    size = 'md',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';

    const variants = {
        default: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
        active: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800',
        verified: 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-300',
        pending: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800',
        banned: 'bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800',
        featured: 'bg-amber-100 text-amber-900 border border-amber-300 shadow-sm dark:bg-amber-900/50 dark:text-amber-200',
        negotiable: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-400',
        outline: 'border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-[11px] gap-1',
        md: 'px-2.5 py-1 text-xs gap-1.5',
    };

    return (
        <div className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
            {children}
        </div>
    );
};
