export default function getTag(value: unknown) {
  return Object.prototype.toString.call(value)
}
