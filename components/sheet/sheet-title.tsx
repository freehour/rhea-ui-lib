import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';


export interface SheetTitleProps extends ComponentProps<typeof SheetPrimitive.Title> {
}

export const SheetTitle: FunctionComponent<SheetTitleProps> = ({
    className,
    ...props
}) => (
    <SheetPrimitive.Title
        data-slot="sheet-title"
        className={cn(
            `
            text-base
            font-medium
            text-foreground
            `,
            className,
        )}
        {...props}
    />
);
