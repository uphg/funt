import isPlainObject from './isPlainObject';
import isTag from './internal/isTag';

type ErrorLike = { message: string, name: string }

function isError(value: any): value is Error | DOMException | ErrorLike {
  return isTag(value, 'Error')
    || isTag(value, 'DOMException')
    || (
      typeof value?.message === 'string'
      && typeof value?.name === 'string'
      && !isPlainObject(value)
    )
}

export default isError
