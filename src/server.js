const express = require("express")
const server = express()

// configurar caminhos da aplicação

// pagina inicial
server.get("/", (req, res) => {
    res.send("Hello World")
})

// ligar o servidor
server.listen(3000)