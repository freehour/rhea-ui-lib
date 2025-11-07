import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';


export interface DropdownMenuSubProps extends ComponentProps<typeof DropdownMenuPrimitive.Sub> {}

export const DropdownMenuSub: FunctionComponent<DropdownMenuSubProps> = ({
    ...props
}) => (
    <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
);
