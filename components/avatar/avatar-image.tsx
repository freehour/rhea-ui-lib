import type { ComponentProps, FunctionComponent } from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/utils/cn';


export interface AvatarImageProps extends ComponentProps<typeof AvatarPrimitive.Image> {
}

export const AvatarImage: FunctionComponent<AvatarImageProps> = ({
    className,
    ...props
}) => (
    <AvatarPrimitive.Image
        data-slot="avatar-image"
        className={cn(
            `
            aspect-square
            size-full
            `,
            className,
        )}
        {...props}
    />
);

