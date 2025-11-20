import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface FieldLegendProps extends ComponentProps<'legend'> {
    variant?: 'legend' | 'label';
}

export const FieldLegend: FunctionComponent<FieldLegendProps> = ({
    className,
    variant = 'legend',
    ...props
}) => (
    <legend
        data-slot="field-legend"
        data-variant={variant}
        className={cn(
            `
            mb-3
            font-medium
            data-[variant=label]:text-sm
            data-[variant=legend]:text-base
            `,
            className,
        )}
        {...props}
    />
);

// TODO: use cva?
