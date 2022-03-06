const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database() //await = espera o Database rodar e tras o resultado - garantir que o db tenha um resultado antes de passar p próximo
 
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT

        )`);

        await db.close() //fecha conexão com banco de dados
        // arquivo init serve só para criar o banco de dados
    }
}

initDb.init();