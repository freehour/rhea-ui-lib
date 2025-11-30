import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ChatDisclaimerProps extends ComponentProps<'div'> {
}

export const ChatDisclaimer: FunctionComponent<ChatDisclaimerProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="chat-disclaimer"
        className={cn(
            `
            self-center
            p-1.5
            text-xs
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
