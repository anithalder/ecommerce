import Cart from "../models/cart.model.js"
import CartItem from "../models/cartItem.model.js"
import Product from "../models/product.model.js"

async function createCart(user) {
    try {
        const cart = new Cart({ user })
        const createdCart = await cart.save()
        return createdCart
    } catch (error) {
        throw new Error(error.message)
    }
}

async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({ user: userId })
        let cartItems = await CartItem.find({ cart: cart._id }).populate("product")
        cart.cartItems = cartItems
        let totalPrice = 0, totalDiscountedPrice = 0, totalItems = 0
        cart.cartItems.forEach(item => {
            totalPrice += item.price
            totalDiscountedPrice += item.discountPricek
            totalItems += item.quantity
        })
        cart.totalPrice = totalPrice
        // cart.totalDiscountedPrice = totalDiscountedPrice
        cart.totalItems = totalItems
        cart.discount = totalPrice - totalDiscountedPrice
        return cart
    } catch (error) {
        throw new Error(error.message)
    }
}

async function addToCart(userId, req) {
    try {
        const cart = await Cart.findOne({ user: userId })
        const product = await Product.findById(req.productId)
        const isPresent = await CartItem.findOne({ cart: cart._id, product: req.productId, userId })

        if (!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice,
            })

            const cratedCartItem = await cartItem.save()
            cart.cartItems.push(cratedCartItem._id)
            await cart.save()
            return 'Item added to cart'
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export { createCart, findUserCart, addToCart }