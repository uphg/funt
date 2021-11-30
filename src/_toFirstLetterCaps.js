/**
 * 将分割的单词转为首字母大写的字符串
 * 
 * @param {*} string 字符串
 * @param {*} delimiter 要转换的分割符，默认为正则 `/[_-\s]/`
 * @returns {Array} 返回转换后的字符串.
 * @example
 * 
 * toFirstLetterCaps('the_case_of_this_conversion_string')
 * // => 'TheCaseOfThisConversionString'
 * 
 * toFirstLetterCaps('the-case-of This conversion-string')
 * // => 'TheCaseOfThisConversionString'
 */

function toFirstLetterCaps(value, delimiter = /[_-\s]/) {
  const newValue = value.split(delimiter)
  if (newValue?.length <= 0) return value

  if (newValue.length === 1) {
    return firstCaps(newValue[0])
  }

  return newValue.reduce((a, b) => firstCaps(a) + firstCaps(b))
}

function firstCaps(word) {
  return word.replace(word[0], word[0].toUpperCase())
}

export default toFirstLetterCaps
