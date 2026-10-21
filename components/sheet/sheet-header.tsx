import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface SheetHeaderProps extends ComponentProps<'div'> {
}

export const SheetHeader: FunctionComponent<SheetHeaderProps> = ({ className, ...props }) => (
    <div
        data-slot="sheet-header"
        className={cn(
            `
            flex
            flex-col
            gap-0.5
            p-4
            `,
            className,
        )}
        {...props}
    />
);
