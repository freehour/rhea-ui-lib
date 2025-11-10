import type { ComponentProps, FunctionComponent } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';


export interface SelectValueProps extends ComponentProps<typeof SelectPrimitive.Value> {}

export const SelectValue: FunctionComponent<SelectValueProps> = props => (
    <SelectPrimitive.Value data-slot="select-value" {...props} />
);
