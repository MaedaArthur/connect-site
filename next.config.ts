import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter"],
    rehypePlugins: ["rehype-slug"],
  },
})

export default withMDX(nextConfig)
