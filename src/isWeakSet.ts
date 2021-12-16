import isTag from './_isTag';

export default function isWeakSet(value: unknown) {
  return isTag(value, 'WeakSet')
}
