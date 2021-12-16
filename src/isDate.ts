import isTag from './_isTag';

export default function isDate(value: unknown) {
  return isTag(value, 'Date')
}
