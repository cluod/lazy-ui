import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { blue, gold, green, red } from '@ant-design/colors'

let colors = ''
blue.forEach((color, index) => {
  colors += `--lazy-color-primary-${index + 1}:${color};\n`
})
colors += `\n`
green.forEach((color, index) => {
  colors += `--lazy-color-succcess-${index + 1}:${color};\n`
})
colors += `\n`
gold.forEach((color, index) => {
  colors += `--lazy-color-warning-${index + 1}:${color};\n`
})
colors += `\n`
red.forEach((color, index) => {
  colors += `--lazy-color-error-${index + 1}:${color};\n`
})
const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/lazy-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
