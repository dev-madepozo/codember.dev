const { readFileSync } = require('fs');
const data = readFileSync('log.txt', 'utf-8')
const passwords = data.split('\n')
const isValidPassword = (password) => {
  const characters = password.split('')

  for (let i = 1; i < characters.length; i++) {
    if (characters[i] < characters[i - 1]) return false
  }

  return true
}
const validAttempts = passwords.filter(isValidPassword).length
const invalidAttempts = passwords.length - validAttempts

console.log(`submit ${validAttempts}true${invalidAttempts}false`)
