import isTag from './internal/isTag'
import hasOwn from './internal/hasOwn'

const result = (value: unknown) => isTag(value, 'Arguments')

function isArguments(value: unknown) {
  // eslint-disable-next-line prefer-rest-params
  return result(arguments) ? result(value) : hasOwn(value, 'callee') 
}

export default isArguments
