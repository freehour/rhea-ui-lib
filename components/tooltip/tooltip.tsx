import type { ComponentProps, FunctionComponent } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';


export interface TooltipProps extends ComponentProps<typeof TooltipPrimitive.Root> {
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
    ...props
}) => (
    <TooltipPrimitive.Root
        data-slot="tooltip"
        {...props}
    />
);

