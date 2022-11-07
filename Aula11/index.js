//UPLOAD DE ARQUIVOS EM NODE COM MÓDULO FORMIDABLE

const http = require("http");
const porta = process.env.PORT || 3000;
const formidavel = require("formidable");
const fs = require("fs");

const servidor = http.createServer((req, res) =>{
//Se a req.url for igual a envio de arquivos, ele vai fazer a rotina de envio de arquivos (código abaixo)   
    if(req.url == '/envioDeArquivo'){
        const form = new formidavel.IncomingForm(); //incomingForm = retorna o formulario que foi enviado
        form.parse(req, (erro, campos, arquivos) =>{
            const urlantiga = arquivos.filetoupload.path; //Pegou o caminho da url antiga e salvou na variavel urlantiga
            const urlnova = 'C:/Users/User/Desktop/ARQUIVOS IGOR ATUALIZADO/Curso Node.js/Aula11/' + arquivos.filetoupload.name; 
            fs.rename(urlantiga, urlnova, (erro) =>{ //rename pega a urlantiga e troca pela nova. Caso de alum erro.. segue o if abaixo
                if(erro) throw erro
                res.write("Arquivo movido!!")
                res.end()
            })
        })
//Se não for igual, ele vai abrir o formulário (código abaixo)
    }else{
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write('<form action="envioDeArquivos" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"/><br/>');
        res.write('<input type="submit" value="Enviar"/>');
        res.write('</form>');
        res.end();
    }
})

servidor.listen(porta)