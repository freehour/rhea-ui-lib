import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';


export interface DropdownMenuGroupProps extends ComponentProps<typeof DropdownMenuPrimitive.Group> {}

export const DropdownMenuGroup: FunctionComponent<
    DropdownMenuGroupProps
> = props => (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
);
