import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';


export interface ChatInputPanelProps extends ComponentProps<'div'> {
}

export const ChatInputPanel: FunctionComponent<ChatInputPanelProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            cursor-text
            flex-col
            overflow-hidden
            rounded-[1.75rem]
            border
            border-input
            bg-background
            p-2.5
            shadow-xs
            [&:has(textarea:focus)]:border-ring
            [&:has(textarea:focus)]:ring-[3px]
            [&:has(textarea:focus)]:ring-ring/50
            `,
            className,
        )}
        {...props}
    />
);
