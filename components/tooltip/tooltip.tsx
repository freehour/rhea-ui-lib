import type { ComponentProps, FunctionComponent } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { TooltipProvider } from './tooltip-provider';


export interface TooltipProps extends ComponentProps<typeof TooltipPrimitive.Root> {
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
    ...props
}) => (
    <TooltipProvider>
        <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
);

