import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils/cn';


export interface DropdownMenuSeparatorProps extends ComponentProps<typeof DropdownMenuPrimitive.Separator> {
}

export const DropdownMenuSeparator: FunctionComponent<
    DropdownMenuSeparatorProps
> = ({
    className,
    ...props
}) => (
    <DropdownMenuPrimitive.Separator
        data-slot="dropdown-menu-separator"
        className={cn(
            `
            -mx-1
            my-1
            h-px
            bg-border
            `,
            className,
        )}
        {...props}
    />
);
