import findIndex from "./findIndex"

type EmitterArgs = any[]

interface EmitterCallback {
  (...args: EmitterArgs): void
}

type EmitterCacheItem = {
  callback: EmitterCallback,
  once?: boolean
}[]

interface EmitterCache {
  [key: string]: EmitterCacheItem | null
}

/**
 * event emitter
 * 
 * @returns 
 */
function emitter() {
  let _cache: EmitterCache = {}

  const api = {
    on(name: string, callback: EmitterCallback) {
      if (!_cache[name]) {
        _cache[name] = [{ callback }]
        return
      }

      _cache[name]?.push({ callback })
    },

    once(name: string, callback: EmitterCallback) {
      _cache[name] = [{ callback, once: true }]
    },

    emit(name: string, ...args: EmitterArgs) {
      if (!_cache[name]) return

      _cache[name]?.forEach(({ once, callback }) => {
        callback?.(args)
        once && api.off(name, callback)
      })
    },

    off(name: string, callback: EmitterCallback) {
      if (!(_cache[name]?.length! > 0)) return

      const index = findIndex(_cache[name] as EmitterCacheItem, (item) => {
        return item.callback === callback
      })
      _cache[name]?.splice(index, 1)
    },

    offAll() {
      _cache = {}
    }
  }
  
  return api
}


export default emitter