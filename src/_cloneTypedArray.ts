import type { TypedArray } from './_interfaces';
import cloneArrayBuffer from './_cloneArrayBuffer';

export default function cloneTypedArray(value: TypedArray) {
  const buffer = cloneArrayBuffer(value.buffer)
  return new (value.constructor as any)(buffer, value.byteOffset, value.length)
}
