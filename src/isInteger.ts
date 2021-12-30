export default function isInteger(value: unknown) {
  return typeof value ==='number' && value % 1 === 0
}
