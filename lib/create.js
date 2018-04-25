const fs = require('fs-extra')
const inquirer = require('inquirer')
const download = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')
const Generator = require('./Generator')

const spinner = ora('downloading template from remote...')
let originData

const create = (filePath, name) => {
  const questionFirst = [
    {
      type: 'list',
      name: 'type',
      message: "Please select your repository management type",
      choices: [
        {
          name: 'github',
        },
        {
          name: 'gitLab'
        }
      ]
    },
    {
      type: 'input',
      name: 'url',
      message: "The short hand repository string to download the repository from",
      default: function() {
        return 'JohnsenZhou/gundam-cli'
      }
    }
  ]
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "Project name",
      default: function() {
        return name
      },
      validate: function(val) {
        const pass = val.match(
          /^[a-z0-9@\/][a-z0-9@\/\.\-_]*$/
        )
        if (pass) {
          return true
        }
        return 'Sorry, name can no longer contain capital letters'
      }
    },
    {
      type: 'input',
      name: 'version',
      message: "Project version",
      default: function() {
        return originData.version
      },
      validate: function(val) {
        const pass = val.match(
          /^[0-9]+\.[0-9]+[0-9+a-zA-Z\.\-]+$/
        )
        if (pass) {
          return true
        }
        return 'Please input correct version number such as: 1.0.0'
      }
    },
    {
      type: 'input',
      name: 'description',
      message: "Project description",
      default: function() {
        return 'A new project'
      }
    },
    {
      type: 'input',
      name: 'author',
      message: "Author",
      default: function() {
        return 'Johnsen'
      }
    }
  ]

  inquirer.prompt(questionFirst).then(answerFirst => {
    const isGithub = answerFirst.type === 'github'
    const originUrl = `${isGithub ? 'github:' : 'gitlab:'}${answerFirst.url}`
    const opts = {
      clone: isGithub ? false : true
    }
    spinner.start()
    download(originUrl, filePath, opts, (err) => {
      if (err) {
        console.log()
        console.log(err)
        spinner.fail(chalk.red('Error downloading template, please contact the administrator.'))
        return
      }
      spinner.stop()
      fs.readJson(`${filePath}/package.json`, (err, data) => {
        if (err) {
          console.log(chalk.red(err))
          return
        }
        originData = data
        inquirer.prompt(questions).then(answers => {
          const generator = new Generator(originData, answers, filePath)
          generator.init()
        })
      })
    })
  })
}

module.exports = create
