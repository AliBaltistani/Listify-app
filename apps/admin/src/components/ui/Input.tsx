import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, rightElement, error, ...props }, ref) => {
        return (
            <div className="w-full space-y-1">
                <div className="relative flex items-center w-full">
                    {icon && (
                        <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
                            {icon}
                        </div>
                    )}
                    <input
                        type={type}
                        className={cn(
                            'flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-listify-orange focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500',
                            icon && 'pl-10',
                            rightElement && 'pr-10',
                            error && 'border-red-500 focus-visible:ring-red-500',
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    {rightElement && (
                        <div className="absolute right-3 flex items-center">
                            {rightElement}
                        </div>
                    )}
                </div>
                {error && <p className="text-xs text-red-500 pl-1 font-medium">{error}</p>}
            </div>
        );
    }
);
Input.displayName = 'Input';
