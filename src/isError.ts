import isPlainObject from './isPlainObject';
import isTag from './internal/isTag';

type ErrorLike = { message: string, name: string }

function isError(value: unknown): value is Error | DOMException | ErrorLike {
  return isTag(value, 'Error')
    || isTag(value, 'DOMException')
    || (
      typeof (value as ErrorLike)?.message === 'string'
      && typeof (value as ErrorLike)?.name === 'string'
      && !isPlainObject(value)
    )
}

export default isError
