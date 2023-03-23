import isTag from './internal/isTag'

function isRegExp(value: unknown): value is RegExp {
  return isTag(value, 'RegExp')
}

export default isRegExp
