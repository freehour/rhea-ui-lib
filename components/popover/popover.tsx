import type { ComponentProps, FunctionComponent } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';


export interface PopoverProps extends ComponentProps<typeof PopoverPrimitive.Root> {}

export const Popover: FunctionComponent<PopoverProps> = props => (
    <PopoverPrimitive.Root data-slot="popover" {...props} />
);
