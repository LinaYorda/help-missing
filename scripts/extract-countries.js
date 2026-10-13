import { readdirSync } from 'node:fs'
import { readFileSync } from 'node:fs'
import matter from 'gray-matter'
import { join } from 'node:path'
import { writeFileSync } from 'node:fs'


const files = readdirSync('content/countries')
const mdFiles = files.filter((file) => file.endsWith('.md') && file !== '_index.md')


const countries = mdFiles.map((file) => {
  const countryPath = join('content/countries', file)
  const fileContent = readFileSync(countryPath, 'utf-8')
  const resultData = matter(fileContent)

  return {
    slug: file.replace('.md', ''),
    name: resultData.data.title,
    resources: resultData.data.resources
  }
})


console.log(JSON.stringify(countries, null, 2))
console.log(countries.length)
console.log(countries.map((c) => ({ slug: c.slug, count: c.resources.length})))

const output = `export const countries = ${JSON.stringify(countries, null, 2)}\n`
writeFileSync('src/data/countries.js', output)
