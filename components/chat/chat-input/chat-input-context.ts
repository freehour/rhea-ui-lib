import type { RefObject } from 'react';
import { createContext } from 'react';


export interface ChatInputContext {
    textareaRef: RefObject<HTMLTextAreaElement | null>;
    canSend: boolean;
    canStop: boolean;
    sendMessage?: () => void;
}

export const ChatInputContext = createContext<ChatInputContext | null>(null);
