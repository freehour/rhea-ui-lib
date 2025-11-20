import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';


const fieldVariants = cva(
    `
    group/field
    flex
    w-full
    gap-3
    data-[invalid=true]:text-destructive
    `,
    {
        variants: {
            orientation: {
                vertical: `
                    flex-col
                    *:w-full
                    [&>.sr-only]:w-auto
                `,
                horizontal: `
                    flex-row
                    items-center
                    has-[>[data-slot=field-content]]:items-start
                    *:data-[slot=field-label]:flex-auto
                    has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px
                `,
                responsive: `
                    flex-col
                    *:w-full
                    @md/field-group:flex-row
                    @md/field-group:items-center @md/field-group:*:w-auto
                    @md/field-group:has-[>[data-slot=field-content]]:items-start
                    @md/field-group:*:data-[slot=field-label]:flex-auto
                    [&>.sr-only]:w-auto
                    @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px
                `,
            },
        },
    },
);

export interface FieldProps extends ComponentProps<'div'>, VariantProps<typeof fieldVariants> {}

export const Field: FunctionComponent<FieldProps> = ({
    className,
    orientation = 'vertical',
    ...props
}) => (
    <div
        role="group"
        data-slot="field"
        data-orientation={orientation}
        className={cn(fieldVariants({ orientation }), className)}
        {...props}
    />
);
