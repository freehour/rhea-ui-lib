import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';


export interface DialogTriggerProps extends ComponentProps<typeof DialogPrimitive.Trigger> {}

export const DialogTrigger: FunctionComponent<DialogTriggerProps> = props => (
    <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
);
