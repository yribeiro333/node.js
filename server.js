import express from 'express'


import auth from '../middlewares/auth.js'

const app = express()
app.use(express.json())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)



app.listen(3000, () => console.log("Servidor Rodando 🚀"))
