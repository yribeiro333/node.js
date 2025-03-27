const http = require("http"); // Importando o modúlo HTTP

// Criando o servidor
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); // Definindo o status e o tipo de resposta
    res.end("Servidor personalizado rodando!"); // Enviando a resposta
});

// Definindo a porta
const PORT = 5000;
server.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}')
})