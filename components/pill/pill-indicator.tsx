import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';


const pulseVariants = cva(
    `
    absolute
    inline-flex
    h-full
    w-full
    animate-ping
    rounded-full
    opacity-75
    `,
    {
        variants: {
            variant: {
                success: 'bg-emerald-400',
                error: 'bg-rose-400',
                warning: 'bg-amber-400',
                info: 'bg-sky-400',
            },
        },
    },
);

const indicatorVariants = cva(
    `
    relative
    inline-flex
    size-2
    rounded-full
    `,
    {
        variants: {
            variant: {
                success: 'bg-emerald-500',
                error: 'bg-rose-500',
                warning: 'bg-amber-500',
                info: 'bg-sky-500',
            },
        },
    },
);


export interface PillIndicatorProps extends ComponentProps<'span'> {
    variant?: 'success' | 'error' | 'warning' | 'info';
    pulse?: boolean;
}

export const PillIndicator: FunctionComponent<PillIndicatorProps> = ({
    variant = 'success',
    pulse = false,
    className,
    ...props
}) => (
    <span
        className={cn(
            `
            relative
            flex
            size-2
            `,
            className,
        )}
        {...props}
    >
        {pulse && <span className={pulseVariants({ variant })} />}
        <span className={indicatorVariants({ variant })} />
    </span>
);
