import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/utils/cn';


const separatorVariants = cva(
    `
    shrink-0
    self-center
    bg-border
    data-[orientation=horizontal]:h-px
    data-[orientation=vertical]:w-px
    `,
    {
        variants: {
            size: {
                sm: `
                    data-[orientation=horizontal]:w-1/4
                    data-[orientation=vertical]:h-1/4
                `,
                md: `
                    data-[orientation=horizontal]:w-1/2
                    data-[orientation=vertical]:h-1/2
                `,
                lg: `
                    data-[orientation=horizontal]:w-3/4
                    data-[orientation=vertical]:h-3/4
                `,
                full: `
                    data-[orientation=horizontal]:w-full
                    data-[orientation=vertical]:h-full
                `,
            },
        },
    },
);


export interface SeparatorProps extends ComponentProps<typeof SeparatorPrimitive.Root> {
    size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Separator: FunctionComponent<SeparatorProps> = ({
    className,
    size = 'md',
    orientation = 'horizontal',
    decorative = true,
    ...props
}) => (
    <SeparatorPrimitive.Root
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(separatorVariants({ size }), className)}
        {...props}
    />
);
