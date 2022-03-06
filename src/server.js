const express = require('express')
const route = require('./route')
const path = require('path')  //módulo

const server = express()

server.set('view engine', 'ejs') // falando p express que view engine é  responsavel pelo ejs

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views')) // path ->pega o caminho da pasta onde está o projeto 
// join junta o caminho o src com o views 

server.use(express.urlencoded({extended: true}))

server.use(express.urlencoded({extended: true})) // pegar o conteudo que está vindo do formulário decodificar e passar para o controller

server.use(route)  //express usa o arquivo route

server.listen(3000, () => console.log("Rodando"))
