import type { FunctionComponent } from 'react';
import { StickToBottom } from 'use-stick-to-bottom';

import { cn } from '@/utils/cn';


export interface ChatMessagesProps extends StickToBottom.ContentProps {
}

export const ChatMessages: FunctionComponent<ChatMessagesProps> = ({
    className,
    ...props
}) => (
    <StickToBottom.Content
        data-slot="chat-messages"
        className={cn(
            `
            flex
            flex-col
            p-4
            `,
            className,
        )}
        {...props}
    />
);
