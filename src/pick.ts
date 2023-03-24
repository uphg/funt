import basePick from './internal/basePick';
import { Key } from './internal/types';
import isNil from './isNil';

function pick(object: unknown, includes: Key[]) {
  return isNil(object) ? {} : basePick(object, includes)
}

export default pick
