import * as orderServices from "../services/order.service.js";

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderServices.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const confirmedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderServices.confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const shipOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderServices.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deliverOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderServices.deliverOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const cancelOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderServices.cancelOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deleteOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderServices.adminDeleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

export {
    getAllOrders,
    confirmedOrders,
    shipOrders,
    deliverOrders,
    cancelOrder,
    deleteOrders,
};
