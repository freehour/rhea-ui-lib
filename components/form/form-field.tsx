import type { ComponentProps, FunctionComponent } from 'react';

import type { FieldComponent, ReactFormExtendedApi, StandardSchemaV1 } from '@tanstack/react-form';

import { Field } from '@/components/field';


export interface FormFieldProps<
    TFormData,
    TOnMount extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnServer extends StandardSchemaV1<TFormData, unknown> | undefined,
    TSubmitMeta = never,
> extends ComponentProps<
        FieldComponent<
            TFormData,
            TOnMount,
            TOnChange,
            TOnChangeAsync,
            TOnBlur,
            TOnBlurAsync,
            TOnSubmit,
            TOnSubmitAsync,
            TOnDynamic,
            TOnDynamicAsync,
            TOnServer,
            TSubmitMeta
        >
    > {
    form: ReactFormExtendedApi<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer,
        TSubmitMeta
    >;
}

export const FormField = <
    TFormData,
    TOnMount extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnServer extends StandardSchemaV1<TFormData, unknown> | undefined,
    TSubmitMeta = never,
>({
    form,
    children,
    ...props
}: FormFieldProps<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
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
