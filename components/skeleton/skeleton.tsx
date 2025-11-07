import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SkeletonProps extends ComponentProps<'div'> {
}

export const Skeleton: FunctionComponent<SkeletonProps> = ({ className, ...props }) => (
    <div
        data-slot="skeleton"
        className={cn(
            `
            animate-pulse
            rounded-md
            bg-accent
            `,
            className,
        )}
        {...props}
    />
);
