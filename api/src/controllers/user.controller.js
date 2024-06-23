import * as userServices from '../services/user.service.js'

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization.split(' ')[1]
        if (!jwt) {
            res.status(404).send({ message: 'token not found' })
        }
        const user = await userServices.getUserProfileByToken(jwt)
        return res.status(200).send({ user })
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUser()
        return res.status(200).send({ users })
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

export { getUserProfile, getAllUsers }