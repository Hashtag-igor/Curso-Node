//NODE COM BANCO DE DADOS MSQL

(async () =>{
    const db = require("./db")
    console.log("Obter todos os clientes..")
    const clientes = await db.todosClientes();
    console.log(clientes);
})()

//node index = dentro do prompt para testar se está funcionando


