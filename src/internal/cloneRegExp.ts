export default function cloneRegExp(value: RegExp) {
  return new RegExp(value.source, value.flags)
}
