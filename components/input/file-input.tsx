import type { FunctionComponent } from 'react';
import { useMemo } from 'react';

import type { FileExtensionWithDot, MimeString } from '@freehour/mime';

import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';

import type { InputProps } from './input';
import { Input } from './input';


export interface FileInputProps extends OmitFrom<InputProps, 'onValueChange' | 'accept'> {
    accept?: (MimeString | FileExtensionWithDot)[];
    multiple?: boolean;
    onFilesChange?: (files: FileList | null) => void;
}

export const FileInput: FunctionComponent<FileInputProps> = ({
    multiple = false,
    onFilesChange,
    onChange,
    accept,
    ...props
}) => {
    const acceptTypes = useMemo(() => accept?.join(','), [accept]);
    return (
        <Input
            type="file"
            accept={acceptTypes}
            multiple={multiple}
            onChange={useForwardEvent(onChange, event => onFilesChange?.(event.target.files))}
            {...props}
        />
    );
};
