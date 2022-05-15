import basePick from './internal/basePick';
import { Keys } from './internal/interfaces';
import isNil from './isNil';

function pick(obj: unknown, keys: Keys) {
  return isNil(obj) ? {} : basePick(obj, keys)
}

export default pick
