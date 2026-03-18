import type { ComponentProps, FunctionComponent } from 'react';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';


export interface CollapsibleContentProps extends ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent> {
}

export const CollapsibleContent: FunctionComponent<CollapsibleContentProps> = props => (
    <CollapsiblePrimitive.CollapsibleContent
        data-slot="collapsible-content"
        {...props}
    />
);

