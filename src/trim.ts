function trim(value?: string): string | undefined {
  return value?.replace(/^\s+|\s+$/g, '')
}

export default trim
