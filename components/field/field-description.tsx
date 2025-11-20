import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface FieldDescriptionProps extends ComponentProps<'p'> {
}

export const FieldDescription: FunctionComponent<FieldDescriptionProps> = ({
    className,
    ...props
}) => (
    <p
        data-slot="field-description"
        className={cn(
            `
            text-sm
            leading-normal
            font-normal
            text-muted-foreground
            group-has-data-[orientation=horizontal]/field:text-balance
            last:mt-0
            nth-last-2:-mt-1
            [&>a]:underline
            [&>a]:underline-offset-4
            [&>a:hover]:text-primary
            [[data-variant=legend]+&]:-mt-1.5
            `,
            className,
        )}
        {...props}
    />
);
