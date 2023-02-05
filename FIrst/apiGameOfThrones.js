// Axios é uma biblioteca JavaScript para fazer solicitações HTTP

const axios = require('axios')
const URL = `https://anapioficeandfire.com/api/houses`

async function getApiGOT(number) {
    const url = `${URL}/${number}`
    const response = await axios.get(url)
    return response.data
}

/* getApiGOT('72')
    .then(function(resultado) {
        console.log('Resultado: ', resultado.name)
    })
    .catch((error) => {
        console.error('erro: ', error)
    }) */

module.exports = { getApiGOT }