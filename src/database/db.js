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
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // inserir dados
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Colectoria",
        "guilherme gemballa, jardim america",
        "numero 260",
        "santa catarina",
        "rio do sul",
        "residuos eletronicos"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    // db.run(query, values, afterInsertData)

    // consultar dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })

    // deletar dados
})