import type { FunctionComponent, KeyboardEventHandler } from 'react';

import type { AutosizeTextareaProps } from '@/components/textarea';
import { AutosizeTextarea } from '@/components/textarea';
import { useEventCallback } from '@/hooks/use-event-callback';
import { useForwardEvent } from '@/hooks/use-forward-event';
import { cn } from '@/utils/cn';

import { useChatInputContext } from './use-chat-input-context';


export interface ChatInputTextareaProps extends AutosizeTextareaProps {
    sendOnEnter?: boolean;
}

export const ChatInputTextarea: FunctionComponent<ChatInputTextareaProps> = ({
    rows = 1,
    maxRows = 6,
    sendOnEnter = true,
    onKeyDown,
    className,
    ...props
}) => {
    const { textareaRef, canSend, send } = useChatInputContext();
    const handleKeyDown: KeyboardEventHandler = useEventCallback(event => {
        if (sendOnEnter && event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (canSend) {
                send?.();
            }
        }
    });

    return (
        <AutosizeTextarea
            ref={textareaRef}
            data-slot="chat-input-textarea"
            rows={rows}
            maxRows={maxRows}
            className={cn(
                `
                rounded-none
                border-none
                px-3
                pt-3
                shadow-none
                ring-0
                outline-none
                focus-visible:ring-0
                md:text-base
                dark:bg-transparent
                `,
                className,
            )}
            onKeyDown={useForwardEvent(onKeyDown, handleKeyDown)}
            {...props}
        />
    );
};
