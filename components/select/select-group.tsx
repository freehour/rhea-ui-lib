import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';


export interface SelectGroupProps extends ComponentProps<typeof SelectPrimitive.Group> {}

export const SelectGroup: FunctionComponent<SelectGroupProps> = props => (
    <SelectPrimitive.Group data-slot="select-group" {...props} />
);
