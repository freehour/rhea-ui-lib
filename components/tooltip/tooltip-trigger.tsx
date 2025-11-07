import type { ComponentProps, FunctionComponent } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';


export interface TooltipTriggerProps extends ComponentProps<typeof TooltipPrimitive.Trigger> {
}

export const TooltipTrigger: FunctionComponent<TooltipTriggerProps> = ({
    ...props
}) => <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;

