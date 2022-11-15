//Limitando o numero de objetos retornados;

const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://igor:98582241@cluster0.5ep8u4h.mongodb.net/?retryWrites=true&w=majority"; 

mongodb.connect(url, (erro, banco) =>{
    if(erro) throw erro; 
    const dbo = banco.db("cfbCursos"); 
    const colecao = "cursos";

    // let query = {curso: 'Curso de Node 2022'}  //Apaga tudo que tem um S no nome;
    // let novoObj = {$set: {curso: 'Curso de JavaScript'}} //$set: = indica que você quer fazer uma atualização

    const obj = [
        {curso: "Curso de C#", canal: "CFB Cursos"},
        {curso: "Curso de C++", canal: "CFB Cursos"},
        {curso: "Curso de JavaScript 2022", canal: "CFB Cursos"}
    ]

    //para inserir cursos no db
    // dbo.collection(colecao).insertMany(obj, async(erro, resultado) =>{
    //     if(erro) throw erro;
    //     await console.log(resultado.insertedCount + " novo(s) curso(s) inserido(s)")
    //     banco.close();
    // })


    //para atualizar 1 curso ja salvos no db
    // dbo.collection(colecao).updateOne(query, novoObj,((erro, resultado) =>{   
    //     if(erro) throw erro;
    //     console.log("1 cursos atualizados.."); 
    // }))


    //para atualizar varios cursos ja salvos no db
    // dbo.collection(colecao).updateMany(query, novoObj,((erro, resultado) =>{   
    //     if(erro) throw erro;
    //     console.log(resultado.modifiedCount + " curso(s) atualizado(s)"); 
    // }))


    //para buscar todos os cursos do db
    const query = {};  //Caso você queira definir alguma restrição, funciona também. No caso apareceria os 3 primeiros registros apartir da sua restrição;
    const limite = 3;  //o valor escolhido aqui será usado no .limit(limite), fará com que na busca do find apareça apenas os 3 primeiros registros do db;
    dbo.collection(colecao).find(query, {projection: {_id: 0}}).limit(limite).toArray((erro, resultado) =>{ //.limit(limite) = aparecerá apenas os 3 primeiros registros do db;
       if(erro) throw erro;
       console.log(resultado);
       banco.close() 
    })
})