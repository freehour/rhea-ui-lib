import { useContext } from 'react';
import type { FieldError } from 'react-hook-form';
import { useFormContext, useFormState } from 'react-hook-form';

import { FormFieldContext } from './form-field-context';
import { FormItemContext } from './form-item-context';


export interface FormFieldData {
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: FieldError;
}

export function useFormField(): FormFieldData {
    const fieldContext = useContext(FormFieldContext);
    const itemContext = useContext(FormItemContext);

    if (!fieldContext) {
        throw new Error('FormFieldContext is not provided. Make sure to wrap your component with FormField.');
    }

    const { getFieldState } = useFormContext();
    const formState = useFormState({ name: fieldContext.name });
    const fieldState = getFieldState(fieldContext.name, formState);

    if (!itemContext) {
        throw new Error('FormItemContext is not provided. Make sure to wrap your component with FormItem.');
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
}
