import type { FunctionComponent, ReactNode } from 'react';

import type { DeepKeys, DeepValue, FieldApi, FieldOptions, ReactFormExtendedApi, StandardSchemaV1 } from '@tanstack/react-form';

import { Field } from '@/components/field';


export interface FormFieldProps<
    TFormData,
    TName extends DeepKeys<TFormData>,
    TData extends DeepValue<TFormData, TName>,
    TOnMount extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TFormOnMount extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnChange extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnChangeAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnBlur extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnBlurAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnSubmit extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnSubmitAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnDynamic extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnDynamicAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnServer extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormSubmitMeta = never,
> extends FieldOptions<
        TFormData,
        TName,
        TData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync
    > {
    form: ReactFormExtendedApi<
        TFormData,
        TFormOnMount,
        TFormOnChange,
        TFormOnChangeAsync,
        TFormOnBlur,
        TFormOnBlurAsync,
        TFormOnSubmit,
        TFormOnSubmitAsync,
        TFormOnDynamic,
        TFormOnDynamicAsync,
        TFormOnServer,
        TFormSubmitMeta
    >;
    children: (fieldApi: FieldApi<
        TFormData,
        TName,
        TData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TFormOnMount,
        TFormOnChange,
        TFormOnChangeAsync,
        TFormOnBlur,
        TFormOnBlurAsync,
        TFormOnSubmit,
        TFormOnSubmitAsync,
        TFormOnDynamic,
        TFormOnDynamicAsync,
        TFormOnServer,
        TFormSubmitMeta
    >) => ReactNode;
}

export const FormField = <
    TFormData,
    TName extends DeepKeys<TFormData>,
    TData extends DeepValue<TFormData, TName>,
    TOnMount extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TFormOnMount extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnChange extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnChangeAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnBlur extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnBlurAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnSubmit extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnSubmitAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnDynamic extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnDynamicAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormOnServer extends StandardSchemaV1<TFormData, unknown> | undefined,
    TFormSubmitMeta = never,
>({
    form,
    children,
    ...props
}: FormFieldProps<
    TFormData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync,
    TFormOnServer,
    TFormSubmitMeta
>): ReturnType<FunctionComponent> => (
    <form.Field {...props}>
        {field => (
            <Field data-invalid={field.state.meta.isTouched && !field.state.meta.isValid}>
                {children(field)}
            </Field>
        )}
    </form.Field>
);
