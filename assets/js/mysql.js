const mysql = require("mysql2");

// Configurar a conexão com o banco de dados
const banco = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "cat_treinee"
});

// Conectar ao banco de dados
banco.connect((erro) => {
    if (erro) {
        return console.error('Erro ao conectar ao banco de dados:', erro.stack);
    }
    console.log('Conectado ao banco de dados com ID:', banco.threadId);
});

// Função de login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
}

// function verifica_login(){
//     alert("Verifica Login");
// }