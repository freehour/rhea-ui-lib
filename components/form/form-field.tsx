import type { ComponentProps, FunctionComponent } from 'react';

import { Field } from '@/components/field';

import type { StandardFieldComponent, StandardFormApi } from './types';


export interface FormFieldProps<
    TFormData,
    TSubmitMeta = never,
> extends ComponentProps<
        StandardFieldComponent<
            TFormData,
            TSubmitMeta
        >
    > {
    form: StandardFormApi<
        TFormData,
        TSubmitMeta
    >;
}

export const FormField = <
    TFormData,
    TSubmitMeta = never,
>({
    form,
    children,
    ...props
}: FormFieldProps<
    TFormData,
    TSubmitMeta
>): ReturnType<FunctionComponent> => (
    <form.Field {...props}>
        {field => (
            <Field data-invalid={field.state.meta.isTouched && !field.state.meta.isValid}>
                {children(field)}
            </Field>
        )}
    </form.Field>
);
