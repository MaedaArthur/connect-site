import { getAllPostMeta, extractTOC, getPostSource } from "@/lib/posts"

export default async function BlogDebugPage() {
  const posts = await getAllPostMeta()
  const firstSource = posts[0]
    ? await getPostSource(posts[0].slug)
    : ""
  const toc = extractTOC(firstSource)

  return (
    <main style={{ padding: 40, fontFamily: "monospace" }}>
      <h1>Blog Debug</h1>
      <h2>Posts encontrados: {posts.length}</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <h2>ToC do primeiro post</h2>
      <pre>{JSON.stringify(toc, null, 2)}</pre>
    </main>
  )
}
