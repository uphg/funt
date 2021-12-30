export interface ArrayLike<T> {
  [index: number]: T;
  length: number;
}

export type ConstructorType = any

export interface ObjectLike {
  [key: string]: any
}

export type TypedArray = Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array
