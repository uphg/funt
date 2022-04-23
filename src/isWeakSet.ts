import isTag from './internal/isTag';

function isWeakSet(value: unknown) {
  return isTag(value, 'WeakSet')
}

export default isWeakSet
