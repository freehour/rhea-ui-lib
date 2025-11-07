import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';


export interface SheetCloseProps extends ComponentProps<typeof SheetPrimitive.Close> {
}

export const SheetClose: FunctionComponent<SheetCloseProps> = ({
    ...props
}) => <SheetPrimitive.Close data-slot="sheet-close" {...props} />;

