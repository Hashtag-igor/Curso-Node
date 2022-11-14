//Modificando/Atualizando objetos com updateOne e updateMany

const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://igor:98582241@cluster0.5ep8u4h.mongodb.net/?retryWrites=true&w=majority"; 

mongodb.connect(url, (erro, banco) =>{
    if(erro) throw erro; 
    const dbo = banco.db("cfbCursos"); 
    const colecao = "cursos";

    let query = {curso: 'Curso de Node 2022'}  //Apaga tudo que tem um S no nome;
    let novoObj = {$set: {curso: 'Curso de JavaScript'}} //$set: = indica que você quer fazer uma atualização

    const obj = [
        {curso: "Curso de HTML5", canal: "CFB Cursos"},
        {curso: "Curso de CSS3", canal: "CFB Cursos"},
        {curso: "Curso de Python", canal: "CFB Cursos"}
    ]

    //para inserir cursos no db
    // dbo.collection(colecao).insertMany(obj, async(erro, resultado) =>{
    //     if(erro) throw erro;
    //     await console.log(resultado.insertedCount + " novo(s) curso(s) inserido(s)")
    //     banco.close();
    // })


    //para atualizar 1 curso ja salvos no db
    // dbo.collection(colecao).updateOne(query, novoObj,((erro, resultado) =>{   //updateOne = Atualiza somente um;
    //     if(erro) throw erro;
    //     console.log("1 cursos atualizados.."); 
    // }))


    //para atualizar varios cursos ja salvos no db
    dbo.collection(colecao).updateMany(query, novoObj,((erro, resultado) =>{   //primeiro vem oq você quer alterar (conteúdo da query), depois o novo conteúdo que você quer colocar nele (novoObj);
        if(erro) throw erro;
        console.log(resultado.modifiedCount + " curso(s) atualizado(s)"); 
    }))


    //para buscar todos os cursos do db
    query = {};
    dbo.collection(colecao).find(query, {projection: {_id: 0, canal: 0}}).toArray((erro, resultado) =>{ //0 no projection representa ocultar algo e o 1 (que é o padrão), mostra algo. No caso desse ex, foi ocultado a busca do id e do canal, só vai aparecer a busca do curso.
       if(erro) throw erro;
       console.log(resultado);
       banco.close() 
    })
})