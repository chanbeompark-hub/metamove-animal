import { readdir, stat } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const publicDir = fileURLToPath(new URL('../public/', import.meta.url))
const maxBytes = 25 * 1024 * 1024

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await collectFiles(path)))
    else files.push(path)
  }

  return files
}

const files = await collectFiles(publicDir)
const oversized = []

for (const file of files) {
  const info = await stat(file)
  if (info.size > maxBytes) {
    oversized.push(`${relative(publicDir, file)} (${(info.size / 1024 / 1024).toFixed(2)} MiB)`)
  }
}

if (oversized.length > 0) {
  console.error(`Cloudflare Pages rejects files larger than 25 MiB:\n${oversized.join('\n')}`)
  process.exit(1)
}

console.log('All public assets are within the Cloudflare Pages 25 MiB file limit.')
