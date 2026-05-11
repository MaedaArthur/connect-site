import type { MDXComponents } from "mdx/types"

const components: MDXComponents = {}

export function useMDXComponents(
  inherited: MDXComponents
): MDXComponents {
  return { ...inherited, ...components }
}
