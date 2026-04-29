import { useState } from 'react';


/**
 * Returns a function that can be used to throw an error on the next render.
 * This is useful for error boundaries, allowing you to throw an error from outside the render phase, such as in an event handler.
 *
 * @returns A function that can be used to throw an error.
 * @example
 * const throwError = useThrowError();
 *
 * onSubmit={() => {
 *   api.submit().catch(throwError);
 * }}
 *
 * return <form onSubmit={onSubmit}>...</form>
 *
 */
export function useThrowError(): (error: Error) => void {
    const [error, setError] = useState<Error>();

    if (error) {
        throw error;
    }

    return setError;
}
