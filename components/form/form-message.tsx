import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';

import { useFormField } from './use-form-field';


export interface FormMessageProps extends ComponentProps<'p'> {}

export const FormMessage: FunctionComponent<FormMessageProps> = ({
    className,
    children,
    ...props
}) => {
    const { error, formMessageId } = useFormField();
    const body = error ? error.message ?? '' : children;

    return body !== null && (
        <p
            data-slot="form-message"
            id={formMessageId}
            className={cn('text-sm text-destructive', className)}
            {...props}
        >
            {body}
        </p>
    );
};
