import { useContext } from 'react';

import { ChatInputContext } from './chat-input-context';


export function useChatInputContextValue(): ChatInputContext | null {
    return useContext(ChatInputContext);
}

export function useChatInputContext(): ChatInputContext {
    const context = useChatInputContextValue();
    if (!context) {
        throw new Error(
            'useChatInputContext must be used within a ChatInput',
        );
    }
    return context;
}
