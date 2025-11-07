import type { ComponentProps, FunctionComponent } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';


export interface SidebarGroupLabelProps extends ComponentProps<'div'> {
    asChild?: boolean;
}

export const SidebarGroupLabel: FunctionComponent<SidebarGroupLabelProps> = ({
    className,
    asChild = false,
    ...props
}) => {
    const Comp = asChild ? Slot : 'div';

    return (
        <Comp
            data-slot="sidebar-group-label"
            data-sidebar="group-label"
            className={cn(
                `
                flex
                h-8
                shrink-0
                items-center
                rounded-md
                px-2
                text-xs
                font-medium
                text-sidebar-foreground/70
                ring-sidebar-ring
                outline-hidden
                transition-opacity
                duration-200 ease-linear
                group-data-[collapsible=icon]:group-data-[state=closed]:opacity-0
                focus-visible:ring-2
                [&>svg]:size-4
                [&>svg]:shrink-0
                `,
                className,
            )}
            {...props}
        />
    );
};

