import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/tooltip';
import { cn } from '@/utils/cn';
import { isString } from '@/utils/is-type';

import { useSidebar } from './use-sidebar';


const sidebarMenuButtonVariants = cva(
    `
    peer/menu-button
    flex
    w-full
    items-center
    gap-2
    overflow-hidden
    rounded-md
    p-2
    text-left
    text-sm
    ring-sidebar-ring
    outline-hidden
    transition-[width,height,padding]
    group-has-data-[sidebar=menu-action]/menu-item:pr-8
    group-data-[collapsible=icon]:group-data-[state=closed]:size-8!
    hover:bg-sidebar-accent
    hover:text-sidebar-accent-foreground
    focus-visible:ring-2
    active:bg-sidebar-accent
    active:text-sidebar-accent-foreground
    disabled:pointer-events-none
    disabled:opacity-50
    aria-disabled:pointer-events-none
    aria-disabled:opacity-50
    data-[active=true]:bg-sidebar-accent
    data-[active=true]:font-medium
    data-[active=true]:text-sidebar-accent-foreground
    data-[state=open]:hover:bg-sidebar-accent
    data-[state=open]:hover:text-sidebar-accent-foreground
    [&>span:last-child]:truncate
    [&>svg]:size-4
    [&>svg]:shrink-0
    `,
    {
        variants: {
            variant: {
                default: `
                    hover:bg-sidebar-accent
                    hover:text-sidebar-accent-foreground
                `,
                outline: `
                    bg-background
                    shadow-[0_0_0_1px_hsl(var(--sidebar-border))]
                    hover:bg-sidebar-accent
                    hover:text-sidebar-accent-foreground
                    hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]
                `,
            },
            size: {
                default: `
                    h-8
                    text-sm
                `,
                sm: `
                    h-7
                    text-xs
                `,
                lg: `
                    h-12
                    text-sm
                    group-data-[collapsible=icon]:group-data-[state=closed]:p-0!
                `,
            },
        },
    },
);


export interface SidebarMenuButtonProps extends ComponentProps<'button'>, VariantProps<typeof sidebarMenuButtonVariants> {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | ComponentProps<typeof TooltipContent>;
}

export const SidebarMenuButton: FunctionComponent<SidebarMenuButtonProps> = ({
    asChild = false,
    isActive = false,
    variant = 'default',
    size = 'default',
    tooltip,
    className,
    ...props
}) => {
    const sidebar = useSidebar();

    const Comp = asChild ? Slot : 'button';
    const button = (
        <Comp
            data-slot="sidebar-menu-button"
            data-sidebar="menu-button"
            data-size={size}
            data-active={isActive}
            className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
            {...props}
        />
    );

    if (tooltip === undefined) {
        return button;
    }

    if (isString(tooltip)) {
        tooltip = {
            children: tooltip,
        };
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent
                side="right"
                align="center"
                hidden={sidebar.isOpen}
                {...tooltip}
            />
        </Tooltip>
    );
};
