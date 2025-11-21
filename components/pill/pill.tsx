import type { ComponentProps, FunctionComponent } from 'react';

import { Badge } from '@/components/badge';
import { cn } from '@/utils/cn';


export interface PillProps extends ComponentProps<typeof Badge> {
}

export const Pill: FunctionComponent<PillProps> = ({
    className,
    ...props
}) => (
    <Badge
        className={cn(
            `
            gap-2
            rounded-full
            px-3
            py-1.5
            font-normal
            `,
            className,
        )}
        {...props}
    />
);

