const { execSync } = require('child_process')

exports.hasGit = () => {
  if (process.env.HU_CLI_TEST) {
    return true
  }
  if (_hasGit != null) {
    return _hasGit
  }
  try {
    execSync('git --version', { stdio: 'ignore' })
    return (_hasGit = true)
  } catch (e) {
    return (_hasGit = false)
  }
}
