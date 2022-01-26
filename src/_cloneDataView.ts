import cloneArrayBuffer from './_cloneArrayBuffer';

function cloneDataView(value: DataView) {
  const buffer = cloneArrayBuffer(value.buffer)
  return new (value.constructor as any)(buffer, value.byteOffset, value.byteLength)
}

export default cloneDataView
