import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils/cn';


const dropdownMenuRadioItemVariants = cva(
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

export interface DropdownMenuRadioItemProps extends ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {
    inset?: boolean;
}

export const DropdownMenuRadioItem: FunctionComponent<
    DropdownMenuRadioItemProps
> = ({
    className,
    children,
    inset,
    ...props
}) => (
    <DropdownMenuPrimitive.RadioItem
        data-slot="dropdown-menu-radio-item"
        data-inset={inset}
        className={cn(dropdownMenuRadioItemVariants({ inset }), className)}
        {...props}
    >
        <span
            data-slot="dropdown-menu-radio-item-indicator"
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
    </DropdownMenuPrimitive.RadioItem>
);
