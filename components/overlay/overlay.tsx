import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

/**
 * Tailwind class configuration for the overlay wrapper.
 * Variants:
 * - pointerEvents: Controls whether overlay intercepts pointer events.
 */
const overlayVariants = cva(
    `
    relative
    overflow-hidden
    `,
    {
        variants: {
            pointerEvents: {
                true: 'pointer-events-auto', // Overlay is interactive
                false: 'pointer-events-none', // Overlay is not interactive
            },
        },
    },
);

/**
 * Props for Overlay wrapper component.
 */
export interface OverlayProps extends ComponentProps<'div'> {
    /** Whether overlay intercepts pointer events */
    pointerEvents?: boolean;
}

/**
 * Overlay wrapper component.
 * Provides a relative positioning context for children.
 * Does not render a backdrop by default.
 *
 * @example
 * <Overlay className="w-64 h-64 border border-gray-300" pointerEvents={false}>
 *   <img src="example.jpg" alt="Example" className="w-full h-full object-cover" />
 *   <OverlayBackdrop
 *     transparency={70}
 *     filter="blur(4px)"
 *     className="rounded-lg"
 *   />
 * </Overlay>
 */
export const Overlay: FunctionComponent<OverlayProps> = ({
    className,
    pointerEvents = true,
    ...props
}) => (
    <div
        className={cn(overlayVariants({ pointerEvents }), className)}
        {...props}
    />
);
