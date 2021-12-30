import cloneArrayBuffer from './_cloneArrayBuffer';

export default function cloneDataView(value: DataView) {
  const buffer = cloneArrayBuffer(value.buffer)
  return new (value.constructor as any)(buffer, value.byteOffset, value.byteLength)
}
