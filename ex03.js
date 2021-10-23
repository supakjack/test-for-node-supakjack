extract = (text) => {
  return text
    .substring(text.indexOf('Hello') + 5, text.lastIndexOf('world'))
    .trimStart()
    .trimEnd()
}

console.log(extract('Hello 1 world'))
console.log(extract('Peter Hello Thank you world Pan'))
