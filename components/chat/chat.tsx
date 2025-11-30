import type { ComponentProps, FunctionComponent } from 'react';
import { useMemo } from 'react';

import { cn } from '@/utils/cn';

import { ChatContext } from './chat-context';


export interface ChatProps extends ComponentProps<'div'> {
    isRunning?: boolean;
}

export const Chat: FunctionComponent<ChatProps> = ({
    isRunning = false,
    className,
    ...props
}) => {
    const value = useMemo(() => ({ isRunning }), [isRunning]);
    return (
        <ChatContext.Provider value={value}>
            <div
                className={cn(
                    `
                    flex
                    h-full
                    flex-col
                    justify-between
                    `,
                    className,
                )}
                {...props}
            />
        </ChatContext.Provider>
    );
};
