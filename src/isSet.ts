import isTag from './internal/isTag';

function isSet(value: unknown) {
  return isTag(value, 'Set')
}

export default isSet
