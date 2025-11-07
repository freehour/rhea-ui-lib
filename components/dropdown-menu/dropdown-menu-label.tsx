import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils/cn';


export interface DropdownMenuLabelProps extends ComponentProps<typeof DropdownMenuPrimitive.Label> {
    inset?: boolean;
}

export const DropdownMenuLabel: FunctionComponent<
    DropdownMenuLabelProps
> = ({
    className,
    inset,
    ...props
}) => (
    <DropdownMenuPrimitive.Label
        data-slot="dropdown-menu-label"
        data-inset={inset}
        className={cn(
            `
            px-2
            py-1.5
            text-sm
            font-medium
            data-inset:pl-8
            `,
            className,
        )}
        {...props}
    />
);
