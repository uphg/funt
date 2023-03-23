import isTag from './internal/isTag';

function isArrayBuffer(value: unknown): value is ArrayBuffer {
  return isTag(value, 'ArrayBuffer')
}

export default isArrayBuffer
