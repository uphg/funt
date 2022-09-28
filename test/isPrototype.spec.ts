import isPrototype from '../src/internal/isPrototype'

describe('isPrototype', () => {
  it('is a function', () => {
    expect(typeof isPrototype).toBe('function')
  })

  it('values return `true`', () => {
    const Fn = function() {
      this.a = 1
    }
    Fn.prototype.b = 2
    expect(isPrototype(Fn.prototype)).toBeTruthy()
    expect(isPrototype(Object.prototype)).toBeTruthy()
    expect(isPrototype(Function.prototype)).toBeTruthy()
    expect(isPrototype(Boolean.prototype)).toBeTruthy()
    expect(isPrototype(Symbol.prototype)).toBeTruthy()
    expect(isPrototype(Number.prototype)).toBeTruthy()
    expect(isPrototype(BigInt.prototype)).toBeTruthy()
    expect(isPrototype(Date.prototype)).toBeTruthy()
    expect(isPrototype(Error.prototype)).toBeTruthy()
    // @ts-ignore
    expect(isPrototype(AggregateError.prototype)).toBeTruthy()
    expect(isPrototype(EvalError.prototype)).toBeTruthy()
    expect(isPrototype(RangeError.prototype)).toBeTruthy()
    expect(isPrototype(ReferenceError.prototype)).toBeTruthy()
    expect(isPrototype(SyntaxError.prototype)).toBeTruthy()
    expect(isPrototype(TypeError.prototype)).toBeTruthy()
    expect(isPrototype(URIError.prototype)).toBeTruthy()
    expect(isPrototype(String.prototype)).toBeTruthy()
    expect(isPrototype(RegExp.prototype)).toBeTruthy()
    expect(isPrototype(Array.prototype)).toBeTruthy()
    expect(isPrototype(Int8Array.prototype)).toBeTruthy()
    expect(isPrototype(Uint8Array.prototype)).toBeTruthy()
    expect(isPrototype(Uint8ClampedArray.prototype)).toBeTruthy()
    expect(isPrototype(Int16Array.prototype)).toBeTruthy()
    expect(isPrototype(Uint16Array.prototype)).toBeTruthy()
    expect(isPrototype(Int32Array.prototype)).toBeTruthy()
    expect(isPrototype(Uint32Array.prototype)).toBeTruthy()
    expect(isPrototype(Float32Array.prototype)).toBeTruthy()
    expect(isPrototype(Float64Array.prototype)).toBeTruthy()
    expect(isPrototype(BigInt64Array.prototype)).toBeTruthy()
    expect(isPrototype(BigUint64Array.prototype)).toBeTruthy()
    expect(isPrototype(Map.prototype)).toBeTruthy()
    expect(isPrototype(Set.prototype)).toBeTruthy()
    expect(isPrototype(WeakMap.prototype)).toBeTruthy()
    expect(isPrototype(WeakSet.prototype)).toBeTruthy()
    expect(isPrototype(ArrayBuffer.prototype)).toBeTruthy()
    expect(isPrototype(SharedArrayBuffer.prototype)).toBeTruthy()
    expect(isPrototype(DataView.prototype)).toBeTruthy()
    expect(isPrototype(Promise.prototype)).toBeTruthy()
  })
  it('values return `false`', () => {
    expect(isPrototype(false)).toBeFalsy() // Object.prototype !== false
    expect(isPrototype(true)).toBeFalsy()
    expect(isPrototype(null)).toBeFalsy()
    expect(isPrototype(void 0)).toBeFalsy()
    expect(isPrototype(-Infinity)).toBeFalsy()
    expect(isPrototype(1)).toBeFalsy()
    expect(isPrototype(NaN)).toBeFalsy()
    expect(isPrototype('a')).toBeFalsy()
    expect(isPrototype(BigInt(9007199254740991))).toBeFalsy()
    expect(isPrototype(Symbol('a'))).toBeFalsy()
  })
})
