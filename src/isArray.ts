import isTag from './internal/isTag'

function isArray(value: unknown) {
  return isTag(value, 'Array')
}

export default Array.isArray || isArray
