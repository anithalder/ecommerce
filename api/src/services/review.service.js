import Review from "../models/review.model.js";
import * as productService from "../services/product.service.js";

async function createReview(reqData, user) {
    const product = await productService.findProductById(reqData.productId);

    const review = new Review({
        user: user._id,
        product: product._id,
        review: reqData.review,
        createdAt: new Date(),
    })

    await product.save()
    return await review.save()
}

async function getAllReview(productId) {
    const product = await productService.findProductById(reqData.productId);

    return await Review.find({ product: product._id }).populate("user")
}

export { createReview, getAllReview }