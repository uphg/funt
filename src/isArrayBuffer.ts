import isTag from './internal/isTag';

function isArrayBuffer(value: unknown) {
  return isTag(value, 'ArrayBuffer')
}

export default isArrayBuffer
