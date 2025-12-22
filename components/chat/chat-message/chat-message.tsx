
import type { ComponentProps, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';


const messageVariants = cva(
    `
    group
    flex
    flex-col
    gap-2
    `,
    {
        variants: {
            from: {
                user: `
                    items-end
                `,
                peer: '',
            },
        },
    },
);

export interface ChatMessageProps extends ComponentProps<'div'>, VariantProps<typeof messageVariants> {
}

export const ChatMessage: FunctionComponent<ChatMessageProps> = ({
    from,
    className,
    ...props
}) => (
    <div
        data-from={from}
        className={cn(messageVariants({ from }), className)}
        {...props}
    />
);
