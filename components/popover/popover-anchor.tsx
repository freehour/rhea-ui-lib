import type { ComponentProps, FunctionComponent } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';


export interface PopoverAnchorProps extends ComponentProps<typeof PopoverPrimitive.Anchor> {}

export const PopoverAnchor: FunctionComponent<PopoverAnchorProps> = props => (
    <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
);
