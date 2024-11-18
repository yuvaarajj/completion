numbers = [1, 3, 5, 6, 10]

mapFunction = numbers.map(e => e * 2)
console.log(mapFunction)

fliterFunction = numbers.filter(f => f % 2 == 0)
console.log(fliterFunction)

reduceFunction = numbers.reduce((r, s) => r + s)
console.log(reduceFunction)