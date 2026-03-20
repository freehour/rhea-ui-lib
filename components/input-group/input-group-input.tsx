import type { FunctionComponent } from 'react';

import type { InputProps } from '@/components/input';
import { Input } from '@/components/input';
import { cn } from '@/utils/cn';


export interface InputGroupInputProps extends InputProps {}

export const InputGroupInput: FunctionComponent<InputGroupInputProps> = ({
    className,
    ...props
}) => (
    <Input
        data-slot="input-group-control"
        className={cn(
            `
            flex-1
            rounded-none
            border-0
            bg-transparent
            shadow-none
            ring-0
            focus-visible:ring-0
            disabled:bg-transparent
            aria-invalid:ring-0
            dark:bg-transparent
            dark:disabled:bg-transparent
            `,
            className,
        )}
        {...props}
    />
);
