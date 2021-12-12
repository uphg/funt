/**
 * 判断该值的 toString 是否为 object [name] 类型
 * 
 * @private
 * @since 0.1.0
 * @param {unknown} value 要判断的值
 * @param {string} name 该值类型的字符串
 * @returns {boolean} 返回判断结果
 * @example
 * 
 * isTag(new Object, Object)
 * // => true
 * 
 * isTag(new Array, Array)
 * // => true
 */
const isTag = (value: unknown, name: string) => {
  return Object.prototype.toString.call(value) === `[object ${name}]`
}

export default isTag
