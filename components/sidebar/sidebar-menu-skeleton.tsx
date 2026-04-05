import type { ComponentProps, FunctionComponent } from 'react';

import { Skeleton } from '@/components/skeleton/skeleton';
import { cn } from '@/utils/cn';


export interface SidebarMenuSkeletonProps extends ComponentProps<'div'> {
    showIcon?: boolean;
}

export const SidebarMenuSkeleton: FunctionComponent<SidebarMenuSkeletonProps> = ({
    className,
    showIcon = false,
    ...props
}) => (
    <div
        data-slot="sidebar-menu-skeleton"
        data-sidebar="menu-skeleton"
        className={cn(
            `
                flex
                h-8
                items-center
                gap-2
                rounded-md
                px-2
                `,
            className,
        )}
        {...props}
    >
        {showIcon && (
            <Skeleton
                className={
                    `
                        size-4
                        rounded-md
                        `
                }
                data-sidebar="menu-skeleton-icon"
            />
        )}
        <Skeleton
            className={
                `
                    h-4
                    max-w-2/3
                    flex-1
                    `
            }
            data-sidebar="menu-skeleton-text"
        />
    </div>
);
