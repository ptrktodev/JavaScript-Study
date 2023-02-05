// use for...in para iterar sobre as chaves de um objeto e for...of para iterar sobre os valores de um objeto iterável.

const service = require('./apiStartWars')

// arrays: startships, vehicles, species, planets

async function main() {
    try {

        const res = await service.get('r2')
        //console.log('OBJETO GERAL --> ', res)

        // ==================  FOR OF ========================

        /*console.time()
         for (objeto of res.results) {
            console.log(objeto.films)
        } 
        console.timeEnd() // Time: 4.87ms */

        // ==================  FOR IN ========================

        /* console.time()
        const array = []
        for (let i in res.results) {
            const resposta = res.results[i]
            array.push(resposta.name)
        }
        console.log(array)
        console.timeEnd() // time: 6.00ms  */

        // ==================  FOR ===========================

        /* console.time()
        const array = []
        for (let i = 0; i <= res.results.length - 1; i++) {
            const resposta = res.results[i]
            array.push(resposta.films)
        }
        console.log('CONSOLE LOG AQUI: ', array)
        console.timeEnd() // time: 6ms */ 

    } catch (error){
        console.log(error)
    }
}

main()


