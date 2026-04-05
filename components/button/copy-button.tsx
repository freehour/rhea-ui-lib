import { CheckIcon, CopyIcon } from 'lucide-react';
import type { FunctionComponent } from 'react';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';

import type { ButtonProps } from './button';
import { Button } from './button';


export interface CopyButtonProps extends OmitFrom<ButtonProps, 'asChild' | 'children'> {
    content: string;
    onCopyToClipboard?: (content: string) => void;
    onCopyToClipboardError?: (error: unknown) => void;
}

export const CopyButton: FunctionComponent<CopyButtonProps> = ({
    content,
    onClick,
    onCopyToClipboard,
    onCopyToClipboardError,
    ...props
}) => {
    const [copy, copied] = useCopyToClipboard();

    return (
        <Button
            onClick={useForwardEvent(onClick, () => {
                copy(content)
                    .then(() => onCopyToClipboard?.(content))
                    .catch(error => onCopyToClipboardError?.(error));
            })}
            variant="ghost"
            size="icon"
            {...props}
        >
            {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
    );
};
