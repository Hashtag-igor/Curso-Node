//Comando FIND (Usando MongoDB com node)

const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://igor:98582241@cluster0.5ep8u4h.mongodb.net/?retryWrites=true&w=majority"; 

mongodb.connect(url, (erro, banco) =>{
    if(erro) throw erro; 
    const dbo = banco.db("cfbCursos"); 
    const obj = {curso: "Curso de JavaScript", canal: "CFB Cursos"} 
    const colecao = "cursos";

    //findOne = retorna o primeiro registro da busca, só o primeiro;
//    dbo.collection(colecao).findOne({}, (erro, resultado) =>{  //{} = vazio significa sem restrições na busca. Você pode definir alguma busca especifica (ex: canal:"CFB Cursos");
//        if(erro) throw erro;
//        console.log(resultado);
//        banco.close() 
//   })


    //find 
//    dbo.collection(colecao).find({}).toArray((erro, resultado) =>{ //retorna todos os conteudos da collection(colecao), pq fica em forma de array;
//        if(erro) throw erro;
//        console.log(resultado);
//        banco.close() 
//    })


//    dbo.collection(colecao).find({canal: "CFB Cursos"}, {projection: {_id: 0, canal: 0}}).toArray((erro, resultado) =>{ //0 no projection representa ocultar algo e o 1 (que é o padrão), mostra algo. No caso desse ex, foi ocultado a busca do id e do canal, só vai aparecer a busca do curso.
//        if(erro) throw erro;
//        console.log(resultado);
//        banco.close() 
//    })


    dbo.collection(colecao).find({canal: "CFB Cursos"}, {projection: {_id: 0}}).toArray((erro, resultado) =>{ //Como a resultado da busca vai ser passado pra um array, eu posso pesquisar o resultado dentro do array pela posição dele no array;
        if(erro) throw erro;
        console.log(resultado[1]); //vai pegar o conteúdo de numero 2 no array (conteúdo passado no find). Essa é uma das vantagens de usar o toArray, a facilitade de buscar a informação pela posição do array;
        banco.close() 
    })

})