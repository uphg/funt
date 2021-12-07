// 部分内容参考：https://github.com/scottcorgan/tiny-emitter/blob/master/index.js

type EmitterArgs = any[]

interface EmitterCallback {
  (...args: EmitterArgs): void
}

interface EmitterCache {
  [key: string]: EmitterCallback[] | null
}


/**
 * event emitter
 * 
 * @returns 
 */
function emitter() {
  const _cache: EmitterCache = {}

  const api = {
    on(name: string, callback: EmitterCallback) {
      if (!_cache[name]) {
        _cache[name] = [callback]
        return
      }
      _cache[name]?.push(callback)
    },

    once(name: string, callback: EmitterCallback) {
      const listener = (...args: EmitterArgs) => {
        api.off(name, listener);
        callback(...args);
      }
      return api.on(name, listener)
    },

    emit(name: string, ...args: EmitterArgs) {
      if (!_cache[name]) return

      _cache[name]?.forEach((callback) => {
        callback?.(args)
      })
    },

    off(name: string, callback: EmitterCallback) {
      if (!_cache[name]) return

      const newCache = []
      for(const item of _cache[name] as EmitterCallback[]) {
        if (item === callback) continue
        item && newCache.push(item)
      }

      // 防止内存泄漏
      (_cache[name]?.length)
      ? _cache[name] = newCache
      : delete _cache[name]
    },

    offAll() {
      _cache
    }
  }
  
  return api
}


export default emitter