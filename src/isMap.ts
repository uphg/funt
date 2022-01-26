import isTag from './_isTag';

function isMap(value: unknown) {
  return isTag(value, 'Map')
}

export default isMap
