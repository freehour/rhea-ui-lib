import type { ComponentProps, FunctionComponent } from 'react';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';


export interface CollapsibleProps extends ComponentProps<typeof CollapsiblePrimitive.Root> {}

export const Collapsible: FunctionComponent<CollapsibleProps> = props => (
    <CollapsiblePrimitive.Root
        data-slot="collapsible"
        {...props}
    />
);
