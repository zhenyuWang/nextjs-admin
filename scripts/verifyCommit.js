// @ts-check
const pico = require('picocolors')
const fs = require('fs')
const path = require('path')

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${pico.white(pico.bgRed(' ERROR '))} ${pico.red(
      `invalid commit message format.`,
    )}\n\n` +
      pico.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `    ${pico.green(`feat(component): add Search component`)}\n` +
      `    ${pico.green(
        `fix(Product): handle empty products list`,
      )}\n\n` +
      pico.red(`  See .github/commit-convention.md for more details.\n`),
  )
  process.exit(1)
}
