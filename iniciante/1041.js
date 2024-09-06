// URI Online Judge | 1041

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var prompt = function(t) {return lines.shift()}

var [x, y] = prompt().split(" ").map(Number)

if (x > 0 && y > 0) {
  console.log("Q1")
} else if (x < 0 && y > 0) {
  console.log("Q2")
} else if (x < 0 && y < 0) {
  console.log("Q3")
} else if (x > 0 && y < 0) {
  console.log("Q4")
} else if (x != 0 && y == 0) {
  console.log("Eixo X")
} else if (x == 0 && y != 0) {
  console.log("Eixo Y")
} else {
  console.log("Origem")
}