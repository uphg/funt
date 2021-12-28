import isTag from './_isTag'
import hasProp from './_hasProp'

const result = (value: unknown) => isTag(value, 'Arguments')

function isArguments(value: unknown) {
  // eslint-disable-next-line prefer-rest-params
  return !result(arguments) ? hasProp(value, 'callee') : result(value)
}

export default isArguments
