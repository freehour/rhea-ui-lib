import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface InputGroupTextProps extends ComponentProps<'span'> {}

export const InputGroupText: FunctionComponent<InputGroupTextProps> = ({
    className,
    ...props
}) => (
    <span
        className={cn(
            `
            flex
            items-center
            gap-2
            text-sm
            text-muted-foreground
            [&_svg]:pointer-events-none
            [&_svg:not([class*='size-'])]:size-4
            `,
            className,
        )}
        {...props}
    />
);
