import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';


const fieldLegendVariants = cva(
    `
    mb-3
    font-medium
    `,
    {
        variants: {
            variant: {
                label: 'text-sm',
                legend: 'text-base',
            },
        },
    },
);

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
        className={cn(fieldLegendVariants({ variant }), className)}
        {...props}
    />
);
