import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';


export interface SheetPortalProps extends ComponentProps<typeof SheetPrimitive.Portal> {
}

export const SheetPortal: FunctionComponent<SheetPortalProps> = ({
    ...props
}) => <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;

