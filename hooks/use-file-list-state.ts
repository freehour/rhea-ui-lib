import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useMemo } from 'react';

import type { OmitFrom } from '@/types/from';

import type { UseListStateHandlers } from './use-list-state';
import { useListState } from './use-list-state';


export interface UseFileListStateHandlers extends OmitFrom<UseListStateHandlers<File>, 'setState'> {
    setState: Dispatch<FileList | SetStateAction<File[]>>;
    removeByName: (file: File) => void;
}

export type UseFileListStateReturnValue = [File[], UseFileListStateHandlers];

export function useFileListState(): UseFileListStateReturnValue {
    const [files, handlers] = useListState<File>([]);

    const setState: UseFileListStateHandlers['setState'] = useCallback(
        value => {
            handlers.setState(value instanceof FileList ? Array.from(value) : value);
        },
        [handlers],
    );
    const removeByName = useCallback((file: File) => {
        handlers.removeItem(file, item => item.name === file.name);
    }, [handlers]);

    return [
        files,
        useMemo((): UseFileListStateHandlers => ({
            ...handlers,
            setState,
            removeByName,
        }), [handlers, removeByName, setState]),
    ];
}
