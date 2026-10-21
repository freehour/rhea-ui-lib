import { cn } from 'cn';
import type { ComponentProps, FunctionComponent } from 'react';


export interface TableCaptionProps extends ComponentProps<'caption'> {
}

export const TableCaption: FunctionComponent<TableCaptionProps> = ({
    className,
    ...props
}) => (
    <caption
        data-slot="table-caption"
        className={cn(
            `
            mt-4
            text-sm
            text-muted-foreground
            `,
            className,
        )}
        {...props}
    />
);
