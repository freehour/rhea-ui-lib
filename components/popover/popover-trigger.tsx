import type { ComponentProps, FunctionComponent } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';


export interface PopoverTriggerProps extends ComponentProps<typeof PopoverPrimitive.Trigger> {}

export const PopoverTrigger: FunctionComponent<PopoverTriggerProps> = props => (
    <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
);
