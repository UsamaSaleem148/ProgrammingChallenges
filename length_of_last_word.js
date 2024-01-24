const getLastWordLength = (str) => {
  let len = 0
  str = str.trim()
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      break
    }
    len++
  }
  return len
}

console.log(getLastWordLength('text input text input'))
console.log(getLastWordLength('application input text word  '))
