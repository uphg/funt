export interface ArrayLike<T> {
  [index: number]: T;
  length: number;
}

export type ConstructorType = any

export type Key = string | number | symbol

export interface ObjectLike<T=unknown> {
  [key: Key]: T
}

export type TypedArray = Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array

export interface ObjectConstructorNext extends ObjectConstructor {
  hasOwn: (obj: unknown, key: string | symbol) => boolean
}
