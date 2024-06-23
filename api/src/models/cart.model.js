import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    cartItems: [
        {
            type: mongoose.Types.ObjectId,
            ref: "cartItems",
            required: true,
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalItem: {
        type: Number,
        required: true,
        default: 0
    },
    totalDiscountPrice: {
        type: Number,
        required: true,
        default: 0
    },
    discount: {
        type: Number,
        required: true,
        default: 0
    }
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;