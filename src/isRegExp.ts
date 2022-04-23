import isTag from './internal/isTag'

function isRegExp(value: unknown) {
  return isTag(value, 'RegExp')
}

export default isRegExp
