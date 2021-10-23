extract = (text) => {
  return text
    .substring(text.indexOf('Hello') + 5, text.lastIndexOf('world'))
    .trimStart()
    .trimEnd()
}

console.log(extract('Peter Hello Thank you world Pan'))
console.log(extract('Peter Hello Thank you world Pan'))
