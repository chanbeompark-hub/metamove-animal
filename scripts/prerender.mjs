import { readFile, writeFile } from 'node:fs/promises'
import { prerender } from '../.prerender/entry-prerender.js'

const { html, title, description, url } = prerender()
const escape = value => value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
let template = await readFile('dist/index.html', 'utf8')
if (!template.includes('<div id="root"></div>')) throw new Error('Prerender root not found')
template = template.replace(/<title>.*?<\/title>/s, `<title>${escape(title)}</title>`)
  .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/s, `<meta name="description" content="${escape(description)}" />`)
  .replace('</head>', `<link rel="canonical" href="${url}" />
<meta name="robots" content="index,follow,max-image-preview:large" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:site_name" content="메타무브짐 애니멀플로우" />
<meta property="og:title" content="${escape(title)}" />
<meta property="og:description" content="${escape(description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${url}media/outdoor-community.webp" />
<meta property="og:image:alt" content="메타무브짐 애니멀플로우 프로그램 참가자들" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(title)}" />
<meta name="twitter:description" content="${escape(description)}" />
<meta name="twitter:image" content="${url}media/outdoor-community.webp" />
</head>`)
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
await writeFile('dist/index.html', template)
console.log('Prerendered full page, metadata and structured data from current content.')
