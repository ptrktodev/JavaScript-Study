const {get} = require('./apiStartWars')

async function main() {

    try {

        const {results} = await get('a')
        const mass = results.map((el) => parseInt(el.mass)) // retorna um alista com numeros mais um NaN
        mass.sort().pop()  // ordenar os numeros e eliminar o ultimo elemento [NaN]
        const somaMass = mass.reduce((anterior, proximo) => { // Somar os numeros da array mass
            return anterior + proximo
        })
        console.log('Soma entre as massas:', somaMass)

        // ======================

        const height = results.map((el) => parseInt(el.height))
        const somaHeight = height.reduce((anterior, proximo) => {
            return anterior + proximo
        }) 
        console.log('Soma entre as pesos:', somaHeight)

        // ======================

        const lista = [
            ['Patrick', 'silva'],
            [1, 3],
            [223, 'Exemplo']
        ]

        const uniaoLista = lista.reduce((prev, next) => {
            return prev.concat(next)
        })
        console.log('A soma entre as listas é:', uniaoLista)

    } catch (error) {
        console.log('deu ruim')
    }

}

main()
