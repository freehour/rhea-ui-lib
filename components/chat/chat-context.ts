import { createContext } from 'react';


export interface ChatContext {
    isRunning: boolean;
}

export const ChatContext = createContext<ChatContext | null>(null);
