import isPlainObject from './isPlainObject';
import isTag from './_isTag';

// Error/DOMException
function isError(value: any) {
  return isTag(value, 'Error')
    || isTag(value, 'DOMException')
    || (
      typeof value?.message === 'string'
      && typeof value?.name === 'string'
      && !isPlainObject(value)
    )
}

export default isError
