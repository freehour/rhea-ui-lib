import type { FunctionComponent } from 'react';
import { ArrowUpIcon, SquareIcon } from 'lucide-react';

import type { ButtonProps } from '@/components/button';
import { Button } from '@/components/button';
import { useForwardEvent } from '@/hooks/use-forward-event';
import { cn } from '@/utils/cn';

import { useChatContext } from '../use-chat-context';

import { useChatInputContext } from './use-chat-input-context';


export interface ChatInputSendButtonProps extends ButtonProps {
}

export const ChatInputSendButton: FunctionComponent<ChatInputSendButtonProps> = ({
    onClick,
    className,
    ...props
}) => {
    const { isRunning } = useChatContext();
    const { canSend, canStop, sendMessage } = useChatInputContext();
    const disabled = (props.disabled ?? false) || !(isRunning ? canStop : canSend);
    return (
        <Button
            data-slot="chat-input-send-button"
            size="icon"
            variant={disabled ? 'outline' : 'default'}
            disabled={disabled}
            onClick={useForwardEvent(onClick, () => sendMessage)}
            className={cn(
                `
                group
                rounded-full
                border
                disabled:text-muted-foreground
                disabled:opacity-100
                `,
                className,
            )}
            {...props}
        >
            {isRunning ? <SquareIcon className="fill-current group-disabled:text-border" /> : <ArrowUpIcon />}
        </Button>
    );
};
