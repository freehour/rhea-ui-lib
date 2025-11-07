import type { ComponentProps, FunctionComponent } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';


export interface SidebarGroupActionProps extends ComponentProps<'button'> {
    asChild?: boolean;
}

export const SidebarGroupAction: FunctionComponent<SidebarGroupActionProps> = ({
    className,
    asChild = false,
    ...props
}) => {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="sidebar-group-action"
            data-sidebar="group-action"
            className={cn(
                `
                absolute
                top-3.5
                right-3
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
                after:absolute
                after:-inset-2
                hover:bg-sidebar-accent
                hover:text-sidebar-accent-foreground
                focus-visible:ring-2
                md:after:hidden
                [&>svg]:size-4
                [&>svg]:shrink-0
                `,
                className,
            )}
            {...props}
        />
    );
};

