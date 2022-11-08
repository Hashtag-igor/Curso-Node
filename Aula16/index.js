//Removendo objetos da coleção com deleteOne e deleteMany;

const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://igor:98582241@cluster0.5ep8u4h.mongodb.net/?retryWrites=true&w=majority"; 

mongodb.connect(url, (erro, banco) =>{
    if(erro) throw erro; 
    const dbo = banco.db("cfbCursos"); 
    const colecao = "cursos";


//    let query = {curso: "Curso de HTML"}

//    dbo.collection(colecao).deleteOne(query, ((erro, resultado) =>{  //deleteOne = deleta apenas 1;
//        if(erro) throw erro;
//        console.log("1 curso deletado"); 
//    }))


    let query = {curso: /.S/}  //Apaga tudo que tem um S no nome;

    dbo.collection(colecao).deleteMany(query, ((erro, resultado) =>{   //deleteOne = deleta varios;
        if(erro) throw erro;
        console.log("1 curso deletado"); 
    }))

    dbo.collection(colecao).find({}, {projection: {_id: 0}}).toArray((erro, resultado) =>{ 
        if(erro) throw erro;
        console.log(resultado); //Para mostrar os cursos que sobraram no db;
        banco.close();
    }) 
})