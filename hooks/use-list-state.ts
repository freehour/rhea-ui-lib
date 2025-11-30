import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useMemo, useState } from 'react';


export interface UseListStateHandlers<T> {
    setState: Dispatch<SetStateAction<T[]>>;
    append: (...items: T[]) => void;
    prepend: (...items: T[]) => void;
    insert: (index: number, ...items: T[]) => void;
    pop: () => void;
    shift: () => void;
    map: (fn: (item: T, index?: number) => T) => void;
    remove: (...indices: number[]) => void;
    move: ({ from, to }: { from: number; to: number }) => void;
    swap: ({ from, to }: { from: number; to: number }) => void;
    setItem: (index: number, item: T) => void;
    filter: (fn: (item: T, i: number) => boolean) => void;
}

export type UseListStateReturnValue<T> = [T[], UseListStateHandlers<T>];

export function useListState<T>(
    initialValue: T[] | (() => T[]) = [],
): UseListStateReturnValue<T> {
    const [state, setState] = useState(initialValue);

    const append = useCallback((...items: T[]) => {
        setState(current => [...current, ...items]);
    }, [setState]);

    const prepend = useCallback((...items: T[]) => {
        setState(current => [...items, ...current]);
    }, [setState]);

    const insert = useCallback((index: number, ...items: T[]) => {
        setState(current => [
            ...current.slice(0, index),
            ...items,
            ...current.slice(index),
        ]);
    }, [setState]);

    const map = useCallback((fn: (item: T, index?: number) => T) => {
        setState(current => current.map((item, index) => fn(item, index)));
    }, [setState]);

    const remove = useCallback((...indices: number[]) => {
        setState(current => current.filter((_, index) => !indices.includes(index)));
    }, [setState]);

    const pop = useCallback(() => {
        setState(current => {
            const cloned = [...current];
            cloned.pop();
            return cloned;
        });
    }, [setState]);

    const shift = useCallback(() => {
        setState(current => {
            const cloned = [...current];
            cloned.shift();
            return cloned;
        });
    }, [setState]);

    const move = useCallback(({ from, to }: { from: number; to: number }) => {
        setState(current => {
            const cloned = [...current];
            const item = cloned[from];
            cloned.splice(from, 1);
            cloned.splice(to, 0, item);
            return cloned;
        });
    }, [setState]);

    const swap = useCallback(({ from, to }: { from: number; to: number }) => {
        setState(current => {
            const cloned = [...current];
            const tmp = cloned[from];
            cloned[from] = cloned[to];
            cloned[to] = tmp;
            return cloned;
        });
    }, [setState]);

    const setItem = useCallback((index: number, item: T) => {
        setState(current => {
            const cloned = [...current];
            cloned[index] = item;
            return cloned;
        });
    }, [setState]);

    const filter = useCallback((fn: (item: T, i: number) => boolean) => {
        setState(current => current.filter(fn));
    }, [setState]);

    const handlers: UseListStateHandlers<T> = useMemo(
        () => ({
            setState,
            append,
            prepend,
            insert,
            pop,
            shift,
            map,
            remove,
            move,
            swap,
            setItem,
            filter,
        }),
        [
            setState,
            append,
            prepend,
            insert,
            pop,
            shift,
            map,
            remove,
            move,
            swap,
            setItem,
            filter,
        ],
    );

    return [state, handlers];
}
