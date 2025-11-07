import type { ComponentProps, FunctionComponent } from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';


export interface DropdownMenuRadioGroupProps extends ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> {}

export const DropdownMenuRadioGroup: FunctionComponent<
    DropdownMenuRadioGroupProps
> = props => (
    <DropdownMenuPrimitive.RadioGroup
        data-slot="dropdown-menu-radio-group"
        {...props}
    />
);
