import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface SheetHeaderProps extends ComponentProps<'div'> {
}

export const SheetHeader: FunctionComponent<SheetHeaderProps> = ({ className, ...props }) => (
    <div
        data-slot="sheet-header"
        className={cn(
            `
            flex
            flex-col
            gap-1.5
            p-4
            `,
            className,
        )}
        {...props}
    />
);
