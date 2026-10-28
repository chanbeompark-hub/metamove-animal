import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
const html=readFileSync('dist/index.html','utf8')
assert.match(html, /<title>애니멀플로우 클래스·행사 \| 메타무브짐<\/title>/)
assert.match(html, /rel="canonical" href="https:\/\/metamove-animal.pages.dev\/"/)
assert.match(html, /<div id="root"><script/)
assert.match(html, /EP6. 애니멀플로우 IN 강남 알베르/)
assert.match(html, /운영 센터·지역 수업 안내/)
assert.match(html, /상동역 피티/)
assert.doesNotMatch(html, /<details[^>]*id="center-info"[^>]*open/)
const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])
const faq=schema['@graph'].find(x=>x['@type']==='FAQPage')
for(const q of faq.mainEntity){assert.ok(html.includes(q.name));assert.ok(html.includes(q.acceptedAnswer.text))}
assert.match(readFileSync('dist/robots.txt','utf8'), /Sitemap: https:\/\/metamove-animal.pages.dev\/sitemap.xml/)
assert.match(readFileSync('dist/sitemap.xml','utf8'), /<loc>https:\/\/metamove-animal.pages.dev\/<\/loc>/)
console.log('Built HTML: complete body, closed footer details, matching JSON-LD, canonical, sitemap and robots verified.')
