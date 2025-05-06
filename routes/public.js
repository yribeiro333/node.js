import express from 'express'

const router = express.Router()

// Cadastro
router.post('/cadastro', (req, res) => {
    const user = req.body

    res.status(201).json(user)
})

export default router


// henrique
// CNXeS2wau8BwC7pB
// mongodb+srv://henrique:CNXeS2wau8BwC7pB@users.veosrtd.mongodb.net/?retryWrites=true&w=majority&appName=Users