import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface FieldGroupProps extends ComponentProps<'div'> {
}

export const FieldGroup: FunctionComponent<FieldGroupProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="field-group"
        className={cn(
            `
            group/field-group
            @container/field-group
            flex
            w-full
            flex-col
            gap-7
            data-[slot=checkbox-group]:gap-3
            *:data-[slot=field-group]:gap-4
            `,
            className,
        )}
        {...props}
    />
);
