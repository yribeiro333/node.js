import jwt from 'jsonwebtoken'
import router from '../routes/private'


const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {

    console.log(req)

}

export default router