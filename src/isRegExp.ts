import isTag from "./_isTag"

function isRegExp(value?: any) {
  return isTag(value, 'RegExp')
}

export default isRegExp