import type { ComponentProps, FunctionComponent } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/utils/cn';


export interface CommandListProps extends ComponentProps<typeof CommandPrimitive.List> {}

export const CommandList: FunctionComponent<CommandListProps> = ({
    className,
    ...props
}) => (
    <CommandPrimitive.List
        data-slot="command-list"
        className={cn(
            `
            max-h-96
            scroll-py-1
            overflow-x-hidden
            overflow-y-auto
            `,
            className,
        )}
        {...props}
    />
);
