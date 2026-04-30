import type { FunctionComponent } from 'react';

import type { DeepKeys, DeepValue, FieldApi, StandardSchemaV1, Updater } from '@tanstack/react-form';

import type { InputProps } from '@/components/input';
import { Input } from '@/components/input';
import { useForwardCallback } from '@/hooks/use-forward-callback';
import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';

import { asSchemaField } from './schema';


export interface FormFieldNumberInputProps<
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName> & number,
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
> extends OmitFrom<InputProps, 'id' | 'name' | 'value' | 'aria-invalid'> {
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
    type: 'number' | 'range';
}

export const FormFieldNumberInput = <
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName> & number,
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
    type = 'number',
    field,
    onBlur,
    onValueAsNumberChange,
    ...props
}: FormFieldNumberInputProps<
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
    const { name, state, handleBlur, handleChange } = asSchemaField(field);
    const isInvalid = state.meta.isTouched && !state.meta.isValid;

    return (
        <Input
            id={name}
            name={name}
            type={type}
            value={state.value}
            aria-invalid={isInvalid}
            onBlur={useForwardEvent(onBlur, handleBlur)}
            onValueAsNumberChange={useForwardCallback(onValueAsNumberChange, handleChange as (updater: Updater<number>) => void)}
            {...props}
        />
    );
};
