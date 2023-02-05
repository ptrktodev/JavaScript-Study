function obterUsuario() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve({
                id: 1,
                nome: "Patrick",
                dataNasc: "25/11/02"
            })
        }, 1000)

    })

}

function obterTelefone() {

    return new Promise((resolve, reject)=>{

        setTimeout(() =>{
            return resolve(
{
                telefone: '41984746789',
                ddd: 41
            })
        }, 1500);

    }) 

}

function obterEndereco() {

    return new Promise((resolve, reject)=>{

        setTimeout(() =>{
            return resolve(
{
                rua: 'Afonso Alberto',
                numero: 21
            })
        }, 2000);

    }) 

}

// para mannipular o sucesso -> .then()
// para mannipular o erro -> .catch()
const user = obterUsuario()

user
    .then((user)=> {
        return obterTelefone(1)
        .then((result)=> {
            return {
                user: user,
                telefone: result
                }
            })
        })
    .then((resultadoAnterior)=> {
        return obterEndereco(resultadoAnterior)
          .then((result)=> {
            return {
                user: {
                    id: resultadoAnterior.user.id,
                    nome: resultadoAnterior.user.nome,
                    dataNasc: resultadoAnterior.user.dataNasc,
                },
                telefone: {
                    numero: resultadoAnterior.telefone.telefone,
                    ddd: resultadoAnterior.telefone.ddd
                },
                endereco: result
            }
        })
    })
    .then((result) => {
        console.log(result)
        // console.table({result})
    })
    .catch((error) => {
        console.error('error', error)
    })

// =========================================




/*  */






















/*
function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000); */