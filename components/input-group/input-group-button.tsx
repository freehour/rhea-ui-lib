import { cva } from 'class-variance-authority';
import type { FunctionComponent } from 'react';

import type { ButtonProps } from '@/components/button';
import { Button } from '@/components/button';
import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const inputGroupButtonVariants = cva(
    `
    flex
    items-center
    gap-2
    text-sm
    shadow-none
  `,
    {
        variants: {
            size: {
                'xs': `
                    h-6
                    gap-1
                    rounded-[calc(var(--radius)-3px)]
                    px-1.5
                    [&>svg:not([class*='size-'])]:size-3.5
                `,
                'sm': '',
                'icon-xs': `
                    size-6
                    rounded-[calc(var(--radius)-3px)]
                    p-0
                    has-[>svg]:p-0
                `,
                'icon-sm': `
                    size-8
                    p-0
                    has-[>svg]:p-0
                `,
            },
        },
    },
);

export interface InputGroupButtonProps extends Omit<ButtonProps, 'size'>, VariantProps<typeof inputGroupButtonVariants> {}

export const InputGroupButton: FunctionComponent<InputGroupButtonProps> = ({
    className,
    type = 'button',
    variant = 'ghost',
    size = 'xs',
    ...props
}) => (
    <Button
        type={type}
        data-size={size}
        variant={variant}
        className={cn(inputGroupButtonVariants({ size }), className)}
        {...props}
    />
);
