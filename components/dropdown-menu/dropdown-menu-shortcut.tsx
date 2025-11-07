import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


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
            `,
            className,
        )}
        {...props}
    />
);
