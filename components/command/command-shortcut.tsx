import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface CommandShortcutProps extends ComponentProps<'span'> {}

export const CommandShortcut: FunctionComponent<CommandShortcutProps> = ({
    className,
    ...props
}) => (
    <span
        data-slot="command-shortcut"
        className={cn(
            `
            ml-auto
            text-xs
            tracking-widest
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
