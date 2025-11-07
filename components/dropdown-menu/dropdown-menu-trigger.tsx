import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';


export interface DropdownMenuTriggerProps extends ComponentProps<typeof DropdownMenuPrimitive.Trigger> {}

export const DropdownMenuTrigger: FunctionComponent<
    DropdownMenuTriggerProps
> = props => (
    <DropdownMenuPrimitive.Trigger
        data-slot="dropdown-menu-trigger"
        {...props}
    />
);
