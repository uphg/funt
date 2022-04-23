import { _now } from './internal/common'

// 获取当前时间戳
function now() {
  return new Date().getTime()
}

export default _now || now
