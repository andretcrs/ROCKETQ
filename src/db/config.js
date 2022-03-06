const sqlite3 = require("sqlite3");
const { open } = require("sqlite")


module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite', //qual o nome do banco de dados
        driver: sqlite3.Database,  // driver é quem comanda o banco de dados
    });
