import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

export function stripFrontmatter(raw: string): string {
  if (raw.startsWith("---")) {
    const end = raw.indexOf("\n---", 3);
    if (end !== -1) return raw.slice(end + 4).trimStart();
  }
  return raw;
}

export function toHtml(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}
