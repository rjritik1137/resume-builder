type X = string[] | string | undefined
type NestedType<T> = Array<T> | Array<NestedType<T>> | T

export type Classes = NestedType<X>
export const mergeClasses = (classes: Classes): string => {
  if (!classes) return ''
  if (typeof classes === 'string') return classes
  const _classes = classes.map((_class) => mergeClasses(_class))
  return _classes.join('  ')
}
