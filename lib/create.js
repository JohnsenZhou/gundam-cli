const inquirer = require('inquirer')
const Generator = require('./Generator')

const create = (originData, filePath, name) => {
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
        return 'A new project';
      }
    },
    {
      type: 'input',
      name: 'author',
      message: "Author",
      default: function() {
        return 'Johnsen';
      }
    }
  ]
  
  inquirer.prompt(questions).then(answers => {
    const generator = new Generator(originData, answers, filePath)
    generator.init()
  })
}

module.exports = create
