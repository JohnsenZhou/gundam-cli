const fs = require('fs-extra')
const chalk = require('chalk')
const _ = require('lodash')
const gitDetail = require('./gitDetail')

class Generator {
  constructor(originData, editData, path) {
    this.originData = originData
    this.editData = editData
    this.path = path
  }

  init() {
    const newPackageFile = this.handleFileMixed()
    fs.writeFile(`${this.path}/package.json`, JSON.stringify(newPackageFile, null, 2), err => {
      if (err) {
        console.log(chalk.red(err))
        return
      }
      gitDetail(this.path)
    })
  }

  handleFileMixed() {
    const {originData, editData} = this
    const newPackageFile = _.assign({}, originData, editData)
    return newPackageFile
  }
}

module.exports = Generator
