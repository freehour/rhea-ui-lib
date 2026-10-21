import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface DropdownMenuShortcutProps extends ComponentProps<'span'> {
}

export const DropdownMenuShortcut: FunctionComponent<
    DropdownMenuShortcutProps
> = ({
    className,
    ...props
}) => (
    <span
        data-slot="dropdown-menu-shortcut"
        className={cn(
            `
            ml-auto
            text-xs
            tracking-widest
            text-muted-foreground
            group-focus/dropdown-menu-item:text-accent-foreground
            `,
            className,
        )}
        {...props}
    />
);
