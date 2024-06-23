import * as userService from "../services/user.service.js"
import CartItem from "../models/cartItem.model.js"

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId)
        // console.log(item)

        if (!item) {
            throw new Error(`Cart item not found with id: ${cartItemId}`)
        }

        const user = await userService.findUserById(userId)
        if (!user) {
            throw new Error(`User not found with id: ${userId}`)
        }

        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity
            item.price = (item.quantity) * (item.product.price)
            item.discountedPrice = (item.quantity) * (item.product.discountedPrice)
            const updatedCartItem = await item.save()
            return updatedCartItem
        } else {
            throw new Error("You can't update this cart item")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

async function deleteCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId)
    const user = await userService.findUserById(userId)
    if (user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId)
    } else {
        throw new Error("You can't delete this cart item")
    }
}

async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product")
    if (cartItem) {
        // console.log(cartItem)
        return cartItem
    } else {
        throw new Error(`Cart item not found with id: ${cartItemId}`)
    }
}

export { updateCartItem, deleteCartItem, findCartItemById }