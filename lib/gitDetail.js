const inquirer = require('inquirer')
const chalk = require('chalk')
const GitCommand = require('./GitCommand')

const gitDetail = (projectPath) => {
  const questionOne = [
    {
      type: 'confirm',
      name: 'isGitInit',
      message: 'Do you want execute < git push > to the origin repository',
      default: true
    }
  ]
  const questionTwo = [
    {
      type: 'input',
      name: 'gitRemoteUrl',
      message: "Please input the git remote url",
      default: function() {
        return 'git@gitlab.xxx.com:dev-web/xxxxx.git'
      }
    }
  ]
  
  inquirer.prompt(questionOne).then(answerOne => {
    if (answerOne.isGitInit) {
      inquirer.prompt(questionTwo).then(answerTwo => {
        const gitRemote = answerTwo.gitRemoteUrl
        const gitCommand = new GitCommand(projectPath, gitRemote)
        gitCommand.init()
      })
    } else {
      console.log()
      console.log(chalk.yellow(
        '  🎉  Successfully created project\n' +
        '  \n' +
        '  😀  have a happy coding time.\n'
      ))
      return false
    }
  })
}

module.exports = gitDetail
