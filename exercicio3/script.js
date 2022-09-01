const arrayNum = [11, 19, 21]
const arrayString = ["arroz","feijao","carne"]
const arrayMisto = [11,"salada",2===2]

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const arrayNumCopia = arrayNum.slice()
arrayNum.push(41)

console.log(arrayNum)
console.log(arrayNumCopia)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const arrayStringCopia = arrayString.slice()
arrayString.pop()

console.log(arrayString)
console.log(arrayStringCopia)

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const arrayMistoCopia = arrayMisto.slice()
arrayMisto.splice(2)

console.log(arrayMisto)
console.log(arrayMistoCopia)