import fs from 'fs'
import path from 'path'

const root = __dirname.replace('server', '')

const normalizeDateString = str => {
  str = str.toString()
  return str.length > 1 ? str : '0' + str
}

const getFormattedDate = () => {
  const date = new Date()
  let output = `${date.getFullYear()}-`
  output += `${normalizeDateString(parseInt(date.getMonth()) + 1)}-`
  output += normalizeDateString(date.getDate())
  return output
}

const filename = path.join(root, 'logs', 'express-' + getFormattedDate() + '.log')

const appendLog = (level, message) => {
  if (typeof message !== 'string') {
    message = JSON.stringify(message)
  }
  const data = '[' + (new Date()).toLocaleString() + '] level.' + level + ' ' + message + '\n'

  fs.appendFile(filename, data, (err) => {
    if (err) {
      console.log(err.message)
    }
  })
}

const log = (level, message) => {
  switch (level) {
    case 'INFO':
      appendLog('INFO', message)
      break

    case 'WARNING':
      appendLog('WARNING', message)
      break

    default:
    case 'ERROR':
      appendLog('ERROR', message)
      break
  }
}

export default {
  info: (message) => log('INFO', message),
  warn: (message) => log('WARNING', message),
  error: (message) => log('ERROR', message)
}
