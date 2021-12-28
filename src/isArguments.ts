import isTag from './_isTag'
import has from './_has'

const result = (value: unknown) => isTag(value, 'Arguments')

function isArguments(value: unknown) {
  // eslint-disable-next-line prefer-rest-params
  return !result(arguments) ? has(value, 'callee') : result(value)
}

export default isArguments
