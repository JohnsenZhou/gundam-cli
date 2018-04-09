const execa = require('execa')
const chalk = require('chalk')
const ora = require('ora')
const { hasGit } = require('./common')
const spinner = ora('git pushing...\n')


class GitCommand {
  constructor(context, gitRemote) {
    this.context = context
    this.gitRemote = gitRemote
  }

  init() {
    this.handleGitOperating()
  }

  async handleGitOperating() {
    const {context, gitRemote} = this
    const runCMD = (command, args) => {
      if (!args) { [command, ...args] = command.split(/\s+/) }
      return execa(command, args, { cwd: context })
        .catch(err => {
          // console.log(err)
          spinner.fail(chalk.red('Failed to push the project to remote, please check the git remote url'))
        })
    }
    if (hasGit) {
      await runCMD('echo unicorns')
      await runCMD('git init')
      await runCMD(`git remote add origin ${gitRemote}`)
      await runCMD('git add .')
      await runCMD('git commit -m init')
      spinner.start()
      await runCMD('git push origin master').then(res => {
        if (res) {
          spinner.stop()
          console.log()
          console.log(chalk.yellow(
            '  🎉  Successfully push the project to remote\n' +
            '  \n' +
            '  😀  have a happy coding time.\n'
          ))
        }
      })
    }
  }
}

module.exports = GitCommand
