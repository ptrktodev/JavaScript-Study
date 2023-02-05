const axios = require('axios')
const url = `https://swapi.dev/api/people`

async function get(nome) {
    const u = `${url}/?search=${nome}&format=json`
    const response = await axios.get(u)
    return response.data
}

/* get('r2')
    .then((resultado) => {
        console.log('Titulo: ', resultado.title)
        console.log('Diretor: ', resultado.director)
        console.log('Data: ', resultado.release_date)
        console.log('Produtora: ', resultado.producer)
    })
    .catch((error)=> {[
        console.log(error)
    ]}) */

module.exports = {get} 