import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface ChatMessageToolbarProps extends ComponentProps<'div'> {
}

export const ChatMessageToolbar: FunctionComponent<ChatMessageToolbarProps> = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            `
            flex
            items-center
            justify-between
            gap-2
            `,
            className,
        )}
        {...props}
    />
);
