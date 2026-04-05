import { useCallback, useState } from 'react';

import { useDebounceCallback } from './use-debounce-callback';


export interface SearchState {

    /**
     * Indicates whether the search function is currently waiting for the debounce delay to elapse before executing.
     * This can be used to show a loading indicator.
     */
    isWaiting: boolean;

    /**
     * The current search term.
     * This is updated immediately when the user types, but the search function is only called after the debounce delay.
     */
    search: string;

    /**
     * Sets the search term and triggers the debounced search function.
     * @param search The new search term to set.
     */
    setSearch: (search: string) => void;
}

/**
 * A custom hook for managing a search input with debounced updates.
 *
 * @param searchFn The function to call with the search term after the debounce delay.
 * This is where you would typically perform the actual search operation.
 * @param delay The debounce delay in milliseconds. Default is 300ms.
 * @returns An object containing the search state and a function to update it.
 *
 * @example
 * ```tsx
 * const [results, setResults] = useState([]);
 * const { search, setSearch, isWaiting } = useSearch((searchTerm) => {
 *     api.search(searchTerm).then(setResults);
 * }, 300);
 *
 * return (
 *    <div>
 *       <Input value={search} onValueChange={setSearch} placeholder="Search..." />
 *      {isWaiting && <Spinner />}
 *      <ResultsList results={results} />
 *    </div>
 * );
 * ```
 */
export function useSearch(
    searchFn: (searchTerm: string) => void,
    delay = 300,
): SearchState {
    const [search, setSearch] = useState('');
    const [isWaiting, setIsWaiting] = useState(false);

    const executeSearch = useCallback((search: string) => {
        setIsWaiting(false);
        searchFn(search);
    }, [searchFn]);

    const debouncedSearch = useDebounceCallback(executeSearch, delay);

    const updateSearch = useCallback((search: string) => {
        setIsWaiting(true);
        setSearch(search);
        debouncedSearch(search);
    }, [debouncedSearch]);

    return {
        isWaiting,
        search,
        setSearch: updateSearch,
    };
}
