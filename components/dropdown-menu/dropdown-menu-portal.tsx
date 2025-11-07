import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';


export interface DropdownMenuPortalProps extends ComponentProps<typeof DropdownMenuPrimitive.Portal> {}

export const DropdownMenuPortal: FunctionComponent<
    DropdownMenuPortalProps
> = props => (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
);
