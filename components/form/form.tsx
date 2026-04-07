import type { ComponentProps, FunctionComponent, SubmitEventHandler } from 'react';
import { useCallback } from 'react';

import type { OmitFrom } from '@/types/from';

import type { StandardFormApi } from './types';


export interface FormProps<
    TFormData,
    TSubmitMeta = never,
> extends OmitFrom<ComponentProps<'form'>, 'onSubmit'> {
    form: StandardFormApi<
        TFormData,
        TSubmitMeta
    >;
    onSubmitError?: (error: unknown) => void;
}

export const Form = <
    TFormData,
    TSubmitMeta = never,
>({
    form,
    onSubmitError,
    ...props
}: FormProps<
    TFormData,
    TSubmitMeta
>): ReturnType<FunctionComponent> => {

    const onSubmit: SubmitEventHandler<HTMLFormElement> = useCallback(
        event => {
            event.preventDefault();
            event.stopPropagation();
            form.handleSubmit().catch(error => onSubmitError?.(error));
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
