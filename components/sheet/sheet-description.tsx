import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';


export interface SheetDescriptionProps extends ComponentProps<typeof SheetPrimitive.Description> {
}

export const SheetDescription: FunctionComponent<SheetDescriptionProps> = ({
    className,
    ...props
}) => (
    <SheetPrimitive.Description
        data-slot="sheet-description"
        className={cn(
            `
            text-sm
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);

