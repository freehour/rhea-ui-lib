import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from '@/utils/cn';


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
        className={cn(
            `
            flex
            cursor-default
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
            data-inset:pl-8
            data-[state=open]:bg-accent
            data-[state=open]:text-accent-foreground
            [&_svg]:pointer-events-none
            [&_svg]:shrink-0
            [&_svg:not([class*='size-'])]:size-4
            [&_svg:not([class*='text-'])]:text-muted-foreground
            `,
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
);
