[creator-fun](README.md) / Exports

# creator-fun

## Table of contents

### Functions

- [default](modules.md#default)

## Functions

### default

▸ **default**(`array`, `predicate`, `fromIndex?`): `unknown`

find 函数

**`example`**

splitCapsWord('TheCaseOfThisConversionString')
// => 'the-case-of-this-conversion-string'

splitCapsWord('TheCaseOfThisConversionString', '_')
// => 'the_case_of_this_conversion_string'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `unknown`[] | 要查询的数组 |
| `predicate` | (`arrayItem`: `unknown`, `index`: `number`, `array`: `unknown`[]) => `boolean` | 每次迭代调用的函数 |
| `fromIndex?` | `number` | 搜索的索引 |

#### Returns

`unknown`

返回满足条件的项

#### Defined in

[find.ts:18](https://github.com/uphg/fun/blob/4c49c8b/src/find.ts#L18)
