import tco from '../src/tco'

describe('tco', () => {
  it('Optimize tail recursive function', () => {
    const sum = tco(function(x, y) {
      if (y > 0) {
        return sum(x + 1, y - 1)
      }
      else {
        return x
      }
    });
    
    expect(sum(1, 100000)).toBe(100001)
  })
})
