import type { RefObject } from 'react';
import { createContext } from 'react';


export interface ChatInputContext {
    textareaRef: RefObject<HTMLTextAreaElement | null>;
}

export const ChatInputContext = createContext<ChatInputContext | null>(null);
