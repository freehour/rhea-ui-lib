import { cva } from 'class-variance-authority';
import type { ComponentProps, FunctionComponent } from 'react';

import { Slot } from '@radix-ui/react-slot';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const sidebarMenuSubButtonVariants = cva(
    `
    flex
    h-7
    min-w-0
    -translate-x-px
    items-center
    gap-2
    overflow-hidden
    rounded-md
    px-2
    text-sidebar-foreground
    ring-sidebar-ring
    outline-hidden
    group-data-[collapsible=icon]:group-data-[state=closed]:hidden
    hover:bg-sidebar-accent
    hover:text-sidebar-accent-foreground
    focus-visible:ring-2
    active:bg-sidebar-accent
    active:text-sidebar-accent-foreground
    disabled:pointer-events-none
    disabled:opacity-50
    aria-disabled:pointer-events-none
    aria-disabled:opacity-50
    [&>span:last-child]:truncate
    [&>svg]:size-4
    [&>svg]:shrink-0
    [&>svg]:text-sidebar-accent-foreground
    `,
    {
        variants: {
            size: {
                sm: 'text-xs',
                md: 'text-sm',
            },
            active: {
                true: `
                    bg-sidebar-accent
                    text-sidebar-accent-foreground
                `,
                false: '',
            },
        },
    },
);


export interface SidebarMenuSubButtonProps extends ComponentProps<'a'>, VariantProps<typeof sidebarMenuSubButtonVariants> {
    asChild?: boolean;
}

export const SidebarMenuSubButton: FunctionComponent<SidebarMenuSubButtonProps> = ({
    asChild = false,
    size = 'md',
    active = false,
    className,
    ...props
}) => {
    const Comp = asChild ? Slot : 'a';

    return (
        <Comp
            data-slot="sidebar-menu-sub-button"
            data-sidebar="menu-sub-button"
            data-size={size}
            data-active={active}
            className={cn(sidebarMenuSubButtonVariants({ size, active }), className)}
            {...props}
        />
    );
};

