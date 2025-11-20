import type { ComponentProps, ReactNode } from 'react';
import type { FieldValues, FormProviderProps } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

import type { OmitFrom } from '@/types';


export interface FormProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
> extends ComponentProps<'form'>, OmitFrom<FormProviderProps<TFieldValues, TContext, TTransformedValues>, 'children'> {
}

export const Form = <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
>({
    watch,
    getValues,
    getFieldState,
    setError,
    clearErrors,
    setValue,
    trigger,
    formState,
    resetField,
    reset,
    handleSubmit,
    unregister,
    control,
    register,
    setFocus,
    subscribe,
    ...props
}: FormProps<TFieldValues, TContext, TTransformedValues>): ReactNode => (
    <FormProvider
        watch={watch}
        getValues={getValues}
        getFieldState={getFieldState}
        setError={setError}
        clearErrors={clearErrors}
        setValue={setValue}
        trigger={trigger}
        formState={formState}
        resetField={resetField}
        reset={reset}
        handleSubmit={handleSubmit}
        unregister={unregister}
        control={control}
        register={register}
        setFocus={setFocus}
        subscribe={subscribe}
    >
        <form {...props} />
    </FormProvider>
);
