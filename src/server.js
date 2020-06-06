const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

// configurar pasta public
server.use(express.static("public"))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da aplicação

// pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html", {
        title: "Seu marketplace de coleta de resíduos"
    })
})

// outras rotas
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

// ligar o servidor
server.listen(3000)