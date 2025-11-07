import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';


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
            font-semibold
            text-foreground
            `,
            className,
        )}
        {...props}
    />
);
