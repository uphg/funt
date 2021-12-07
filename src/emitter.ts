import findIndex from "./findIndex"

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
  let _cache: EmitterCache = {}

  const api = {
    on(name: string, callback: EmitterCallback) {
      if (!_cache[name]) { _cache[name] = [callback]; return }

      _cache[name]?.push(callback)
    },

    once(name: string, callback: EmitterCallback) {
      if (!_cache[name]) return

      callback?.(_cache[name]?.[0])
    },

    emit(name: string, ...args: EmitterArgs) {
      if (!_cache[name]) return

      _cache[name]?.forEach(callback => callback?.(args))
    },

    off(name: string, callback: EmitterCallback) {
      if (!(_cache[name]?.length! > 0)) return

      const index = findIndex(_cache[name] as EmitterCallback[], (item) => item === callback)
      _cache[name]?.splice(index, 1)
    },

    offAll() {
      _cache = {}
    }
  }
  
  return api
}


export default emitter