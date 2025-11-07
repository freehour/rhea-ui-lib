import type { ComponentProps, FunctionComponent } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

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
            rounded-md
            bg-popover
            text-popover-foreground
            `,
            className,
        )}
        {...props}
    />
);
