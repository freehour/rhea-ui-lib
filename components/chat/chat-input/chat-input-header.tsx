import type { FunctionComponent, HTMLAttributes } from 'react';

import { eventOnCurrentTarget, useFilterEvent } from '@/hooks/use-filter-event';
import { useForwardEvent } from '@/hooks/use-forward-event';
import { cn } from '@/utils/cn';

import { useChatInputContext } from './use-chat-input-context';


export interface ChatInputHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export const ChatInputHeader: FunctionComponent<ChatInputHeaderProps> = ({
    className,
    onClick,
    ...props
}) => {
    const { textareaRef } = useChatInputContext();
    return (
        <div
            data-slot="chat-input-header"
            className={cn(
                `
            flex
            flex-wrap
            items-center
            gap-2.5
            p-2.5
            `,
                className,
            )}
            onClick={useForwardEvent(
                onClick,
                useFilterEvent(() => textareaRef.current?.focus(), eventOnCurrentTarget),
            )}
            {...props}
        />
    );
};
