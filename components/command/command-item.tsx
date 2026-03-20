import type { ComponentProps, FunctionComponent } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/utils/cn';


export interface CommandItemProps extends ComponentProps<typeof CommandPrimitive.Item> {}

export const CommandItem: FunctionComponent<CommandItemProps> = ({
    className,
    children,
    ...props
}) => (
    <CommandPrimitive.Item
        data-slot="command-item"
        className={cn(
            `
            group/command-item
            relative
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
            in-data-[slot=dialog-content]:rounded-lg!
            data-[disabled=true]:pointer-events-none
            data-[disabled=true]:opacity-50
            data-[selected=true]:bg-muted
            data-[selected=true]:text-foreground
            [&_svg]:pointer-events-none
            [&_svg]:shrink-0
            [&_svg:not([class*='size-'])]:size-4
            data-[selected=true]:*:[svg]:text-foreground
            `,
            className,
        )}
        {...props}
    >
        {children}
        <CheckIcon
            className={cn(`
                ml-auto
                opacity-0
                group-has-data-[slot=command-shortcut]/command-item:hidden
                group-data-[checked=true]/command-item:opacity-100
            `)}
        />
    </CommandPrimitive.Item>
);
