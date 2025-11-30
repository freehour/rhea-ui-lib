import type { FunctionComponent } from 'react';
import { ArrowUpIcon, SquareIcon } from 'lucide-react';

import type { ButtonProps } from '@/components/button';
import { Button } from '@/components/button';
import { cn } from '@/utils/cn';


export interface ChatInputSendButtonProps extends ButtonProps {
    isRunning?: boolean;
}

export const ChatInputSendButton: FunctionComponent<ChatInputSendButtonProps> = ({
    isRunning = false,
    disabled = false,
    className,
    ...props
}) => (
    <Button
        data-slot="chat-input-send-button"
        variant={disabled ? 'outline' : 'default'}
        className={cn('rounded-full', className)}
        disabled={disabled}
        size="icon"
        {...props}
    >
        {isRunning ? <SquareIcon className="fill-primary-foreground" /> : <ArrowUpIcon />}
    </Button>
);
