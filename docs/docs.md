---
sidebar: auto
---

# API 文档

## 合集

### <synta text="each(array, callback)">each</synta>

迭代指定数组/类数组、对象，并为每个元素调用 callback，callback 传入三个参数 (currentValue, index, obj)。使用对象时根据对象的每个 key 依次调用

```js
each([1, 2, 3], (value, index) => console.log(value))
// => 1, 2, 3

each({ a: 1, b: 2, c: 3 }, (value, key) => console.log(key))
// => 'a', 'b', 'c'
```

### <synta text="map(array, callback)">map</synta>

迭代指定数组/类数组，并根据 callback 函数的返回值组成一个新的数组返回

```js
map([1, 2, 3], (number) => number * 2)
// => [2, 4, 6]

map([1, 2, 3], (number) => number * number)
// => [1, 4, 9]
```

### <synta text="mapObject(object, callback)">mapObject</synta>

迭代指定对象，并根据 callback 函数的返回值组成一个新的数组返回

```js
mapObject({ a: 1, b: 2, c: 3 }, (value, key) => value * 3)
// => [3, 6, 9]

mapObject({ a: 1, b: 2, c: 3 }, (value, key) => key)
// => ['a', 'b', 'c']
```

### <synta text="cloneDeep(value)">cloneDeep</synta>

对指定值进行深度克隆

```js
const object = [{ a: 1 }, { b: 2 }]

const object2 = cloneDeep(object)
console.log(object2[0] === object[0])
// => false
```

## 数组

### <synta text="chunk(array, size=1)">chunk</synta>

以指定大小分割数组

```js
const array = ['a', 'b', 'c', 'd']

chunk(array, 2)
// => [['a', 'b'], ['c', 'd']]
 
chunk(array, 3)
// => [['a', 'b', 'c'], ['d']]
```

### <synta text="compact(array)">compact</synta>

创建一个清除所有 falsey 值的数组，falsey 值包括 `false`、`null`、`0`、`""`、`undefined` 和 `NaN`

```js
compact([0, 1, false, 2, '', 3, NaN, 4, undefined])
// => [1, 2, 3, 4]
```

### <synta text="flatMap(array, callback)">flatMap</synta>

通过调用 callback 函数创建一个新的扁平化的数组，callback 包括三个参数 (value, index|key, array)

```js
flatMap([1, 2, 3], (item) => [item, item])
// => [1, 1, 2, 2, 3, 3]
```

### <synta text="flatMapDeep(array, callback)">flatMapDeep</synta>

该方法与 flatMap 类似，不同的地方是它会递归的展开所有数组

```js
flatMapDeep([1, 2, 3], (item) => [[[[item, item]]]])
// => [1, 1, 2, 2, 3, 3]
```

### <synta text="flatten(array)">flatten</synta>

返回一个新的扁平化的数组

```js
flatten([[1, 2], [3, 4], [5, [6, 7]]])
// => [1, 2, 3, 4, 5, [6, 7]]
```

### <synta text="flattenDeep(array)">flattenDeep</synta>

该方法与 flatten 类似，不同的地方是它会递归的展开所有数组

```js
flattenDeep([[1, 2], [3, 4], [5, [6, 7]]])
// => [1, 2, 3, 4, 5, 6, 7]
```

### <synta text="uniq(array)">uniq</synta>

数组去重，返回一个没有重复值的数组

```js
uniq([2, 3, 1, 3, 2])
// => [2, 3, 1]

uniq([-Infinity, -0, NaN, undefined, -0, NaN, 1, undefined, -Infinity])
// => [-Infinity, -0, NaN, undefined, 1]
```

### <synta text="find(array, callback, [fromIndex=0])">find</synta>

迭代指定数组，返回 callback 函数为 true 的第一项的值

```js
const users = [
  { id: 1, age: 16, name: 'Jack' },
  { id: 2, age: 20, name: 'Church' },
  { id: 3, age: 22, name: 'Turing' },
  { id: 4, age: 18, name: 'Neumann' }
]

find(users, (user) => user.age > 18)
// => { id: 2, age: 20, name: 'Church' }
```

### <synta text="findIndex(array, callback, [fromIndex=0])">findIndex</synta>

迭代指定数组，返回 callback 函数为 true 的第一项的 index

```js
const users = [
  { id: 1, age: 16, name: 'Jack' },
  { id: 2, age: 20, name: 'Church' },
  { id: 3, age: 22, name: 'Turing' },
  { id: 4, age: 18, name: 'Neumann' }
]

findIndex(users, (user) => user.age > 18)
// => 1
```

### <synta text="findLast(array, callback, [fromIndex=array.length-1])">findLast</synta>

此方法与 find 相似，只不过是从右向左迭代数组

```js
const users = [
  { id: 1, age: 16, name: 'Jack' },
  { id: 2, age: 20, name: 'Church' },
  { id: 3, age: 22, name: 'Turing' },
  { id: 4, age: 18, name: 'Neumann' }
]

findLast(users, (user) => user.age > 18)
// => { id: 3, age: 22, name: 'Turing' }
```

### <synta text="findLastIndex(array, callback, [fromIndex=array.length-1])">findLastIndex</synta>

此方法与 findIndex 相似，只不过同样是从右向左迭代数组

```js
const array = [1, 2, 3, 4, 3, 2, 1]

findLastIndex(array, (item) => item === 3)
// => 4

findLastIndex(array, (item) => item === 3, 3)
// => 2
```

### <synta text="indexOf(array, searchElement, [fromIndex=0])">indexOf</synta>

返回在数组中可以找到一个给定元素的第一个的索引，如果不存在，则返回 -1。可指定 fromIndex，表示从指定索引查询

```js
const array = ['a', 'b', 'c', 'a']

indexOf(array, 'b')
// => 1

indexOf(array, 'a', 2)
// => 3
```

### <synta text="lastIndexOf(array, searchElement, [fromIndex=array.length-1])">lastIndexOf</synta>

返回在数组中可以找到一个给定元素的最后一个的索引，如果不存在，则返回 -1。可指定 fromIndex，表示从指定索引查询

```js
const array = ['a', 'b', 'c', 'a']

lastIndexOf(array, 'a')
// => 3

lastIndexOf(array, 'a', 2)
// => 0
```

### <synta text="remain(array, start, [deleteCount=array.length-1])">remain</synta>

根据给定参数分割数组，返回分割后的剩下的部分

```js
const array = [1, 2, 3, 4, 5]

remain(array, 2, 2)
// => [1, 2, 5]

remain(array, 3)
// => [1, 2, 3]
```

### <synta text="tail(array)">tail</synta>

获取除了数组第一个元素外的所有元素

```js
tail([1, 2, 3])
// => [2, 3]
```

## 函数

### <synta text="debounce(func, [wait=0], [immediate=false])">debounce</synta>

创建一个防抖函数，该函数会在指定时间后调用，如果中途调用，则会重新计时。可通过指定 immediate 设置是否在第一次调用时立即调用。

```js
// 1 秒后调用
debounce(() => {}, 1000)

// 立即调用一次
debounce(() => {}, 1000, true)

const fn = debounce(() => {}, 1000)

// 清空未调用定时器，内置
fn.cancel()
```

### <synta text="throttle(func, [wait=0], [options={}])">throttle</synta>

创建一个节流函数，该函数会间隔的指定时间内调用。可通过指定 leading、trailing 设置是否第一次调用和最后一次延迟调用。

```js
// 间隔 1 秒调用一次
throttle(() => {}, 1000)

// 间隔 1 秒调用一次，并且第一次调用会在一秒后
throttle(() => {}, { leading: false })

// 间隔 1 秒调用一次，并且不会存在最后一次延时调用
throttle(() => {}, { trailing: false })
```

### <synta text="delay(func, [wait=0], [...args])">delay</synta>

等待指定时间后调用函数，可传入多个参数

```js
delay((p1, p2) => {
  console.log(p1, p2)
}, 1000, 'hello','hi')

// after 1 second:
// hello hi
```

## 类型

### <synta text="same(value, other)">same</synta>

判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

```js
same(NaN, NaN)
// => true

same(-0, -0)
// => true

same(Infinity, -Infinity)
// => false

same(-0, +0)
// => false
```

### <synta text="toFinite(value)">toFinite</synta>

value 转有限数字

```js
toFinite(6.2)
// => 6.2
 
toFinite(Number.MIN_VALUE)
// => 5e-324
 
toFinite(Infinity)
// => 1.7976931348623157e+308
 
toFinite('6.2')
// => 6.2
```

### <synta text="toInteger(value)">toInteger</synta>

value 转整数

```js
toInteger(6.2)
// => 6
 
toInteger(Number.MIN_VALUE)
// => 0
 
toInteger(Infinity)
// => 1.7976931348623157e+308
 
toInteger('6.2')
// => 6
```

### <synta text="toLength(value)">toLength</synta>

将 value 转换为符合数组 length 属性长度的整数

```js
toLength(6.2)
// => 6
 
toLength(Number.MIN_VALUE)
// => 0
 
toLength(Infinity)
// => 4294967295
 
toLength('6.2')
// => 6
```

### <synta text="toNumber(value)">toNumber</synta>

value 转数字

```js
toNumber(6.2)
// => 6.2
 
toNumber(Number.MIN_VALUE)
// => 5e-324
 
toNumber(Infinity)
// => Infinity
 
toNumber('6.2')
// => 6.2
```


### <synta text="isBoolean(value)">isBoolean</synta>

检测 value 是否为布尔值

```js
isBoolean(NaN)
// => false

isBoolean(true)
// => true

isBoolean(new Boolean(false))
// => false
```

### <synta text="isString(value)">isString</synta>

检测 value 是否为字符串类型

```js
isString(1)
// => false

isString('hi')
// => true
```

### <synta text="isNumber(value)">isNumber</synta>

检测 value 是否为数字类型

```js
isNumber(1)
// => true

isNumber(NaN)
// => true

isNumber(Infinity)
// => true
```

### <synta text="isBigInt(value)">isBigInt</synta>

检测 value 是否为 BigInt 类型

```js
const bigInt = BigInt("9007199254740991")

isBigInt(bigInt)
// => true

isBigInt(1)
// => false

isBigInt(NaN)
// => false
```

### <synta text="isSymbol(value)">isSymbol</synta>

检测 value 是否为 Symobl 类型

```js
isSymbol(Symbol())
// true

isSymbol('hi')
// false
```

### <synta text="isFunction(value)">isFunction</synta>

检测 value 是否为函数

```js
isFunction(() => {})
// true

isFunction(class Foo {})
// true

isFunction(async () => {})
// true

isFunction(function* foo() {})
// true

isFunction({})
// false
```

### <synta text="isObject(value)">isObject</synta>

检测 value 是否为 Object 类型，如：数组、函数、对象、正则表达式、`new Number(0)` 和 `new String('')`

```js
isObject({})
// => true

isObject([])
// => true

isObject(Function)
// => true

isObject(null)
// => false
```

### <synta text="isObjectLike(value)">isObjectLike</synta>

检测 value 是否为类似对象的结构，如果值不为 `null`，并且 typeof 的结果为 `'object'`，则该值类似对象

```js
isObjectLike({})
// => true

isObjectLike([])
// => true

isObjectLike(Function)
// => false

isObjectLike(null)
// => false
```

### <synta text="isArray(value)">isArray</synta>

检测 value 是否为数组

```js
isArray([])
// => true

isArray({})
// => false

isArray('hi')
// => false

isArray(null)
// => false
```

### <synta text="isArrayLike(value)">isArrayLike</synta>

检测 value 是否为类数组，如果值不是函数，并且 value.length 是一个大于等于 0 且小于等于 `Number.MAX_SAFE_INTEGER` 的整数，它就是一个类数组

```js
isArrayLike([1, 2, 3])
// => true

isArrayLike(document.body.children)
// => true

isArrayLike('hi')
// => true

isArrayLike(Function)
// => false
```

### <synta text="isArrayLikeObject(value)">isArrayLikeObject</synta>

此方法与 isArrayLike 类似，不一样的地方是它还会检查 value 是否为对象

```js
isArrayLikeObject([1, 2, 3])
// => true

isArrayLikeObject(document.body.children)
// => true

isArrayLikeObject('hi')
// => false

isArrayLikeObject(Function)
// => false
```

### <synta text="isArguments(value)">isArguments</synta>

检测 value 是否为 arguments 对象

```js
isArguments(function() { return arguments })
// => true

isArguments([1, 2, 3])
// => false
```

### <synta text="isArrayBuffer(value)">isArrayBuffer</synta>

检测 value 是否为 ArrayBuffer 对象

```js
isArrayBuffer(new ArrayBuffer(1))
// => true
 
isArrayBuffer(new Array(1))
// => false
```

### <synta text="isError(value)">isError</synta>

检测 value 是否为 `Error`、`EvalError`、`RangeError`、`ReferenceError`、`SyntaxError`、`TypeError` 构造的对象

```js
isError(new Error)
// => true

isError(Error)
// => false
```

### <synta text="isDate(value)">isDate</synta>

检测 value 是否为 Date 时间对象

```js
isDate(new Date())
// => true

isDate('Tue Jan 25 2022')
// => false
```

### <synta text="isRegExp(value)">isRegExp</synta>

检测 value 是否为 RegExp 正则对象

```js
isRegExp(/a/)
// => true

isRegExp('/a/')
// => false
```

### <synta text="isNaN(value)">isNaN</synta>

检测 value 是否为 NaN

```js
isNaN(NaN)
// => true

isNaN(undefined)
// => false
```

### <synta text="isNil(value)">isNil</synta>

检测 value 是否为 falsy 值，falsy 值表示 严格等于 `null` 或 `undefined` 的值

```js
isNil(null)
// => true

isNil(undefined)
// => true

isNil('')
// => false
```
### <synta text="isFinite(value)">isFinite</synta>

检测 value 是否为有限数字

```js
isFinite(2)
// => true

isFinite(2e64)
// => true

isFinite(-Infinity)
// => false

isFinite(NaN)
// => false
```

### <synta text="isInteger(value)">isInteger</synta>

检测 value 是否为整数

```js
isInteger(2)
// => true

isInteger(2.3)
// => false

isInteger(Number.MIN_VALUE)
// => false

isInteger(Infinity)
// => false
```

### <synta text="isLength(value)">isLength</synta>

检测 value 是否为有效的数组/类数组 length 属性

```js
isLength(2)
// => true

isLength(-2)
// => false

isLength(Number.MIN_VALUE)
// => false
```

### <synta text="isPlainObject(value)">isPlainObject</synta>

检测 value 是否为原始对象，原始对象包括：由 Object 实例创建的对象，或者原型（`[[Prototype]]`）指向为 null 的对象

```js
function Fun() {
  this.a = 0
}

isPlainObject(new Fun())
// => false

isPlainObject([1, 2, 3])
// => false

isPlainObject({ a: 1 })
// => true

isPlainObject(Object.create(null))
// => true
```

### <synta text="isMap(value)">isMap</synta>

检测 value 是否为 Map 对象

```js
isMap(new Map)
// => true

isMap(new WeakMap)
// => false
```

### <synta text="isWeakMap(value)">isWeakMap</synta>

检测 value 是否为 WeakMap 对象

```js
isWeakMap(new WeakMap)
// => true

isWeakMap(new Map)
// => false
```

### <synta text="isSet(value)">isSet</synta>

检测 value 是否为 Set 对象

```js
isSet(new Set)
// => true

isSet(new WeakSet)
// => false
```

### <synta text="isWeakSet(value)">isWeakSet</synta>

检测 value 是否为 WeakSet 对象

```js
isWeakSet(new WeakSet)
// => true

isWeakSet(new Set)
// => false
```

### <synta text="hasInstance(value, constructor)">hasInstance</synta>

检测指定值的构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

```js
hasInstance({}, Object)
// => true

hasInstance([], Array)
// => true

hasInstance([], Object)
// => true
```