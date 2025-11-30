import type { ComponentProps, FunctionComponent } from 'react';
import { useMemo, useRef } from 'react';

import { cn } from '@/utils/cn';

import { ChatInputContext } from './chat-input-context';


export interface ChatInputProps extends ComponentProps<'div'> {
}

export const ChatInput: FunctionComponent<ChatInputProps> = ({
    className,
    children,
    ...props
}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const value = useMemo(() => ({ textareaRef }), [textareaRef]);
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
