import isTag from './_isTag';

export default function isWeakMap(value: unknown) {
  return isTag(value, 'WeakMap')
}
