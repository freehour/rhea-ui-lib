import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ChatInputProps extends ComponentProps<'div'> {
}

export const ChatInput: FunctionComponent<ChatInputProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="chat-input"
        className={cn(
            `
            divide-y
            overflow-hidden
            rounded-xl
            border
            bg-background
            shadow-sm
            `,
            className,
        )}
        {...props}
    />
);
