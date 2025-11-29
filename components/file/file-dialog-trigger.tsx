import type { ChangeEvent, ComponentProps, FunctionComponent } from 'react';
import { useMemo, useRef } from 'react';

import type { FileExtensionWithDot, MimeString } from '@freehour/mime';
import { Slot } from '@radix-ui/react-slot';

import { useEventCallback } from '@/hooks/use-event-callback';
import { useForwardEvent } from '@/hooks/use-forward-event';
import type { OmitFrom } from '@/types/from';


export interface FileDialogTriggerProps extends OmitFrom<ComponentProps<'button'>, 'onChange'> {
    accept?: (MimeString | FileExtensionWithDot)[];
    multiple?: boolean;
    onChange?: (files: FileList | null) => void;
    asChild?: boolean;
}

export const FileDialogTrigger: FunctionComponent<FileDialogTriggerProps> = ({
    multiple = false,
    onChange,
    asChild = false,
    onClick,
    ...props
}) => {
    const accept = useMemo(() => props.accept?.join(','), [props.accept]);
    const fileRef = useRef<HTMLInputElement | null>(null);

    const handleFileInputChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => onChange?.(event.target.files));

    const Comp = asChild ? Slot : 'button';

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
            <Comp
                onClick={useForwardEvent(onClick, () => fileRef.current?.click())}
                {...props}
            />
        </>
    );

};
