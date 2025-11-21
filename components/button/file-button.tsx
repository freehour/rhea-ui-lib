import type { ChangeEvent, FunctionComponent } from 'react';
import { useMemo, useRef } from 'react';

import type { FileExtensionWithDot, MimeString } from '@freehour/mime';

import { useEventCallback, useForwardEvent } from '@/hooks';
import type { OmitFrom } from '@/types/from';

import type { ButtonProps } from './button';
import { Button } from './button';


export interface FileButtonProps extends OmitFrom<ButtonProps, 'onChange'> {
    accept?: (MimeString | FileExtensionWithDot)[];
    multiple?: boolean;
    onChange?: (files: FileList | null) => void;
}

export const FileButton: FunctionComponent<FileButtonProps> = ({
    multiple = false,
    onChange,
    onClick,
    ...props
}) => {
    const accept = useMemo(() => props.accept?.join(','), [props.accept]);
    const fileRef = useRef<HTMLInputElement | null>(null);

    const handleFileInputChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => onChange?.(event.target.files));

    return (
        <>
            <input
                ref={fileRef}
                type="file"
                accept={accept}
                multiple={multiple}
                className="hidden"
                onChange={handleFileInputChange}
            />
            <Button
                onClick={useForwardEvent(onClick, () => fileRef.current?.click())}
                {...props}
            />
        </>
    );

};
