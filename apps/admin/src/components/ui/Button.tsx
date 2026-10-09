import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'success';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none';

        const variants = {
            primary: 'bg-listify-orange text-white hover:bg-listify-orangeDark shadow-sm shadow-listify-orange/20',
            secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
            outline: 'border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800',
            danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-red-500/20',
            success: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-500/20',
            ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 dark:hover:bg-slate-800 dark:text-slate-200',
        };

        const sizes = {
            sm: 'h-8 px-3 text-xs rounded-lg gap-1.5',
            md: 'h-10 px-4 text-sm rounded-xl gap-2',
            lg: 'h-12 px-6 text-base rounded-xl gap-2.5',
            icon: 'h-9 w-9 p-0 rounded-xl justify-center',
        };

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
