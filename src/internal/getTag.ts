export default function getTag(value: unknown): string {
  const ObjectTag = Object.prototype.toString.call(value)
  const regex = /(?<=\[object\s)[a-zA-Z]+(?=\])/
  return (regex['exec'] as (string: string) => RegExpExecArray)(ObjectTag)?.[0]
}
