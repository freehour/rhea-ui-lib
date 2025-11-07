import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';


export interface DropdownMenuProps extends ComponentProps<typeof DropdownMenuPrimitive.Root> {}

export const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({
    ...props
}) => <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
