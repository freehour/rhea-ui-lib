import type { ComponentProps, FunctionComponent } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { useFormField } from './use-form-field';


export interface FormControlProps extends ComponentProps<typeof Slot> {
}

export const FormControl: FunctionComponent<FormControlProps> = ({
    ...props
}) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
        <Slot
            data-slot="form-control"
            id={formItemId}
            aria-invalid={Boolean(error)}
            aria-describedby={
                error
                    ? `${formDescriptionId} ${formMessageId}`
                    : formDescriptionId
            }
            {...props}
        />
    );
};
