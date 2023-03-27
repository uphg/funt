import now from './now'

// 节流函数
function throttle<T extends Function>(
  func: T,
  wait: number,
  options?: { leading?: boolean, trailing?: boolean }
) {
  const { leading = true, trailing = true } = options ?? {}

  let timerId: null | number | NodeJS.Timeout = null,
    context: unknown,
    args: unknown[] | null,
    result: unknown

  let previous = 0

  const later = function() {
    timerId && clearTimeout(timerId)

    previous = !leading ? 0 : now()
    timerId = null
    result = func.apply(context, args)

    if (!timerId) context = args = null
  }

  const throttled = function(..._args: any) {
    const _now = now()
    if (!previous && !leading) previous = _now
    const remaining = wait - (_now - previous)
    context = this
    args = _args

    // remaining > wait，表示客户端系统时间被调整过，立即执行 func 函数，并且清除之前的定时器
    if (remaining <= 0 || remaining > wait) {
      if (timerId) {
        clearTimeout(timerId)
        timerId = null
      }

      previous = _now
      result = func.apply(context, args as unknown[])

      if (!timerId) context = args = null
    } else if (!timerId && trailing) {
      timerId = setTimeout(later, remaining)
    }

    return result
  }

  throttled.cancel = function() {
    timerId && clearTimeout(timerId)
    previous = 0
    timerId = context = args = null
  }

  return throttled
}

export default throttle
