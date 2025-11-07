import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';


export interface SheetProps extends ComponentProps<typeof SheetPrimitive.Root> {
}

export const Sheet: FunctionComponent<SheetProps> = ({
    ...props
}) => <SheetPrimitive.Root data-slot="sheet" {...props} />;

