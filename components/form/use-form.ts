import type { FormOptions, ReactFormExtendedApi, StandardSchemaV1 } from '@tanstack/react-form';
import { useForm as useTanstackForm } from '@tanstack/react-form';


export function useForm<
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
    TSubmitMeta,
>(
    options?: FormOptions<
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
    >,
): ReactFormExtendedApi<
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
> {
    return useTanstackForm(options);
}
