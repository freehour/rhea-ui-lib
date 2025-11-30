import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ChatProps extends ComponentProps<'div'> {
}

export const Chat: FunctionComponent<ChatProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            h-full
            flex-col
            justify-between
            `,
            className,
        )}
        {...props}
    />
);
