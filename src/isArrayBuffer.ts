import isTag from './_isTag';

export default function isArrayBuffer(value: unknown) {
  return isTag(value, 'ArrayBuffer')
}
