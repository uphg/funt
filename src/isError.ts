import isTag from './_isTag';

// Error/DOMException
export default function isError(value: any) {
  return isTag(value, 'Error') || isTag(value, 'DOMException')
}
