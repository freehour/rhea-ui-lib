import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ChatMessageToolbarProps extends ComponentProps<'div'> {
}

export const ChatMessageToolbar: FunctionComponent<ChatMessageToolbarProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            items-center
            justify-between
            gap-2
            `,
            className,
        )}
        {...props}
    />
);
