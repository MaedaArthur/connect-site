export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function extractTOC(
  source: string
): Array<{ id: string; text: string }> {
  const body = source.replace(/^---[\s\S]*?---\r?\n/, "")
  return body
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.replace(/^## /, "").trim()
      return { id: slugify(text), text }
    })
}

export function formatarData(iso: string): string {
  if (!iso) return ""
  const [y, m, d] = iso.split("-")
  const meses = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez",
  ]
  return `${parseInt(d, 10)} de ${meses[parseInt(m, 10) - 1]} de ${y}`
}
