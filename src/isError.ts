import isTag from './_isTag';

export default function isError(value: unknown) {
  return isTag(value, 'Error')
}
