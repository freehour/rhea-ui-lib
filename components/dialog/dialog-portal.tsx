import type { ComponentProps, FunctionComponent } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';


export interface DialogPortalProps extends ComponentProps<typeof DialogPrimitive.Portal> {}

export const DialogPortal: FunctionComponent<DialogPortalProps> = props => (
    <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
);
