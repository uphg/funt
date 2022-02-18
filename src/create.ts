
// 创建一个继承自指定 prototype 对象的对象
function create(prototype: Object | null, properties: Object | null = null) {
  prototype = prototype === null ? null : new Object(prototype)

  const result = Object.create(prototype)
  return properties ? Object.assign(result, properties) : result 
}

export default create
