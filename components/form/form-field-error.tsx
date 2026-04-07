import type { FunctionComponent } from 'react';

import type { DeepKeys, DeepValue } from '@tanstack/react-form';

import type { FieldErrorProps } from '@/components/field';
import { FieldError } from '@/components/field';
import type { OmitFrom } from '@/types';

import type { StandardFieldApi } from './types';


export interface FormFieldErrorProps<
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName>,
    TParentSubmitMeta,
> extends OmitFrom<FieldErrorProps, 'errors'> {
    field: StandardFieldApi<
        TParentData,
        TName,
        TData,
        TParentSubmitMeta
    >;
}

export const FormFieldError = <
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName>,
    TParentSubmitMeta,
>({
    field,
    ...props
}: FormFieldErrorProps<
    TParentData,
    TName,
    TData,
    TParentSubmitMeta
>): ReturnType<FunctionComponent> => field.state.meta.isTouched && !field.state.meta.isValid && (
    <FieldError
        errors={field.state.meta.errors}
        {...props}
    />
);

