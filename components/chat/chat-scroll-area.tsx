import type { FunctionComponent } from 'react';
import type { StickToBottomProps } from 'use-stick-to-bottom';
import { StickToBottom } from 'use-stick-to-bottom';

import { cn } from '@/utils/cn';


export interface ChatScrollAreaProps extends StickToBottomProps {
}

export const ChatScrollArea: FunctionComponent<ChatScrollAreaProps> = ({
    className,
    ...props
}) => (
    <StickToBottom
        data-slot="chat-scroll-area"
        resize="smooth"
        initial="smooth"
        className={cn(
            `
            relative
            flex-1
            overflow-y-auto
            `,
            className,
        )}
        {...props}
    />
);
