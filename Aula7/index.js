const express = require("express")
const porta = process.env.PORT;
const rotas = require("./rotas/rotas");

const app = express()

app.use('/', rotas)

app.get("*", (req,res)=>{
    res.send("testando 1,2,3")
})

app.listen(porta, () =>{console.log("Rodando Servidor!")})