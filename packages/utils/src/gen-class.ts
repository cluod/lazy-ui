export function useClassnames(componentName: string) {
  const prefix = 'lazy'
  const componentClass = `${prefix}-${componentName}`
  console.log(componentClass)
}
