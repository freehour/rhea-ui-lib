import type { FunctionComponent } from 'react';

import type { ButtonProps } from '@/components/button';
import { Button } from '@/components/button';
import type { OmitFrom } from '@/types/from';
import { cn } from '@/utils/cn';


export interface PillButtonProps extends OmitFrom<ButtonProps, 'size' | 'variant'> {
}

export const PillButton: FunctionComponent<PillButtonProps> = ({
    className,
    ...props
}) => (
    <Button
        size="icon"
        variant="ghost"
        className={cn(
            `
            -my-2
            -mr-2
            size-5
            rounded-full
            p-0.5
            hover:bg-foreground/5
            [&_svg:not([class*='size-'])]:size-3
            `,
            className,
        )}
        {...props}
    />
);
