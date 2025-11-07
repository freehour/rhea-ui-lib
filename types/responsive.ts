

export interface Responsive<T = any> {
    desktop: T;
    mobile: T;
}

export type Device = keyof Responsive;
