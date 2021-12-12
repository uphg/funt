import isTag from "./_isTag"

function isRegExp(value?: unknown) {
  return isTag(value, 'RegExp')
}

export default isRegExp