const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")
// da pra rodar usando somente o comando "node src/database/db.js no terminal"
// ele cria um arquivo chamado database.db

db.serialize(() => {
    // criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT, 
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // inserir dados

    // consultar dados

    // deletar dados
})