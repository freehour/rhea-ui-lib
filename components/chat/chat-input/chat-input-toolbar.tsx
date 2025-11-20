import type { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';


export interface ChatInputToolbarProps extends HTMLAttributes<HTMLDivElement> {
}

export const ChatInputToolbar: FunctionComponent<ChatInputToolbarProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="chat-input-toolbar"
        className={cn(
            `
            flex
            items-center
            justify-between
            px-2.5
            py-1
            `,
            className,
        )}
        {...props}
    />
);
