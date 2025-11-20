import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { FormFieldContext } from './form-field-context';


export const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    name,
    ...props
}: ControllerProps<TFieldValues, TName>): ReactNode => {
    const value = useMemo(() => ({ name }), [name]);
    return (
        <FormFieldContext.Provider value={value}>
            <Controller
                name={name}
                {...props}
            />
        </FormFieldContext.Provider>
    );
};
