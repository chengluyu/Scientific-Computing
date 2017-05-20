
const f = x => Math.cos(x) - x * x * x

let error = 1
let iterationCount = 0
let maxIterationCount = 100
let tolerance = 1E-8
let x0 = 0.5

while (error > tolerance && iterationCount < maxIterationCount) {
    let x = x0 - f(x0) / df(x0)
    error = Math.abs((x - x0) / x0)
    iterationCount++
    x0 = x
}

console.log(`Solution is ${x0}`)