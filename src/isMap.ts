import isTag from './_isTag';

export default function isMap(value: unknown) {
  return isTag(value, 'Map')
}
