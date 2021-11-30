/**
 * 将首字母大写的字符串转为中划线分割的字符串
 * 
 * @param {*} string 字符串
 * @param {*} delimiter 分割符，默认 `-`
 * @returns {Array} 返回转换后的字符串.
 * @example
 * 
 * splitWordLine('TheCaseOfThisConversionString')
 * // => 'the-case-of-this-conversion-string'
 * 
 * splitWordLine('TheCaseOfThisConversionString', '_')
 * // => 'the_case_of_this_conversion_string'
 */

function splitWordLine(value, delimiter = '-') {
  const newValue = value.replace(/[A-Z]?[^A-Z]*/g, (item) => {
    return item ? firstLowerCase(item) + delimiter : ''
  })

  return newValue.slice(0, newValue.length - 1)
}

function firstLowerCase(word) {
  return word ? word.replace(word[0], word[0].toLowerCase()) : ''
}

export default splitWordLine