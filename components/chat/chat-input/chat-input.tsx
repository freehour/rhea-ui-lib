import type { ComponentProps, FunctionComponent } from 'react';
import { useMemo, useRef } from 'react';

import { cn } from '@/utils/cn';

import { ChatInputContext } from './chat-input-context';


export interface ChatInputProps extends ComponentProps<'div'> {
    isRunning?: boolean;
    canSend?: boolean;
    canStop?: boolean;
    sendMessage?: () => void;
}

export const ChatInput: FunctionComponent<ChatInputProps> = ({
    isRunning = false,
    canSend = true,
    canStop = false,
    sendMessage,
    className,
    children,
    ...props
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const value = useMemo(
        () => ({
            textareaRef,
            isRunning,
            canSend,
            canStop,
            sendMessage,
        }),
        [
            isRunning,
            canSend,
            canStop,
            sendMessage,
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
            >
                <div
                    className={`
                        flex
                        cursor-text
                        flex-col
                        overflow-hidden
                        rounded-[1.75rem]
                        border
                        bg-background
                        shadow-sm
                    `}
                >
                    {children}
                </div>
            </div>
        </ChatInputContext.Provider>
    );
};
