
import type { ComponentProps, FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';

import type { VariantProps } from '@/types/variant';
import { cn } from '@/utils/cn';


const chatMessageVariants = cva(
    `
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

export interface ChatMessageProps extends ComponentProps<'div'>, VariantProps<typeof chatMessageVariants> {
}

export const ChatMessage: FunctionComponent<ChatMessageProps> = ({
    from,
    className,
    ...props
}) => (
    <div
        data-from={from}
        className={cn(chatMessageVariants({ from }), className)}
        {...props}
    />
);
