import type { ComponentProps, FunctionComponent } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';


export interface TooltipProviderProps extends ComponentProps<typeof TooltipPrimitive.Provider> {
}

export const TooltipProvider: FunctionComponent<TooltipProviderProps> = ({
    delayDuration = 0,
    ...props
}) => (
    <TooltipPrimitive.Provider
        data-slot="tooltip-provider"
        delayDuration={delayDuration}
        {...props}
    />
);
