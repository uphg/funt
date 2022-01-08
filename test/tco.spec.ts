import tco from '../src/tco'

describe('tco', () => {
  it('is a function', () => {
    expect(typeof tco).toBe('function')
  })

  it('Optimize tail recursive function', () => {
    const sum = tco(function(x, y) {
      return y > 0 ? sum(x + 1, y - 1) : x
    })
    
    expect(sum(1, 100000)).toBe(100001)
  })
})
