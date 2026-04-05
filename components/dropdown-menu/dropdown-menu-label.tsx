import { cva } from 'class-variance-authority';
import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils/cn';


const dropdownMenuLabelVariants = cva(
    `
    px-1.5
    py-1
    text-xs
    font-medium
    text-muted-foreground
    `,
    {
        variants: {
            inset: {
                true: 'pl-7',
                false: '',
            },
        },
    },
);

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
        className={cn(dropdownMenuLabelVariants({ inset }), className)}
        {...props}
    />
);
