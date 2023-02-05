let homem = {
    sexo: "Masculino",
}

let joao = {
    idade: 13,
}

Object.setPrototypeOf(joao, homem)
const keys = Object.keys(joao)

console.log(keys)
console.log(joao, joao.sexo)