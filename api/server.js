import express from 'express'

const app = express()
app.use(express.json())

const user = []

app.post('/usuarios', (req, res) => {
    
    console.log(req)

    res.send('OK post')

})


app.get('/usuarios', (req, res) => {
    res.send('Ok, deu bom')
});

app.listen(3000)




/*
    Criar nossa API de Usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/


/*
    1) Tipo de Rota / Método HTTP
    2) Endereço
*/