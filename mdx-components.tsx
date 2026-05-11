import type { MDXComponents } from "mdx/types"
import CtaInline from "@/components/blog/CtaInline"

const components: MDXComponents = {
  CtaInline: CtaInline as MDXComponents[string],
}

export function useMDXComponents(
  inherited: MDXComponents
): MDXComponents {
  return { ...inherited, ...components }
}
