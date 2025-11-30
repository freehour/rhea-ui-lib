import type { FunctionComponent } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';

import type { ButtonProps } from './button';
import { Button } from './button';


export interface CopyButtonProps extends OmitFrom<ButtonProps, 'asChild' | 'children'> {
    content: string;
}

export const CopyButton: FunctionComponent<CopyButtonProps> = ({
    content,
    onClick,
    ...props
}) => {
    const [copy, copied] = useCopyToClipboard();

    return (
        <Button
            onClick={useForwardEvent(onClick, async () => copy(content))}
            variant="ghost"
            size="icon"
            {...props}
        >
            {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
    );
};
