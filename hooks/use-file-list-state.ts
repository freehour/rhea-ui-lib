import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useMemo } from 'react';

import type { OmitFrom } from '@/types/from';

import type { UseListStateHandlers } from './use-list-state';
import { useListState } from './use-list-state';


export interface UseFileListStateHandlers extends OmitFrom<UseListStateHandlers<File>, 'setState'> {
    setState: Dispatch<FileList | null | SetStateAction<File[]>>;
    appendList: (items: File[] | FileList) => void;
    prependList: (items: File[] | FileList) => void;
    removeByName: (item: File) => void;
}

export type UseFileListStateReturnValue = [File[], UseFileListStateHandlers];

export function useFileListState(): UseFileListStateReturnValue {
    const [files, handlers] = useListState<File>([]);

    const setState: UseFileListStateHandlers['setState'] = useCallback(
        value => {
            handlers.setState(value instanceof FileList ? Array.from(value) : value ?? []);
        },
        [handlers],
    );

    const appendList = useCallback((items: File[] | FileList) => {
        handlers.append(...items instanceof FileList ? Array.from(items) : items);
    }, [handlers]);

    const prependList = useCallback((items: File[] | FileList) => {
        handlers.prepend(...items instanceof FileList ? Array.from(items) : items);
    }, [handlers]);

    const removeByName = useCallback((file: File) => {
        handlers.removeItem(file, item => item.name === file.name);
    }, [handlers]);

    return [
        files,
        useMemo((): UseFileListStateHandlers => ({
            ...handlers,
            setState,
            appendList,
            prependList,
            removeByName,
        }), [
            handlers,
            setState,
            appendList,
            prependList,
            removeByName,
        ]),
    ];
}
