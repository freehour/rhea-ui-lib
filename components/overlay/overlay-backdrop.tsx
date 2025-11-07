import type { FunctionComponent } from 'react';

import { cn } from '@/utils/cn';

import type { OverlaySheetProps } from './overlay-sheet';
import { OverlaySheet } from './overlay-sheet';


export interface OverlayBackdropProps extends OverlaySheetProps {
}

/**
 * An overlay sheet that mutes the background.
 */
export const OverlayBackdrop: FunctionComponent<OverlayBackdropProps> = ({
    className,
    ...props
}) => (
    <OverlaySheet
        aria-hidden // Marks backdrop as decorative for accessibility
        className={cn('bg-background', className)}
        {...props}
    />
);

