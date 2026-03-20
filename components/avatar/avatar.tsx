import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const avatarVariants = cva(
    `
    group/avatar
    relative
    flex
    shrink-0
    overflow-hidden
    rounded-full
    select-none
    `,
    {
        variants: {
            size: {
                default: `
                    size-8
                `,
                sm: `
                    size-6
                `,
                lg: `
                    size-10
                `,
            },
        },
    },
);

export interface AvatarProps extends ComponentProps<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {

}

export const Avatar: FunctionComponent<AvatarProps> = ({
    className,
    size = 'default',
    ...props
}) => (
    <AvatarPrimitive.Root
        data-slot="avatar"
        data-size={size}
        className={cn(avatarVariants({ size }), className)}
        {...props}
    />
);
