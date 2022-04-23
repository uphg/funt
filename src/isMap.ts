import isTag from './internal/isTag';

function isMap(value: unknown) {
  return isTag(value, 'Map')
}

export default isMap
