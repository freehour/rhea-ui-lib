import type { ComponentProps, FunctionComponent } from 'react';
import { useRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import type { FileInputProps } from '@/components/input';
import { FileInput } from '@/components/input';
import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';


export interface FileDialogTriggerProps extends
    OmitFrom<ComponentProps<'button'>, 'onChange'>,
    Pick<FileInputProps, 'accept' | 'multiple' | 'onFilesChange' | 'onChange'> {
    asChild?: boolean;
}

export const FileDialogTrigger: FunctionComponent<FileDialogTriggerProps> = ({
    accept,
    multiple = false,
    asChild = false,
    onChange,
    onFilesChange,
    onClick,
    ...props
}) => {
    const fileRef = useRef<HTMLInputElement | null>(null);
    const Comp = asChild ? Slot : 'button';

    return (
        <>
            <FileInput
                ref={fileRef}
                accept={accept}
                multiple={multiple}
                onChange={onChange}
                onFilesChange={onFilesChange}
                className="hidden"
            />
            <Comp
                onClick={useForwardEvent(onClick, () => fileRef.current?.click())}
                {...props}
            />
        </>
    );

};
