
const getUsuario = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Juliano'
            })
        }, 1000)
    })
}

const getEndereco = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                rua: "Alberto Bins",
                casa: 42
            })
        }, 1000)
    })
}

const getTelefone = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                numero: 980702533,
                ddd: 51
            })
        }, 1000)
    })
}

main()

async function main() {

    try {
        console.time()
        const usuario = await getUsuario()
        const resultado = await Promise.all([ //  que retorna uma Promise que é resolvida quando todas as Promises do iterável fornecido são resolvidas  
            getEndereco(usuario.id),
            getTelefone(usuario.id)
        ])
        const endereco = resultado[0]
        const telefone = resultado[1]
        console.log(`
            nome: ${usuario.nome}
            celular: (${telefone.ddd}) ${telefone.numero}
            endereco: ${endereco.rua}
        `)
        console.timeEnd() // log: 2.10s

    } catch (err) {

        console.log(err)

    }
}
