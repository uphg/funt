
// 防抖函数
export default function debounce(
  func: (...args: any) => any,
  wait: number
) {
  let timerId: null | number | NodeJS.Timeout = null

  const result = function(...args: any) {
    if (typeof timerId === 'number') {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timerId as number)
      timerId = null
    }, wait)
  }
  return result
}
