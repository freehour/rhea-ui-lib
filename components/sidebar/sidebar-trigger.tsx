import type { ComponentProps, FunctionComponent, ReactNode } from 'react';

import { Button } from '@/components/button/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip';
import { useForwardEvent } from '@/hooks/use-forward-event';
import { cn } from '@/utils/cn';
import { isString } from '@/utils/is-type';

import { SidebarTriggerIcon } from './sidebar-trigger-icon';
import { useSidebar } from './use-sidebar';


export interface SidebarTriggerProps extends ComponentProps<typeof Button> {
    icon?: ReactNode;
    tooltip?: string | ComponentProps<typeof TooltipContent>;
}

export const SidebarTrigger: FunctionComponent<SidebarTriggerProps> = ({
    icon = <SidebarTriggerIcon />,
    tooltip,
    className,
    onClick,
    ...props
}) => {
    const sidebar = useSidebar();

    const button = (
        <Button
            data-sidebar="trigger"
            data-slot="sidebar-trigger"
            variant="ghost"
            size="icon"
            className={cn('cursor-w-resize', className)}
            onClick={useForwardEvent(onClick, sidebar.toggle)}
            {...props}
        >
            { icon }
        </Button>
    );

    if (tooltip === undefined) {
        return button;
    }

    if (isString(tooltip)) {
        tooltip = {
            children: tooltip,
        };
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent
                align="center"
                {...tooltip}
            />
        </Tooltip>
    );
};
