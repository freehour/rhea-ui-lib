import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface FieldSetProps extends ComponentProps<'fieldset'> {}

export const FieldSet: FunctionComponent<FieldSetProps> = ({
    className,
    ...props
}) => (
    <fieldset
        data-slot="field-set"
        className={cn(
            `
            flex
            flex-col
            gap-6
            has-[>[data-slot=checkbox-group]]:gap-3
            has-[>[data-slot=radio-group]]:gap-3
            `,
            className,
        )}
        {...props}
    />
);
