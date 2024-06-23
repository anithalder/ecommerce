import Rating from "../models/rating.model.js"
import * as productService from "../services/product.service.js"

async function createRating(req, user) {
    const product = await productService.findProductById(req.productId);

    const rating = new Rating({
        product: product._id,
        user: user._id,
        rating: req.rating,
        createdAt: new Date(),
    })

    return await rating.save()
}

async function getProductRatings(productId) {
    return await Rating.find({ product: productId })
}

export { createRating, getProductRatings }