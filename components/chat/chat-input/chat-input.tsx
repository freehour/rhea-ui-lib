import type { ComponentProps, FunctionComponent } from 'react';
import { useMemo, useRef } from 'react';

import { cn } from '@/utils/cn';

import { ChatInputContext } from './chat-input-context';


export interface ChatInputProps extends ComponentProps<'div'> {
    canSend?: boolean;
    canStop?: boolean;
    send?: () => void;
}

export const ChatInput: FunctionComponent<ChatInputProps> = ({
    canSend = true,
    canStop = false,
    send,
    className,
    children,
    ...props
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const value = useMemo(
        () => ({
            textareaRef,
            canSend,
            canStop,
            send,
        }),
        [
            canSend,
            canStop,
            send,
        ],
    );
    return (
        <ChatInputContext.Provider value={value}>
            <div
                data-slot="chat-input"
                className={cn(
                    `
                    w-full
                    px-4
                    `,
                    className,
                )}
                {...props}
            />
        </ChatInputContext.Provider>
    );
};
