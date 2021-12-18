export default function isObjectLike(value: unknown) {
  return typeof value === 'object' && value !== null 
}
