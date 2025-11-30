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
            variant={disabled ? 'outline' : 'default'}
            className={cn('rounded-full', className)}
            disabled={disabled}
            size="icon"
            onClick={useForwardEvent(onClick, () => sendMessage)}
            {...props}
        >
            {isRunning ? <SquareIcon className="fill-primary-foreground" /> : <ArrowUpIcon />}
        </Button>
    );
};
