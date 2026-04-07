import type { FunctionComponent } from 'react';

import type { DeepKeys, DeepValue, FieldApi, StandardSchemaV1 } from '@tanstack/react-form';

import type { FieldErrorProps } from '@/components/field';
import { FieldError } from '@/components/field';
import type { OmitFrom } from '@/types';

import { asSchemaField } from './schema';


export interface FormFieldErrorProps<
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
> extends OmitFrom<FieldErrorProps, 'errors'> {
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

export const FormFieldError = <
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
}: FormFieldErrorProps<
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
>): ReturnType<FunctionComponent> => {
    const { state } = asSchemaField(field);
    const isInvalid = state.meta.isTouched && !state.meta.isValid;

    return isInvalid && (
        <FieldError
            errors={state.meta.errors}
            {...props}
        />
    );
};

