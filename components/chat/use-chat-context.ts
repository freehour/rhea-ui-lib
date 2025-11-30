import { useContext } from 'react';

import { ChatContext } from './chat-context';


export function useChatContextValue(): ChatContext | null {
    return useContext(ChatContext);
}

export function useChatContext(): ChatContext {
    const context = useChatContextValue();
    if (!context) {
        throw new Error(
            'useChatContext must be used within a Chat component',
        );
    }
    return context;
}
