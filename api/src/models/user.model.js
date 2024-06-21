import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        default: "customer",
    },
    mobileNo: {
        type: Number,
        // required: true,
        // unique: true,
        // default: null
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
    }],
    paymentInfo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_info",
    }],
    rating: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
    }],
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const User = mongoose.model("users", userSchema)

export default User;