//CRIANDO UM SERVIDOR BÁSICO EM NODE

const http = require("http");

//createServer = 

http.createServer((request, response) =>{ //Não precisa ser esses nomes(request, response), mas eles representam bem
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Testando 1,2,3,4../n"); //Conteúdo que ele vai mostrar;
    response.end(); //Finalizou a resposta;
}).listen(1337) //Esse servidor que foi criado, vai ser escutado na porta 1337;