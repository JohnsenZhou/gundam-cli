#! /usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const program = require('commander')
const download = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')
const package = require('../package.json')
const createFn = require('../lib/create')
const spinner = ora('downloading template from gitlab...')

program
  .version(package.version, '-v, --version')
  .usage('<command> [options]')
  .parse(process.argv)

program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp()
    console.log()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
  })

program
  .command('new <string> [otherDirs...]')
  .description('Creates a new application')
  .action((string, otherDirs) => {
    const _projectPath = projectPath(string)
    const isProjectRepet = fs.existsSync(_projectPath)
    if (isProjectRepet) {
      spinner.warn(chalk.red(`The project named ${chalk.yellow(string)} is existed, please use a another name.\n`))
      return
    }
    createFn(_projectPath, string)
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

function projectPath(string) {
  const __root = process.cwd()
  return path.join(__root, '/', string)
}
