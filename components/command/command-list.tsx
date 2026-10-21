import { Command as CommandPrimitive } from 'cmdk';
import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface CommandListProps extends ComponentProps<typeof CommandPrimitive.List> {}

export const CommandList: FunctionComponent<CommandListProps> = ({
    className,
    ...props
}) => (
    <CommandPrimitive.List
        data-slot="command-list"
        className={cn(
            `
            max-h-72
            scroll-py-1
            overflow-x-hidden
            overflow-y-auto
            outline-none
            `,
            className,
        )}
        {...props}
    />
);
