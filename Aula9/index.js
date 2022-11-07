//NODE COM BANCO DE DADOS MSQL

(async () =>{
    const db = require("./db")
   
    //para INSERIR clientes na database do mysql
//    console.log("Inserir novo cliente..")
//    const nome = "Marcos";
//   const idade = 27;
//    await db.insereClientes({nome: nome, idade: idade})

    //para ALTERAR clientes na database do mysql
    console.log("Cliente atualizado..")
    const nome = "Denis";
    const idade = 35;
    const id = 3; //representa o id de cada linha da tabela no database do msql (no caso ai eu selecionei o segundo da tabela);
    await db.atualizaClientes(id, {nome: nome, idade: idade})

    //para DELETAR clientes na database do mysql
//    console.log('Cliente foi deletado..')
//    const id = 7; //representa o id de cada linha da tabela no database do msql (no caso ai eu selecionei o segundo da tabela);
//    await db.deleteClientes(id)  

    //para MOSTRAR os clientes da database do mysql
    console.log("Obter todos os clientes..")
    const clientes = await db.todosClientes();
    console.log(clientes);
})()

//node index = dentro do prompt para testar se está funcionando
