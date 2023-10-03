const mysql = require('mysql');

const dbConfig = {
    host: 'localhost', 
    user: 'root', 
    password: 'admin', 
    database: 'test',
    port: 3306
  };


const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Ocorreu um erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão foi estabelicida com o banco de dados.');
  }
});