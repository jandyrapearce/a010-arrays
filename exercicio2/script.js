//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const arrayNum = [7, 21, 11, 19]
const arrayString = ["banana", "chocolate", "morango"]
const arrayBagunca = ["oi!", 21, true]

// console.log(arrayNum)
// console.log(arrayString)
// console.log(arrayBagunca)

console.log(`
Primeira Array: ${arrayNum}
Segunda Array: ${arrayString}
Terceira Array: ${arrayBagunca}.
`)

//Exercicio 2

console.log(`
Carcteres da Primeira: ${arrayNum.length};
Caracteres da Segunda: ${arrayString.length};
Caracteres da Terceira: ${arrayBagunca.length}.
`)

console.log(`
Primeiro item da primeira: ${arrayNum[0]};
Segundo item da segunda: ${arrayString.slice(1, 2)};
Terceiro item da terceira: ${arrayBagunca.slice(2, 3)}.
`)

console.log(`
A primeira possui o numero "123"? ${arrayNum.includes(123)}
A Terceira possui a palavra "oi"? ${arrayBagunca.includes("oi")}
`)