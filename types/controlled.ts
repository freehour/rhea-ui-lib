export interface Controlled<T> {
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
}
