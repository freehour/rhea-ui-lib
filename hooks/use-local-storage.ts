'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { useEventListener } from './use-event-listener';


declare global {
    interface WindowEventMap {
        'local-storage': CustomEvent;
    }
}

export interface UseLocalStorageOptions<T> {

    /**
     * A function that takes a value of type `T` and returns a string representation of that value for storage in localStorage.
     * The default serializer is `JSON.stringify`.
     */
    serializer?: (value: T) => string;

    /**
     * A function that takes a string value from localStorage and returns a value of type `T`.
     * The default deserializer is `JSON.parse`.
     */
    deserializer?: (value: string) => T;
}

/**
 * Synchronizes a state variable with localStorage, allowing you to persist state across page reloads and share it across tabs.
 * @template T The type of the value being stored in localStorage.
 * @param key The key under which the value is stored in localStorage.
 * @param initialValue The initial value to use if there is no value in localStorage.
 * @returns A tuple containing the current value, a setter and reset function.
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T | (() => T),
    {
        serializer: serialize = JSON.stringify,
        deserializer = JSON.parse,
    }: UseLocalStorageOptions<T> = {},
): [T, Dispatch<SetStateAction<T>>, () => void] {

    const resolvedInitialValue = useMemo(
        () => initialValue instanceof Function ? initialValue() : initialValue,
        [initialValue],
    );

    // deserialization should not break the lookup of the value, fallback to the initial value if deserialization fails
    const deserialize = useCallback((value: string): T => {
        try {
            return deserializer(value);
        } catch (error) {
            console.error(`Error deserializing value for localStorage key "${key}":`, error);
            return resolvedInitialValue;
        }
    }, [deserializer, resolvedInitialValue, key]);


    // Get from local storage then
    // parse stored json or return initialValue
    const readValue = useCallback((): T => {

        try {
            const raw = window.localStorage.getItem(key);
            return raw !== null ? deserialize(raw) : resolvedInitialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return resolvedInitialValue;
        }
    }, [resolvedInitialValue, key, deserialize]);

    const [storedValue, setStoredValue] = useState(readValue);

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue: Dispatch<SetStateAction<T>> = useCallback(value => {
        try {
            // Allow value to be a function so we have the same API as useState
            const newValue = value instanceof Function ? value(readValue()) : value;

            // Save to local storage
            window.localStorage.setItem(key, serialize(newValue));

            // Save state
            setStoredValue(newValue);

            // We dispatch a custom event so every similar useLocalStorage hook is notified
            window.dispatchEvent(new StorageEvent('local-storage', { key }));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, serialize, readValue]);

    const resetValue = useCallback(() => {
        // Remove the key from local storage
        window.localStorage.removeItem(key);

        // Save state with default value
        setStoredValue(resolvedInitialValue);

        // We dispatch a custom event so every similar useLocalStorage hook is notified
        window.dispatchEvent(new StorageEvent('local-storage', { key }));
    }, [resolvedInitialValue, key]);

    const handleStorageChange = (event: StorageEvent | CustomEvent): void => {
        if (((event as StorageEvent).key !== null) && (event as StorageEvent).key !== key) {
            return;
        }
        setStoredValue(readValue());
    };

    // this only works for other documents, not the current one
    useEventListener('storage', handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    useEventListener('local-storage', handleStorageChange);

    return [storedValue, setValue, resetValue];
}
