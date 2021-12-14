// 判断该值的 toString 是否为 object [name] 类型
export default function isTag(value: unknown, name: string) {
  return Object.prototype.toString.call(value) === `[object ${name}]`
}
