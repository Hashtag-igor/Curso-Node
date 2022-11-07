//MODULO FS(FireSystem) para fazer leitura de arquivos;

const http = require("http");
const fs = require("fs")
const porta = process.env.PORT;

const server = http.createServer((req, res) =>{
    fs.appendFile("test.txt", "curso de Node", (err) =>{ //appendFile = arquivo existe? ele anexa no arquivo. Se não existir o arquivo, ele cria.
        if(err) throw err
        console.log("Arquivo Criado")
        res.end();
    }) 
})

server.listen(porta || 3000, () =>{console.log("Rodando Servidor..")})