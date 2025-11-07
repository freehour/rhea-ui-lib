import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SidebarInsetProps extends ComponentProps<'main'> {
}

export const SidebarInset: FunctionComponent<SidebarInsetProps> = ({ className, ...props }) => (
    <main
        data-slot="sidebar-inset"
        className={cn(
            `
            relative
            flex
            w-full
            flex-1
            flex-col
            bg-background
            md:peer-data-[variant=inset]:m-2
            md:peer-data-[variant=inset]:ml-0
            md:peer-data-[variant=inset]:rounded-xl
            md:peer-data-[variant=inset]:shadow-sm
            md:peer-data-[variant=inset]:peer-data-[state=closed]:ml-2
            `,
            className,
        )}
        {...props}
    />
);

