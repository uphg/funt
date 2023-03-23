import isTag from './internal/isTag';

function isSet(value: unknown): value is Set<unknown> {
  return isTag(value, 'Set')
}

export default isSet
