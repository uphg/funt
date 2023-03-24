export type Key = string | number | symbol
export interface ObjectLike<T = unknown> { [k: Key]: T }
export type RecursiveArray<T> = Array<T | RecursiveArray<T>>
export type FindCallback<T> = (item: T, index?: number, array?: T[]) => boolean
export type PickByCallback<T> = (item: T[keyof T], key: keyof T) => boolean
export type FlattenCallback<T, U> = (item: T | RecursiveArray<T>, index: number, array: RecursiveArray<T>) => U

export type TypedArray = Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array
export interface ObjectConstructorNext extends ObjectConstructor {
  hasOwn: (obj: unknown, key: string | symbol) => boolean
}
