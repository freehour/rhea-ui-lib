import type { FunctionComponent } from 'react';

import type { AutosizeTextareaProps } from '@/components/textarea';
import { AutosizeTextarea } from '@/components/textarea';
import { cn } from '@/utils/cn';


export interface ChatInputTextareaProps extends AutosizeTextareaProps {
}

export const ChatInputTextarea: FunctionComponent<ChatInputTextareaProps> = ({
    rows = 1,
    maxRows = 6,
    className,
    ...props
}) => (
    <AutosizeTextarea
        data-slot="chat-input-textarea"
        rows={rows}
        maxRows={maxRows}
        className={cn(
            `
            rounded-none
            border-none
            shadow-none
            ring-0
            outline-none
            focus-visible:ring-0
            dark:bg-transparent
            `,
            className,
        )}
        {...props}
    />
);
