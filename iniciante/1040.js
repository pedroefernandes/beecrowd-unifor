// URI Online Judge | 1040

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var prompt = function(t) {return lines.shift()}

var [n1, n2, n3, n4] = prompt().split(" ").map(Number)

var media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10
console.log("Media: " + media.toFixed(1))

if (media >= 7) {
  console.log("Aluno aprovado.")
} else if (media < 5) {
  console.log("Aluno reprovado.")
} else {
  console.log("Aluno em exame.")

  var n5 = parseFloat(prompt())
  console.log("Nota do exame: " + n5.toFixed(1))

  var mediaFinal = (n5 + media) / 2

  if (mediaFinal >= 5) {
    console.log("Aluno aprovado.")
  } else {
    console.log("Aluno reprovado.")
  }
  console.log("Media final: " + mediaFinal.toFixed(1))
}