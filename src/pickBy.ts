import basePickBy from './internal/basePickBy';
import getSymbols from './internal/getSymobls';
import { Key } from './internal/interfaces';
import isNil from './isNil';
import keys from './keys';

function pickBy(obj: unknown, callback: (value: unknown, key: Key) => boolean) {
  if (isNil(obj)) return {}
  const props: Key[] = keys(obj).concat(getSymbols(obj) as any)
  return basePickBy(obj, props, callback)
}

export default pickBy
