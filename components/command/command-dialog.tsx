import type { FunctionComponent } from 'react';

import type { DialogProps } from '@/components/dialog';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/dialog';
import { cn } from '@/utils/cn';


export interface CommandDialogProps extends DialogProps {
    title?: string;
    description?: string;
    showCloseButton?: boolean;
    className?: string;
}

export const CommandDialog: FunctionComponent<CommandDialogProps> = ({
    title = 'Command Palette',
    description = 'Search for a command to run...',
    showCloseButton = false,
    className,
    children,
    ...props
}) => (
    <Dialog {...props}>
        <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogContent
            className={cn(
                `
                top-1/3
                translate-y-0
                overflow-hidden
                rounded-xl!
                p-0
                `,
                className,
            )}
            showCloseButton={showCloseButton}
        >
            {children}
        </DialogContent>
    </Dialog>
);
