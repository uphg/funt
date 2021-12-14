import isTag from './_isTag'

export default function isRegExp(value?: unknown) {
  return isTag(value, 'RegExp')
}
