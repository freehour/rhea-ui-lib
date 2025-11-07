import type { ComponentProps, FunctionComponent } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/utils/cn';


export interface CommandGroupProps extends ComponentProps<typeof CommandPrimitive.Group> {}

export const CommandGroup: FunctionComponent<CommandGroupProps> = ({ className, ...props }) => (
    <CommandPrimitive.Group
        data-slot="command-group"
        className={cn(
            `
            overflow-hidden
            p-1
            text-foreground
            **:[[cmdk-group-heading]]:px-2
            **:[[cmdk-group-heading]]:py-1.5
            **:[[cmdk-group-heading]]:text-xs
            **:[[cmdk-group-heading]]:font-medium
            **:[[cmdk-group-heading]]:text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
