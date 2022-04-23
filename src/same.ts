function same(value: unknown, other: unknown) {
  return value === other
    ? value !== 0 || 1 / value === 1 / (other as number) // -0 !== +0
    : value !== value && other !== other // NaN === NaN
}

export default Object.is || same
