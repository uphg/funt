---
sidebar: auto
---

# API 文档

## 合集

### each <Synta text="each(array, callback)" />

迭代指定数组/类数组、对象，并为每个元素调用 callback，callback 传入三个参数 (currentValue, index, obj)。使用对象时根据对象的每个 key 依次调用

```js
each([1, 2, 3], (item) => console.log(item))
// => 1, 2, 3

each({ a: 1, b: 2, c: 3 }, (item, key) => console.log(key))
// => 'a', 'b', 'c'
```

### map <Synta text="map(array, callback) " />

迭代指定数组/类数组，并根据 callback 函数的返回值组成一个新的数组返回。

```js
map([1, 2, 3], (number) => number * 2)
// => [2, 4, 6]

map([1, 2, 3], (number) => number * number)
// => [1, 4, 9]
```

### mapObject <Synta text="mapObject(object, callback)" />

迭代指定对象，并根据 callback 函数的返回值组成一个新的数组返回。

```js
mapObject({ a: 1, b: 2, c: 3 }, (num, key) => num * 3)
// => [3, 6, 9]

mapObject({ a: 1, b: 2, c: 3 }, (num, key) => num * 3)
// => [3, 6, 9]
```

## isArrayLike <Synta text="isArrayLike(value)" />

判断指定值是否为类数组类型

```js
isArrayLike('hello')
// => true

isArrayLike({ 0: 'a', 1: 'b', 2: 'c', length: 3 })
// => true

cosnt fn = () => arguments
isArrayLike(fn(1, 2, 3))
// => true
```

## hasInstance <Synta text="hasInstance(value, constructor)" />

检测指定值的构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

```js
hasInstance({}, Object)
// => true
```

## 数组

### find <Synta text="find(array, callback)" />