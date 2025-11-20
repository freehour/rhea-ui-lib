import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface FieldContentProps extends ComponentProps<'div'> {
}

export const FieldContent: FunctionComponent<FieldContentProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="field-content"
        className={cn(
            `
            group/field-content
            flex
            flex-1
            flex-col
            gap-1.5
            leading-snug
            `,
            className,
        )}
        {...props}
    />
);
