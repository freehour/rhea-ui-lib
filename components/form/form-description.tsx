import type { ComponentProps, FunctionComponent } from 'react';

import { cn } from '@/utils/cn';

import { useFormField } from './use-form-field';


export interface FormDescriptionProps extends ComponentProps<'p'> {
}

export const FormDescription: FunctionComponent<FormDescriptionProps> = ({
    className,
    ...props
}) => {
    const { formDescriptionId } = useFormField();

    return (
        <p
            data-slot="form-description"
            id={formDescriptionId}
            className={cn('text-sm text-muted-foreground', className)}
            {...props}
        />
    );
};
