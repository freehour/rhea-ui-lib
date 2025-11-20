import type { ComponentProps, ReactNode } from 'react';
import type { FieldValues, FormProviderProps, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

import type { OmitFrom } from '@/types';


export interface FormProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    TTransformedValues = TFieldValues,
> extends
    OmitFrom<ComponentProps<'form'>, 'onSubmit' | 'onInvalid'>,
    OmitFrom<FormProviderProps<TFieldValues, TContext, TTransformedValues>, 'children'> {
    onValid?: SubmitHandler<TTransformedValues>;
    onInvalid?: SubmitErrorHandler<TFieldValues>;
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
    onValid,
    onInvalid,
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
        <form
            onSubmit={onValid ? handleSubmit(onValid, onInvalid) : undefined}
            {...props}
        />
    </FormProvider>
);
