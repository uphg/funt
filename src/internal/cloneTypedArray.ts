import type { TypedArray } from './types';
import cloneArrayBuffer from './cloneArrayBuffer';

function cloneTypedArray(value: TypedArray) {
  const buffer = cloneArrayBuffer(value.buffer)
  return new (value.constructor as any)(buffer, value.byteOffset, value.length)
}

export default cloneTypedArray
