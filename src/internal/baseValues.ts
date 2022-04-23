import isNil from '../isNil'

function baseValues(object: { [key: string]: any }, props: string[]) {
  return isNil(props) ? [] : props.map((key) => object[key])
}

export default baseValues
