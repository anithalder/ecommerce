import * as productService from "../services/product.service.js";

const createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const product = await productService.createProduct(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId, req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllProducts = async (req, res) => {
    const productId = req.params.id;
    try {
        const products = await productService.getAllProducts(req.query);
        res.status(201).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createMultipleProducts = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.createMultipleProducts(req.body);
        res.status(201).json({ message: "Products created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts,
};
