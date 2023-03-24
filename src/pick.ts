import basePick from './internal/basePick';
import isNil from './isNil';

function pick<T extends object>(object: T, includes: Array<keyof T>) {
  return isNil(object) ? {} : basePick(object, includes)
}

export default pick
