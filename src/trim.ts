export default function trim(value?: string): string | undefined {
  return value?.replace(/^\s+|\s+$/g, '')
}