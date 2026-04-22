import { AlertCircleIcon, ChevronLeftIcon } from 'lucide-react';
import type { FunctionComponent } from 'react';

import { Button } from '@/components/button';
import type { CollapsibleProps } from '@/components/collapsible';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/collapsible';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { cn } from '@/utils';

import { Alert } from './alert';
import { AlertAction } from './alert-action';
import { AlertDescription } from './alert-description';
import { AlertTitle } from './alert-title';


export interface ErrorAlertProps extends CollapsibleProps {
    error: Error;
}

export const ErrorAlert: FunctionComponent<ErrorAlertProps> = ({
    error: {
        name,
        message,
        cause,
    },
    className,
    ...props
}) => (
    <Collapsible
        className={cn('rounded-sm bg-destructive/10', className)}
        {...props}
    >
        <Alert
            variant="destructive"
            className="border-none bg-transparent"
        >
            <AlertCircleIcon />
            <AlertTitle>{name}</AlertTitle>
            {cause !== undefined && (
                <AlertAction>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <CollapsibleTrigger asChild>
                                <Button
                                    size="icon-xs"
                                    variant="secondary"
                                >
                                    <ChevronLeftIcon className="transition-transform group-data-[state=open]/button:-rotate-90" />
                                </Button>
                            </CollapsibleTrigger>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Cause
                        </TooltipContent>
                    </Tooltip>
                </AlertAction>
            )}
            <AlertDescription className="text-destructive/90">
                {message}
            </AlertDescription>
        </Alert>
        <CollapsibleContent className="pl-8.5">
            {cause instanceof Error && (
                <ErrorAlert
                    error={cause}
                    className="rounded-tr-none rounded-bl-none"
                />
            )}
        </CollapsibleContent>
    </Collapsible>
);
