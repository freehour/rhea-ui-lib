import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';


export interface SheetOverlayProps extends ComponentProps<typeof SheetPrimitive.Overlay> {
}

export const SheetOverlay: FunctionComponent<SheetOverlayProps> = ({
    className,
    ...props
}: ComponentProps<typeof SheetPrimitive.Overlay>) => (
    <SheetPrimitive.Overlay
        data-slot="sheet-overlay"
        className={cn(
            `
            fixed
            inset-0
            z-50
            bg-black/50
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out
            data-[state=open]:animate-in
            data-[state=open]:fade-in
            `,
            className,
        )}
        {...props}
    />
);
