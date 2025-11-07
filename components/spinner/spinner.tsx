import type { ComponentProps, FunctionComponent } from 'react';
import { Loader2Icon } from 'lucide-react';

import { cn } from '@/utils/cn';


export interface SpinnerProps extends ComponentProps<'svg'> {
    className?: string;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({
    className,
    ...props
}) => (
    <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn(
            `
            size-4
            animate-spin
            `,
            className,
        )}
        {...props}
    />
);
