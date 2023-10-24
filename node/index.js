const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 5000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

const createTableSQL = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`;
connection.query(createTableSQL, (err) => {
    if (err) {
        console.error('Erro ao criar a tabela:', err);
    } else {
        console.log('Tabela "people" criada com sucesso.');
    }
});

const insertSQL = "INSERT INTO people(name) values('Bruno Barros')";
connection.query(insertSQL, (err) => {
    if (err) {
        console.error('Erro ao inserir o registro na tabela:', err);
    } else {
        console.log('Registro inserido com sucesso.');
    }
});

const selectSQL = "SELECT name FROM people";
let listaNomes = '';

connection.query(selectSQL, (err, result) => {
    if (err) {
        console.error('Erro ao procurar registro na tabela:', err);
    } else {
        console.log('Select realizado com sucesso na tabela "people".');

        for(const row of result){
                listaNomes = listaNomes + '<li>' + row.name + '</li>'
        }
    }
});

connection.end((err) => {
    if (err) {
        console.error('Erro ao encerrar a conexão com o banco de dados:', err);
    } else {
        console.log('Conexão com o banco encerrada com sucesso.');
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>'
        + '<ul>' + listaNomes + '</ul>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

