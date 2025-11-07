import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';


export interface DialogProps extends ComponentProps<typeof DialogPrimitive.Root> {}

export const Dialog: FunctionComponent<DialogProps> = props => (
    <DialogPrimitive.Root data-slot="dialog" {...props} />
);
