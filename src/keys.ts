// 获取对象的 key
export default function keys(object: unknown) {
  return Object.keys(Object(object))
}
