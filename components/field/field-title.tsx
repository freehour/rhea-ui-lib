import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface FieldTitleProps extends ComponentProps<'div'> {
}

export const FieldTitle: FunctionComponent<FieldTitleProps> = ({
    className,
    ...props
}) => (
    <div
        data-slot="field-label"
        className={cn(
            `
            flex
            w-fit
            items-center
            gap-2
            text-sm
            leading-snug
            font-medium
            group-data-[disabled=true]/field:opacity-50
            `,
            className,
        )}
        {...props}
    />
);
