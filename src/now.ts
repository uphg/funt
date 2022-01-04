import { _now } from './_common'

// 获取当前时间戳
function now() {
  return new Date().getTime()
}

export default _now || now
