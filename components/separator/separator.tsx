import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/utils/cn';


const separatorVariants = cva(
    `
    shrink-0
    bg-border
    `,
    {
        variants: {
            orientation: {
                horizontal: `
                    h-px
                    w-full
                `,
                vertical: `
                    w-px
                    self-stretch
                `,
            },
        },
    },
);


export interface SeparatorProps extends ComponentProps<typeof SeparatorPrimitive.Root> {
}

export const Separator: FunctionComponent<SeparatorProps> = ({
    className,
    orientation = 'horizontal',
    decorative = true,
    ...props
}) => (
    <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(separatorVariants({ orientation }), className)}
        {...props}
    />
);
