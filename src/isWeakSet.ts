import isTag from './_isTag';

function isWeakSet(value: unknown) {
  return isTag(value, 'WeakSet')
}

export default isWeakSet
