import { cn } from 'cn';
import { Loader2Icon } from 'lucide-react';
import type { ComponentProps, FunctionComponent } from 'react';


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
