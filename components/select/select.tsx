import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';


export interface SelectProps extends ComponentProps<typeof SelectPrimitive.Root> {}

export const Select: FunctionComponent<SelectProps> = props => (
    <SelectPrimitive.Root data-slot="select" {...props} />
);
