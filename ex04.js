const primeAt = (at) => {
  const check = (max) => {
    let numbers = [],
      i,
      j,
      primes = []
    for (i = 2; i <= max; ++i) {
      if (!numbers[i]) {
        primes.push(i)
        for (j = i << 1; j <= max; j += i) {
          numbers[j] = true
        }
      }
    }
    return primes
  }
  let i = 0,
    count = 0
  while (count != at) {
    i++
    count = check(i).length
  }
  return check(i)[check(i).length - 1]
}

console.log(primeAt(1))
console.log(primeAt(2))
console.log(primeAt(6))
console.log(primeAt(100))
