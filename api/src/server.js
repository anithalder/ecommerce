import 'dotenv/config'
import './db/connect.js'
import cors from 'cors';
import express from 'express';
import * as Routers from './routers/index.routes.js'

const port = 8000
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.status(200).send({ message: 'welcome to api' })
})
app.use('/auth', Routers.authRouters)
app.use('/users', Routers.userRouters)
app.use('/products', Routers.productRouters)
app.use('/admin/products', Routers.adminProductRouter)
app.use('/cart', Routers.cartRouter)
app.use('/cart_items', Routers.cartItemRouter)
app.use('/orders', Routers.orderRouter)
app.use('/reviews', Routers.reviewRouter)
app.use('/ratings', Routers.ratingRouter)
app.use('/admin/orders', Routers.adminOrderRouters)

const server = async () => {
    try {
        app.listen(port, () => {
            console.log(`Let's 😃 talk 🗣️  at ${port} port`)
        })
    } catch (error) {
        console.error(error)
    }
}

server()