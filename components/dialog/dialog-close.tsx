import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';


export interface DialogCloseProps extends ComponentProps<typeof DialogPrimitive.Close> {}

export const DialogClose: FunctionComponent<DialogCloseProps> = props => (
    <DialogPrimitive.Close data-slot="dialog-close" {...props} />
);
