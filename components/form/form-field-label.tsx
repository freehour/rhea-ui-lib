import type { FunctionComponent } from 'react';

import type { DeepKeys, DeepValue, FieldApi, StandardSchemaV1 } from '@tanstack/react-form';

import type { FieldLabelProps } from '@/components/field';
import { FieldLabel } from '@/components/field';
import type { OmitFrom } from '@/types';


export interface FormFieldLabelProps<
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName>,
    TOnMount extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TFormOnMount extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnChange extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnChangeAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnBlur extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnBlurAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnSubmit extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnSubmitAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnDynamic extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnDynamicAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnServer extends StandardSchemaV1<TParentData, unknown> | undefined,
    TParentSubmitMeta,
> extends OmitFrom<FieldLabelProps, 'htmlFor'> {
    field: FieldApi<
        TParentData,
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
        TParentSubmitMeta
    >;
}

export const FormFieldLabel = <
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName>,
    TOnMount extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TData, unknown> | undefined,
    TFormOnMount extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnChange extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnChangeAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnBlur extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnBlurAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnSubmit extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnSubmitAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnDynamic extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnDynamicAsync extends StandardSchemaV1<TParentData, unknown> | undefined,
    TFormOnServer extends StandardSchemaV1<TParentData, unknown> | undefined,
    TParentSubmitMeta,
>({
    field,
    ...props
}: FormFieldLabelProps<
    TParentData,
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
    TParentSubmitMeta
>): ReturnType<FunctionComponent> => (
    <FieldLabel
        htmlFor={field.name}
        {...props}
    />
);
