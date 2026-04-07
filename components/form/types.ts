import type { DeepKeys, DeepValue, FieldApi, FieldComponent, ReactFormExtendedApi, StandardSchemaV1 } from '@tanstack/react-form';


export type StandardFieldApi<
    TParentData,
    TName extends DeepKeys<TParentData>,
    TData extends DeepValue<TParentData, TName>,
    TParentSubmitMeta,
> = FieldApi<
    TParentData,
    TName,
    TData,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    StandardSchemaV1<TParentData, unknown> | undefined,
    TParentSubmitMeta
>;


export type StandardFieldComponent<
    TFormData,
    TSubmitMeta = never,
> = FieldComponent<
    TFormData,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    TSubmitMeta
>;


export type StandardFormApi<
    TFormData,
    TSubmitMeta,
> = ReactFormExtendedApi<
    TFormData,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    StandardSchemaV1<TFormData, unknown> | undefined,
    TSubmitMeta
>;
