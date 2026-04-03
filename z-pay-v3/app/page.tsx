import { readFileSync } from "fs";
import { join } from "path";

export default function Home() {
  const html = readFileSync(
    join(process.cwd(), "public", "institutional.html"),
    "utf-8"
  );

  // Extract everything inside <html>...</html> and serve it raw
  // dangerouslySetInnerHTML on a fragment causes issues — we use a full page response instead
  return (
    <html
      lang="pt-BR"
      dangerouslySetInnerHTML={{ __html: html.replace(/^[\s\S]*?<html[^>]*>/i, "").replace(/<\/html>[\s\S]*$/i, "") }}
    />
  );
}
