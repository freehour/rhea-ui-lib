import type { ComponentProps, FunctionComponent } from 'react';

import { Input } from '@/components/input/input';
import { cn } from '@/utils/cn';


export interface SidebarInputProps extends ComponentProps<typeof Input> {
}

export const SidebarInput: FunctionComponent<SidebarInputProps> = ({
    className,
    ...props
}) => (
    <Input
        data-slot="sidebar-input"
        data-sidebar="input"
        className={cn(
            `
            h-8
            w-full
            bg-background
            shadow-none
            `,
            className,
        )}
        {...props}
    />
);

