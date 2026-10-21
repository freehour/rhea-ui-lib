import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


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
            group-data-selected/command-item:text-foreground
            `,
            className,
        )}
        {...props}
    />
);
