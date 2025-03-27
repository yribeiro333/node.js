// Importa o Express
const express = require('express');

// Cria uma instância do Express
const app = express();

// Configura a porta
const PORT = 3000;

// Defininindo uma rota para o endpoint raiz ("/")
app.get('/', (req, res) => {
    res.send('Olá, Mundo! Usando Express.js !');
});

// Rota para "/Sobre"
app.get('/Sobre', (req, res) => {
    res.send('Sobre mim: Eu sou um desenvolvedor Node.js em treinamento!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});