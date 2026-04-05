import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useMemo, useState } from 'react';


export interface UseListStateHandlers<T> {

    /**
     * Sets the entire state of the list to a new array of items.
     * @param value The new state of the list, which can be an array of items or a function that returns an array of items.
     */
    setState: Dispatch<SetStateAction<T[]>>;

    /**
     * Appends one or more items to the end of the list.
     * @param items One or more items to be appended to the list.
     */
    append: (...items: T[]) => void;

    /**
     * Prepends one or more items to the beginning of the list.
     * @param items One or more items to be prepended to the list.
     */
    prepend: (...items: T[]) => void;

    /**
     * Inserts one or more items at a specified index in the list.
     * @param index The index at which to insert the items.
     * @param items One or more items to be inserted into the list.
     */
    insert: (index: number, ...items: T[]) => void;

    /**
     * Removes the last item from the list.
     */
    pop: () => void;

    /**
     * Removes the first item from the list.
     */
    shift: () => void;

    /**
     * Applies a mapping function to each item in the list, replacing the items with the results of the mapping function.
     * @param fn A function that takes an item and its index and returns a new item to replace it in the list.
     */
    map: (fn: (item: T, index?: number) => T) => void;

    /**
     * Removes items from the list based on their indices.
     * @param indices One or more indices of the items to be removed from the list.
     */
    remove: (...indices: number[]) => void;

    /**
     * Removes items from the list that match a specified item, using an optional equality function to determine matches.
     * @param item The item to be removed from the list.
     * @param equal An optional function that takes two items and returns `true` if they are considered equal (default is strict equality).
     */
    removeItem: (item: T, equal?: (a: T, b: T) => boolean) => void;

    /**
     * Clears all items from the list.
     */
    clear: () => void;

    /**
     * Moves an item from one index to another in the list.
     * @param from The index of the item to move.
     * @param to The index to move the item to.
     */
    move: ({ from, to }: { from: number; to: number }) => void;

    /**
     * Swaps two items in the list.
     * @param from The index of the first item.
     * @param to The index of the second item.
     */
    swap: ({ from, to }: { from: number; to: number }) => void;

    /**
     * Sets the item at a specific index in the list.
     * @param index The index of the item to set.
     * @param item The new item to set at the specified index.
     */
    setItem: (index: number, item: T) => void;

    /**
     * Filters the list based on a predicate function.
     * @param fn A function that takes an item and its index and returns `true` to keep the item or `false` to remove it.
     */
    filter: (fn: (item: T, i: number) => boolean) => void;
}

export type UseListStateReturnValue<T> = [T[], UseListStateHandlers<T>];

/**
 * A hook that manages a list of items, providing handlers to manipulate the list in various ways.
 * @param initialValue The initial value of the list.
 * @returns An array containing the current state and an object with handlers to manipulate the list.
 */
export function useListState<T>(
    initialValue: T[] | (() => T[]) = [],
): UseListStateReturnValue<T> {
    const [state, setState] = useState(initialValue);

    const append = useCallback((...items: T[]) => {
        setState(current => [...current, ...items]);
    }, []);

    const prepend = useCallback((...items: T[]) => {
        setState(current => [...items, ...current]);
    }, []);

    const insert = useCallback((index: number, ...items: T[]) => {
        setState(current => [
            ...current.slice(0, index),
            ...items,
            ...current.slice(index),
        ]);
    }, []);

    const map = useCallback((fn: (item: T, index?: number) => T) => {
        setState(current => current.map((item, index) => fn(item, index)));
    }, []);

    const remove = useCallback((...indices: number[]) => {
        setState(current => current.filter((_, index) => !indices.includes(index)));
    }, []);

    const removeItem = useCallback((item: T, equal: (a: T, b: T) => boolean = (a, b) => a === b) => {
        setState(current => current.filter(currentItem => !equal(currentItem, item)));
    }, []);

    const clear = useCallback(() => {
        setState([]);
    }, []);

    const pop = useCallback(() => {
        setState(current => {
            const cloned = [...current];
            cloned.pop();
            return cloned;
        });
    }, []);

    const shift = useCallback(() => {
        setState(current => {
            const cloned = [...current];
            cloned.shift();
            return cloned;
        });
    }, []);

    const move = useCallback(({ from, to }: { from: number; to: number }) => {
        setState(current => {
            const cloned = [...current];
            const item = cloned[from];
            cloned.splice(from, 1);
            cloned.splice(to, 0, item);
            return cloned;
        });
    }, []);

    const swap = useCallback(({ from, to }: { from: number; to: number }) => {
        setState(current => {
            const cloned = [...current];
            const tmp = cloned[from];
            cloned[from] = cloned[to];
            cloned[to] = tmp;
            return cloned;
        });
    }, []);

    const setItem = useCallback((index: number, item: T) => {
        setState(current => {
            const cloned = [...current];
            cloned[index] = item;
            return cloned;
        });
    }, []);

    const filter = useCallback((fn: (item: T, i: number) => boolean) => {
        setState(current => current.filter(fn));
    }, []);

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
            removeItem,
            clear,
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
            removeItem,
            clear,
            move,
            swap,
            setItem,
            filter,
        ],
    );

    return [state, handlers];
}
