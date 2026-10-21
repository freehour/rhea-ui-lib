import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface ChatInputAreaProps extends ComponentProps<'div'> {
}

export const ChatInputArea: FunctionComponent<ChatInputAreaProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            flex-col
            items-center
            `,
            className,
        )}
        {...props}
    />
);
