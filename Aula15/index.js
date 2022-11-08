//Ordenando a pesquisa com o método SORT

const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://igor:98582241@cluster0.5ep8u4h.mongodb.net/?retryWrites=true&w=majority"; 

mongodb.connect(url, (erro, banco) =>{
    if(erro) throw erro; 
    const dbo = banco.db("cfbCursos"); 
    const colecao = "cursos";

    const ordenacao = {curso: -1} //Ordem CRESCENTE 1   / Ordem DECRESCENTE -1   (nesse caso ai ordem crescente/decrecente é a alfabetica)
    const query = {}  
    dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro, resultado) =>{ 
        if(erro) throw erro;
        console.log(resultado); 
        banco.close();
    })
})