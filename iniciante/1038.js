// URI Online Judge | 1038

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var prompt = function(t) {return lines.shift()}

var [codigo, quantidade] = prompt().split(" ").map(Number)

var preco = 0

if (codigo == 1) {
  preco = 4.0 * quantidade
} else if (codigo == 2) {
  preco = 4.5 * quantidade
} else if (codigo == 3) {
  preco = 5.0 * quantidade
} else if (codigo == 4) {
  preco = 2.0 * quantidade
} else {
  preco = 1.5 * quantidade
}

console.log("Total: R$ " + preco.toFixed(2))