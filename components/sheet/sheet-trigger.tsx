import type { ComponentProps, FunctionComponent } from 'react';

import * as SheetPrimitive from '@radix-ui/react-dialog';


export interface SheetTriggerProps extends ComponentProps<typeof SheetPrimitive.Trigger> {
}

export const SheetTrigger: FunctionComponent<SheetTriggerProps> = ({
    ...props
}) => <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;

