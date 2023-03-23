import isTag from './internal/isTag';

function isWeakSet(value: unknown): value is WeakSet<object> {
  return isTag(value, 'WeakSet')
}

export default isWeakSet
