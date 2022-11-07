//Usando mongoDB com Node

const mongodb = require("mongodb").MongoClient; //MongoClient = faz a conexão entre o arquivo e o MongoDB
const url = "mongodb+srv://igor:98582241@cluster0.5ep8u4h.mongodb.net/?retryWrites=true&w=majority"; //caminho do mongodb (copiado do meu cluster)

mongodb.connect(url, (erro, banco) =>{
    if(erro) throw erro; //throw = exceção (se der erro, aparece a mensagem de erro)
    const dbo = banco.db("cfbCursos"); //é como se fosse o database do mysql
    const obj = {curso: "Curso de JavaScript", canal: "CFB Cursos"} //é como se fosse a tabela do mysql com seus conteúdos (tabela: "curso", conteudo dela: "Curso de Node")
    const colecao = "cursos";
    dbo.collection(colecao).insertOne(obj, (erro, resultado) =>{ //o banco de dados + a coleção (tipo a tabela principal do db), vai inserir o obj..
        if(erro) throw erro;
        console.log("Um novo curso inserido");
        banco.close() //fechar banco;
    })
})