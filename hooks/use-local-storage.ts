'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { useEventCallback } from './use-event-callback';
import { useEventListener } from './use-event-listener';


declare global {
    interface WindowEventMap {
        'local-storage': CustomEvent;
    }
}

export interface UseLocalStorageOptions<T> {
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    initializeWithValue?: boolean;
}

export function useLocalStorage<T>(
    key: string,
    initialValue: T | (() => T),
    options: UseLocalStorageOptions<T> = {},
): [T, Dispatch<SetStateAction<T>>, () => void] {
    const { initializeWithValue = true } = options;

    const serializer = useCallback(
        (value: T) => {
            if (options.serializer) {
                return options.serializer(value);
            }

            return JSON.stringify(value);
        },
        [options],
    );

    const deserializer = useCallback(
        (value: string) => {
            if (options.deserializer) {
                return options.deserializer(value);
            }
            // Support 'undefined' as a value
            if (value === 'undefined') {
                return undefined as unknown as T;
            }

            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;

            try {
                const parsed = JSON.parse(value);
                return parsed as T;
            } catch (error) {
                console.error('Error parsing JSON:', error);
                return defaultValue; // Return initialValue if parsing fails
            }
        },
        [options, initialValue],
    );

    // Get from local storage then
    // parse stored json or return initialValue
    const readValue = useCallback((): T => {
        const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;

        try {
            const raw = window.localStorage.getItem(key);
            return raw !== null ? deserializer(raw) : initialValueToUse;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValueToUse;
        }
    }, [initialValue, key, deserializer]);

    const [storedValue, setStoredValue] = useState(() => {
        if (initializeWithValue) {
            return readValue();
        }

        return initialValue instanceof Function ? initialValue() : initialValue;
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue: Dispatch<SetStateAction<T>> = useEventCallback(value => {
        try {
            // Allow value to be a function so we have the same API as useState
            const newValue = value instanceof Function ? value(readValue()) : value;

            // Save to local storage
            window.localStorage.setItem(key, serializer(newValue));

            // Save state
            setStoredValue(newValue);

            // We dispatch a custom event so every similar useLocalStorage hook is notified
            window.dispatchEvent(new StorageEvent('local-storage', { key }));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    });

    const removeValue = useEventCallback(() => {
        const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;

        // Remove the key from local storage
        window.localStorage.removeItem(key);

        // Save state with default value
        setStoredValue(defaultValue);

        // We dispatch a custom event so every similar useLocalStorage hook is notified
        window.dispatchEvent(new StorageEvent('local-storage', { key }));
    });

    useEffect(() => {
        setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    const handleStorageChange = useCallback(
        (event: StorageEvent | CustomEvent) => {
            if (((event as StorageEvent).key !== null) && (event as StorageEvent).key !== key) {
                return;
            }
            setStoredValue(readValue());
        },
        [key, readValue],
    );

    // this only works for other documents, not the current one
    useEventListener('storage', handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    // See: useLocalStorage()
    useEventListener('local-storage', handleStorageChange);

    return [storedValue, setValue, removeValue];
}
