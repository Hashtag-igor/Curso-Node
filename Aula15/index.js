//Ordenando a pesquisa com o método SORT

const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://igor:98582241@cluster0.5ep8u4h.mongodb.net/?retryWrites=true&w=majority"; 

mongodb.connect(url, (erro, banco) =>{
    if(erro) throw erro; 
    const dbo = banco.db("cfbCursos"); 
    const obj = {curso: "Curso de JavaScript", canal: "CFB Cursos"} 
    const colecao = "cursos";

    const query = {curso: /.t/}  
    dbo.collection(colecao).find(query, {projection: {_id: 0}}).toArray((erro, resultado) =>{ //Como a resultado da busca vai ser passado pra um array, eu posso pesquisar o resultado dentro do array pela posição dele no array;
        if(erro) throw erro;
        console.log(resultado); 
        banco.close();
    })
})