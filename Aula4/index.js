//Criando Rotas usando Express (framework)

//npm install express --save;
const express = require("express");
const app = express();
const port = process.env.PORT; //Se não souber qual porta a aplicação está rodando no servidor ele usa essa;

app.get("/", (req, res) =>{ //get = get vai pegar a rota e a função;
    res.send("CFB Cursos") //send = manda texto normal
})

app.get("/canal", (req, res) =>{
    res.json({canal: "CFB Cursos"}) //json = manda json
})

app.listen(port || 3000, () => {"Servidor Rodando.."}) //app = ao inves de usar "servidor.listen" como nas ultimas, dessa vez foi importado o "app.express()", então se usa o app ao inves do servidor;