import type { ComponentProps, FunctionComponent } from 'react';

import { Separator } from '@/components/separator';
import { cn } from '@/utils/cn';


export interface FieldSeparatorProps extends ComponentProps<'div'> {
}

export const FieldSeparator: FunctionComponent<FieldSeparatorProps> = ({
    children,
    className,
    ...props
}) => (
    <div
        data-slot="field-separator"
        data-content={Boolean(children)}
        className={cn(
            `
            relative
            -my-2
            h-5
            text-sm
            group-data-[variant=outline]/field-group:-mb-2
            `,
            className,
        )}
        {...props}
    >
        <Separator
            className={`
                absolute
                inset-0
                top-1/2
            `}
        />
        {children !== null && (
            <span
                data-slot="field-separator-content"
                className={`
                    relative
                    mx-auto
                    block
                    w-fit
                    bg-background
                    px-2
                    text-muted-foreground
                `}
            >
                {children}
            </span>
        )}
    </div>
);
