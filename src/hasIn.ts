// 检查 key 是否为 object 的直接或继承属性
function hasIn(obj: unknown, key: string | number | symbol) {
  return obj !== 0 && obj !== void 0 && key in Object(obj) 
}

export default hasIn
