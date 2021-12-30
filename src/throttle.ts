export default function throttle(
  func: (...args: any) => any,
  wait: number
) {
  let timerId: null | number = null

  const result = function(...args: any) {
    if (typeof timerId === 'number') return
    
    func.apply(this, args)

    timerId = window.setTimeout(() => {
      window.clearTimeout(timerId as number)
      timerId = null
    }, wait)
  }

  return result
}
