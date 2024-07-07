import { SignUpModel } from "../models/signUpModel.js";

export const createAccount = (req, res) => {
    try {
        const signUp = SignUpModel.create(req.body)
        res.status(201).json(signUp)
    } catch (error) {
        if (error.errorResponse.code === 11000){
            return res.status(404).send ('username, email, mobile and password should be unique')
        }
        console.log(errorResponse)
    }
}

export const getAllAccounts = async (req,res, next) => {
    try {
        const {
            limit = 5,
            filter ="{}",
            skip = 1
        } = req.query;
        const getAllAccounts = await SignUpModel
        .find(JSON.parse(filter))
        .skip(skip)
        .limit(limit); 
        res.status(200).json(getAllAccounts);
    } catch (error) {
        next(error)
    }
};