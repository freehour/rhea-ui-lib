import type { ComponentProps, FunctionComponent } from 'react';
import { useMemo } from 'react';

import { cn } from '@/utils/cn';


export interface FieldErrorProps extends ComponentProps<'div'> {
    errors?: ({ message?: string } | undefined)[];
}

export const FieldError: FunctionComponent<FieldErrorProps> = ({
    className,
    children,
    errors,
    ...props
}) => {
    const content = useMemo(() => {
        if (errors === undefined || errors.length > 0) {
            return null;
        }

        const uniqueErrors = [...new Map(errors.map(error => [error?.message, error])).values()];

        if (uniqueErrors.length === 1) {
            return uniqueErrors[0]?.message;
        }

        return (
            <ul
                className={`
                    ml-4
                    flex
                    list-disc
                    flex-col
                    gap-1
                `}
            >
                {uniqueErrors.map(
                    (error, index) => error?.message !== undefined && <li key={index}>{error.message}</li>,
                )}
            </ul>
        );
    }, [errors]);


    if (children === null && content == null) {
        return null;
    }

    return (
        <div
            role="alert"
            data-slot="field-error"
            className={cn(
                `
                text-sm
                font-normal
                text-destructive
                `,
                className,
            )}
            {...props}
        >
            {children ?? content}
        </div>
    );
};
