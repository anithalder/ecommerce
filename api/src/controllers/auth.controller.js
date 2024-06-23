import bcrypt from 'bcrypt'
import * as userServices from '../services/user.service.js'
import * as jwtProvider from '../services/jwtProvider.js'
import * as cartService from '../services/cart.service.js'

const register = async (req, res) => {
    try {
        // console.log(req.body)
        const user = await userServices.createUser(req.body)
        console.log(user)
        const jwt = jwtProvider.generateToken(user._id)
        await cartService.createCart(user)
        return res.status(200).send({ jwt, message: "User created successfully" })
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

const login = async (req, res) => {
    let { password, email } = req.body
    try {
        const user = await userServices.getUserByEmail(email)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const jwt = jwtProvider.generateToken(user._id)
        return res.status(200).json({ jwt, message: "User logged in successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export { register, login }