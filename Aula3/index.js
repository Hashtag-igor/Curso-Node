//MEXENDO COM ROTAS

const http = require("http"); //Modulo http
//const url = require("url");
const port = 3000;
const host = "127.0.0.1"; //127.0.0.1 é o local host padrão

const servidor = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type":"text/html"}) //Se quiser retornar texto simples, text/plain. Se quiser retornar formato html, text/html
    if(req.url == "/"){ //Se a requisição da url for padrão, ou seja "/"..
        res.write("<h1>Seja Bem-Vindo a página inicial</h1>"); //vai retornar um <h1> com esse conteúdo;
    } else if(req.url == "/curso"){ //Se na requisição da url for igual a "/curso"..
        res.write("<h1>Bem-Vindo a página do Curso</h2>"); //vai retornar um <h1> com esse conteúdo;
    } else if(req.url == "/curso/node"){ //Criando uma rota "/node" dentro de outra rota "/curso"
        res.write("<h1>Curso de Node.js</h1>");
    } else if(req.url == "/canal"){ //Se na requisição da url for igual a "/canal"..
        res.write("<h1>Bem-Vindo a página do Canal</h1>"); //vai retornar um <h1> com esse conteúdo;
    }
/*
    res.write(req.url);
    const p = url.parse(req.url, true).query;
    res.write("<br/>"+p.nome)
    res.write("<br/>"+p.curso)
*/
    res.end(); //fim da resposta;
});

servidor.listen(port, host, () =>{ //
    console.log("Servidor rodando..")
})


