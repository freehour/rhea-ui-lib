import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface InputGroupProps extends ComponentProps<'div'> {
}

export const InputGroup: FunctionComponent<InputGroupProps> = ({ className, ...props }) => (
    <div
        role="group"
        data-slot="input-group"
        className={cn(
            `
            group/input-group
            relative
            flex
            h-8
            w-full
            min-w-0
            items-center
            rounded-lg
            border
            border-input
            transition-colors
            outline-none
            dark:bg-input/30
        `,
            className,
        )}
        {...props}
    />
);
