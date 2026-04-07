import type { FunctionComponent } from 'react';

import type { DeepKeys, DeepValue } from '@tanstack/react-form';

import type { InputProps } from '@/components/input';
import { Input } from '@/components/input';
import { useForwardCallback } from '@/hooks/use-forward-callback';
import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';

import type { StandardFieldApi } from './types';


export interface FormFieldInputProps<
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName> & string,
    TParentSubmitMeta
> extends OmitFrom<InputProps, 'id' | 'name' | 'value' | 'aria-invalid'> {
    field: StandardFieldApi<
        TParentData,
        TName,
        TData,
        TParentSubmitMeta
    >;
}

export const FormFieldInput = <
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName> & string,
    TParentSubmitMeta
>({
    field,
    onBlur,
    onValueChange,
    ...props
}: FormFieldInputProps<
    TParentData,
    TName,
    TData,
    TParentSubmitMeta
>): ReturnType<FunctionComponent> => (
    <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
        onBlur={useForwardEvent(onBlur, field.handleBlur)}
        onValueChange={useForwardCallback(onValueChange, field.handleChange as (value: string) => void)}
        {...props}
    />
);
