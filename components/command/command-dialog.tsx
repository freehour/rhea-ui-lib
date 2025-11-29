import type { FunctionComponent } from 'react';

import type { DialogProps } from '@/components/dialog';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/dialog';
import { cn } from '@/utils/cn';

import { Command } from './command';


export interface CommandDialogProps extends DialogProps {
    title?: string;
    description?: string;
    showCloseButton?: boolean;
    className?: string;
}

export const CommandDialog: FunctionComponent<CommandDialogProps> = ({
    title = 'Command Palette',
    description = 'Search for a command to run...',
    showCloseButton = true,
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
                overflow-hidden
                p-0
                `,
                className,
            )}
            showCloseButton={showCloseButton}
        >
            <Command
                className={`
                    **:data-[slot=command-input-wrapper]:h-12
                    [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0
                    [&_[cmdk-input-wrapper]_svg]:h-5
                    [&_[cmdk-input-wrapper]_svg]:w-5
                    [&_[cmdk-item]_svg]:h-5
                    [&_[cmdk-item]_svg]:w-5
                    **:[[cmdk-group-heading]]:px-2
                    **:[[cmdk-group-heading]]:font-medium
                    **:[[cmdk-group-heading]]:text-muted-foreground
                    **:[[cmdk-group]]:px-2
                    **:[[cmdk-input]]:h-12
                    **:[[cmdk-item]]:px-2
                    **:[[cmdk-item]]:py-3
                `}
            >
                {children}
            </Command>
        </DialogContent>
    </Dialog>
);
