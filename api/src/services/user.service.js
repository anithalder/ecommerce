import User from "../models/user.model.js";
import * as jwtProvider from "./jwtProvider.js";
import bcrypt from "bcrypt";

const createUser = async (userData) => {
    try {
        // console.log(userData);
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            throw new Error(`User already exist with email: ${email}`);
        }
        password = await bcrypt.hash(password, 8);
        const user = await User.create({ firstName, lastName, email, password });
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        //.populate("address");

        if (!user) {
            throw new Error("User not found with id: ", user);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("User not found with email: ", email);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await findUserById(userId);
        if (!user) {
            throw new Error(`User not found with id: ${userId}`);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllUser = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

export {
    createUser,
    getUserByEmail,
    findUserById,
    getAllUser,
    getUserProfileByToken,
};
