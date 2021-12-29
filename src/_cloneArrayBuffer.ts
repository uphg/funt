export default function cloneArrayBuffer(value: ArrayBuffer) {
  const result = new ArrayBuffer(value.byteLength)
  new Uint8Array(result).set(new Uint8Array(value))
  return result
}
