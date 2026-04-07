import type { FunctionComponent } from 'react';

import type { DeepKeys, DeepValue } from '@tanstack/react-form';

import type { FieldLabelProps } from '@/components/field';
import { FieldLabel } from '@/components/field';
import type { OmitFrom } from '@/types';

import type { StandardFieldApi } from './types';


export interface FormFieldLabelProps<
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName>,
    TParentSubmitMeta,
> extends OmitFrom<FieldLabelProps, 'htmlFor'> {
    field: StandardFieldApi<
        TParentData,
        TName,
        TData,
        TParentSubmitMeta
    >;
}

export const FormFieldLabel = <
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName>,
    TParentSubmitMeta,
>({
    field,
    ...props
}: FormFieldLabelProps<
    TParentData,
    TName,
    TData,
    TParentSubmitMeta
>): ReturnType<FunctionComponent> => (
    <FieldLabel
        htmlFor={field.name}
        {...props}
    />
);
