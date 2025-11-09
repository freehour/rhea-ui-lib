import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils/cn';


const dropdownMenuItemVariants = cva(
    `
    relative
    flex
    cursor-pointer
    items-center
    gap-2
    rounded-sm
    px-2
    py-1.5
    text-sm
    outline-hidden
    select-none
    focus:bg-accent
    focus:text-accent-foreground
    data-disabled:pointer-events-none
    data-disabled:opacity-50
    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4
    [&_svg:not([class*='text-'])]:text-muted-foreground
    `,
    {
        variants: {
            inset: {
                true: 'pl-8',
                false: '',
            },
            variant: {
                default: '',
                destructive: `
                    text-destructive
                    focus:bg-destructive/10
                    focus:text-destructive
                    dark:focus:bg-destructive/20
                    *:[svg]:text-destructive!
                `,
            },
        },
    },
);


export interface DropdownMenuItemProps extends ComponentProps<typeof DropdownMenuPrimitive.Item>, VariantProps<typeof dropdownMenuItemVariants> {
}

export const DropdownMenuItem: FunctionComponent<DropdownMenuItemProps> = ({
    className,
    inset = false,
    variant = 'default',
    ...props
}) => (
    <DropdownMenuPrimitive.Item
        data-slot="dropdown-menu-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(dropdownMenuItemVariants({ inset, variant }), className)}
        {...props}
    />
);
