import * as jwtProvider from '../services/jwtProvider.js'
import * as userServices from '../services/user.service.js'

const authenticate = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(404).send({ error: 'token not found' })
        }

        const userId = await jwtProvider.getUserIdFromToken(token)
        const user = await userServices.findUserById(userId)
        req.user = user
    } catch (error) {
        return res.status(500).send({ error: error })
    }
    next()
}

export { authenticate }