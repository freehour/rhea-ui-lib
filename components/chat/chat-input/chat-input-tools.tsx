import type { FunctionComponent, HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';


export interface ChatInputToolsProps extends HTMLAttributes<HTMLDivElement> {
}

export const ChatInputTools: FunctionComponent<ChatInputToolsProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="chat-input-tools"
        className={cn(
            `
            flex
            items-center
            gap-1
            `,
            className,
        )}
        {...props}
    />
);
