//TRABALHNDO COM EVENTOS EM NODE

const http = require("http")
const porta = process.env.PORT || 3000;
const rodando = () =>{console.log("Servidor Rodando..")}
const eventos = require("events"); //importando events
const EventoEmissor = new eventos.EventEmitter();

const final = () =>{console.log("Fim do Evento");}

EventoEmissor.on("fim", final) //Evento pegando função de fora "final";
EventoEmissor.on("msg", ()=>{console.log("Curso de Node")}) //Evento com função anônima;

const servidor = http.createServer((req, res)=>{
    EventoEmissor.emit('msg') //emit = Quando quiser emitir um evento, se utiliza o método emit + a chave chave do evento que eu quero executar;
    res.writeHead(200, {"Content-type": "text/plain"})
    res.write("CFR Cursos")
    EventoEmissor.emit('fim')
    res.end();
})

servidor.listen(porta, rodando)