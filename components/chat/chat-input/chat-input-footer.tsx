import { cn } from 'cn';
import type { FunctionComponent, HTMLAttributes } from 'react';

import { eventOnCurrentTarget, useFilterEvent } from '@/hooks/use-filter-event';
import { useForwardEvent } from '@/hooks/use-forward-event';

import { useChatInputContext } from './use-chat-input-context';


export interface ChatInputFooterProps extends HTMLAttributes<HTMLDivElement> {
}

export const ChatInputFooter: FunctionComponent<ChatInputFooterProps> = ({
    className,
    onClick,
    ...props
}) => {
    const { textareaRef } = useChatInputContext();
    return (
        <div
            data-slot="chat-input-footer"
            className={cn(
                `
                flex
                items-end
                justify-between
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
