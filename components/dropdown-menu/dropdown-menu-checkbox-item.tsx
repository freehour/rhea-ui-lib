import { cva } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const dropdownMenuCheckboxItemVariants = cva(
    `
    relative
    flex
    cursor-default
    items-center
    gap-1.5
    rounded-md
    py-1
    pr-8
    pl-1.5
    text-sm
    outline-hidden
    select-none
    focus:bg-accent
    focus:text-accent-foreground
    focus:**:text-accent-foreground
    data-disabled:pointer-events-none
    data-disabled:opacity-50
    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4
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


export interface DropdownMenuCheckboxItemProps extends ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>, VariantProps<typeof dropdownMenuCheckboxItemVariants> {
}

export const DropdownMenuCheckboxItem: FunctionComponent<
    DropdownMenuCheckboxItemProps
> = ({
    className,
    children,
    checked,
    inset = false,
    ...props
}) => (
    <DropdownMenuPrimitive.CheckboxItem
        data-slot="dropdown-menu-checkbox-item"
        data-inset={inset}
        checked={checked}
        className={cn(dropdownMenuCheckboxItemVariants({ inset }), className)}
        {...props}
    >
        <span
            data-slot="dropdown-menu-checkbox-item-indicator"
            className={cn(`
                pointer-events-none
                absolute
                right-2
                flex
                items-center
                justify-center
            `)}
        >
            <DropdownMenuPrimitive.ItemIndicator>
                <CheckIcon />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
);

