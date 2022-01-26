import isTag from './_isTag';

function isArrayBuffer(value: unknown) {
  return isTag(value, 'ArrayBuffer')
}

export default isArrayBuffer
