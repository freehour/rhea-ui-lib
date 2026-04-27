import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ChatInputAreaProps extends ComponentProps<'div'> {
}

export const ChatInputArea: FunctionComponent<ChatInputAreaProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            flex-col
            items-center
            `,
            className,
        )}
        {...props}
    />
);
