import isTag from './internal/isTag';

function isWeakMap(value: unknown) {
  return isTag(value, 'WeakMap')
}

export default isWeakMap
