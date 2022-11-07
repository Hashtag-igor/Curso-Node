//MODULARIZAÇÃO DAS ROTAS EM NODE

const express = require("express")
const rotas = express.Router();

let cursosInfo = [
    {'curso':'Node','info':'Curso de Node'},
    {'curso':'Java','info':'Curso de Java'},
    {'curso':'Python','info':'Curso de Python'},
    {'curso':'MSQL','info':'Curso de MSQL'},
    {'curso':'C#','info':'Curso de C#'},
]

rotas.get('/', (req,res)=>{
    res.json({ola:"Seja bem-vindo"})
})

rotas.get('/:cursoid', (req,res)=>{
    const curso = req.params.cursoid;
    const cursoi = cursoInfo.find(i=>i.curso == curso)
    if(!cursoi){
        res.status(404).json(
            {erro:"Curso não encontrado!!", cursoPesquisado: curso}
        ) else{
            res.status(200).json({cursoi})
        }
    } 
})

module.exports = rotas;