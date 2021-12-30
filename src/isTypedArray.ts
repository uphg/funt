import isObjectLike from './isObjectLike';
import getTag from './_getTag';

// 匹配以下内容
// [object Float32Array]
// [object Float64Array]
// [object Int8Array]
// [object Int16Array]
// [object Int32Array]
// [object Uint8Array]
// [object Uint8ClampedArray]
// [object Uint16Array]
// [object Uint32Array]
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

export default function isTypedArray(value: unknown) {
  return isObjectLike(value) && reTypedTag.test(getTag(value))
}
