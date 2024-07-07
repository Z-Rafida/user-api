import {LoginModel} from "../models/loginModel.js"

// login to an account
export const postLogin = async (req,res, next) => {
    try {
         const Login = await LoginModel.create(req.body);
         res.status(201).json(Login);
    } catch (error) {
        next(error)
    }
}

// get all logins
export const getLogins = async (req, res, next) => {
    try {
        const {limit, filter, skip}=req.query;
        const allLogins = await LoginModel
        .find(filter)
        .limit(limit)
        .skip(skip);
        res.json(allLogins);
    } catch (error) {
        next(error)
    }
};

// get a single login
export const getLogin = async (req, res, next) => {
    try {
        const singleLogin = await LoginModel.findById(req.params.id)
        res.json(singleLogin)
    } catch (error) {
        next(error)
    }
};


// update login information
export const patchLogin = async (req, res, next) => {
    try {
        const updatedLogin = await LoginModel.findByIdAndUpdate(req.params.id, {new: true})
        res.json(updatedLogin);
    } catch (error) {
        next (error)
    }
};


// delete an account
export const deleteLogin = async (req, res, next) => {
    try {
        const loginDeleted = await LoginModel.findByIdAndDelete(req.params.id)
        res.json(loginDeleted);
    } catch (error) {
        next(error)
    }
}
