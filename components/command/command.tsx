import { Command as CommandPrimitive } from 'cmdk';
import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface CommandProps extends ComponentProps<typeof CommandPrimitive> {}

export const Command: FunctionComponent<CommandProps> = ({
    className,
    ...props
}) => (
    <CommandPrimitive
        data-slot="command"
        className={cn(
            `
            flex
            size-full
            flex-col
            overflow-hidden
            rounded-xl!
            bg-popover
            p-1
            text-popover-foreground
            `,
            className,
        )}
        {...props}
    />
);
