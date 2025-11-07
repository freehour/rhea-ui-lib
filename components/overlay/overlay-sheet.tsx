import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';


const overlaySheetVariants = cva(
    `
    absolute
    inset-0
    `,
    {
        variants: {
            /** Sets the background opacity level using Tailwind opacity classes */
            opacity: {
                0: 'opacity-0',
                10: 'opacity-10',
                15: 'opacity-15',
                20: 'opacity-20',
                25: 'opacity-25',
                30: 'opacity-30',
                35: 'opacity-35',
                40: 'opacity-40',
                45: 'opacity-45',
                50: 'opacity-50',
                55: 'opacity-55',
                60: 'opacity-60',
                65: 'opacity-65',
                70: 'opacity-70',
                75: 'opacity-75',
                80: 'opacity-80',
                85: 'opacity-85',
                90: 'opacity-90',
                95: 'opacity-95',
                100: 'opacity-100',
            },
        },
    },
);


export interface OverlaySheetProps extends ComponentProps<'div'>, VariantProps<typeof overlaySheetVariants> {
}

/**
 * A semi-transparent sheet that covers the overlay.
 * Multiple sheets can be stacked.
 */
export const OverlaySheet: FunctionComponent<OverlaySheetProps> = ({
    opacity = 50,
    className,
    ...props
}) => (
    <div
        aria-hidden // Marks overlay as decorative for accessibility
        className={cn(overlaySheetVariants({ opacity }), className)}
        {...props}
    />
);

