import * as cartItemService from "../services/cartItem.service.js"

const updateCartItem = async (req, res) => {
    const user = await req.user
    // console.log(user)
    try {
        const updateCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body)
        return res.status(200).send(updateCartItem)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const removeCartItem = async (req, res) => {
    const user = await req.user
    // console.log('cart id is', req.params.id)
    try {
        await cartItemService.deleteCartItem(user._id, req.params.id)
        return res.status(200).send({ message: "Cart item removed successfully" })
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

export { updateCartItem, removeCartItem }