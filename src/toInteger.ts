import toFinite from './toFinite';

// 转整数
export default function toInteger(value: unknown) {
  const result = toFinite(value)
  const remainder = result % 1

  return remainder ? result - remainder : result
}
