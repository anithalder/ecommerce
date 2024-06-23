import * as cartService from "./cart.service.js"
import Address from "../models/address.model.js"
import Order from "../models/order.model.js"
import OrderItem from "../models/orderItems.model.js"

async function createOrder(user, shippingAddress) {
    let address
    if (shippingAddress._id) {
        let existAddr = await Address.findById(shippingAddress._id)
        address = existAddr
    } else {
        address = new Address(shippingAddress)
        address.user = user
        await address.save()

        user.address.push(address)
        await user.save()
    }

    const cart = await cartService.findUserCart(user._id)
    const orderItems = []

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountedPrice: item.discountedPrice,
        })

        const createdOrderItem = await orderItem.save()
        orderItems.push(createdOrderItem)
    }

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discount: cart.discount,
        totalItem: cart.totalItems,
        shippingAddress: address,
    })

    const savedOrder = await createdOrder.save()
    return savedOrder
}

async function placeOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Placed"
    order.paymentDetails.status = "Completed"

    return await order.save()
}

async function confirmedOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Confirmed"

    return await order.save()
}

async function shipOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Shipped"

    return await order.save()
}

async function deliverOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Delivered"

    return await order.save()
}

async function cancelOrder(orderId) {
    const order = await findOrderById(orderId)

    order.orderStatus = "Cancelled"

    return await order.save()
}

async function findOrderById(orderId) {
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("shippingAddress")
    return order
}

async function userOrderHistory(userId) {
    try {
        const orders = await Order.find({ user: userId, orderStatus: "Placed" })
            .populate({ path: "orderItems", populate: { path: "product" } })
            .lean()
        return orders
    } catch (error) {
        throw new Error(error.message)
    }
}

async function adminOrderDetails() {
    try {
        return await Order.find({})
            .populate({ path: "orderItems", populate: { path: "product" } })
            .lean()
    } catch (error) {
        throw new Error(error.message)
    }
}

async function adminDeleteOrder(orderId) {
    try {
        const order = await findOrderById(orderId)
        await Order.findByIdAndDelete(order._id)
    } catch (error) {
        throw new Error(error.message)
    }
}

export {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    cancelOrder,
    findOrderById,
    userOrderHistory,
    adminOrderDetails,
    adminDeleteOrder,
}