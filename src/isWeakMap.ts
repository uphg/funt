import isTag from './_isTag';

function isWeakMap(value: unknown) {
  return isTag(value, 'WeakMap')
}

export default isWeakMap
