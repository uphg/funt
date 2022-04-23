import baseValues from './internal/baseValues';
import isNil from './isNil';
import keys from './keys';

function values(object: any) {
  return isNil(object) ? [] : baseValues(object, keys(object))
}

export default values
