import type { ComponentProps, CSSProperties, FunctionComponent } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/sheet';
import {
    Sheet,
} from '@/components/sheet/sheet';
import { useIsMobile } from '@/hooks/use-device';
import { cn } from '@/utils/cn';

import { useSidebar } from './use-sidebar';


const SIDEBAR_WIDTH_MOBILE = '80svw';

const sidebarGapVariants = cva(
    `
    relative
    w-(--sidebar-width)
    bg-transparent
    transition-[width]
    duration-200
    ease-linear
    group-data-[side=right]:rotate-180
    group-data-[collapsible=offcanvas]:group-data-[state=closed]:w-0
    `,
    {
        variants: {
            variant: {
                sidebar: 'group-data-[collapsible=icon]:group-data-[state=closed]:w-(--sidebar-width-icon)',
                floating: '',
                inset: '',
            },
        },
        compoundVariants: [
            {
                variant: ['floating', 'inset'],
                className: 'group-data-[collapsible=icon]:group-data-[state=closed]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]',
            },
        ],
    },
);

const sidebarContainerVariants = cva(
    'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
    {
        variants: {
            side: {
                left: 'left-0 group-data-[collapsible=offcanvas]:group-data-[state=closed]:left-[calc(var(--sidebar-width)*-1)]',
                right: 'right-0 group-data-[collapsible=offcanvas]:group-data-[state=closed]:right-[calc(var(--sidebar-width)*-1)]',
            },
            variant: {
                sidebar: `
                    group-data-[side=left]:border-r
                    group-data-[side=right]:border-l
                    group-data-[collapsible=icon]:group-data-[state=closed]:w-(--sidebar-width-icon)
                `,
                floating: '',
                inset: '',
            },
        },
        compoundVariants: [
            {
                variant: ['floating', 'inset'],
                class: `
                    p-2
                    group-data-[collapsible=icon]:group-data-[state=closed]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]
                `,
            },
        ],
    },
);


export interface SidebarProps extends ComponentProps<'div'>, VariantProps<typeof sidebarContainerVariants>, VariantProps<typeof sidebarGapVariants> {
    collapsible?: 'offcanvas' | 'icon';
    title?: string;
    description?: string;
    closeLabel?: string;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({
    variant = 'sidebar',
    side = 'left',
    collapsible = 'offcanvas',
    title = 'Sidebar',
    description = 'Displays the sidebar',
    closeLabel,
    className,
    children,
    ...props
}) => {
    const isMobile = useIsMobile();
    const sidebar = useSidebar();

    if (isMobile) {
        return (
            <Sheet open={sidebar.isOpen} onOpenChange={sidebar.setOpen} {...props}>
                <SheetContent
                    data-slot="sidebar"
                    data-sidebar="sidebar"
                    data-collapsible="mobile"
                    data-side={side}
                    side={side}
                    closeLabel={closeLabel}
                    className={cn(
                        `
                        group
                        w-(--sidebar-width)
                        bg-sidebar
                        p-0
                        text-sidebar-foreground
                        [&>button]:hidden
                        `,
                        className,
                    )}
                    style={
                        {
                            '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
                        } as CSSProperties
                    }
                >
                    <SheetHeader className="sr-only">
                        <SheetTitle>{title}</SheetTitle>
                        <SheetDescription>{description}</SheetDescription>
                    </SheetHeader>
                    <div className="flex size-full flex-col">{children}</div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <div
            data-slot="sidebar"
            data-state={sidebar.isOpen ? 'open' : 'closed'}
            data-collapsible={collapsible}
            data-variant={variant}
            data-side={side}
            className={cn(
                `
                group
                peer
                hidden
                text-sidebar-foreground
                md:block
                `,
                className,
            )}
        >
            {/* This is what handles the sidebar gap on desktop */}
            <div
                data-slot="sidebar-gap"
                className={sidebarGapVariants({ variant })}
            />
            <div
                data-slot="sidebar-container"
                className={cn(sidebarContainerVariants({ side, variant }), className)}
                {...props}
            >
                <div
                    data-slot="sidebar-inner"
                    data-sidebar="sidebar"
                    className={cn(
                        `
                        flex
                        size-full
                        flex-col
                        group-data-[state=open]:bg-sidebar
                        group-data-[variant=floating]:rounded-lg
                        group-data-[variant=floating]:border
                        group-data-[variant=floating]:border-sidebar-border
                        group-data-[variant=floating]:shadow-sm
                        `,
                        className,
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

