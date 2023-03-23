export type RecursiveArray<T> = Array<T | RecursiveArray<T>>
export type FlattenCallback<T, U extends unknown> = (item: RecursiveArray<T>, index: number, array: Array<RecursiveArray<T>>) => U
