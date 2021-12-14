---
title: 合集
---

## each `each(array, callback)`

迭代指定类数组、对象，并为每个元素调用 callback，callback 传入三个参数 (currentValue, index, obj)。使用对象时根据对象的每个 key 依次调用

```js
each([1, 2, 3], (item) => console.log(item))
// => 1, 2, 3

each({ a: 1, b: 2, c: 3 }, (item, key) => console.log(key))
// => 'a', 'b', 'c'
```

