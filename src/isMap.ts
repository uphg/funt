import isTag from './_isTag';

export default function isMap(value: unknown) {
  return typeof value === 'object' && value !== null && isTag(value, 'Map')
}
