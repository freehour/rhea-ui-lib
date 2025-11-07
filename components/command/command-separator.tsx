import type { ComponentProps, FunctionComponent } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/utils/cn';


export interface CommandSeparatorProps extends ComponentProps<typeof CommandPrimitive.Separator> {}

export const CommandSeparator: FunctionComponent<CommandSeparatorProps> = ({
    className,
    ...props
}) => (
    <CommandPrimitive.Separator
        data-slot="command-separator"
        className={cn(
            `
            -mx-1
            h-px
            bg-border
            `,
            className,
        )}
        {...props}
    />
);
