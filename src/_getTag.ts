// 获取该值的 Object.prototype.toString 的 [object type] 中的 type
export default function getTag(value: unknown) {
  const objectTag = Object.prototype.toString.call(value)
  return objectTag.replace(/(\[object\s)|(\])/g, '')
}
