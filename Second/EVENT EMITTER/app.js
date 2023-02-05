/* events, uma classe padrão do Node.js para gerenciamento de eventos. 
A classe meuEmissor estende a classe events e, portanto, herda todas as suas 
propriedades e métodos. Isso significa que agora a classe meuEmissor pode ser usada para 
criar objetos que gerenciam eventos personalizados. Em seguida, o código cria uma instância 
da classe meuEmissor e a atribui à variável emitter. A partir daí, você pode usar o objeto 
emitter para registrar ouvintes de eventos, emitir eventos e lidar com erros. */

const events = require('events')
class meuEmissor extends events{

}

const emitter = new meuEmissor() // new = nova instância

emitter.on( "nomeDoEvento", (click) => { // permite registrar um ouvinte para um determinado evento.
    console.log(click)
})

emitter.emit("nomeDoEvento", "mensagem do evento -> clicou") // permite emitir um evento. Isso significa que todos os ouvintes registrados para esse evento serão chamados.

const stdin = process.openStdin()
stdin.addListener('data', (valorEscritoLog) => {
    console.log(`Sua mensagem é: ${valorEscritoLog.toString()} `)
})


