import type { ComponentProps, FunctionComponent } from 'react';
import { ChevronDownIcon, ChevronUpIcon, MinusIcon } from 'lucide-react';

import { cn } from '@/utils/cn';


export interface PillDeltaProps extends ComponentProps<'svg'> {
    delta: number;
}

export const PillDelta: FunctionComponent<PillDeltaProps> = ({
    delta,
    className,
    ...props
}) => delta > 0
    ? (
        <ChevronUpIcon
            className={cn(
                `
                size-3
                text-emerald-500
                `,
                className,
            )}
            {...props}
        />
    )
    : delta < 0
        ? (
            <ChevronDownIcon
                className={cn(
                    `
                    size-3
                    text-rose-500
                    `,
                    className,
                )}
                {...props}
            />
        )
        : (
            <MinusIcon
                className={cn(
                    `
                    size-3
                    text-muted-foreground
                    `,
                    className,
                )}
                {...props}
            />
        );
