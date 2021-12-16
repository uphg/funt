import isTag from './_isTag';

export default function isSet(value: unknown) {
  return isTag(value, 'Set')
}
