findMaxCount = (numbers) => {
  const setUniq = new Set(numbers)
  const createSets = [...setUniq].map((uniq) => {
    let count = 0
    for (const number of numbers) {
      count += number == uniq ? 1 : 0
    }
    return { no: uniq, count: count }
  })
  return createSets.reduce((prev, current) =>
    prev.count > current.count ? prev : current
  )
}

console.log(findMaxCount([2, -1, 2, 3, 3, 2]))
console.log(findMaxCount([3, -1, 3, 3, 3, 2]))
console.log(findMaxCount([3, 3, 2, 2]))
