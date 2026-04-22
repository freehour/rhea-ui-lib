import type { ComponentProps, FunctionComponent, SubmitEventHandler } from 'react';
import { useCallback } from 'react';

import type { ReactFormExtendedApi, StandardSchemaV1 } from '@tanstack/react-form';

import type { OmitFrom } from '@/types/from';


export interface FormProps<
    TFormData,
    TOnMount extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnServer extends StandardSchemaV1<TFormData, unknown> | undefined,
    TSubmitMeta = never,
> extends OmitFrom<ComponentProps<'form'>, 'onSubmit'> {
    form: ReactFormExtendedApi<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer,
        TSubmitMeta
    >;
    onSubmitError?: (error: unknown) => void;
}

export const Form = <
    TFormData,
    TOnMount extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChange extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnChangeAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlur extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnBlurAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmit extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnSubmitAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamic extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnDynamicAsync extends StandardSchemaV1<TFormData, unknown> | undefined,
    TOnServer extends StandardSchemaV1<TFormData, unknown> | undefined,
    TSubmitMeta = never,
>({
    form,
    onSubmitError,
    ...props
}: FormProps<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
>): ReturnType<FunctionComponent> => {

    const onSubmit: SubmitEventHandler<HTMLFormElement> = useCallback(
        event => {
            event.preventDefault();
            event.stopPropagation();
            form.handleSubmit().catch(onSubmitError ?? (error => {
                throw error;
            }));
        },
        [form, onSubmitError],
    );

    return (
        <form
            data-slot="form"
            onSubmit={onSubmit}
            {...props}
        />
    );
};
