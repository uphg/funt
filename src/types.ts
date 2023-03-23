export type RecursiveArray<T> = Array<T | RecursiveArray<T>>
export type FlattenCallback<T, U extends unknown> = (item: T | RecursiveArray<T>, index: number, array: RecursiveArray<T>) => U
