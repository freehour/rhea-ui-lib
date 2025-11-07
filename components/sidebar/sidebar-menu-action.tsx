import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';


const sideBarMenuActionVariants = cva(
    `
    absolute
    top-1.5
    right-1
    flex
    aspect-square
    w-5
    items-center
    justify-center
    rounded-md
    p-0
    text-sidebar-foreground
    ring-sidebar-ring outline-hidden
    transition-transform
    group-data-[collapsible=icon]:group-data-[state=closed]:hidden
    peer-hover/menu-button:text-sidebar-accent-foreground
    peer-data-[size=default]/menu-button:top-1.5
    peer-data-[size=lg]/menu-button:top-2.5
    peer-data-[size=sm]/menu-button:top-1
    after:absolute
    after:-inset-2
    hover:bg-sidebar-accent
    hover:text-sidebar-accent-foreground
    focus-visible:ring-2
    md:after:hidden
    [&>svg]:size-4
    [&>svg]:shrink-0
    `,
    {
        variants: {
            showOnHover: {
                false: null,
                true: `
                    group-focus-within/menu-item:opacity-100
                    group-hover/menu-item:opacity-100
                    peer-data-[active=true]/menu-button:text-sidebar-accent-foreground
                    data-[state=open]:opacity-100
                    md:opacity-0
                `,
            },
        },
    },
);


export interface SidebarMenuActionProps extends ComponentProps<'button'>, VariantProps<typeof sideBarMenuActionVariants> {
    asChild?: boolean;
}

export const SidebarMenuAction: FunctionComponent<SidebarMenuActionProps> = ({
    className,
    asChild = false,
    showOnHover = false,
    ...props
}) => {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="sidebar-menu-action"
            data-sidebar="menu-action"
            className={cn(sideBarMenuActionVariants({ showOnHover }), className)}
            {...props}
        />
    );
};
