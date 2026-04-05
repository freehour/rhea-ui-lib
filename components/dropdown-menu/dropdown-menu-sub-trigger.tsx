import { cva } from 'class-variance-authority';
import { ChevronRightIcon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils/cn';


const dropdownMenuSubTriggerVariants = cva(
    `
    flex
    cursor-default
    items-center
    gap-1.5
    rounded-md
    px-1.5
    py-1
    text-sm
    outline-hidden
    select-none
    focus:bg-accent
    focus:text-accent-foreground
    data-[state=open]:bg-accent
    data-[state=open]:text-accent-foreground
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

export interface DropdownMenuSubTriggerProps extends ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
    inset?: boolean;
}

export const DropdownMenuSubTrigger: FunctionComponent<
    DropdownMenuSubTriggerProps
> = ({
    className,
    inset,
    children,
    ...props
}) => (
    <DropdownMenuPrimitive.SubTrigger
        data-slot="dropdown-menu-sub-trigger"
        data-inset={inset}
        className={cn(dropdownMenuSubTriggerVariants({ inset }), className)}
        {...props}
    >
        {children}
        <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
);
