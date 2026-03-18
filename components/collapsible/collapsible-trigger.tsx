import type { ComponentProps, FunctionComponent } from 'react';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';


export interface CollapsibleTriggerProps extends ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger> {
}

export const CollapsibleTrigger: FunctionComponent<CollapsibleTriggerProps> = props => (
    <CollapsiblePrimitive.CollapsibleTrigger
        data-slot="collapsible-trigger"
        {...props}
    />
);
