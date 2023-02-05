const {get} = require('./apiStartWars')

async function main() {

    try {

        // ========== MAP ===========

        /*const {results} = await get('r2')
        //console.log('Objeto Geral: --> ', results)

        const arr = []
        results.map((element) => {
            element.films.map((item) => {
                arr.push(item)
            })
        })
        const newObject = Object.assign({}, arr)
        console.log(newObject)*/

        // ======== FILTRANDO PALAVRAS =========

        /*const {results} = await get('a')
        console.log('Objeto Geral: --> ', results)*/

        /*const wordFilter = 'lars'
        const array = []

        results.filter((item) => {
            const word = item.name.toLowerCase()
            array.push(word)
        })
        const itemFiltrado = array.filter((item)=> {
            if (item.indexOf(wordFilter) !== -1) {
                return item
            }
        })
        console.log(itemFiltrado)*/

        // ======== FOREACH =========

        /*const {results} = await get('r2')
        //console.log('Objeto Geral: --> ', results)

        const arr = []
        results.forEach(element => {
            element.films.forEach((item)=> {
                arr.push(item)
            })
        });
        const filtrados = arr.filter((item) => {
            if (item.indexOf('2') !== -1) {
                return item
            }
        })
        console.log('Array Completa: --> ', arr)
        console.log('Array filtrada: --> ', filtrados) */

    } catch(error) {
        console.log(console.error(error))
    } 
}

main()