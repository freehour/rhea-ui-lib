import type { ComponentProps, FunctionComponent } from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/utils/cn';


export interface AvatarFallbackProps extends ComponentProps<typeof AvatarPrimitive.Fallback> {
}

export const AvatarFallback: FunctionComponent<AvatarFallbackProps> = ({
    className,
    ...props
}) => (
    <AvatarPrimitive.Fallback
        data-slot="avatar-fallback"
        className={cn(
            `
            flex
            size-full
            items-center
            justify-center
            rounded-full
            bg-muted
            text-sm
            text-muted-foreground
            group-data-[size=sm]/avatar:text-xs
            `,
            className,
        )}
        {...props}
    />
);
