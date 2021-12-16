import isTag from './_isTag'

export default function isArguments(value: unknown) {
  return isTag(value, 'Arguments')
}
