
// 防抖函数
export default function debounce(func: (...args: any) => any, wait: number) {
  let timerId: any

  const result = function(...args: any) {
    if (typeof timerId === 'number') {
      window.clearTimeout(timerId)
    }
    timerId = window.setTimeout(() => {
      func.apply(this, args)
      window.clearTimeout(timerId)
      timerId = null
    }, wait)
  }
  return result
}
